#!/usr/bin/env python3
"""Tell IndexNow (Bing, Yandex, Seznam, Naver) that pages changed — no waiting for a crawl.

    python3 scripts/seo/indexnow.py                    # every page in the sitemap
    python3 scripts/seo/indexnow.py https://caseyturczynski.com/

The key file must stay reachable at KEY_LOCATION or submissions are rejected — it is
what proves we control the host. It lives in `public/`, so it ships with every deploy.

Google ignores IndexNow entirely; this is for everyone else. Run it whenever the page's
content actually changes.

The sitemap is generated at build time by app/sitemap.ts, so this reads it from the
LIVE site rather than from a file on disk — which also proves the deploy went out.

Response codes: 200 accepted - 202 accepted, key still being verified - 400 bad request
- 403 key not valid for this host - 422 URL not on this host - 429 too many requests.
"""
import json
import re
import subprocess
import sys

HOST = "caseyturczynski.com"
KEY = "b1f40422484b447efc7efb60b71f7087"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/IndexNow"
SITEMAP = f"https://{HOST}/sitemap.xml"


def curl(*args) -> tuple:
    p = subprocess.run(["curl", "-s", "--max-time", "30", *args],
                       capture_output=True, text=True)
    return p.stdout, p.returncode


def urls_from_sitemap() -> list:
    body, rc = curl(SITEMAP)
    if rc != 0 or "<loc>" not in body:
        sys.exit(f"could not read {SITEMAP} — is the site deployed?")
    return re.findall(r"<loc>([^<]+)</loc>", body)


def submit(urls: list) -> None:
    off_host = [u for u in urls if not u.startswith(f"https://{HOST}")]
    if off_host:
        sys.exit(f"refusing to submit URLs that are not on {HOST}: {off_host}")

    payload = json.dumps({
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    })
    for u in urls:
        print(f"  {u}")

    # curl, not urllib: this Mac's python3 has no CA bundle, so urllib fails every
    # TLS handshake with CERTIFICATE_VERIFY_FAILED. curl uses the system trust store.
    code, _ = curl("-o", "/dev/null", "-w", "%{http_code}", "-X", "POST", ENDPOINT,
                   "-H", "Content-Type: application/json; charset=utf-8",
                   "--data-binary", payload)
    code = code.strip()
    if code in {"200", "202"}:
        note = " (key still being verified — normal on first use)" if code == "202" else ""
        print(f"\nIndexNow: HTTP {code} — {len(urls)} URL(s) submitted{note}")
    else:
        # Not fatal to anything; it only means no early crawl.
        sys.exit(f"\nIndexNow refused: HTTP {code or 'no response'}")


submit(sys.argv[1:] or urls_from_sitemap())

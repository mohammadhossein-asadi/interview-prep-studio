import type { Question } from "@/types/question";

const now = "2026-07-12T00:00:00.000Z";

export const webFundamentalsQuestions: Question[] = [
  // ──────────────────────────────────────────────
  // HTTP/HTTPS (wf-001 – wf-004)
  // ──────────────────────────────────────────────
  {
    id: "wf-001",
    title: "What are the main HTTP methods and when do you use each?",
    content: "Explain the differences between GET, POST, PUT, PATCH, and DELETE. What are their semantics, use cases, and characteristics?",
    difficulty: "beginner",
    track: "web-fundamentals",
    topic: "HTTP/HTTPS",
    category: "HTTP Methods & Status Codes",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "GET retrieves data (safe, idempotent, cacheable). POST creates new resources (not idempotent). PUT replaces a resource entirely (idempotent). PATCH partially updates a resource (not idempotent). DELETE removes a resource (idempotent). All except GET should have request bodies; responses to GET must not have side effects.",
    detailedExplanation: "HTTP methods define the semantics of a request — what the client wants to do with a resource.\n\nGET: Retrieves a representation of the resource. Must be safe (no side effects) and idempotent (same request produces same result). Cacheable by default. Bookmarkable. Parameters in URL query string. Max URL length varies by browser (~2048 chars for IE).\n\nPOST: Submits data to be processed, typically creating a new resource. Not safe, not idempotent — sending the same POST twice may create two resources. Used for forms, file uploads, actions that trigger side effects. Request body contains the data. Response typically includes the created resource or a redirect.\n\nPUT: Replaces the target resource entirely with the request body. Idempotent — sending the same PUT multiple times produces the same result (the resource is in the same state). Used when you have the complete new representation. Returns 200 (OK) or 204 (No Content) on success.\n\nPATCH: Partially modifies a resource. Not idempotent (applying the same patch twice may have different effects if the patch increments a counter). More bandwidth-efficient than PUT for small changes. Request body describes the changes.\n\nDELETE: Removes the specified resource. Idempotent — deleting the same resource multiple times has the same effect (it's already deleted). Returns 200 (OK) or 204 (No Content).\n\nOther methods: HEAD (like GET but no body — for checking if resource exists), OPTIONS (returns allowed methods — used in CORS preflight), CONNECT (establishes a tunnel), TRACE (echoes the request for debugging).",
    bestAnswer: "GET: Read-only retrieval. Safe, idempotent, cacheable. Parameters in URL. Use for fetching data.\n\nPOST: Create a new resource or trigger an action. Not idempotent (repeated calls may create duplicates). Body contains data. Use for form submissions and creating resources.\n\nPUT: Full replacement of a resource. Idempotent — repeating produces same state. Use when you have the complete new representation.\n\nPATCH: Partial update. Not idempotent. More efficient than PUT for small changes. Use for updating specific fields.\n\nDELETE: Remove a resource. Idempotent. Use for deletion.\n\nIdempotency is the key concept: GET, PUT, DELETE are idempotent (safe to retry); POST and PATCH are not. This matters for reliability — idempotent operations can be safely retried on network failure.",
    alternativeAnswers: [
      "Idempotency has practical implications: if a client sends a PUT and doesn't get a response (timeout), it can safely retry because the server state is the same. With POST, retrying might create a duplicate resource.",
      "Some APIs use POST for everything (RPC-style) rather than REST semantics — the method is less about HTTP semantics and more about API convention."
    ],
    commonMistakes: [
      "Confusing PUT and PATCH — PUT replaces the entire resource; PATCH updates specific fields.",
      "Thinking GET can never have side effects — while semantically it shouldn't, some poorly designed APIs violate this (e.g., a GET that increments a view counter).",
      "Forgetting that POST is not idempotent — retrying a POST can create duplicate resources."
    ],
    followUpQuestions: [
      "What is idempotency and why does it matter for API reliability?",
      "How would you implement idempotency for a POST endpoint?",
      "What is the difference between PUT and PATCH at the protocol level?"
    ],
    relatedQuestionIds: ["wf-002", "wf-003", "wf-005"],
    references: [
      { title: "MDN HTTP Methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" },
      { title: "RFC 7231 - HTTP/1.1 Semantics", url: "https://tools.ietf.org/html/rfc7231" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-002",
    title: "What are the most important HTTP status codes?",
    content: "Explain the HTTP status code categories and the most important codes in each. What does each code mean?",
    difficulty: "beginner",
    track: "web-fundamentals",
    topic: "HTTP/HTTPS",
    category: "HTTP Methods & Status Codes",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "1xx: Informational. 2xx: Success (200 OK, 201 Created, 204 No Content). 3xx: Redirection (301 Moved Permanently, 302 Found, 304 Not Modified). 4xx: Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests). 5xx: Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable).",
    detailedExplanation: "Status codes tell the client what happened with the request.\n\n1xx Informational: 100 Continue (client should send the body), 101 Switching Protocols (upgrading to WebSocket).\n\n2xx Success: 200 OK (standard success), 201 Created (resource created — includes Location header), 204 No Content (success but no body — common for DELETE), 206 Partial Content (range request — for resumable downloads).\n\n3xx Redirection: 301 Moved Permanently (URL changed — search engines update their index, browser caches), 302 Found (temporary redirect — historically meant 'method might change'), 304 Not Modified (cached version is still valid — conditional GET with If-None-Match/If-Modified-Since).\n\n4xx Client Error: 400 Bad Request (malformed syntax), 401 Unauthorized (authentication required — note: despite the name, this is about authentication, not authorization), 403 Forbidden (authenticated but not authorized), 404 Not Found (resource doesn't exist), 405 Method Not Allowed, 409 Conflict (version conflict), 422 Unprocessable Entity (valid syntax but semantic errors), 429 Too Many Requests (rate limited — include Retry-After header).\n\n5xx Server Error: 500 Internal Server Error (generic server error), 502 Bad Gateway (upstream server returned invalid response), 503 Service Unavailable (server temporarily overloaded — include Retry-After), 504 Gateway Timeout (upstream server too slow).",
    bestAnswer: "5xx server errors — the server failed to fulfill a valid request:\n- 500: generic server error.\n- 502: proxy/gateway received invalid response from upstream.\n- 503: service temporarily unavailable (overloaded or maintenance).\n- 504: gateway timeout (upstream server too slow).\n\n4xx client errors — the request is bad:\n- 400: malformed request (bad JSON, invalid parameters).\n- 401: not authenticated (send credentials).\n- 403: authenticated but not authorized (insufficient permissions).\n- 404: resource not found.\n- 429: rate limited (check Retry-After header).\n\n3xx redirection:\n- 301: permanent redirect (browsers cache it).\n- 304: not modified (use cached version).\n\n2xx success:\n- 200: OK. 201: created. 204: no content.",
    alternativeAnswers: [
      "Status code semantics matter for APIs: 201 vs 200 tells the client whether a resource was created, which affects client-side state management.",
      "Some APIs intentionally return 200 with an error body for all responses — this is a design choice, though it violates HTTP semantics."
    ],
    commonMistakes: [
      "Confusing 401 (not authenticated) with 403 (not authorized) — 401 means 'who are you?', 403 means 'I know who you are, but you can't do this'.",
      "Using 301 when you mean 302 — 301 is permanent and browsers cache it aggressively. Use 302 or 307 for temporary redirects.",
      "Returning 200 for errors — this makes it harder for clients to handle errors uniformly."
    ],
    followUpQuestions: [
      "When would you use 409 Conflict vs 422 Unprocessable Entity?",
      "How does 304 Not Modified work with ETags?",
      "What is the Retry-After header and when should you use it?"
    ],
    relatedQuestionIds: ["wf-001", "wf-007", "wf-012"],
    references: [
      { title: "MDN HTTP Status Codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
      { title: "RFC 7231 - Status Code Definitions", url: "https://tools.ietf.org/html/rfc7231" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-003",
    title: "What are HTTP Headers? Explain the most important ones.",
    content: "What are HTTP headers? Explain Content-Type, Authorization, Cache-Control, Cookie, Set-Cookie, CORS headers, and other critical headers.",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "HTTP/HTTPS",
    category: "HTTP Headers",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "HTTP headers carry metadata about requests and responses. Key headers: Content-Type (media type), Authorization (authentication credentials), Cache-Control (caching policy), Cookie/Set-Cookie (session management), Accept (client's preferred media types), CORS headers (Access-Control-Allow-Origin, etc.), ETag/If-None-Match (conditional requests).",
    detailedExplanation: "Headers are key-value pairs that provide metadata about the request or response.\n\nRequest headers:\n- Accept: client's preferred response format (e.g., application/json, text/html).\n- Authorization: credentials (Bearer token, Basic auth). Format: `Authorization: Bearer <token>`.\n- Cookie: key-value pairs sent from server via Set-Cookie.\n- Content-Type: media type of the request body (application/json, multipart/form-data).\n- If-None-Match / If-Modified-Since: conditional request — server returns 304 if unchanged.\n- User-Agent: identifies the client software.\n\nResponse headers:\n- Content-Type: media type of the response body.\n- Set-Cookie: sets a cookie with attributes (HttpOnly, Secure, SameSite, Expires, Path).\n- Cache-Control: caching directives (no-cache, no-store, max-age, must-revalidate).\n- ETag: unique identifier for the resource version.\n- Location: redirect URL (with 3xx status).\n- Access-Control-Allow-Origin: CORS — which origins can access the resource.\n\nCORS headers:\n- Access-Control-Allow-Origin: which origins are allowed.\n- Access-Control-Allow-Methods: allowed HTTP methods.\n- Access-Control-Allow-Headers: allowed request headers.\n- Access-Control-Max-Age: how long preflight results are cached.",
    bestAnswer: "Headers are metadata key-value pairs in HTTP messages. Critical ones:\n\nContent-Type: defines the media type — application/json, text/html, multipart/form-data. Server uses it to parse the body; client uses it to format the response.\n\nAuthorization: sends credentials — `Bearer <JWT>` for token auth, `Basic <base64>` for basic auth.\n\nCache-Control: controls caching — `no-store` (never cache), `max-age=3600` (cache for 1 hour), `no-cache` (revalidate before using cache).\n\nCookie/Set-Cookie: server sends Set-Cookie to store data on the client; client sends Cookie header with subsequent requests. HttpOnly prevents JavaScript access (XSS protection). Secure requires HTTPS. SameSite prevents CSRF.\n\nCORS headers: Access-Control-Allow-Origin controls which origins can access the resource. Access-Control-Allow-Methods/Headers control preflight responses.\n\nETag + If-None-Match: conditional requests — server returns 304 Not Modified if the ETag matches, saving bandwidth.",
    alternativeAnswers: [
      "Content-Security-Policy (CSP) is a critical security header that restricts which resources the browser can load, preventing XSS attacks.",
      "HSTS (Strict-Transport-Security) forces browsers to use HTTPS for a domain, preventing downgrade attacks."
    ],
    commonMistakes: [
      "Confusing Cache-Control: no-cache (revalidate with server) with no-store (don't cache at all).",
      "Not setting HttpOnly on cookies — this allows JavaScript access, enabling XSS-based session theft.",
      "Forgetting that CORS headers must be set by the server, not the client — the browser enforces CORS, not the server."
    ],
    followUpQuestions: [
      "How does the CORS preflight request work?",
      "What is the SameSite cookie attribute and how does it prevent CSRF?",
      "How do ETags work for caching?"
    ],
    relatedQuestionIds: ["wf-001", "wf-008", "wf-009"],
    references: [
      { title: "MDN HTTP Headers", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" },
      { title: "HTTP Caching - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-004",
    title: "What is HTTP/2 and how does it improve over HTTP/1.1?",
    content: "What are the key features of HTTP/2? How does multiplexing, server push, header compression, and binary framing improve performance?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "HTTP/HTTPS",
    category: "HTTP/2 & Performance",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "HTTP/2 uses binary framing, multiplexing (multiple requests/responses on one TCP connection), header compression (HPACK), and server push. It solves HTTP/1.1's head-of-line blocking at the application layer. The binary protocol is more efficient to parse. Server push can proactively send resources the client will need.",
    detailedExplanation: "HTTP/1.1 problems: (1) Head-of-line blocking — requests are sequential (one at a time per connection, or up to 6 concurrent connections via domain sharding). (2) Redundant headers — every request sends full headers (cookies can be kilobytes). (3) Text-based protocol — harder to parse.\n\nHTTP/2 solutions:\n\nBinary framing: the protocol is binary (not text-based), making it more efficient to parse and less error-prone. All communication is broken into frames (DATA, HEADERS, PRIORITY, RST_STREAM, SETTINGS, PUSH_PROMISE, PING, GOAWAY).\n\nMultiplexing: multiple requests and responses can be in flight simultaneously on a single TCP connection. Each request/response is a stream with a unique ID. This eliminates head-of-line blocking at the HTTP layer (though TCP head-of-line blocking remains — solved by HTTP/3 with QUIC/UDP).\n\nHeader compression (HPACK): headers are compressed using a dynamic table and Huffman encoding. Common headers like Content-Type or Authorization are represented as small integers after the first request. Reduces overhead from kilobytes to bytes.\n\nServer push: the server can proactively send resources it predicts the client will need (e.g., CSS/JS files alongside the HTML). The client can cancel pushed streams. In practice, server push has been removed from Chrome and is rarely used — preload hints are preferred.\n\nStream prioritization: clients can signal which resources are more important (e.g., CSS before images). The server uses this to allocate bandwidth.",
    bestAnswer: "HTTP/2 solves HTTP/1.1's performance limitations with four key features:\n\n1. Binary framing: replaces text-based protocol with binary frames — faster to parse, less ambiguous.\n\n2. Multiplexing: multiple streams (requests/responses) on a single TCP connection. Eliminates head-of-line blocking at the HTTP layer — a slow response doesn't block other requests.\n\n3. Header compression (HPACK): dynamic table + Huffman encoding reduces redundant header overhead. A request with 800 bytes of headers might compress to 50 bytes after the first request.\n\n4. Server push: server proactively sends predicted resources (e.g., CSS alongside HTML). Less useful in practice — Chrome removed support; preload is preferred.\n\nLimitation: TCP head-of-line blocking persists — if one TCP packet is lost, all streams wait. HTTP/3 solves this with QUIC over UDP.\n\nHTTP/2 requires TLS in practice (all browsers only support h2 over HTTPS), though the spec allows cleartext.",
    alternativeAnswers: [
      "HTTP/3 uses QUIC (built on UDP) to solve TCP head-of-line blocking. Each stream is independent — a lost packet only affects that stream.",
      "Server push was deprecated because browsers often had the resource cached, making the push wasteful. Preload hints are more cache-aware."
    ],
    commonMistakes: [
      "Thinking HTTP/2 eliminates all head-of-line blocking — it only eliminates HTTP-layer HOL blocking; TCP HOL blocking remains.",
      "Assuming server push is widely supported — Chrome removed it; most sites use preload instead.",
      "Not understanding that HTTP/2 is binary — this is a fundamental protocol change, not just multiplexing on top of HTTP/1.1."
    ],
    followUpQuestions: [
      "What is HTTP/3 and how does QUIC solve TCP head-of-line blocking?",
      "How does HPACK header compression work?",
      "When would you use server push vs preload hints?"
    ],
    relatedQuestionIds: ["wf-001", "wf-013", "wf-015"],
    references: [
      { title: "MDN HTTP/2", url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2" },
      { title: "HTTP/2 RFC 7540", url: "https://tools.ietf.org/html/rfc7540" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // DNS (wf-005 – wf-006)
  // ──────────────────────────────────────────────
  {
    id: "wf-005",
    title: "How does DNS resolution work?",
    content: "Walk through the DNS resolution process from typing a URL to getting an IP address. What are the roles of recursive resolvers, root servers, TLD servers, and authoritative servers?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "DNS",
    category: "DNS Resolution",
    companyTags: ["Google", "Amazon", "Cloudflare"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "DNS resolution: (1) Browser checks its cache. (2) OS checks its cache (/etc/hosts, DNS cache). (3) Recursive resolver (ISP or public like 8.8.8.8) checks its cache. (4) If not cached: root server → TLD server (.com, .org) → authoritative server for the domain. (5) Authoritative server returns the IP. (6) Recursive resolver caches the result and returns it to the client.",
    detailedExplanation: "DNS (Domain Name System) translates human-readable domain names to IP addresses.\n\nStep-by-step resolution for www.example.com:\n\n1. Browser cache: the browser checks if it recently resolved this domain. If found, use the cached IP.\n\n2. OS cache: the operating system checks its DNS cache and the hosts file (/etc/hosts or C:\\Windows\\System32\\drivers\\etc\\hosts).\n\n3. Recursive resolver: the client sends a query to its configured DNS resolver (typically ISP's resolver or public like Google 8.8.8.8, Cloudflare 1.1.1.1). The resolver checks its own cache.\n\n4. If not cached, the resolver starts iterative queries:\n   a. Root server (13 root server clusters, A through M): responds with the TLD server address (e.g., 'ask the .com servers').\n   b. TLD server (.com): responds with the authoritative nameserver for example.com.\n   c. Authoritative server: the final DNS server that holds the actual DNS records for example.com. Returns the IP address.\n\n5. The recursive resolver caches the result (with a TTL — time to live) and returns it to the client.\n\n6. The client connects to the IP address.\n\nDNS records: A (IPv4), AAAA (IPv6), CNAME (alias to another domain), MX (mail exchange), TXT (text records — used for SPF, DKIM, verification), NS (nameserver), SOA (start of authority).\n\nDNS is UDP-based (port 53) for queries, TCP for zone transfers and large responses (>512 bytes).",
    bestAnswer: "DNS resolution follows a hierarchical lookup:\n\n1. Local cache check: browser → OS → hosts file. Fastest path if cached.\n\n2. Recursive resolver (ISP or 8.8.8.8): checks its cache. If miss, begins iterative resolution.\n\n3. Iterative resolution: root server (→ 'ask .com') → TLD server (→ 'ask example.com's nameserver') → authoritative server (→ 'the IP is 93.184.216.34').\n\n4. Resolver caches the result (TTL governs cache duration) and returns it.\n\nEach step adds latency (~20-70ms per lookup). Caching at multiple levels (browser, OS, resolver) is critical for performance — most DNS lookups hit cache and resolve in <1ms.\n\nRecords: A (IPv4 address), AAAA (IPv6), CNAME (canonical name — alias), MX (mail server), TXT (verification, SPF), NS (nameserver delegation).",
    alternativeAnswers: [
      "DNS over HTTPS (DoH) and DNS over TLS (DoT) encrypt DNS queries, preventing eavesdropping and tampering. Increasingly adopted by browsers and OS.",
      "DNS poisoning/spoofing attacks corrupt DNS caches to redirect users to malicious servers. DNSSEC adds cryptographic signatures to prevent this."
    ],
    commonMistakes: [
      "Thinking DNS uses only one server — it's a hierarchical system with multiple levels of servers.",
      "Confusing recursive and iterative queries — the client's query to the resolver is recursive, but the resolver's queries to root/TLD/authoritative servers are iterative.",
      "Forgetting about TTL — cached DNS records expire based on the TTL set by the authoritative server."
    ],
    followUpQuestions: [
      "What is DNS caching and what happens when a DNS record changes?",
      "How does DNS round-robin load balancing work?",
      "What is DNS over HTTPS and why is it important?"
    ],
    relatedQuestionIds: ["wf-006", "wf-001", "wf-013"],
    references: [
      { title: "How DNS Works (Cloudflare)", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
      { title: "RFC 1034 - DNS Concepts", url: "https://tools.ietf.org/html/rfc1034" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-006",
    title: "What are the different DNS record types and their use cases?",
    content: "Explain the different DNS record types (A, AAAA, CNAME, MX, TXT, NS, SOA, SRV, PTR). When do you use each?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "DNS",
    category: "DNS Record Types",
    companyTags: ["Google", "Amazon", "Cloudflare"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "A: maps domain to IPv4 address. AAAA: maps to IPv6. CNAME: alias to another domain (e.g., www → example.com). MX: mail servers for the domain. TXT: arbitrary text (SPF, DKIM, domain verification). NS: authoritative nameservers. SOA: zone metadata. SRV: service location (host + port). PTR: reverse DNS (IP → domain).",
    detailedExplanation: "DNS record types and their purposes:\n\nA (Address): maps a hostname to an IPv4 address. Example: example.com → 93.184.216.34. The most fundamental record.\n\nAAAA (Quad-A): maps a hostname to an IPv6 address. Example: example.com → 2606:2800:220:1:248:1893:25c8:1946.\n\nCNAME (Canonical Name): creates an alias pointing to another domain name. Example: www.example.com CNAME example.com. Cannot coexist with other records on the same name. Cannot point to an IP directly.\n\nMX (Mail Exchange): specifies mail servers for the domain. Includes a priority (lower = preferred). Example: example.com MX 10 mail1.example.com, MX 20 mail2.example.com.\n\nTXT (Text): stores arbitrary text. Common uses: SPF (email authentication — which servers can send email for the domain), DKIM (email signing), DMARC (email policy), domain verification (Google, Let's Encrypt, etc.).\n\nNS (Nameserver): delegates a subdomain to specific nameservers. Example: example.com NS ns1.example.com.\n\nSOA (Start of Authority): zone metadata — primary nameserver, admin email, serial number, refresh/expire intervals. Only one SOA per zone.\n\nSRV (Service): specifies host and port for a service. Format: _service._protocol.domain. Example: _sip._tcp.example.com SRV 10 60 5060 sip.example.com.\n\nPTR (Pointer): reverse DNS — maps an IP to a domain name. Used for email verification and logging.",
    bestAnswer: "A: hostname → IPv4 address. The most common record — every domain needs one.\n\nAAAA: hostname → IPv6 address. Required for IPv6 connectivity.\n\nCNAME: alias — points one name to another. Example: www → example.com. Cannot coexist with other records. Use for subdomain aliasing.\n\nMX: mail servers with priority. Required for receiving email. Multiple MX records provide redundancy.\n\nTXT: arbitrary text records. Critical for email authentication (SPF, DKIM, DMARC) and domain verification (Let's Encrypt, Google, etc.).\n\nNS: delegates subdomains to specific nameservers. Used when you delegate a subdomain to a different DNS provider.\n\nSRV: service discovery — specifies which host:port handles a service. Used by SIP, XMPP, LDAP.\n\nPTR: reverse DNS (IP → domain). Important for email servers — many mail servers reject emails from IPs without valid reverse DNS.",
    alternativeAnswers: [
      "CAA (Certification Authority Authorization): specifies which CAs can issue certificates for the domain. Prevents unauthorized certificate issuance.",
      "DNSKEY/DS records are used by DNSSEC to cryptographically sign DNS records, preventing DNS spoofing."
    ],
    commonMistakes: [
      "Using CNAME at the zone apex (root domain) — this breaks other records (MX, NS) because CNAME doesn't coexist with them. Use ALIAS/ANAME or a redirect instead.",
      "Confusing CNAME with A record — CNAME points to a domain name, A record points to an IP address.",
      "Forgetting that MX records require a domain name (not an IP) and a priority number."
    ],
    followUpQuestions: [
      "How does SPF work with TXT records?",
      "Why can't you use a CNAME record at the root domain?",
      "How does DNS failover work with multiple A records?"
    ],
    relatedQuestionIds: ["wf-005", "wf-010", "wf-013"],
    references: [
      { title: "Cloudflare DNS Record Types", url: "https://www.cloudflare.com/learning/dns/dns-records/" },
      { title: "RFC 1035 - DNS Records", url: "https://tools.ietf.org/html/rfc1035" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Browser Rendering (wf-007 – wf-010)
  // ──────────────────────────────────────────────
  {
    id: "wf-007",
    title: "What is the Critical Rendering Path?",
    content: "Explain the Critical Rendering Path — from receiving HTML to painting pixels on screen. What are the key steps?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Browser Rendering",
    category: "Browser Rendering Pipeline",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "The Critical Rendering Path: (1) Parse HTML → DOM tree. (2) Parse CSS → CSSOM tree. (3) Combine DOM + CSSOM → Render Tree (excludes hidden elements). (4) Layout (reflow) — calculate positions and sizes. (5) Paint — fill pixels for each element. (6) Composite — combine layers onto the screen. The 'critical' path is the sequence of resources needed for the first render.",
    detailedExplanation: "The Critical Rendering Path (CRP) is the sequence of steps the browser takes to convert HTML/CSS into pixels:\n\n1. HTML parsing: the browser's HTML parser builds the DOM (Document Object Model) — a tree of all HTML elements. Parsing is incremental — the browser can start processing before the full document loads.\n\n2. CSS parsing: the browser fetches and parses CSS files (and inline styles) into the CSSOM (CSS Object Model) — a tree of style rules. CSS is render-blocking — the browser waits for all CSS before building the render tree.\n\n3. JavaScript: JS is parser-blocking by default (synchronous script tags halt HTML parsing). Deferred scripts (defer, async) don't block parsing. JS can query and modify the DOM/CSSOM, so the browser must wait for it.\n\n4. Render Tree construction: DOM + CSSOM are combined. The render tree includes only visible elements (excludes display:none, head, etc.).\n\n5. Layout (Reflow): the browser calculates the exact position and size of each element. This is expensive — changing one element's dimensions can trigger layout of its ancestors and descendants.\n\n6. Paint (Rasterization): the browser fills pixels — draws backgrounds, text, borders, images, shadows. This happens in multiple layers.\n\n7. Composite: layers are combined in the correct order (z-index, stacking context) and sent to the GPU for display.\n\nOptimization: minimize critical resources (inlinie critical CSS), reduce render-blocking resources, minimize DOM size, use CSS containment.",
    bestAnswer: "The Critical Rendering Path converts HTML/CSS to pixels in 6 steps:\n\n1. DOM: parse HTML → element tree.\n2. CSSOM: parse CSS → style tree.\n3. Render Tree: DOM + CSSOM, excluding hidden elements.\n4. Layout: calculate positions and sizes for every visible element.\n5. Paint: rasterize pixels for each element (text, borders, images, shadows).\n6. Composite: merge layers onto screen (respecting z-index, transforms).\n\n'Critical' means the minimum resources needed for first paint. Critical CSS (above-the-fold styles) can be inlined to avoid render-blocking. JavaScript blocks HTML parsing unless deferred/async. The First Contentful Paint (FCP) happens when the first content is painted; Largest Contentful Paint (LCP) when the largest element is painted.\n\nOptimize the critical path: inline critical CSS, defer non-critical JS, minimize DOM depth, avoid layout thrashing.",
    alternativeAnswers: [
      "Paint worklets and CSS Houdini allow developers to extend the paint phase — creating custom visual effects that run on the compositor thread.",
      "Layout thrashing (reading layout properties then immediately writing) forces synchronous reflows. Use requestAnimationFrame or IntersectionObserver to batch DOM reads/writes."
    ],
    commonMistakes: [
      "Thinking CSS is not render-blocking — it is. The browser won't paint until all CSS is parsed and the render tree is built.",
      "Not understanding that JavaScript blocks HTML parsing by default — a synchronous <script> in <head> blocks rendering.",
      "Confusing reflow (layout) with repaint (paint) — reflow recalculates geometry, repaint redraws pixels without changing layout."
    ],
    followUpQuestions: [
      "How does `async` vs `defer` on script tags affect rendering?",
      "What is layout thrashing and how do you avoid it?",
      "How does lazy loading images affect the critical rendering path?"
    ],
    relatedQuestionIds: ["wf-008", "wf-009", "wf-014"],
    references: [
      { title: "Google - Critical Rendering Path", url: "https://developers.google.com/speed/docs/insights/OptimizeCRP" },
      { title: "MDN - Critical Rendering Path", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-008",
    title: "What is Layout (Reflow) in the browser?",
    content: "What is browser layout/reflow? What causes reflow? How do you minimize layout thrashing? What properties trigger layout vs paint vs composite?",
    difficulty: "advanced",
    track: "web-fundamentals",
    topic: "Browser Rendering",
    category: "Browser Rendering Pipeline",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Layout (reflow) calculates the position and size of every visible element. It's triggered by DOM geometry changes (width, height, position, font-size, adding/removing elements). Layout thrashing occurs when you repeatedly read layout properties (offsetHeight, getBoundingClientRect) and then write DOM changes, forcing synchronous reflows. Minimize by batching reads and writes.",
    detailedExplanation: "Layout (reflow) is the browser's process of calculating the exact position and size of each element in the render tree. It's expensive because changing one element can affect its parent, siblings, and children — the browser must recalculate the entire affected subtree.\n\nProperties that trigger layout: width, height, margin, padding, border, position (top, left, right, bottom), display, font-size, font-family, overflow, float, clear, flex properties, grid properties.\n\nLayout thrashing (forced synchronous layout): reading a layout property (e.g., offsetHeight, getBoundingClientRect, getComputedStyle) after a DOM write forces the browser to immediately compute layout. If you do this in a loop (write → read → write → read...), each iteration forces a reflow.\n\nThe rendering pipeline has three phases with increasing cost:\n1. Composite-only: transform, opacity (GPU-accelerated, cheapest).\n2. Paint: color, background, box-shadow, visibility (draw pixels, no layout change).\n3. Layout: geometry changes (recalculate positions, most expensive).\n\nMinimize layout:\n- Batch DOM reads first, then writes (read all measurements, then apply all changes).\n- Use CSS containment (contain: layout) to limit reflow scope.\n- Use transform: translate() instead of top/left (composite-only, no reflow).\n- Avoid getComputedStyle() in hot loops.\n- Use requestAnimationFrame for visual updates.\n- Use CSS will-change for elements that will animate.",
    bestAnswer: "Layout (reflow) calculates position and size for every visible element. It's the most expensive rendering step because changes propagate — changing a child's width may reflow its parent, siblings, and descendants.\n\nLayout-thrashing pattern (BAD):\n```js\nfor (let el of elements) {\n  el.style.width = el.offsetHeight + 10 + 'px'; // read forces layout, write invalidates it\n}\n```\n\nFixed version:\n```js\nconst heights = elements.map(el => el.offsetHeight); // batch reads\nelements.forEach((el, i) => el.style.width = heights[i] + 10 + 'px'); // batch writes\n```\n\nThe rendering cost hierarchy:\n- Composite only (cheapest): transform, opacity. Handled by GPU, doesn't trigger paint.\n- Paint: color, visibility, box-shadow. Changes pixels but not geometry.\n- Layout (expensive): geometry changes. Recalculates positions and sizes.\n\nUse Chrome DevTools Performance panel to identify layout thrashing — look for 'Forced Synchronous Layout' warnings.",
    alternativeAnswers: [
      "CSS Containment (contain: layout, size, paint) limits the scope of reflow — changes inside a contained element don't affect layout outside it.",
      "Virtual scrolling (windowing) renders only visible items in a list, avoiding layout cost for thousands of off-screen elements."
    ],
    commonMistakes: [
      "Reading offsetHeight or getBoundingClientRect after a DOM write — this forces a synchronous layout.",
      "Using top/left for animation — triggers layout. Use transform: translate() which is composite-only.",
      "Not using Chrome DevTools to measure — profiling is the only way to identify actual layout thrashing."
    ],
    followUpQuestions: [
      "How does CSS Containment (contain property) limit reflow?",
      "What is the difference between layout, paint, and composite?",
      "How do you implement virtual scrolling to avoid layout cost?"
    ],
    relatedQuestionIds: ["wf-007", "wf-009", "wf-014"],
    references: [
      { title: "Google - Rendering Performance", url: "https://web.dev/rendering-performance/" },
      { title: "Chrome DevTools Performance", url: "https://developer.chrome.com/docs/devtools/performance/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-009",
    title: "What is the difference between Paint and Compositing?",
    content: "What are paint and compositing in the browser rendering pipeline? What triggers paint? What are layers and how does the compositor work?",
    difficulty: "advanced",
    track: "web-fundamentals",
    topic: "Browser Rendering",
    category: "Browser Rendering Pipeline",
    companyTags: ["Google", "Meta"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Paint fills pixels for each element (text, borders, backgrounds, images, shadows) without changing layout. Compositing combines painted layers in the correct order (respecting z-index and stacking contexts) and sends them to the GPU for display. Composite-only properties (transform, opacity, filter) skip layout and paint — the most efficient animations.",
    detailedExplanation: "Paint: after layout calculates positions and sizes, the browser needs to actually draw pixels for each element. Paint is done in layers — each element (or group of elements) is painted into an offscreen buffer. Paint order follows the stacking context: backgrounds first, then floats, then positioned elements, then z-indexed elements.\n\nPaint properties: color, background-color, background-image, box-shadow, text-shadow, border (solid), visibility, cursor, outline.\n\nCompositing (compositor): the GPU combines multiple painted layers into the final image displayed on screen. The compositor thread handles this independently of the main thread. Layers are ordered by z-index and stacking context.\n\nLayer creation triggers: elements with CSS 3D transforms (translateZ), will-change property, video/canvas elements, elements with CSS filters, elements with opacity < 1 that have children with z-index.\n\nComposite-only properties (cheapest to animate): transform, opacity, filter. These don't trigger layout or paint — the compositor just moves/transforms existing layers on the GPU.\n\nThe rendering pipeline hierarchy (from cheapest to most expensive):\n1. Composite only: transform, opacity. GPU-accelerated, no main thread work.\n2. Paint: visual properties (color, shadows). Requires rasterization but no layout.\n3. Layout: geometry changes. Most expensive — triggers layout, paint, and composite.\n\nThis is why `transform: translateX(100px)` is cheaper than `left: 100px` — the former is composite-only, the latter triggers layout.",
    bestAnswer: "Paint: the browser rasterizes pixels for each element — fills backgrounds, draws text, renders borders, images, and shadows. This happens in layers and doesn't affect element positions.\n\nCompositing: the GPU combines painted layers into the final screen image. Each layer is a texture; the compositor arranges them by z-index and stacking context, applying transforms and opacity on the GPU without re-painting.\n\nThe key insight: animation properties fall into three cost tiers:\n1. Composite-only (cheapest): transform, opacity. The compositor just moves/transforms existing textures on the GPU. No main thread work.\n2. Paint (mid): color, box-shadow, visibility. Requires rasterization but no layout.\n3. Layout (expensive): width, height, position. Triggers full layout → paint → composite pipeline.\n\nAlways animate composite-only properties (transform, opacity) instead of layout properties (top, left, width, height). This is the single most impactful rendering optimization.",
    alternativeAnswers: [
      "The compositor thread runs independently of the main thread — it can handle scroll, touch, and composite animations without blocking JavaScript execution.",
      "will-change: transform tells the browser to promote an element to its own compositing layer ahead of time, avoiding the cost of layer promotion during animation."
    ],
    commonMistakes: [
      "Animating top/left instead of transform: translate() — the former triggers layout, the latter is composite-only.",
      "Using will-change on too many elements — each promoted layer consumes GPU memory.",
      "Not understanding that the compositor is separate from the main thread — composite animations don't block JavaScript."
    ],
    followUpQuestions: [
      "How do you identify which rendering tier an animation falls into?",
      "What is will-change and when should you use it?",
      "How does the compositor thread interact with the main thread?"
    ],
    relatedQuestionIds: ["wf-007", "wf-008", "wf-014"],
    references: [
      { title: "Google - Layers and Compositing", url: "https://web.dev/stick-to-compositor-only-properties-and-manage-layer-count/" },
      { title: "MDN - CSS Containment", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/contain" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-010",
    title: "How does the browser parse and execute HTML and JavaScript?",
    content: "How does the HTML parser work? What is the DOM? How does JavaScript interact with HTML parsing? What are async and defer?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Browser Rendering",
    category: "HTML Parsing & DOM",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "The HTML parser builds the DOM tree incrementally as bytes arrive. It can start rendering before the full document loads. JavaScript is parser-blocking by default — a synchronous <script> halts HTML parsing. `defer` downloads in parallel and executes after parsing. `async` downloads in parallel and executes as soon as downloaded (pauses parsing).",
    detailedExplanation: "HTML parsing:\n1. The browser receives bytes, converts them to characters (using the declared charset).\n2. Characters are tokenized into tokens (start tags, end tags, attributes, text).\n3. Tokens are converted into nodes and connected into the DOM tree.\n4. Parsing is streaming — the browser renders incrementally as tokens are processed.\n\nThe DOM (Document Object Model) is the in-memory representation of the HTML document — a tree of nodes that JavaScript can query and manipulate via APIs like document.getElementById(), element.querySelector(), element.innerHTML.\n\nJavaScript and HTML parsing:\nBy default, `<script>` tags are parser-blocking — when the parser encounters a script, it must:\n1. Download the script (if external).\n2. Parse/compile the script.\n3. Execute the script.\n4. Resume HTML parsing.\n\nThis is why scripts in `<head>` without defer/async block rendering.\n\nasync attribute:\n- Script downloads in parallel with HTML parsing.\n- Script executes as soon as downloaded — immediately pauses HTML parsing.\n- No guarantee of execution order.\n- Good for independent analytics/tracking scripts.\n\ndefer attribute:\n- Script downloads in parallel with HTML parsing.\n- Script executes after HTML parsing is complete, in document order.\n- Guarantees execution order.\n- Good for scripts that need the DOM (main application code).\n\nThe event firing order: DOMContentLoaded (DOM ready, external resources may not be loaded) fires before load (all resources loaded).",
    bestAnswer: "The HTML parser converts bytes → characters → tokens → DOM nodes, streaming as data arrives. It starts rendering before the full document loads — this is why users see content progressively.\n\nJavaScript blocks HTML parsing by default. When the parser hits a `<script>` tag:\n- Without async/defer: download → parse → execute → resume parsing (blocks rendering).\n- With async: download in parallel, execute immediately when ready (blocks parsing during execution, no order guarantee).\n- With defer: download in parallel, execute after DOM is ready (no parsing block, maintains order).\n\nDOMContentLoaded fires when the DOM is ready (external resources may still be loading). The load event fires after all resources (images, stylesheets) are loaded.\n\nBest practice: put scripts at the end of `<body>` or use defer. Use async for independent scripts (analytics). Never put synchronous scripts in `<head>` without defer.",
    alternativeAnswers: [
      "The preconnect, prefetch, and preload resource hints can start DNS resolution, TCP connections, or resource downloads before the parser reaches the relevant elements.",
      "Module scripts (<script type='module'>) are deferred by default and support import/export — they don't block parsing."
    ],
    commonMistakes: [
      "Confusing async and defer — async executes immediately when downloaded (no order), defer executes after parsing completes (in order).",
      "Putting scripts in <head> without defer — this blocks rendering until the script downloads and executes.",
      "Not understanding that DOMContentLoaded fires before the load event — they serve different purposes."
    ],
    followUpQuestions: [
      "What is the difference between DOMContentLoaded and the load event?",
      "How do you ensure your script runs after the DOM is ready without blocking parsing?",
      "What is the Web Workers API and how does it differ from the main thread?"
    ],
    relatedQuestionIds: ["wf-007", "wf-014", "wf-015"],
    references: [
      { title: "MDN - Script Loading Strategies", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer" },
      { title: "HTML Spec - Parsing", url: "https://html.spec.whatwg.org/multipage/parsing.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Security (wf-011 – wf-013)
  // ──────────────────────────────────────────────
  {
    id: "wf-011",
    title: "What is CORS and how does it work?",
    content: "What is the Same-Origin Policy? What is CORS? How does the CORS preflight work? When do you need CORS headers?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Security",
    category: "Web Security",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "CORS (Cross-Origin Resource Sharing) allows servers to specify which origins can access their resources. The Same-Origin Policy (SOP) blocks cross-origin requests by default. Simple requests (GET, POST with simple headers) go directly; complex requests trigger a preflight OPTIONS request. The server responds with Access-Control-Allow-Origin and other CORS headers.",
    detailedExplanation: "Same-Origin Policy (SOP): a browser security mechanism that restricts how a document or script from one origin can interact with a resource from another origin. An origin is defined by protocol + hostname + port (e.g., https://example.com:443). SOP prevents malicious scripts from reading data from other origins.\n\nCORS: a mechanism that allows servers to relax SOP selectively. The server sends specific headers to indicate which origins are allowed.\n\nSimple requests (no preflight):\n- Method: GET, HEAD, or POST.\n- Headers: only Content-Type (with values application/x-www-form-urlencoded, multipart/form-data, or text/plain).\n- No user-agent headers.\n- The browser sends the request with an Origin header. The server responds with Access-Control-Allow-Origin: https://allowed-origin.com or *. The browser checks the header and allows or blocks the response.\n\nPreflight requests (complex requests):\n- Any method other than GET/HEAD/POST.\n- POST with Content-Type: application/json.\n- Custom headers (Authorization, X-Custom-Header).\n- The browser first sends an OPTIONS request (preflight) with:\n  - Origin: the requesting origin.\n  - Access-Control-Request-Method: the method to be used.\n  - Access-Control-Request-Headers: the headers to be sent.\n  - The server responds with:\n    - Access-Control-Allow-Origin: allowed origin(s).\n    - Access-Control-Allow-Methods: allowed methods.\n    - Access-Control-Allow-Headers: allowed headers.\n    - Access-Control-Max-Age: how long to cache the preflight result.\n- If the preflight succeeds, the browser sends the actual request.\n\nCredentials: Access-Control-Allow-Credentials: true allows cookies and Authorization headers to be sent cross-origin. The browser must also use credentials: 'fetch' on the client side. You cannot use Access-Control-Allow-Origin: * with credentials.",
    bestAnswer: "The Same-Origin Policy (SOP) blocks cross-origin requests by default — a page at https://app.com cannot read data from https://api.com. CORS lets the server selectively allow this.\n\nSimple requests (GET/HEAD/POST with simple headers): the browser adds an Origin header; the server responds with Access-Control-Allow-Origin. No preflight.\n\nComplex requests (PUT/DELETE, Content-Type: application/json, custom headers): the browser sends a preflight OPTIONS request first. The server responds with allowed origins, methods, and headers. Only then does the browser send the actual request.\n\nKey header: Access-Control-Allow-Origin: https://allowed-origin.com (or * for any origin). Access-Control-Allow-Credentials: true enables cookies/auth headers cross-origin.\n\nCommon gotcha: you cannot use Access-Control-Allow-Origin: * with credentials. For credentialed requests, you must echo back the specific origin.",
    alternativeAnswers: [
      "Server-side proxies bypass CORS entirely — the browser sends requests to your own server, which forwards to the API. Common for development and when you don't control the API server.",
      "CORS is enforced by the browser, not the server. Tools like curl, Postman, and server-to-server calls are not subject to CORS."
    ],
    commonMistakes: [
      "Thinking CORS protects against CSRF — CORS restricts cross-origin reads, not cross-origin writes. CSRF works because browsers always send cookies with requests to the target origin.",
      "Forgetting that CORS headers must be set by the server — there's no client-side bypass.",
      "Using Access-Control-Allow-Origin: * with credentials — this is explicitly disallowed by the spec."
    ],
    followUpQuestions: [
      "What is CSRF and how is it different from CORS?",
      "How would you implement CORS in a Node.js/Express application?",
      "What are the security implications of Access-Control-Allow-Origin: *?"
    ],
    relatedQuestionIds: ["wf-012", "wf-013", "wf-003"],
    references: [
      { title: "MDN - CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
      { title: "Wikipedia - CORS", url: "https://en.wikipedia.org/wiki/Cross-origin_resource_sharing" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-012",
    title: "What is CSRF and how do you prevent it?",
    content: "What is a CSRF attack? How does it work? What are the prevention techniques (CSRF tokens, SameSite cookies, double submit)?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Security",
    category: "Web Security",
    companyTags: ["Google", "Amazon", "Meta", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "CSRF (Cross-Site Request Forgery) tricks a logged-in user's browser into making unintended requests to a site where they're authenticated. Prevention: CSRF tokens (unique per-session, included in forms), SameSite cookie attribute (Lax/Strict prevents cross-site cookie sending), double-submit cookie pattern, checking Origin/Referer headers.",
    detailedExplanation: "CSRF attack flow:\n1. User logs into bank.com, receives a session cookie.\n2. User visits attacker.com, which contains a hidden form:\n   <form action='https://bank.com/transfer' method='POST'>\n     <input type='hidden' name='to' value='attacker'>\n     <input type='hidden' name='amount' value='10000'>\n   </form>\n   <script>document.forms[0].submit()</script>\n3. The browser sends the form POST to bank.com WITH the bank.com session cookie (browsers automatically include cookies for the target origin).\n4. bank.com processes the transfer because the session cookie is valid.\n\nThe key insight: CORS doesn't prevent CSRF because CSRF writes (POST/PUT) don't need CORS — browsers always send requests to the target origin. CORS only restricts cross-origin READS.\n\nPrevention techniques:\n\n1. CSRF tokens: the server generates a unique, unpredictable token per session and includes it in forms. The server validates the token on submission. Attacker can't guess the token.\n\n2. SameSite cookies: set Set-Cookie with SameSite=Strict (never sent cross-origin) or SameSite=Lax (sent for top-level navigations only, not for POST/iframe). This is the simplest and most effective defense.\n\n3. Double-submit cookie: the server sets a random value in a cookie AND the client sends it as a header/form field. The server verifies they match. Works because the attacker can read the cookie but can't read it cross-origin (unless they also have XSS).\n\n4. Origin/Referer checking: verify the Origin or Referer header matches expected values. Not always reliable (some proxies strip Referer), but adds defense in depth.",
    bestAnswer: "CSRF tricks a logged-in user's browser into making unwanted requests to a site where they're authenticated. The browser automatically attaches cookies (including session cookies) to any request to the target origin, regardless of where the request originates.\n\nAttack example: attacker.com contains a hidden form that submits to bank.com/transfer. When the victim visits attacker.com, their browser submits the form with their bank.com session cookie — the transfer executes.\n\nPrevention (defense in depth):\n1. SameSite cookie attribute (Lax or Strict) — the most effective single defense. Lax prevents cross-site POST requests from sending cookies.\n2. CSRF token — server generates a random token, includes it in forms, and validates it on submission.\n3. Double-submit cookie — token in both cookie and header, server verifies they match.\n4. Origin/Referer header validation — check the request originated from your domain.\n\nSameSite=Lax is now the browser default (Chrome, Firefox, Safari) and is sufficient for most applications.",
    alternativeAnswers: [
      "CAPTCHAs can prevent CSRF but are bad UX. They're a last resort for high-security actions (changing password, transferring funds).",
      "Checking Content-Type header — CSRF forms can only submit application/x-www-form-urlencoded or multipart/form-data. JSON POST from a form is impossible without CORS, but this isn't a complete defense."
    ],
    commonMistakes: [
      "Confusing CSRF with CORS — CORS prevents cross-origin reads, not writes. CSRF exploits cross-origin writes.",
      "Thinking SameSite cookies are a complete CSRF defense — they don't protect against subdomain attacks (if attacker controls a subdomain).",
      "Forgetting that GET requests should never have side effects — CSRF tokens aren't needed for safe, idempotent GET requests."
    ],
    followUpQuestions: [
      "How does the SameSite cookie attribute work in detail?",
      "What is the double-submit cookie pattern?",
      "How do you implement CSRF protection in a single-page application (SPA)?"
    ],
    relatedQuestionIds: ["wf-011", "wf-013", "wf-003"],
    references: [
      { title: "OWASP CSRF Prevention", url: "https://owasp.org/www-community/attacks/csrf" },
      { title: "MDN - SameSite Cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-013",
    title: "What is CSP (Content Security Policy)?",
    content: "What is a Content Security Policy? How does it prevent XSS? What are the key directives? How do you set up a CSP?",
    difficulty: "advanced",
    track: "web-fundamentals",
    topic: "Security",
    category: "Web Security",
    companyTags: ["Google", "Meta", "Cloudflare"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "CSP (Content Security Policy) is an HTTP header that restricts which resources the browser is allowed to load. It prevents XSS by whitelisting allowed sources for scripts, styles, images, and other resources. Key directives: script-src, style-src, img-src, connect-src, default-src, nonce, hash. Set via HTTP header or meta tag.",
    detailedExplanation: "CSP is a defense-in-depth mechanism against XSS (Cross-Site Scripting). Even if an attacker injects malicious script into your page, CSP restricts what it can do.\n\nHow it prevents XSS:\n- script-src 'self' — only scripts from your own origin are allowed. An injected inline script or external script from evil.com is blocked.\n- Without CSP, injected <script> tags execute freely.\n\nKey directives:\n- default-src: fallback for all resource types. Example: default-src 'self'.\n- script-src: controls which scripts can execute. Options: 'self' (own origin), 'unsafe-inline' (inline scripts — defeats CSP's XSS protection), 'unsafe-eval' (eval() — also defeats protection), nonce-<random> (allow scripts with a matching nonce attribute), sha256-<hash> (allow specific inline scripts by hash).\n- style-src: controls which stylesheets can load.\n- img-src: controls image sources.\n- connect-src: controls which URLs can be fetched (XMLHttpRequest, fetch, WebSocket).\n- font-src: controls font sources.\n- frame-src: controls which URLs can be embedded in iframes.\n- report-uri / report-to: send violation reports to your server for monitoring.\n\nSetup: via HTTP header Content-Security-Policy or via <meta http-equiv='Content-Security-Policy' content='...'>. The header approach is preferred (supports all directives; meta tag doesn't support frame-ancestors or report-uri).\n\nExample: Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc123' https://trusted-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; report-uri /csp-report\n\nStart with Content-Security-Policy-Report-Only to monitor violations without blocking, then switch to enforcement mode.",
    bestAnswer: "CSP restricts which resources the browser can load, preventing XSS even if an attacker injects malicious code. It's an HTTP header that whitelists allowed sources.\n\nKey directives:\n- script-src: who can execute JavaScript. 'self' (own origin), nonce-<random> (inline scripts with a matching nonce), sha256-<hash> (specific scripts). Avoid 'unsafe-inline' and 'unsafe-eval' as they weaken protection.\n- default-src: fallback for all resource types.\n- connect-src: which URLs can be fetched (fetch, XHR, WebSocket).\n- img-src, font-src, style-src: resource-specific policies.\n\nSetup:\n1. Start with report-only mode: Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report\n2. Monitor violations in your server logs.\n3. Fix violations (add nonces to scripts, move inline scripts to external files).\n4. Switch to enforcement: Content-Security-Policy: ...\n\nBest practice: use nonce-based CSP for inline scripts instead of 'unsafe-inline'. Generate a unique nonce per request.",
    alternativeAnswers: [
      "Trusted Types is a newer browser API that complements CSP — it prevents DOM XSS by requiring all DOM injection APIs to return sanitized values.",
      "Subresource Integrity (SRI) hashes ensure external resources (CDN scripts) haven't been tampered with — works well with CSP."
    ],
    commonMistakes: [
      "Using 'unsafe-inline' in script-src — this completely defeats CSP's XSS protection for scripts.",
      "Setting CSP via meta tag — meta tags don't support frame-ancestors or report-uri directives.",
      "Not testing with report-only mode first — CSP can break your site if directives are too strict."
    ],
    followUpQuestions: [
      "How do you implement nonce-based CSP for inline scripts?",
      "What is the difference between CSP report-only and enforcement mode?",
      "How does Trusted Types complement CSP?"
    ],
    relatedQuestionIds: ["wf-011", "wf-012", "wf-015"],
    references: [
      { title: "MDN - Content Security Policy", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" },
      { title: "W3C CSP Specification", url: "https://www.w3.org/TR/CSP3/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Performance (wf-014 – wf-016)
  // ──────────────────────────────────────────────
  {
    id: "wf-014",
    title: "What are Core Web Vitals and how do you measure them?",
    content: "What are Core Web Vitals (LCP, FID, CLS, INP)? How do you measure them? What are good thresholds? How do you optimize each?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Performance",
    category: "Performance Metrics",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Core Web Vitals: LCP (Largest Contentful Paint — loading, <2.5s), FID/INP (First Input Delay / Interaction to Next Paint — interactivity, <100ms/<200ms), CLS (Cumulative Layout Shift — visual stability, <0.1). Measured via Chrome DevTools, Lighthouse, web-vitals.js, and CrUX (Chrome User Experience Report).",
    detailedExplanation: "Core Web Vitals are Google's metrics for real-world user experience:\n\nLCP (Largest Contentful Paint): measures when the largest visible element (image, video, heading, paragraph) is painted. Good: ≤2.5s. Needs improvement: 2.5-4s. Poor: >4s.\n\nFID (First Input Delay): measures the delay between a user's first interaction (click, tap, keypress) and the browser's response. Good: ≤100ms. Replaced by INP in March 2024.\n\nINP (Interaction to Next Paint): measures the latency of ALL interactions, not just the first. Reports the worst interaction latency (p98). Good: ≤200ms. Needs improvement: 200-500ms. Poor: >500ms.\n\nCLS (Cumulative Layout Shift): measures unexpected layout movement. Calculated as impact fraction × distance fraction. Good: ≤0.1. Needs improvement: 0.1-0.25. Poor: >0.25.\n\nMeasurement tools:\n- Chrome DevTools Performance panel: detailed timeline.\n- Lighthouse: simulated audit (Lab data).\n- web-vitals.js: real user monitoring (RUM) library from Google.\n- PageSpeed Insights: combines lab data with CrUX (real user data).\n- Chrome UX Report (CrUX): real-world data from Chrome users.\n\nOptimization:\n- LCP: optimize images (WebP/AVIF, lazy loading, preload hero image), reduce server response time (TTFB), eliminate render-blocking resources.\n- INP: break up long tasks (>50ms), use requestIdleCallback, defer non-critical JS, use web workers for heavy computation.\n- CLS: always set width/height on images and videos, use CSS aspect-ratio, avoid inserting content above existing content, use transform for animations.",
    bestAnswer: "Core Web Vitals measure real-user experience across three dimensions:\n\nLCP (Largest Contentful Paint) — loading: when the largest content element becomes visible. Good: ≤2.5s. Optimize: preload hero images, use modern image formats, reduce server response time.\n\nINP (Interaction to Next Paint) — interactivity: how fast the page responds to ALL user interactions. Good: ≤200ms. Optimize: break long tasks (>50ms), defer non-critical JS, use web workers.\n\nCLS (Cumulative Layout Shift) — visual stability: how much content jumps unexpectedly. Good: ≤0.1. Optimize: always specify width/height on images, use CSS aspect-ratio, don't inject ads/content above existing content.\n\nMeasure via: web-vitals.js (RUM), Lighthouse (lab), PageSpeed Insights (lab + CrUX data), Chrome DevTools (detailed analysis).\n\nFID was replaced by INP in March 2024 because INP better captures overall interactivity — FID only measured the first interaction.",
    alternativeAnswers: [
      "Time to First Byte (TTFB) is a foundational metric — if your server is slow, all other metrics suffer. Good TTFB is <800ms.",
      "First Contentful Paint (FCP) measures when the first text/image is painted — a precursor to LCP. Good FCP is <1.8s."
    ],
    commonMistakes: [
      "Ignoring CLS — layout shifts frustrate users (they click something and something else appears). It's the most overlooked Core Vital.",
      "Measuring only in lab conditions — real user metrics (CrUX) differ from lab tests due to device/network variability.",
      "Forgetting that LCP counts the LARGEST element — a tiny element painted first isn't LCP. Focus on the hero image or main heading."
    ],
    followUpQuestions: [
      "How do you measure Core Web Vitals for real users (RUM)?",
      "What causes high CLS and how do you fix it?",
      "How does INP differ from FID and why was FID replaced?"
    ],
    relatedQuestionIds: ["wf-015", "wf-007", "wf-008"],
    references: [
      { title: "web.dev - Core Web Vitals", url: "https://web.dev/vitals/" },
      { title: "Google - INP", url: "https://web.dev/inp/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-015",
    title: "What are the best caching strategies for web applications?",
    content: "Explain HTTP caching, browser caching, CDN caching, and application-level caching. What are the key headers (Cache-Control, ETag, Expires)?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Performance",
    category: "Caching Strategies",
    companyTags: ["Google", "Amazon", "Cloudflare"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Caching layers: browser (HTTP caching via Cache-Control, ETag), CDN (edge caching for static assets), application (in-memory, Redis, Memcached). Cache-Control directives: no-store (never cache), no-cache (revalidate), max-age (cache duration), immutable (never revalidate). ETags enable conditional requests (304 Not Modified).",
    detailedExplanation: "Caching reduces latency and server load by storing responses closer to the user.\n\nHTTP caching (browser): governed by Cache-Control and ETag headers.\n- Cache-Control: max-age=31536000: cache for 1 year. immutable: don't revalidate even if the URL hasn't changed (useful with fingerprinted assets).\n- Cache-Control: no-cache: the browser can cache but must revalidate with the server before using the cached version.\n- Cache-Control: no-store: don't cache at all — used for sensitive data.\n- ETag: unique identifier for the resource version. On subsequent request, the browser sends If-None-Match: <etag>. If the server's ETag matches, it returns 304 Not Modified (no body) — saving bandwidth.\n- Expires: old-style (HTTP/1.0), specifies a date. Cache-Control: max-age is preferred.\n\nCDN caching: CDNs (Cloudflare, CloudFront, Fastly) cache static assets at edge locations worldwide. First request: CDN fetches from origin, caches it, serves it. Subsequent requests: CDN serves from cache (fast). CDN cache duration is controlled by Cache-Control headers or CDN-specific configuration.\n\nApplication-level caching:\n- In-memory (LRU cache, Map): fastest, per-process, lost on restart.\n- Redis/Memcached: shared across processes/servers, persists across restarts, network overhead.\n- Database query caching: cache expensive queries.\n\nCaching strategies:\n- Cache-first: check cache, fall back to network. Good for static assets.\n- Network-first: always fetch fresh, fall back to cache. Good for dynamic content.\n- Stale-while-revalidate: serve cached content immediately, update in background. Good for semi-dynamic content.\n- Cache invalidation: the hardest problem — how to know when cached data is stale. Solutions: short TTL, versioned URLs, event-driven invalidation.",
    bestAnswer: "Caching operates at multiple layers, each with different strategies:\n\n1. Browser (HTTP) caching: Cache-Control header controls behavior.\n   - max-age=31536000, immutable: fingerprinted static assets (JS/CSS with hash in filename). Cache for a year, never revalidate.\n   - no-cache: revalidate with server before using cache (ETag-based).\n   - no-store: never cache (sensitive data).\n\n2. ETags: server sends a version hash. Client sends If-None-Match on next request. Server returns 304 if unchanged — saves bandwidth.\n\n3. CDN caching: edge servers cache static assets worldwide. First request: fetch from origin. Subsequent: serve from nearest edge. Reduces latency dramatically.\n\n4. Application caching: Redis (shared, persistent) or in-memory (fast, per-process). Cache expensive DB queries, API responses, computed results.\n\nThe 'invalidation problem': cached data becomes stale. Solutions: versioned filenames (bundle.v2.js), short TTLs with stale-while-revalidate, cache-busting via query strings.",
    alternativeAnswers: [
      "Service workers enable offline-first caching strategies — intercept fetch requests and serve from cache when offline. The Cache API provides programmatic cache control.",
      "Cache stampede (thundering herd): when a popular cache expires, many requests hit the origin simultaneously. Solutions: lock/mutex, stale-while-revalidate, probabilistic early expiration."
    ],
    commonMistakes: [
      "Not using immutable with max-age — without immutable, the browser still revalidates on every navigation even if the cache hasn't expired.",
      "Confusing no-cache with no-store — no-cache allows caching but requires revalidation; no-store禁止 caching entirely.",
      "Forgetting to set Cache-Control on API responses — even dynamic responses benefit from short caching (e.g., max-age=60 for semi-dynamic data)."
    ],
    followUpQuestions: [
      "How does stale-while-revalidate work?",
      "What is cache invalidation and why is it called one of the hardest problems in CS?",
      "How do you handle cache stampede?"
    ],
    relatedQuestionIds: ["wf-016", "wf-003", "wf-017"],
    references: [
      { title: "MDN - HTTP Caching", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" },
      { title: "web.dev - HTTP Caching", url: "https://web.dev/http-caching/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-016",
    title: "What are compression techniques for web performance?",
    content: "What compression algorithms are used on the web (gzip, Brotli, Zstandard)? How does content encoding work? When should you use each?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Performance",
    category: "Compression & Optimization",
    companyTags: ["Google", "Cloudflare", "Amazon"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "gzip (deflate) is the most widely supported — 70-90% reduction for text. Brotli offers 15-25% better compression than gzip but is only supported over HTTPS. Zstandard is newer, faster, and better than Brotli in some cases. Content-Encoding header tells the client which algorithm was used. CDN compresses automatically. Client sends Accept-Encoding header.",
    detailedExplanation: "Web compression reduces response size, improving load times.\n\ngzip (based on DEFLATE): the most common compression. Compression level 6-9 for best ratio. Supported by all browsers. Typically 70-90% reduction for HTML/CSS/JS. Slightly CPU-intensive at high compression levels.\n\nBrotli: developed by Google, 15-25% better compression than gzip at the same speed. Better for text-based resources. Only available over HTTPS (browsers don't support Brotli over plain HTTP). Supported by all modern browsers.\n\nZstandard (zstd): developed by Facebook, offers better compression ratio than Brotli at higher speeds. Supported in newer browsers (Chrome 123+, Firefox 126+). Growing adoption.\n\nHow it works:\n1. Client sends Accept-Encoding: gzip, deflate, br (indicating supported algorithms).\n2. Server compresses the response and adds Content-Encoding: br (or gzip).\n3. Client decompresses before rendering.\n\nWhen to use:\n- HTML/CSS/JS (text): always compress — high compression ratio.\n- Images: use modern formats (WebP, AVIF) instead of gzip — they have their own compression.\n- Already compressed files (JPEG, MP4): don't re-compress — negligible benefit.\n\nCDNs typically handle compression automatically based on file type and client support.\n\nFor optimal performance: use Brotli (or zstd where supported) with gzip fallback. Set up on your CDN or server (nginx: brotli on; gzip on;).",
    bestAnswer: "Compression reduces response size for text-based resources (HTML, CSS, JS, JSON, SVG):\n\ngzip: universal support, 70-90% reduction. The baseline — always use at least gzip.\n\nBrotli: 15-25% better than gzip, HTTPS-only. Best for text — use as primary if your site uses HTTPS (it should).\n\nZstandard (zstd): newer, faster than Brotli with comparable compression. Chrome 123+/Firefox 126+. Emerging standard.\n\nHow it works: client sends Accept-Encoding: gzip, br. Server compresses and sends Content-Encoding: br. Client decompresses transparently.\n\nDon't compress: images (use WebP/AVIF), already-compressed files (JPEG, MP4), very small files (<1KB — overhead exceeds savings).\n\nBest practice: Brotli with gzip fallback. CDNs handle this automatically. For text resources, compression is essentially free performance.",
    alternativeAnswers: [
      "Pre-compression: generate .gz and .br files at build time instead of compressing on-the-fly — saves server CPU.",
      "HTTP/3 with QPACK header compression further reduces overhead beyond body compression."
    ],
    commonMistakes: [
      "Compressing images with gzip — images are already compressed. Use modern image formats instead.",
      "Not enabling compression at all — this is one of the easiest performance wins.",
      "Using Brotli over HTTP — browsers don't support it. Ensure HTTPS is enabled."
    ],
    followUpQuestions: [
      "How does Brotli compare to gzip in terms of compression speed and ratio?",
      "When would you use Zstandard over Brotli?",
      "What is pre-compression and how does it improve performance?"
    ],
    relatedQuestionIds: ["wf-015", "wf-014", "wf-013"],
    references: [
      { title: "web.dev - Compression", url: "https://web.dev/compression/" },
      { title: "MDN - Content-Encoding", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Web Standards (wf-017 – wf-018)
  // ──────────────────────────────────────────────
  {
    id: "wf-017",
    title: "What are Service Workers and how do they enable offline support?",
    content: "What is a Service Worker? What is its lifecycle? How does it enable offline support, push notifications, and background sync?",
    difficulty: "advanced",
    track: "web-fundamentals",
    topic: "Web Standards",
    category: "Service Workers & PWA",
    companyTags: ["Google", "Meta", "Microsoft"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "A Service Worker is a background script that intercepts network requests, enabling offline support, caching, push notifications, and background sync. Lifecycle: register → install → activate → intercept fetch events. It runs in a separate thread, can't access the DOM, and communicates via postMessage. The Cache API provides programmatic cache control.",
    detailedExplanation: "Service Worker is a JavaScript API that runs in the background, separate from the main thread, intercepting network requests. It's the foundation of Progressive Web Apps (PWAs).\n\nLifecycle:\n1. Registration: navigator.serviceWorker.register('/sw.js'). The browser downloads and installs the SW.\n2. Install event: pre-cache critical assets (app shell). Call event.waitUntil() to ensure installation completes.\n3. Activate event: clean up old caches. Call self.clients.claim() to take control of all pages immediately.\n4. Running: intercepts fetch events, push events, sync events.\n\nKey capabilities:\n- Offline support: intercept fetch events, serve from Cache API when offline.\n- Caching strategies: cache-first (check cache, then network), network-first (try network, fall back to cache), stale-while-reserve (serve cache immediately, update in background).\n- Push notifications: server sends push events, SW shows notifications even when the page is closed.\n- Background sync: queue actions when offline, replay when connection returns.\n\nLimitations:\n- Only works over HTTPS (security requirement).\n- Can't access DOM directly (uses postMessage to communicate with the page).\n- Registration is scope-based — a SW controls pages in its scope and below.\n- Browsers may terminate idle SWs to save resources.\n\nCache API: provides programmatic control over the cache — cache.add(), cache.match(), cache.put(), cache.delete().",
    bestAnswer: "A Service Worker is a background script that intercepts network requests between the browser and the network. It enables offline support, push notifications, and background sync.\n\nLifecycle: register → install (pre-cache critical assets) → activate (clean old caches) → running (intercept requests).\n\nOffline support: on the fetch event, the SW checks the Cache API first. If the response is cached, serve it. If not, fetch from the network and cache the response for future use.\n\nCaching strategies:\n- Cache-first: check cache → network (good for static assets).\n- Network-first: network → cache (good for dynamic content).\n- Stale-while-revalidate: serve cache, then update in background (good for semi-dynamic).\n\nLimitations: HTTPS required, no DOM access, scope-based, browser may terminate idle SWs.\n\nCommunication: SW ↔ page via postMessage(). SW ↔ server via Push API.",
    alternativeAnswers: [
      "Workbox is a Google library that simplifies Service Worker implementation — provides pre-built caching strategies, routing, and lifecycle management.",
      "The Cache Storage API is separate from the browser's HTTP cache — you have full control over what's cached and when it expires."
    ],
    commonMistakes: [
      "Forgetting that Service Workers require HTTPS — they won't register on HTTP (except localhost).",
      "Not calling self.clients.claim() in the activate event — this means the SW doesn't take control until the page is refreshed.",
      "Caching everything indiscriminately — this can serve stale content. Use versioned caches and proper invalidation."
    ],
    followUpQuestions: [
      "How do you implement a cache-first strategy with a Service Worker?",
      "What is the Cache API and how does it differ from the browser's HTTP cache?",
      "How do push notifications work with Service Workers?"
    ],
    relatedQuestionIds: ["wf-018", "wf-015", "wf-019"],
    references: [
      { title: "MDN - Service Workers", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" },
      { title: "web.dev - Service Workers", url: "https://web.dev/service-workers-cache-storage/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-018",
    title: "What are WebSockets and how do they differ from HTTP?",
    content: "What is WebSocket? How does the WebSocket handshake work? How does it differ from HTTP polling, long-polling, and Server-Sent Events (SSE)?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "Web Standards",
    category: "WebSockets & Real-Time",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "WebSockets provide full-duplex, bidirectional communication over a single TCP connection. The handshake starts as an HTTP request with Upgrade: websocket header. After the 101 Switching Protocols response, both sides can send messages at any time. Unlike HTTP (request-response), WebSockets are persistent and low-overhead. Alternatives: SSE (server-to-client only, simpler), long-polling (HTTP fallback).",
    detailedExplanation: "WebSocket protocol:\n\nHandshake: the client sends an HTTP request with:\n- Upgrade: websocket\n- Connection: Upgrade\n- Sec-WebSocket-Key: random base64 key\n- Sec-WebSocket-Version: 13\n\nThe server responds with:\n- 101 Switching Protocols\n- Upgrade: websocket\n- Sec-WebSocket-Accept: hash of the client key\n\nAfter the handshake, the connection is upgraded from HTTP to WebSocket. Both sides can send messages at any time (full-duplex).\n\nWebSocket vs HTTP:\n- HTTP: client sends request, server responds. Half-duplex. Each request opens a new TCP connection (or reuses via keep-alive). Overhead: headers on every request.\n- WebSocket: persistent connection. Full-duplex. Messages have 2-14 bytes overhead (vs hundreds of bytes for HTTP headers). Server can push to client without client polling.\n\nAlternatives:\n- HTTP Polling: client repeatedly requests the server at intervals. Wastes bandwidth if nothing changes.\n- Long-polling: client sends a request, server holds it until new data is available. Simulates push but uses a new HTTP connection each time.\n- Server-Sent Events (SSE): server can push to client over HTTP, but it's unidirectional (server → client only). Simpler than WebSocket, uses HTTP/1.1 chunked encoding or HTTP/2 streams. Good for notifications, live feeds.\n\nWhen to use WebSockets: chat apps, real-time collaboration (Google Docs), multiplayer games, live dashboards, financial tickers.\n\nWhen to use SSE: live news feeds, stock tickers, notifications — anything where the server pushes updates and the client doesn't need to send data back frequently.",
    bestAnswer: "WebSockets provide full-duplex, persistent communication over a single TCP connection. The handshake upgrades an HTTP connection (101 Switching Protocols), then both sides can send messages at any time with minimal overhead (2-14 bytes per frame vs hundreds for HTTP headers).\n\nComparison:\n- HTTP polling: simple but wasteful — client repeatedly requests, most responses are empty.\n- Long-polling: server holds the request until data is available, then client reconnects. Better but still connection overhead.\n- SSE (Server-Sent Events): server → client only, uses HTTP, automatic reconnection. Simpler but unidirectional.\n- WebSocket: full-duplex, lowest overhead, persistent connection. Best for real-time bidirectional communication.\n\nUse WebSockets for: chat, collaborative editing, multiplayer games, live dashboards. Use SSE for: notifications, live feeds (server pushing data). Use long-polling as an HTTP fallback when WebSockets aren't available.",
    alternativeAnswers: [
      "WebTransport is an emerging API that provides WebSocket-like bidirectional communication over HTTP/3 (QUIC), supporting unreliable datagrams for gaming and low-latency applications.",
      "Socket.IO is a popular library that wraps WebSockets with automatic fallback to long-polling, room-based messaging, and reconnection logic."
    ],
    commonMistakes: [
      "Using WebSockets for everything — SSE is simpler for server-to-client communication and works through more proxies.",
      "Not handling reconnection — WebSockets can drop. Implement exponential backoff for reconnects.",
      "Forgetting that WebSockets require their own scaling strategy — sticky sessions or a message broker (Redis Pub/Sub) for multi-server deployments."
    ],
    followUpQuestions: [
      "How do you handle WebSocket reconnection with exponential backoff?",
      "How do you scale WebSockets across multiple servers?",
      "When would you choose SSE over WebSockets?"
    ],
    relatedQuestionIds: ["wf-017", "wf-001", "wf-020"],
    references: [
      { title: "MDN - WebSocket API", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket" },
      { title: "RFC 6455 - WebSocket Protocol", url: "https://tools.ietf.org/html/rfc6455" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // SEO (wf-019 – wf-020)
  // ──────────────────────────────────────────────
  {
    id: "wf-019",
    title: "What meta tags are important for SEO?",
    content: "What HTML meta tags are important for SEO? Explain title, description, Open Graph, Twitter Cards, canonical URLs, and viewport tags.",
    difficulty: "beginner",
    track: "web-fundamentals",
    topic: "SEO",
    category: "SEO Fundamentals",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 3,
    expectedAnswer: "Key SEO meta tags: title (page title, 50-60 chars, most important ranking signal), meta description (155-160 chars, appears in search results), canonical URL (prevents duplicate content), viewport (mobile-friendly), Open Graph tags (Facebook/social sharing), Twitter Cards (Twitter sharing), robots (index/noindex, follow/nofollow).",
    detailedExplanation: "Meta tags provide metadata to browsers and search engines:\n\n<title>: the most important SEO tag. Appears as the clickable headline in search results. Keep under 60 characters. Include primary keyword near the beginning. Each page must have a unique title.\n\n<meta name='description'>: summary of the page content. Appears below the title in search results. Keep under 160 characters. Include target keywords naturally. Not a direct ranking factor but affects click-through rate.\n\n<link rel='canonical'>: specifies the canonical (preferred) URL for the page. Prevents duplicate content issues when the same content is accessible via multiple URLs (www vs non-www, HTTP vs HTTPS, parameters). Example: <link rel='canonical' href='https://example.com/page'>\n\n<meta name='viewport'>: essential for mobile SEO. Without it, the page won't render correctly on mobile devices. Standard: <meta name='viewport' content='width=device-width, initial-scale=1'>\n\nOpen Graph (OG) tags: control how the page appears when shared on Facebook, LinkedIn, etc.\n- og:title, og:description, og:image, og:url, og:type\n- og:image should be 1200x630 pixels for best display.\n\nTwitter Cards: similar to OG but for Twitter.\n- twitter:card, twitter:title, twitter:description, twitter:image\n- Use type='summary_large_image' for a large preview image.\n\nRobots meta tag: <meta name='robots' content='noindex, nofollow'>\n- noindex: don't include this page in search results.\n- nofollow: don't follow links on this page.\n- Use noindex for admin pages, duplicate content, or staging environments.\n\nOther important tags:\n- <meta charset='UTF-8'>: character encoding.\n- hreflang: for multilingual sites — specifies the language and regional URL.\n- structured data (JSON-LD): helps search engines understand content (see wf-020).",
    bestAnswer: "Essential SEO meta tags:\n\n1. <title>: most important ranking signal. 50-60 chars. Unique per page. Primary keyword near start.\n\n2. <meta name='description'>: 155-160 chars. Summarizes the page. Affects click-through rate from search results.\n\n3. <link rel='canonical'>: prevents duplicate content. Tells search engines which URL is the 'real' one.\n\n4. <meta name='viewport'>: required for mobile-friendly pages. Without it, Google's mobile-first indexing penalizes you.\n\n5. Open Graph tags (og:title, og:description, og:image): control social media sharing appearance. og:image should be 1200x630px.\n\n6. Twitter Cards: similar to OG for Twitter. Use summary_large_image for visual content.\n\n7. <meta name='robots'>: control indexing (noindex) and link following (nofollow). Use noindex for pages you don't want in search results.\n\n8. hreflang: for multilingual sites — tells Google which language/region version to show users.",
    alternativeAnswers: [
      "Structured data (JSON-LD) is increasingly important — it enables rich snippets (star ratings, recipes, events) in search results.",
      "Core Web Vitals are a Google ranking factor — performance IS SEO."
    ],
    commonMistakes: [
      "Using the same title/description on multiple pages — each page needs unique meta tags.",
      "Missing the viewport tag — makes the page non-mobile-friendly, which is a ranking factor.",
      "Not setting a canonical URL — duplicate content can dilute ranking signals across multiple URLs."
    ],
    followUpQuestions: [
      "How does a canonical URL prevent duplicate content issues?",
      "What are Open Graph tags and how do they affect social sharing?",
      "How do you optimize meta tags for multiple languages?"
    ],
    relatedQuestionIds: ["wf-020", "wf-007", "wf-015"],
    references: [
      { title: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { title: "MDN - Meta Tags", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "wf-020",
    title: "What is Structured Data and how does it help SEO?",
    content: "What is structured data (Schema.org, JSON-LD)? How does it help search engines understand content? What are rich snippets?",
    difficulty: "intermediate",
    track: "web-fundamentals",
    topic: "SEO",
    category: "Structured Data & Rich Snippets",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Structured data is machine-readable markup (typically JSON-LD) that describes the content of a page using Schema.org vocabulary. It helps search engines understand the content's meaning (not just keywords). When implemented correctly, it enables rich snippets in search results — enhanced display with ratings, prices, availability, event dates, etc.",
    detailedExplanation: "Structured data uses a standardized vocabulary (Schema.org) to describe entities and relationships on a page. Google, Bing, and other search engines use it to understand content and generate rich results.\n\nJSON-LD (JavaScript Object Notation for Linked Data) is the recommended format. Example:\n<script type='application/ld+json'>\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n  \"headline\": \"How to Improve SEO\",\n  \"author\": {\n    \"@type\": \"Person\",\n    \"name\": \"John Doe\"\n  },\n  \"datePublished\": \"2024-01-15\",\n  \"image\": \"https://example.com/photo.jpg\"\n}\n</script>\n\nSchema.org types: Article, Product, Recipe, Event, LocalBusiness, Organization, Person, FAQ, HowTo, BreadcrumbList, VideoObject, and many more.\n\nRich snippets: enhanced search result displays based on structured data:\n- Star ratings (reviews)\n- Price and availability (products)\n- Recipe details (cook time, calories)\n- Event dates and locations\n- FAQ accordion (expandable Q&A)\n- How-to steps\n- Breadcrumb navigation\n\nBenefits:\n1. Rich snippets increase click-through rate (CTR) by making results more visually appealing.\n2. Helps search engines understand content meaning (semantic SEO).\n3. Enables voice search assistants to provide direct answers.\n4. Required for Google Discover, Google News, and other Google features.\n\nValidation: use Google's Rich Results Test (search.google.com/test/rich-results) to verify your structured data. Google Search Console reports structured data errors.\n\nCommon mistakes: using the wrong type, missing required properties, marking up content that isn't visible on the page, using JSON-LD alongside Microdata (pick one).",
    bestAnswer: "Structured data is machine-readable markup using Schema.org vocabulary (typically JSON-LD) that describes the meaning of your content to search engines.\n\nExample — an article:\n<script type='application/ld+json'>\n{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"...\",\"author\":{\"@type\":\"Person\",\"name\":\"...\"}}\n</script>\n\nIt enables rich snippets — enhanced search results with visual elements:\n- Products: price, availability, ratings.\n- Recipes: cook time, calories, images.\n- Events: date, location, ticket info.\n- FAQs: expandable Q&A sections.\n- How-to: step-by-step instructions.\n\nBenefits: higher CTR from visually rich results, better content understanding by search engines, required for Google Discover/News, and enables voice search answers.\n\nValidate with Google's Rich Results Test. Common Schema.org types: Article, Product, Recipe, Event, FAQ, LocalBusiness, Organization.",
    alternativeAnswers: [
      "Microdata and RDFa are alternative structured data formats, but Google recommends JSON-LD — it's easier to implement and maintain.",
      "Speakable structured data marks content suitable for voice assistants (Google Assistant), enabling voice search results."
    ],
    commonMistakes: [
      "Marking up content that isn't visible on the page — Google penalizes this as spam.",
      "Missing required properties for a Schema.org type — incomplete structured data may not generate rich snippets.",
      "Using structured data for misleading content — Google can penalize sites that abuse structured data."
    ],
    followUpQuestions: [
      "How do you implement JSON-LD for an e-commerce product page?",
      "What is the difference between JSON-LD, Microdata, and RDFa?",
      "How does structured data affect voice search results?"
    ],
    relatedQuestionIds: ["wf-019", "wf-007", "wf-015"],
    references: [
      { title: "Schema.org", url: "https://schema.org/" },
      { title: "Google - Structured Data", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" }
    ],
    createdAt: now,
    updatedAt: now,
  },
];

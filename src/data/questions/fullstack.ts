import { Question } from '@/types/question';

export const fullstackQuestions: Question[] = [
  // ── Authentication Flows (5) ──────────────────────────────────────────
  {
    id: 'fs-001',
    title: 'How does OAuth 2.0 authorization code flow work?',
    content: 'Explain the OAuth 2.0 Authorization Code flow step by step. What role does PKCE play in securing it for single-page applications?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Authentication Flows',
    category: 'Authentication',
    companyTags: ['Google', 'Meta', 'Stripe'],
    interviewRound: 'System Design',
    frequency: 85,
    expectedAnswer: 'OAuth 2.0 Authorization Code flow involves: (1) Client redirects user to authorization server, (2) User authenticates and consents, (3) Authorization server returns authorization code, (4) Client exchanges code for tokens via back-channel, (5) Client uses access token to call resource server. PKCE adds a code_verifier/code_challenge pair to prevent authorization code interception attacks.',
    detailedExplanation: 'The Authorization Code flow is the most secure OAuth grant type for web apps. PKCE (Proof Key for Code Exchange) extends it for public clients like SPAs by requiring a cryptographic proof that the client that initiated the flow is the same one exchanging the code. The code_challenge is derived from a random code_verifier using SHA-256. This prevents malicious apps from intercepting the authorization code.',
    bestAnswer: 'The Authorization Code flow works in five steps: (1) The client generates a state parameter and PKCE code_verifier, derives a code_challenge, and redirects the user to the authorization endpoint with client_id, redirect_uri, scope, state, and code_challenge. (2) The user authenticates with the authorization server and grants consent. (3) The server redirects back to the client with an authorization code and the original state. (4) The client validates state, then exchanges the code for tokens by POSTing to the token endpoint with client_id, code, redirect_uri, and code_verifier. (5) The server validates the code_verifier against the stored code_challenge, then returns access_token, refresh_token, and ID token. PKCE prevents interception because even if an attacker steals the authorization code, they cannot exchange it without the code_verifier.',
    alternativeAnswers: [
      'Focus on the trust relationship between client and authorization server, emphasizing how the redirect-based flow keeps credentials away from the client.',
      'Highlight the differences between Authorization Code with PKCE vs. Implicit flow for SPAs.',
      'Discuss token lifecycle: access tokens (short-lived) vs refresh tokens (long-lived) and the token refresh flow.'
    ],
    commonMistakes: [
      'Confusing the Implicit flow with Authorization Code flow — Implicit flow returns tokens directly in the URL fragment and is deprecated.',
      'Forgetting to validate the state parameter to prevent CSRF attacks.',
      'Not understanding that PKCE is mandatory for public clients (SPAs) in OAuth 2.1.',
      'Confusing the authorization code with the access token.'
    ],
    followUpQuestions: [
      'How would you implement token refresh on the server side?',
      'What is the difference between OpenID Connect and OAuth 2.0?',
      'How do you handle logout across multiple services using OAuth?'
    ],
    relatedQuestionIds: ['fs-002', 'fs-003'],
    references: [
      { title: 'OAuth 2.0 RFC 6749', url: 'https://datatracker.ietf.org/doc/html/rfc6749' },
      { title: 'OAuth 2.0 for Browser-Based Apps', url: 'https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-002',
    title: 'What are the security considerations when implementing JWTs?',
    content: 'Explain JWT structure, common vulnerabilities (algorithm confusion, token leakage, replay attacks), and best practices for securing JWTs in a full-stack application.',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Authentication Flows',
    category: 'Authentication',
    companyTags: ['Amazon', 'Netflix', 'Uber'],
    interviewRound: 'Technical',
    frequency: 90,
    expectedAnswer: 'JWTs consist of header.payload.signature. Security concerns include: algorithm confusion attacks (none algorithm, RS256 vs HS256 mismatch), token leakage via URLs/localStorage, replay attacks, and bloated token sizes. Best practices: use short expiration, store in httpOnly cookies, validate algorithm and issuer, implement token rotation.',
    detailedExplanation: 'JSON Web Tokens encode claims as a JSON object signed with a cryptographic algorithm. The header specifies the algorithm and token type. The payload contains claims (iss, sub, exp, iat). The signature is created by hashing header+payload with the secret. Common attacks include algorithm confusion (forcing the server to use HS256 with a public key as HMAC secret), token theft from localStorage via XSS, and token replay if not using short-lived tokens with refresh mechanisms.',
    bestAnswer: 'JWTs have three parts: header (algorithm, type), payload (claims like sub, exp, iss, aud), and signature. Key vulnerabilities: (1) Algorithm confusion — attacker sets alg to "none" or switches RS256→HS256 using the public key as HMAC secret. Fix: whitelist allowed algorithms server-side. (2) Token leakage — storing in localStorage exposes tokens to XSS. Fix: use httpOnly, Secure, SameSite cookies. (3) Replay attacks — long-lived tokens can be reused. Fix: short expiry (15min), refresh token rotation, token blacklisting. (4) Information disclosure — payload is base64-encoded, not encrypted. Never store sensitive data. (5) Key management — weak secrets or exposed private keys. Use asymmetric keys (RS256/ES256) for public-facing APIs.',
    alternativeAnswers: [
      'Emphasize the stateless nature of JWTs vs stateful sessions and when to choose each approach.',
      'Focus on token storage strategies: httpOnly cookies vs Authorization header vs memory.',
      'Discuss JWT best practices including key rotation and the use of JWK endpoints.'
    ],
    commonMistakes: [
      'Assuming JWTs are encrypted — they are only signed, payload is readable by anyone.',
      'Storing JWTs in localStorage without understanding XSS implications.',
      'Not validating the exp claim or using excessively long expiration times.',
      'Using symmetric keys (HS256) in distributed systems instead of asymmetric (RS256/ES256).'
    ],
    followUpQuestions: [
      'When would you choose JWTs over server-side sessions?',
      'How do you implement single sign-out with JWTs?',
      'What is the N+1 query problem with JWT-based authorization?'
    ],
    relatedQuestionIds: ['fs-001', 'fs-003'],
    references: [
      { title: 'RFC 7519 - JSON Web Token', url: 'https://datatracker.ietf.org/doc/html/rfc7519' },
      { title: 'JWT Security Best Practices', url: 'https://datatracker.ietf.org/doc/html/draft-ietf-oauth-jwt-best-practices' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-003',
    title: 'Compare session-based and token-based authentication',
    content: 'What are the trade-offs between server-side sessions and token-based (JWT) authentication? When would you choose one over the other?',
    difficulty: 'beginner',
    track: 'fullstack',
    topic: 'Authentication Flows',
    category: 'Authentication',
    companyTags: ['Microsoft', 'GitHub', 'Shopify'],
    interviewRound: 'Technical',
    frequency: 75,
    expectedAnswer: 'Server-side sessions store state on the server, use session IDs in cookies, and are simple but harder to scale horizontally. Token-based auth (JWT) is stateless, scales easily, but has larger payloads and token revocation is harder. Choose sessions for monolithic apps with a single backend; choose tokens for distributed microservices or mobile clients.',
    detailedExplanation: 'Session-based auth stores user state in server memory or a shared store (Redis), sending only a session ID cookie to the client. This enables instant revocation and smaller payloads but requires sticky sessions or shared state for horizontal scaling. Token-based auth (JWT) embeds user claims in the token itself, making it stateless — any server can validate without looking up state. However, revocation requires additional mechanisms (blacklists, short expiry), tokens are larger, and server-side validation adds overhead.',
    bestAnswer: 'Session-based authentication: the server creates a session, stores it (memory/Redis/DB), and sends a session ID cookie. Advantages: instant revocation, small payload, server controls all session data. Disadvantages: requires shared state for scaling, vulnerable to CSRF, not ideal for cross-domain or mobile. Token-based (JWT): the server encodes claims in a signed token the client sends with each request. Advantages: stateless, scales horizontally, works for SPAs/mobile/microservices, no shared state needed. Disadvantages: larger payload, token revocation is complex (need blacklists or short expiry + refresh tokens), sensitive data in payload is visible. Choose sessions when you have a monolith or need instant revocation. Choose tokens when you have microservices, mobile clients, or need to scale statelessly.',
    alternativeAnswers: [
      'Emphasize the operational complexity difference — sessions require Redis/DB infrastructure while tokens require token rotation and blacklisting logic.',
      'Discuss how cookies vs headers affect CORS and cross-domain scenarios.',
      'Highlight the mobile/native app use case where tokens are almost always preferred.'
    ],
    commonMistakes: [
      'Assuming JWTs are always better because they are "modern" — sessions are simpler and often more secure for monoliths.',
      'Not considering the revocation problem with JWTs — if a token is stolen, you need additional mechanisms to invalidate it.',
      'Forgetting that httpOnly cookies with sessions are immune to XSS token theft.',
      'Overlooking that token size affects network performance on every request.'
    ],
    followUpQuestions: [
      'How would you implement hybrid authentication that uses both sessions and tokens?',
      'How do you handle token revocation in a microservices architecture?',
      'What role does CSRF protection play in session-based auth?'
    ],
    relatedQuestionIds: ['fs-001', 'fs-002'],
    references: [
      { title: 'Session vs Token Authentication', url: 'https://auth0.com/blog/session-vs-token-authentication/' },
      { title: 'OWASP Authentication Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-004',
    title: 'How do you implement role-based access control (RBAC)?',
    content: 'Design an RBAC system for a full-stack application. How do roles, permissions, and policies interact? How would you implement it in both frontend and backend?',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'Authentication Flows',
    category: 'Authorization',
    companyTags: ['Google', 'Meta', 'Amazon'],
    interviewRound: 'System Design',
    frequency: 70,
    expectedAnswer: 'RBAC assigns users to roles, roles to permissions. Implementation: define permission constants, create a role-permission mapping, check permissions at API and UI level. Backend: middleware checks permissions against the endpoint\'s required permission. Frontend: HOC/comp conditionally renders based on user permissions.',
    detailedExplanation: 'RBAC is an authorization model where users are assigned roles, and roles are granted permissions. A role like "editor" might have permissions ["post:create", "post:update", "post:delete"]. Implementation involves: (1) defining a permission schema (resource:action format), (2) a role-permission mapping table, (3) middleware/guards on the backend that check the user\'s permissions against required permissions, (4) frontend conditionals that show/hide UI elements based on permissions.',
    bestAnswer: 'RBAC implementation: (1) Define permissions as strings like "posts:create", "posts:read", "posts:update", "posts:delete", "users:manage". (2) Create a roles table with a JSONB column or join table mapping roles to permissions. (3) Backend middleware: a guard/decorator that extracts required permissions from the endpoint metadata and checks against the user\'s role permissions. (4) Frontend: a PermissionGate component or hook (usePermission) that conditionally renders UI. (5) Database: use row-level security (RLS) or application-level filters to enforce data access. (6) For complex cases, use an ABAC (Attribute-Based Access Control) layer that considers resource attributes, user attributes, and context (time, IP).',
    alternativeAnswers: [
      'Propose an ABAC system with policy engines like Casbin or Open Policy Agent for complex authorization.',
      'Discuss hierarchical roles where parent roles inherit child role permissions.',
      'Emphasize the importance of server-side enforcement — never rely on frontend-only permission checks.'
    ],
    commonMistakes: [
      'Relying only on frontend permission checks — always enforce on the backend.',
      'Hardcoding roles instead of using a permission system — adding a new role requires code changes.',
      'Not implementing row-level security — a user might access other users\' data through API manipulation.',
      'Over-granting permissions — giving admin access when a specific permission would suffice.'
    ],
    followUpQuestions: [
      'How would you handle multi-tenant RBAC where permissions differ per organization?',
      'What is the difference between RBAC and ABAC?',
      'How do you audit permission changes in an RBAC system?'
    ],
    relatedQuestionIds: ['fs-001', 'fs-002', 'fs-005'],
    references: [
      { title: 'NIST RBAC Standard', url: 'https://csrc.nist.gov/publications/detail/sp/800-162/final' },
      { title: 'Casbin RBAC Model', url: 'https://casbin.org/docs/rbac' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-005',
    title: 'How do you implement passwordless authentication?',
    content: 'Explain how passwordless authentication works (magic links, WebAuthn/passkeys, biometrics). What are the security trade-offs?',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'Authentication Flows',
    category: 'Authentication',
    companyTags: ['Apple', 'Google', 'GitHub'],
    interviewRound: 'Technical',
    frequency: 60,
    expectedAnswer: 'Passwordless auth uses magic links (email-based token URLs), WebAuthn/passkeys (FIDO2 public key cryptography), or biometrics. Magic links are simple but rely on email security. Passkeys are phishing-resistant and use device-bound keys. Trade-offs: magic links have delivery delays, passkeys require hardware support.',
    detailedExplanation: 'Passwordless authentication eliminates passwords in favor of alternative verification methods. Magic links send a unique, time-limited URL to the user\'s email — clicking it verifies ownership. WebAuthn/passkeys use public-key cryptography: the server stores a public key, the user\'s device stores the private key, and authentication involves a cryptographic challenge-response. Biometrics (fingerprint, face) gate access to the private key on the device.',
    bestAnswer: 'Three main approaches: (1) Magic links: generate a one-time token, embed in a URL, send via email. User clicks, server validates token and creates session. Pros: simple, no passwords. Cons: email delivery delay, email account compromise risk, token interception. (2) WebAuthn/Passkeys: FIDO2 standard using public-key crypto. Registration stores a public key on the server; authentication involves the device signing a challenge with the private key. Pros: phishing-resistant, no shared secrets, no delivery needed. Cons: device-bound (cross-device sync is evolving), requires hardware support. (3) Biometric: combines with passkeys — fingerprint/face unlocks the device\'s secure enclave to access the private key. Security trade-offs: magic links are weakest (rely on email security), passkeys are strongest (device-bound, cryptographic). Best practice: offer magic links as fallback, passkeys as primary.',
    alternativeAnswers: [
      'Focus on the implementation details of the WebAuthn registration and authentication ceremony.',
      'Discuss the UX implications — magic links cause friction, passkeys feel seamless.',
      'Highlight the transition strategy from password-based to passwordless auth.'
    ],
    commonMistakes: [
      'Not implementing rate limiting on magic link requests — enables email flooding attacks.',
      'Using predictable or non-cryptographically secure tokens for magic links.',
      'Not handling passkey recovery when a device is lost.',
      'Assuming passwordless means no other security measures are needed.'
    ],
    followUpQuestions: [
      'How would you handle cross-device passkey authentication?',
      'What happens when a user loses access to their email for magic links?',
      'How do you migrate existing password-based users to passwordless auth?'
    ],
    relatedQuestionIds: ['fs-001', 'fs-002'],
    references: [
      { title: 'WebAuthn Specification', url: 'https://www.w3.org/TR/webauthn-3/' },
      { title: 'FIDO Alliance Passkeys', url: 'https://fidoalliance.org/passkeys/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },

  // ── Architecture (5) ──────────────────────────────────────────────────
  {
    id: 'fs-006',
    title: 'When should you choose microservices over a monolith?',
    content: 'Compare monolithic and microservice architectures. What are the real costs of microservices, and when does the monolith-first approach make sense?',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'Architecture',
    category: 'Architecture',
    companyTags: ['Netflix', 'Amazon', 'Google'],
    interviewRound: 'System Design',
    frequency: 85,
    expectedAnswer: 'Microservices offer independent deployment, tech diversity, and fault isolation but add operational complexity (distributed tracing, service discovery, network latency). Start with a monolith — split when team size, scaling needs, or domain boundaries justify it. Monolith-first avoids premature complexity.',
    detailedExplanation: 'Microservices decompose an application into independently deployable services, each owning its data and business logic. Benefits: teams can deploy independently, services can use different tech stacks, failures are isolated, and each service scales independently. Costs: network overhead between services, distributed data management (eventual consistency), operational complexity (CI/CD per service, monitoring, debugging), and cognitive overhead for developers. The monolith-first approach (advocated by Simon Brown and others) suggests starting simple and extracting services when clear boundaries emerge.',
    bestAnswer: 'Choose a monolith first when: the team is small (<10 devs), domain boundaries are unclear, you need to validate a product quickly, or operational infrastructure is limited. Microservices make sense when: team size creates coordination bottlenecks, different parts need different scaling profiles, you need fault isolation, or domain boundaries are well-established. The real costs of microservices: (1) Distributed transactions across services require sagas or eventual consistency. (2) Network latency adds to every cross-service call. (3) Debugging requires distributed tracing (Jaeger, Zipkin). (4) Each service needs its own CI/CD, monitoring, and alerting. (5) Data consistency becomes eventually consistent. Best approach: start monolith, extract services along clear domain boundaries when pain points emerge.',
    alternativeAnswers: [
      'Focus on Conway\'s Law — architecture follows organizational structure, so split services along team boundaries.',
      'Discuss the "modular monolith" as a middle ground that preserves deployment simplicity while enforcing boundaries.',
      'Emphasize that microservices are an organizational pattern, not just a technical one.'
    ],
    commonMistakes: [
      'Adopting microservices for a small team — the operational overhead outweighs the benefits.',
      'Splitting by technical layer (frontend service, API service, database service) instead of by business domain.',
      'Not investing in observability (logs, metrics, traces) before going microservices.',
      'Creating a distributed monolith — tightly coupled services that must deploy together.'
    ],
    followUpQuestions: [
      'How do you handle distributed transactions across microservices?',
      'What is the strangangler fig pattern and when do you use it?',
      'How do you manage shared data between microservices?'
    ],
    relatedQuestionIds: ['fs-007', 'fs-009'],
    references: [
      { title: 'Microservices Patterns by Chris Richardson', url: 'https://microservices.io/patterns/' },
      { title: 'Monolith First by Martin Fowler', url: 'https://martinfowler.com/bliki/MonolithFirst.html' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-007',
    title: 'How do you implement event-driven architecture?',
    content: 'Explain event-driven architecture patterns: event sourcing, CQRS, and message queues. How do they work together?',
    difficulty: 'expert',
    track: 'fullstack',
    topic: 'Architecture',
    category: 'Architecture',
    companyTags: ['Netflix', 'Uber', 'Amazon'],
    interviewRound: 'System Design',
    frequency: 70,
    expectedAnswer: 'Event-driven architecture uses events as the primary communication mechanism. Event sourcing stores state as a sequence of events. CQRS separates read and write models. Message queues (Kafka, RabbitMQ) handle async communication. Together they enable loosely coupled, scalable systems.',
    detailedExplanation: 'Event-driven architecture (EDA) emits events when state changes. Components subscribe to events and react asynchronously. Event sourcing persists the full history of state changes as immutable events, enabling audit trails and temporal queries. CQRS (Command Query Responsibility Segregation) separates the write model (commands → events) from the read model (optimized queries). Message brokers (Kafka for high throughput, RabbitMQ for traditional queuing) decouple producers and consumers.',
    bestAnswer: 'EDA components: (1) Events: immutable facts ("OrderPlaced", "PaymentReceived") that describe state changes. (2) Event Sourcing: instead of storing current state, store all events. Rebuild state by replaying events. Enables audit trails, time travel debugging, and event replay. (3) CQRS: separate write side (handles commands, emits events) from read side (optimized for queries, updated by event handlers). Write model is event-sourced, read model is denormalized for fast queries. (4) Message Broker: Kafka (append-only log, high throughput, event replay) or RabbitMQ (traditional queue, routing, dead letter queues). Together: a command triggers a domain event, the event is stored (event sourcing), published to a broker, and consumed by read model projections (CQRS) and other services. Trade-offs: eventual consistency between read/write models, increased complexity, but massive scalability and flexibility.',
    alternativeAnswers: [
      'Focus on Kafka specifically — partitions, consumer groups, offset management, exactly-once semantics.',
      'Discuss the outbox pattern for reliable event publishing from a transactional database.',
      'Emphasize the audit trail and compliance benefits of event sourcing.'
    ],
    commonMistakes: [
      'Using event sourcing for everything — it adds complexity; use it where audit trails and temporal queries are valuable.',
      'Not handling event schema evolution — breaking changes in event format break consumers.',
      'Ignoring eventual consistency — UI must handle cases where read model is behind write model.',
      'Choosing the wrong broker — Kafka for event sourcing, RabbitMQ for task queues.'
    ],
    followUpQuestions: [
      'How do you handle event schema versioning and migration?',
      'What is the outbox pattern and why is it important?',
      'How do you debug a system with event sourcing when events are out of order?'
    ],
    relatedQuestionIds: ['fs-006', 'fs-009'],
    references: [
      { title: 'Event Sourcing by Martin Fowler', url: 'https://martinfowler.com/eaaDev/EventSourcing.html' },
      { title: 'CQRS by Greg Young', url: 'https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-008',
    title: 'What is the strangangler fig pattern?',
    content: 'Explain the strangangler fig pattern for migrating a monolith to microservices. What are the key steps and common pitfalls?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Architecture',
    category: 'Architecture',
    companyTags: ['Amazon', 'Microsoft', 'Shopify'],
    interviewRound: 'System Design',
    frequency: 65,
    expectedAnswer: 'The strangangler fig pattern incrementally replaces parts of a monolith with new services behind a routing layer. A facade/proxy routes traffic to either the old monolith or the new service. Over time, more routes shift to the new service until the monolith is fully replaced.',
    detailedExplanation: 'Named after the strangangler fig tree that grows around a host tree, this pattern gradually replaces a legacy system. A routing layer (API gateway, reverse proxy) intercepts requests and routes them to either the monolith or the new microservice. Each new service handles a bounded context extracted from the monolith. Once a service is stable, the monolith code for that context is removed.',
    bestAnswer: 'Key steps: (1) Create a routing facade (API gateway, Nginx, or application-level proxy) that sits in front of the monolith. (2) Identify a bounded context to extract (start with the least risky, most valuable). (3) Build the new microservice to handle that context. (4) Update the facade to route relevant requests to the new service. (5) Verify correctness, then remove the corresponding monolith code. (6) Repeat for the next context. Pitfalls: (1) Shared database — extract the data layer for the bounded context first. (2) Too large a slice — extract small, well-defined contexts. (3) No monitoring — you need to compare old vs new behavior. (4) Incomplete feature parity — the new service must handle all edge cases. (5) Leaving the monolith running forever — set a timeline to complete the migration.',
    alternativeAnswers: [
      'Discuss the "branch by abstraction" technique as an alternative for in-process refactoring.',
      'Focus on the data migration challenges — how to split a shared database.',
      'Emphasize the importance of feature flags to control routing between old and new.'
    ],
    commonMistakes: [
      'Trying to replace the entire monolith at once — the pattern is about incremental migration.',
      'Not running old and new in parallel for validation.',
      'Ignoring database migration — the hardest part is often splitting shared data.',
      'Letting the monolith grow while migrating — freeze new features in the monolith.'
    ],
    followUpQuestions: [
      'How do you handle shared database schemas during migration?',
      'What monitoring do you need to validate the migration is correct?',
      'How do you decide which bounded context to extract first?'
    ],
    relatedQuestionIds: ['fs-006', 'fs-009'],
    references: [
      { title: 'Strangler Fig Application', url: 'https://martinfowler.com/bliki/StranglerFigApplication.html' },
      { title: 'Building Microservices by Sam Newman', url: 'https://samnewman.io/books/building_microservices_2nd_edition/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-009',
    title: 'How do you design a modular monolith?',
    content: 'What is a modular monolith? How do you enforce module boundaries while keeping deployment simplicity?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Architecture',
    category: 'Architecture',
    companyTags: ['GitHub', 'Vercel', 'Shopify'],
    interviewRound: 'Technical',
    frequency: 60,
    expectedAnswer: 'A modular monolith organizes code into independent modules with strict boundary rules while keeping a single deployment unit. Modules communicate through well-defined interfaces, not direct imports. Enforced via architecture rules (e.g., ESLint, ArchUnit), each module owns its data.',
    detailedExplanation: 'A modular monolith is a middle ground between a tangled monolith and microservices. Code is organized into modules (e.g., orders, payments, users) with explicit interfaces. Modules cannot directly access each other\'s internals or databases. Communication happens through domain events or module APIs. This preserves deployment simplicity while gaining many microservice benefits: clear boundaries, independent development, and easy refactoring.',
    bestAnswer: 'Modular monolith design: (1) Define clear module boundaries aligned with business domains (orders, payments, users). (2) Each module has its own namespace/directory, models, services, and API. (3) Modules communicate through: domain events (preferred — loose coupling), or explicit module APIs (interfaces). (4) Enforce boundaries: use ESLint rules to prevent cross-module imports, use a module-level API surface, or use tools like ArchUnit. (5) Each module owns its data — no direct database queries across modules. (6) Shared kernel: a small set of truly shared types/utilities. (7) Single database but with schema-per-module or table-prefix conventions. Benefits: deployment simplicity, clear ownership, easy refactoring, option to extract to microservices later. Use ArchUnit or ESLint to enforce at CI time.',
    alternativeAnswers: [
      'Focus on the event-driven approach for inter-module communication.',
      'Discuss how to use database-per-module schema to prepare for future microservice extraction.',
      'Emphasize the role of architecture fitness functions in enforcing boundaries.'
    ],
    commonMistakes: [
      'Modules that share database tables directly — each module must own its data.',
      'Circular dependencies between modules — enforce one-way dependency flow.',
      'Over-engineering the module system for a small application.',
      'Not investing in automated boundary enforcement (linting, CI checks).'
    ],
    followUpQuestions: [
      'How do you handle cross-module queries in a modular monolith?',
      'When does a module warrant extraction into its own microservice?',
      'How do you implement module-level testing?'
    ],
    relatedQuestionIds: ['fs-006', 'fs-008'],
    references: [
      { title: 'Modular Monolith by James Sharp', url: 'https://www.architecture-weekly.com/p/modular-monolith-a-practical-guide' },
      { title: 'Modular Architecture Patterns', url: 'https://herbertograca.com/2019/04/29/monolith-to-microservices/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-010',
    title: 'How do you handle cross-cutting concerns in a full-stack app?',
    content: 'How do you implement logging, monitoring, authentication, and error handling across a full-stack application without duplicating code?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Architecture',
    category: 'Architecture',
    companyTags: ['Google', 'Microsoft', 'Cloudflare'],
    interviewRound: 'Technical',
    frequency: 75,
    expectedAnswer: 'Cross-cutting concerns are handled via middleware (backend), higher-order components/hooks (frontend), and interceptors. Backend: Express middleware for auth/logging/error handling. Frontend: React context/hooks for auth state, error boundaries for error handling. Shared: API interceptors (Axios/Fetch) for request/response logging.',
    detailedExplanation: 'Cross-cutting concerns are functionalities that span multiple modules: authentication, logging, error handling, caching, rate limiting. Backend: middleware chains handle these at the request level — each middleware function processes the request and passes it along. Frontend: React provides error boundaries, context providers, and hooks. Interceptors (Axios, Fetch) handle request/response transformation.',
    bestAnswer: 'Backend approach: (1) Middleware chain: Express/Koa middleware for auth (verify JWT), logging (request/response logging), error handling (global error handler), rate limiting (express-rate-limit), CORS. Each middleware is a function (req, res, next). (2) Decorators (TypeScript): @Authenticated, @RateLimited decorators for route-level concerns. (3) AOP (Aspect-Oriented Programming): for more complex cross-cutting logic. Frontend approach: (1) Higher-order components or custom hooks for auth state. (2) Error boundaries for React error handling. (3) Axios interceptors for request/response logging and token refresh. (4) Context providers for global state. Shared: Use shared types between frontend and backend for API contracts (tRPC, Zod schemas). Error handling: unified error types, structured logging, centralized error reporting (Sentry).',
    alternativeAnswers: [
      'Focus on the decorator pattern in TypeScript/NestJS for backend cross-cutting concerns.',
      'Discuss the provider pattern (dependency injection) for managing cross-cutting services.',
      'Emphasize the importance of structured logging and distributed tracing across the stack.'
    ],
    commonMistakes: [
      'Duplicating auth logic in every route handler instead of using middleware.',
      'Not having a global error handler — errors bubble up inconsistently.',
      'Ignoring frontend error boundaries — unhandled errors crash the entire app.',
      'Logging sensitive data (passwords, tokens) in cross-cutting logging middleware.'
    ],
    followUpQuestions: [
      'How would you implement distributed tracing across frontend and backend?',
      'How do you handle error reporting and alerting?',
      'What is the middleware ordering problem and how do you solve it?'
    ],
    relatedQuestionIds: ['fs-006', 'fs-011'],
    references: [
      { title: 'Middleware Pattern', url: 'https://www.patterns.dev/posts/middleware-pattern/' },
      { title: 'Cross-Cutting Concerns', url: 'https://martinfowler.com/bliki/CrossCuttingConcern.html' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },

  // ── API Design (5) ────────────────────────────────────────────────────
  {
    id: 'fs-011',
    title: 'When should you use GraphQL over REST?',
    content: 'Compare GraphQL and REST APIs. What are the trade-offs, and when is each the better choice?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'API Design',
    category: 'API Design',
    companyTags: ['Meta', 'GitHub', 'Shopify'],
    interviewRound: 'Technical',
    frequency: 80,
    expectedAnswer: 'REST uses resource-based URLs with fixed data shapes; GraphQL uses a single endpoint with flexible queries. GraphQL excels when clients need varied data shapes (mobile vs web). REST is simpler, more cacheable, and better for CRUD-heavy APIs. GraphQL adds complexity with schema, resolvers, and N+1 query problems.',
    detailedExplanation: 'REST maps HTTP methods to CRUD operations on resources (GET /users/123). Each endpoint returns a fixed data shape. GraphQL provides a schema that describes all available data, and clients request exactly what they need in a single query. This eliminates over-fetching and under-fetching but adds server-side complexity.',
    bestAnswer: 'REST pros: simple, cacheable (HTTP caching), well-understood tooling (OpenAPI/Swagger), stateless by nature, better for file uploads. Cons: over-fetching (fixed response shape), under-fetching (need multiple endpoints for related data), versioning complexity. GraphQL pros: flexible queries (client asks for exactly what it needs), single endpoint, strongly typed schema, introspection for documentation. Cons: N+1 query problem (need DataLoader), no HTTP caching (single POST endpoint), complexity in schema design, over-fetching is solved but complexity increases. Choose REST for: simple CRUD APIs, file-heavy APIs, public APIs with caching needs, teams new to GraphQL. Choose GraphQL for: varied client needs (mobile/web/desktop), complex data graphs, rapid frontend iteration, when avoiding multiple round trips.',
    alternativeAnswers: [
      'Focus on the N+1 query problem and how DataLoader solves it.',
      'Discuss GraphQL subscriptions for real-time features vs WebSocket-based REST.',
      'Emphasize the operational complexity difference — REST is simpler to operate.'
    ],
    commonMistakes: [
      'Using GraphQL for simple CRUD APIs where REST is sufficient.',
      'Not implementing DataLoader for N+1 query prevention.',
      'Exposing the entire database through GraphQL — use allow lists or persisted queries.',
      'Ignoring HTTP caching benefits that GraphQL eliminates.'
    ],
    followUpQuestions: [
      'How do you handle file uploads in GraphQL?',
      'What is the N+1 query problem and how does DataLoader solve it?',
      'How do you version a GraphQL API?'
    ],
    relatedQuestionIds: ['fs-012', 'fs-013'],
    references: [
      { title: 'GraphQL Specification', url: 'https://spec.graphql.org/' },
      { title: 'REST vs GraphQL', url: 'https://www.apollographql.com/docs/intro/benefits/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-012',
    title: 'How do you version a REST API?',
    content: 'What are the strategies for API versioning (URL path, header, query param, content negotiation)? Which approach is recommended and why?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'API Design',
    category: 'API Design',
    companyTags: ['Google', 'Stripe', 'Microsoft'],
    interviewRound: 'Technical',
    frequency: 70,
    expectedAnswer: 'Versioning strategies: URL path (/v1/users), header (Accept-Version), query param (?v=1), content negotiation (Accept: application/vnd.api+json;version=1). URL path is most visible and explicit. Headers are cleaner but harder to test. Most APIs use URL path for simplicity.',
    detailedExplanation: 'API versioning is necessary when breaking changes are needed. Strategies: (1) URL path (/v1/users) — most common, visible in URLs, easy to route, but pollutes URLs. (2) Request header (Accept-Version: 1) — clean URLs, but harder to test in browser, not visible in logs. (3) Query param (?version=1) — simple, but mixes API concerns with resource addressing. (4) Content negotiation — RESTful but complex. (5) No versioning — prefer backward-compatible changes.',
    bestAnswer: 'Recommended: URL path versioning (/v1/users, /v2/users) for most APIs. Reasons: (1) Explicit and visible — developers see which version they are using. (2) Easy to route at API gateway/load balancer level. (3) Simple to test — just change the URL. (4) Clear in documentation and logs. (5) Easy to deprecate old versions. Header-based versioning (Accept-Version) is more "RESTful" but harder to test and less discoverable. Content negotiation is overly complex. Best practices: (1) Only version when making breaking changes. (2) Support at least one previous version. (3) Deprecation headers warn clients. (4) Automate deprecation notices. (5) Use backward-compatible changes when possible (add fields, don\'t remove/rename). Stripe\'s approach: date-based versions with automatic migration.',
    alternativeAnswers: [
      'Advocate for avoiding versioning entirely by making backward-compatible changes.',
      'Discuss Stripe\'s date-based versioning as a real-world best practice.',
      'Focus on API gateway-based versioning for microservices.'
    ],
    commonMistakes: [
      'Versioning for every small change — only version breaking changes.',
      'Not deprecating old versions — supporting too many versions is a maintenance burden.',
      'Using major versions for minor additions — add fields without versioning.',
      'Not communicating version changes to API consumers.'
    ],
    followUpQuestions: [
      'How do you handle backward-compatible changes?',
      'What is Stripe\'s approach to API versioning?',
      'How do you manage API deprecation notices?'
    ],
    relatedQuestionIds: ['fs-011', 'fs-013'],
    references: [
      { title: 'API Versioning Best Practices', url: 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
      { title: 'Stripe API Versioning', url: 'https://stripe.com/blog/api-versioning' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-013',
    title: 'How do you design a well-documented API?',
    content: 'What makes an API well-documented? How do you implement OpenAPI/Swagger, API reference docs, and interactive examples?',
    difficulty: 'beginner',
    track: 'fullstack',
    topic: 'API Design',
    category: 'API Design',
    companyTags: ['Stripe', 'Twilio', 'Vercel'],
    interviewRound: 'Technical',
    frequency: 65,
    expectedAnswer: 'A well-documented API includes: OpenAPI spec (describes endpoints, schemas, auth), interactive playground, code examples in multiple languages, error code reference, getting started guide, and changelog. Tools: Swagger UI, Redoc, Stoplight.',
    detailedExplanation: 'API documentation should be machine-readable (OpenAPI/Swagger spec) and human-readable (guides, examples). OpenAPI defines the contract: endpoints, parameters, request/response schemas, authentication, and error codes. Interactive docs (Swagger UI) let developers test endpoints in the browser. Code examples reduce onboarding time.',
    bestAnswer: 'Essential documentation components: (1) OpenAPI 3.0 spec: describes all endpoints, methods, parameters, request/response schemas, authentication, and error codes. Machine-readable for code generation. (2) Getting Started guide: quick start with a working example in under 5 minutes. (3) Authentication guide: how to obtain and use API keys/tokens. (4) Endpoint reference: detailed description of each endpoint, parameters, and responses. (5) Interactive playground: Swagger UI or Redoc for testing. (6) Code examples: Python, JavaScript, Go, cURL for each endpoint. (7) Error reference: all error codes with descriptions and resolution steps. (8) Changelog: version history with migration guides. (9) Rate limiting docs: limits, headers, retry strategy. Tools: Swagger UI (interactive), Redoc (clean read-only), Stoplight (design + docs), Postman (collection + docs). Stripe is the gold standard.',
    alternativeAnswers: [
      'Focus on SDK auto-generation from OpenAPI specs (openapi-generator).',
      'Discuss API changelog and versioning documentation.',
      'Emphasize the importance of real-world examples and tutorials over dry reference docs.'
    ],
    commonMistakes: [
      'Writing docs as an afterthought — document during development, not after.',
      'Missing error response documentation — callers need to know all possible errors.',
      'Outdated docs — use auto-generation from code annotations (tRPC, NestJS).',
      'No interactive testing capability — developers want to try before integrating.'
    ],
    followUpQuestions: [
      'How do you auto-generate TypeScript types from an OpenAPI spec?',
      'What is the difference between OpenAPI and API Blueprint?',
      'How do you handle API documentation for microservices?'
    ],
    relatedQuestionIds: ['fs-011', 'fs-012'],
    references: [
      { title: 'OpenAPI Specification', url: 'https://spec.openapis.org/oas/latest.html' },
      { title: 'Stripe API Documentation', url: 'https://stripe.com/docs/api' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-014',
    title: 'How do you handle API rate limiting?',
    content: 'Explain rate limiting strategies (token bucket, sliding window, fixed window) and how to implement them. How do you communicate rate limits to clients?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'API Design',
    category: 'API Design',
    companyTags: ['Google', 'Cloudflare', 'Stripe'],
    interviewRound: 'System Design',
    frequency: 75,
    expectedAnswer: 'Rate limiting algorithms: token bucket (smooth, allows bursts), sliding window (precise but memory-heavy), fixed window (simple but boundary issues). Implementation: Redis for distributed counters. Communication: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset headers. 429 status code with Retry-After header.',
    detailedExplanation: 'Rate limiting controls how many requests a client can make in a given time window. Token bucket: tokens are added at a fixed rate, each request consumes a token. Allows bursts up to bucket size. Sliding window: counts requests in a rolling time window (more accurate but requires more memory). Fixed window: counts requests in a fixed time window (simple, but boundary problem — 2x burst at window edges).',
    bestAnswer: 'Algorithms: (1) Token bucket: tokens added at rate r, bucket holds max b tokens. Each request consumes 1. Allows bursts up to b. Smooth traffic. (2) Sliding window: count requests in the last N seconds. More accurate, but needs sorted sets in Redis. (3) Fixed window: count requests per minute/hour. Simple, but boundary problem (2x burst at window transition). Implementation: Redis INCR with TTL for distributed rate limiting. Key: rate_limit:{client_id}:{window}. Middleware: check counter, return 429 if exceeded. Communication: Headers — X-RateLimit-Limit (max), X-RateLimit-Remaining (left), X-RateLimit-Reset (unix timestamp). Response: 429 Too Many Requests with Retry-After header. Best practices: per-endpoint limits (write endpoints stricter than read), tiered limits (free vs paid), sliding window for production.',
    alternativeAnswers: [
      'Focus on distributed rate limiting with Redis and Lua scripts for atomicity.',
      'Discuss rate limiting at the API gateway level vs application level.',
      'Emphasize the importance of graceful degradation over hard 429s.'
    ],
    commonMistakes: [
      'Using fixed window — the boundary problem causes 2x bursts.',
      'Not communicating rate limits via headers — clients cannot self-throttle.',
      'Rate limiting by IP only — behind NAT/proxy, multiple users share an IP.',
      'Not considering rate limiting per endpoint — a single expensive endpoint can be abused.'
    ],
    followUpQuestions: [
      'How do you implement rate limiting in a distributed system?',
      'How do you handle rate limiting for authenticated vs unauthenticated users?',
      'What is the token bucket algorithm and when is it preferred?'
    ],
    relatedQuestionIds: ['fs-011', 'fs-015'],
    references: [
      { title: 'Rate Limiting Patterns', url: 'https://cloud.google.com/architecture/rate-limiting-strategies-techniques' },
      { title: 'Redis Rate Limiting', url: 'https://redis.io/docs/commands/incr/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-015',
    title: 'How do you design a pagination strategy for APIs?',
    content: 'Compare offset-based, cursor-based, and keyset pagination. What are the trade-offs, and when is each appropriate?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'API Design',
    category: 'API Design',
    companyTags: ['Twitter', 'GitHub', 'Stripe'],
    interviewRound: 'Technical',
    frequency: 70,
    expectedAnswer: 'Offset-based (LIMIT/OFFSET) is simple but slow for large offsets. Cursor-based (keyset) uses a pointer to the last item, is faster for large datasets, and handles inserts/deletes correctly. Keyset pagination requires a sortable, unique column. Choose offset for admin dashboards, cursor for infinite scroll.',
    detailedExplanation: 'Offset pagination: SELECT * FROM users LIMIT 10 OFFSET 100. Simple, but database must scan 100 rows before returning results (O(n) performance). Cursor-based: SELECT * FROM users WHERE id > last_seen_id ORDER BY id LIMIT 10. Uses an index for O(log n) performance regardless of position. Cursor is typically a base64-encoded composite key (id, created_at).',
    bestAnswer: 'Offset-based: ?page=3&limit=10 → LIMIT 10 OFFSET 20. Pros: simple, supports page numbers, works with any query. Cons: O(n) performance for deep pages, inconsistent results with concurrent writes (items shift between pages). Cursor-based: ?cursor=eyJpZCI6MTAwfQ&limit=10 → WHERE id > 100 ORDER BY id LIMIT 10. Pros: O(1) performance regardless of position, consistent results with concurrent writes (no shifting), works with infinite scroll. Cons: no random page access, more complex implementation. Keyset: similar to cursor but with explicit column comparison. Best practices: default page size (20-50), max page size (100), include hasMore/nextCursor in response, use cursor for user-facing lists, offset for admin dashboards where page numbers matter.',
    alternativeAnswers: [
      'Discuss the Seek Method (keyset) for efficient deep pagination.',
      'Focus on GraphQL cursor-based pagination with Relay connection spec.',
      'Emphasize the importance of consistent sort order for cursor pagination.'
    ],
    commonMistakes: [
      'Using OFFSET for large datasets — performance degrades linearly with page number.',
      'Not including hasMore flag — clients cannot know if more pages exist.',
      'Using non-deterministic sort order with cursor pagination — items may be skipped or duplicated.',
      'Returning total count for every paginated query — it is expensive and often unnecessary.'
    ],
    followUpQuestions: [
      'How do you implement cursor-based pagination with a composite key?',
      'How does the Relay connection spec handle pagination?',
      'How do you paginate across multiple related resources?'
    ],
    relatedQuestionIds: ['fs-011', 'fs-014'],
    references: [
      { title: 'Cursor-based Pagination', url: '://devblog.kὃldyrin.com/2020/10/16/cursor-pagination/' },
      { title: 'Relay Connection Spec', url: 'https://relay.dev/graphql/connections.htm' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },

  // ── Testing (5) ────────────────────────────────────────────────────────
  {
    id: 'fs-016',
    title: 'What is the testing pyramid and why does it matter?',
    content: 'Explain the testing pyramid (unit, integration, E2E). Why should you have more unit tests than E2E tests?',
    difficulty: 'beginner',
    track: 'fullstack',
    topic: 'Testing',
    category: 'Testing',
    companyTags: ['Google', 'Microsoft', 'Amazon'],
    interviewRound: 'Technical',
    frequency: 80,
    expectedAnswer: 'The testing pyramid has three layers: unit tests (fast, many, test individual functions), integration tests (medium, test component interactions), E2E tests (slow, few, test complete user flows). More unit tests because they are fast, isolated, and cheap to maintain. E2E tests are brittle and slow.',
    detailedExplanation: 'The testing pyramid (coined by Mike Cohn) suggests the bulk of tests should be unit tests, fewer integration tests, and very few E2E tests. Unit tests verify individual functions in isolation — fast, reliable, easy to debug. Integration tests verify modules work together — slower, more realistic. E2E tests simulate real user interactions — slowest, most brittle, hardest to maintain. The inverted pyramid (many E2E, few unit) leads to slow, flaky test suites.',
    bestAnswer: 'The testing pyramid: (1) Base — Unit tests (70%): test individual functions/components in isolation. Fast (<1ms), reliable, easy to debug. Mock dependencies. (2) Middle — Integration tests (20%): test how modules work together. Test API endpoints, database queries, component rendering. Slower but more realistic. (3) Top — E2E tests (10%): test complete user flows through the UI. Use Playwright/Cypress. Slow, brittle, expensive to maintain. Why more unit tests: (1) Speed — thousands run in seconds vs minutes for E2E. (2) Isolation — failures point to exact function. (3) Maintenance — unit tests are less likely to break from UI changes. (4) Cost — unit tests are cheap to write and run. E2E tests are reserved for critical user paths (login, checkout, core workflows). Integration tests cover API contracts and component integration.',
    alternativeAnswers: [
      'Discuss the testing trophy (Kent C. Dodds) which emphasizes integration tests over unit tests.',
      'Focus on the practical trade-offs — when to write each type.',
      'Emphasize the importance of test organization and naming conventions.'
    ],
    commonMistakes: [
      'Writing mostly E2E tests — slow, brittle, hard to maintain.',
      'Testing implementation details instead of behavior in unit tests.',
      'Not having any integration tests — unit tests miss component interaction bugs.',
      'Skipping tests because of time pressure — technical debt compounds.'
    ],
    followUpQuestions: [
      'What is the testing trophy and how does it differ from the pyramid?',
      'How do you write good unit tests for React components?',
      'What makes an E2E test reliable and not flaky?'
    ],
    relatedQuestionIds: ['fs-017', 'fs-018', 'fs-019'],
    references: [
      { title: 'Testing Trophy by Kent C. Dodds', url: 'https://kentcdodds.com/blog/the-testing-trophy' },
      { title: 'Testing Pyramid', url: 'https://martinfowler.com/articles/practical-test-pyramid.html' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-017',
    title: 'How do you test API endpoints effectively?',
    content: 'What strategies do you use for API testing? How do you test authentication, error handling, and edge cases?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Testing',
    category: 'Testing',
    companyTags: ['Stripe', 'Twilio', 'Vercel'],
    interviewRound: 'Technical',
    frequency: 70,
    expectedAnswer: 'API testing: use supertest (Node) or httpx (Python) for HTTP-level testing. Test happy path, error responses, authentication, authorization, input validation, and edge cases. Use test databases, seed data, and clean up after each test. Mock external services.',
    detailedExplanation: 'API testing verifies that endpoints handle requests correctly: correct status codes, response shapes, error handling, and side effects. Integration tests for APIs use real HTTP requests against the running server (or an in-process test server). Each test should be isolated with its own data setup and teardown.',
    bestAnswer: 'API testing strategy: (1) Test framework: supertest (Express), httpx (FastAPI), or similar. (2) Test categories: happy path (correct input → 200 + correct response), error handling (invalid input → 400, not found → 404, unauthorized → 401), authentication (missing token, expired token, wrong token), authorization (user A cannot access user B\'s resources), input validation (missing fields, wrong types, boundary values), edge cases (empty database, concurrent requests). (3) Setup: dedicated test database, seed data per test, cleanup after each test (transaction rollback). (4) Mock external services (email, payment) with msw or nock. (5) Test response shape with schemas (Zod, io-ts). (6) Test rate limiting and pagination. (7) Use factory functions for test data (factory-boy, fishery).',
    alternativeAnswers: [
      'Focus on contract testing with tools like Pact for API consumer-provider contracts.',
      'Discuss snapshot testing for API responses.',
      'Emphasize the importance of testing OpenAPI spec compliance.'
    ],
    commonMistakes: [
      'Testing against production or shared databases — tests interfere with each other.',
      'Not cleaning up test data — subsequent tests see stale data.',
      'Mocking too much — integration tests should hit real databases.',
        'Not testing error responses — callers need to handle all error codes.'
    ],
    followUpQuestions: [
      'How do you test WebSocket endpoints?',
      'What is contract testing and when do you use it?',
      'How do you test file upload endpoints?'
    ],
    relatedQuestionIds: ['fs-016', 'fs-018'],
    references: [
      { title: 'Supertest', url: 'https://github.com/ladjs/supertest' },
      { title: 'Testing Node.js APIs', url: 'https://www.nodejsbestpractices.com/testing-and-code-quality/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-018',
    title: 'How do you implement TDD in a full-stack project?',
    content: 'Explain Test-Driven Development (TDD) and how it applies to both frontend and backend. How does TDD change your development workflow?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Testing',
    category: 'Testing',
    companyTags: ['Microsoft', 'GitHub', 'Stripe'],
    interviewRound: 'Technical',
    frequency: 65,
    expectedAnswer: 'TDD cycle: Red (write failing test), Green (write minimal code to pass), Refactor (clean up). Applied to backend: write API tests first, then implement. Applied to frontend: write component tests first, then build. TDD produces better design, fewer bugs, and confident refactoring.',
    detailedExplanation: 'TDD is a development discipline where you write tests before writing implementation code. The cycle: (1) Red: write a test that fails because the feature does not exist. (2) Green: write the simplest code that makes the test pass. (3) Refactor: improve the code while keeping tests green. TDD forces you to think about the API/design before implementation, produces comprehensive test coverage, and enables fearless refactoring.',
    bestAnswer: 'TDD workflow: (1) Red: write a failing test for the next behavior. Example: test that POST /api/users creates a user and returns 201. Test fails — endpoint does not exist. (2) Green: write minimal code to pass. Create the endpoint, hardcode the response. Test passes. (3) Refactor: extract duplication, improve naming. (4) Repeat: next test — validate input, test error cases, test database side effects. Benefits: (1) Better design — tests force you to think about the API contract first. (2) Regression safety — any future changes are caught. (3) Documentation — tests show intended behavior. (4) Confident refactoring — change code freely, tests catch breakage. Full-stack TDD: backend — write API tests first (supertest), then implement routes. Frontend — write component render tests (Testing Library), then build components. Integration — write end-to-end tests for critical flows first.',
    alternativeAnswers: [
      'Discuss Behavior-Driven Development (BDD) as an alternative with Gherkin syntax.',
      'Focus on the refactoring step — TDD is not just red-green.',
      'Emphasize that TDD is a design tool, not just a testing tool.'
    ],
    commonMistakes: [
      'Writing tests after the code — this is not TDD, it is just testing.',
      'Skipping the refactor step — code becomes messy without regular refactoring.',
      'Writing too many tests before making the first one pass — strict red-green-red cycle.',
      'Not writing the simplest code to pass — over-engineering from the start.'
    ],
    followUpQuestions: [
      'How do you practice TDD with React components?',
      'What is the difference between TDD and BDD?',
      'How do you handle TDD when working with external APIs?'
    ],
    relatedQuestionIds: ['fs-016', 'fs-017', 'fs-019'],
    references: [
      { title: 'TDD by Kent Beck', url: 'https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530' },
      { title: 'TDD in React', url: 'https://kentcdodds.com/blog/how-to-use-test-driven-development-with-react' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-019',
    title: 'How do you write reliable E2E tests?',
    content: 'What makes E2E tests flaky? How do you write E2E tests with Playwright or Cypress that are reliable and maintainable?',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'Testing',
    category: 'Testing',
    companyTags: ['Netflix', 'Google', 'Vercel'],
    interviewRound: 'Technical',
    frequency: 70,
    expectedAnswer: 'Flaky E2E tests come from timing issues, external dependencies, and state leakage. Solutions: use auto-waiting (Playwright), isolate tests, mock external services, use page object model, and test user-visible behavior rather than implementation details.',
    detailedExplanation: 'E2E tests simulate real user interactions in a browser. Common flakiness causes: (1) Timing — waiting for elements that are not yet rendered. (2) External services — APIs that return different data. (3) State leakage — previous test leaves data that affects the next. (4) Non-deterministic UI — animations, random order.',
    bestAnswer: 'Making E2E tests reliable: (1) Auto-waiting: Playwright automatically waits for elements to be actionable (visible, enabled, stable). Avoid explicit sleeps. (2) Isolation: each test starts with a clean state. Use beforeEach for setup, use unique data per test. (3) Mock external services: intercept API calls with Playwright\'s route() or msw. (4) Page Object Model: encapsulate selectors in page classes. Changes to UI require updating one file. (5) Test behavior, not implementation: test "user can log in" not "button has class X". (6) Use test IDs: data-testid attributes for stable selectors that survive UI changes. (7) Parallel execution: Playwright runs tests in parallel by default — ensure test isolation. (8) CI considerations: use Docker for consistent environments, retry flaky tests once, capture screenshots/videos on failure. (9) Keep E2E tests minimal: only critical user paths (login, checkout, core flows).',
    alternativeAnswers: [
      'Focus on Playwright-specific features like auto-waiting and network interception.',
      'Discuss visual regression testing with Playwright screenshots.',
      'Emphasize the importance of test data management in E2E tests.'
    ],
    commonMistakes: [
      'Using page.waitForTimeout() — use auto-waiting instead.',
      'Testing too many things in one test — each test should verify one behavior.',
      'Not cleaning up test data — tests become dependent on execution order.',
      'Running E2E tests against production — use a staging environment.'
    ],
    followUpQuestions: [
      'How do you handle test data setup for E2E tests?',
      'What is the difference between Playwright and Cypress?',
      'How do you debug flaky E2E tests?'
    ],
    relatedQuestionIds: ['fs-016', 'fs-017'],
    references: [
      { title: 'Playwright Documentation', url: 'https://playwright.dev/' },
      { title: 'Flaky Tests', url: 'https://playwright.dev/docs/test-annotations' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-020',
    title: 'How do you test frontend components effectively?',
    content: 'What is the difference between unit testing and integration testing for React components? How do you test components with hooks, context, and API calls?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'Testing',
    category: 'Testing',
    companyTags: ['Meta', 'Vercel', 'Shopify'],
    interviewRound: 'Technical',
    frequency: 75,
    expectedAnswer: 'Unit tests: test component rendering, props, and events in isolation. Integration tests: test component trees with context, routing, and API calls. Use React Testing Library for both — it tests user behavior, not implementation. Mock API calls with msw.',
    detailedExplanation: 'React Testing Library (RTL) encourages testing components as users interact with them — finding elements by text, role, or label, not by component internals. Unit tests verify a single component renders correctly and responds to user interactions. Integration tests verify multiple components working together with providers (context, router) and API calls.',
    bestAnswer: 'Unit testing React components: (1) Render component with render(). (2) Find elements by role (getByRole), text (getByText), or label (getByLabelText). (3) Simulate interactions with userEvent (preferred over fireEvent). (4) Assert expected output. No mocking of internals. Integration testing: (1) Wrap component in providers (QueryClientProvider, Router, ThemeProvider). (2) Use msw to mock API responses. (3) Test complete user flows (form submission → API call → success message). Testing hooks: (1) Extract hook into a test component. (2) Use renderHook from RTL. (3) Test return values and side effects. Testing context: (1) Create wrapper with the context provider. (2) Test that context values propagate to children. What NOT to test: internal state, implementation details, CSS styles, third-party library behavior.',
    alternativeAnswers: [
      'Focus on the user-event library for more realistic interactions.',
      'Discuss snapshot testing and when it is useful (component structure).',
      'Emphasize the importance of testing accessibility (ARIA roles, labels).'
    ],
    commonMistakes: [
      'Testing implementation details (state values, internal methods) — test behavior instead.',
      'Using enzyme instead of React Testing Library — enzyme encourages testing internals.',
      'Not mocking API calls — tests become dependent on external services.',
      'Writing tests that are too coupled to component structure — changes break tests unnecessarily.'
    ],
    followUpQuestions: [
      'How do you test components with complex state management (Redux, Zustand)?',
      'What is the difference between render, screen, and act in RTL?',
      'How do you test React hooks with side effects?'
    ],
    relatedQuestionIds: ['fs-016', 'fs-018'],
    references: [
      { title: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
      { title: 'Kent C. Dodds Testing Blog', url: 'https://kentcdodds.com/blog/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },

  // ── DevOps (5) ─────────────────────────────────────────────────────────
  {
    id: 'fs-021',
    title: 'How do you design a CI/CD pipeline?',
    content: 'Design a CI/CD pipeline for a full-stack application. What stages should it include, and how do you ensure fast feedback?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'DevOps',
    category: 'DevOps',
    companyTags: ['Google', 'Netflix', 'GitHub'],
    interviewRound: 'System Design',
    frequency: 80,
    expectedAnswer: 'CI/CD pipeline stages: lint → test → build → security scan → deploy to staging → smoke tests → deploy to production. Fast feedback: run tests in parallel, cache dependencies, use incremental builds, fail fast on critical errors.',
    detailedExplanation: 'CI/CD automates code integration, testing, and deployment. CI (Continuous Integration): developers push code, pipeline runs tests and builds. CD (Continuous Delivery/Deployment): automated deployment to staging/production. Pipeline should be fast (under 10 minutes for CI), reliable, and provide clear feedback.',
    bestAnswer: 'CI/CD pipeline stages: (1) Trigger: on push/PR to main. (2) Install: install dependencies (cached for speed). (3) Lint & Type Check: ESLint, TypeScript, Prettier. Fast, catches common errors. (4) Unit Tests: run in parallel, <2 minutes. (5) Integration Tests: API tests, database tests. (6) Build: compile frontend/backend. (7) Security Scan: Snyk, npm audit, CodeQL. (8) Deploy to Staging: automatic deployment. (9) E2E Tests: Playwright against staging. (10) Manual Gate: approval for production. (11) Deploy to Production: blue-green or canary. (12) Post-deploy: smoke tests, health checks. Fast feedback strategies: parallel test execution, dependency caching (actions/cache), incremental builds, fail-fast (cancel pipeline on first critical failure), separate fast CI (lint+unit) from slow CD (integration+E2E). Tools: GitHub Actions, GitLab CI, CircleCI.',
    alternativeAnswers: [
      'Focus on trunk-based development with feature flags instead of long-lived branches.',
      'Discuss blue-green vs canary deployment strategies.',
      'Emphasize the importance of rollback mechanisms in CD.'
    ],
    commonMistakes: [
      'Running tests sequentially — parallelize for speed.',
      'Not caching dependencies — reinstalling npm packages every build.',
      'Deploying to production without staging validation.',
        'Not having rollback procedures — deployments should be reversible.'
    ],
    followUpQuestions: [
      'How do you handle database migrations in a CI/CD pipeline?',
      'What is blue-green deployment and how do you implement it?',
      'How do you monitor deployment health after release?'
    ],
    relatedQuestionIds: ['fs-022', 'fs-023'],
    references: [
      { title: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
      { title: 'CI/CD Best Practices', url: 'https://github.com/ci-cd/best-practices' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-022',
    title: 'How do you containerize a full-stack application?',
    content: 'How do you use Docker to containerize a full-stack app? How do you set up multi-stage builds, docker-compose, and handle environment variables?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'DevOps',
    category: 'DevOps',
    companyTags: ['Amazon', 'Google', 'Cloudflare'],
    interviewRound: 'Technical',
    frequency: 75,
    expectedAnswer: 'Dockerfile: multi-stage build for small images (build stage + runtime stage). docker-compose: orchestrate frontend, backend, and database. Environment variables: use .env files, never bake secrets into images. Health checks: add HEALTHCHECK instruction.',
    detailedExplanation: 'Docker packages applications with their dependencies into containers. Multi-stage builds separate the build environment (large, with dev dependencies) from the runtime environment (small, with only production dependencies). docker-compose defines multi-container environments for development and testing.',
    bestAnswer: 'Docker setup: (1) Multi-stage Dockerfile: Stage 1 (build): FROM node:20-alpine, install deps, build. Stage 2 (runtime): FROM node:20-alpine, copy only dist/ and production deps. Result: 100MB image instead of 1GB. (2) .dockerignore: exclude node_modules, .git, .env, tests. (3) docker-compose.yml: services for frontend (nginx), backend (node), database (postgres), redis. Volumes for development hot-reload. (4) Environment variables: use .env file (not in Dockerfile), pass via docker-compose environment section. Never bake secrets into images. (5) Health checks: add HEALTHCHECK instruction or docker-compose healthcheck. (6) Networking: services communicate via service names (backend connects to "postgres" host). (7) Volumes: for persistent data (database) and development (mount source code).',
    alternativeAnswers: [
      'Focus on Kubernetes deployment for production vs docker-compose for development.',
      'Discuss Docker security best practices (non-root user, read-only filesystem).',
      'Emphasize the importance of image scanning (Trivy, Snyk).'
    ],
    commonMistakes: [
      'Baking secrets into Docker images — use environment variables or secrets management.',
      'Not using multi-stage builds — images are unnecessarily large.',
      'Running containers as root — security risk.',
      'Not using .dockerignore — unnecessary files bloat the image context.'
    ],
    followUpQuestions: [
      'How do you handle secrets in Docker containers?',
      'What is the difference between COPY and ADD in a Dockerfile?',
      'How do you debug a running Docker container?'
    ],
    relatedQuestionIds: ['fs-021', 'fs-023'],
    references: [
      { title: 'Dockerfile Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/' },
      { title: 'Docker Compose', url: 'https://docs.docker.com/compose/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-023',
    title: 'How do you set up monitoring and observability?',
    content: 'What are the three pillars of observability (logs, metrics, traces)? How do you implement them in a full-stack application?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'DevOps',
    category: 'DevOps',
    companyTags: ['Netflix', 'Google', 'Datadog'],
    interviewRound: 'System Design',
    frequency: 70,
    expectedAnswer: 'Three pillars: logs (what happened), metrics (how much/when), traces (request flow across services). Implementation: structured logging (JSON), Prometheus metrics, OpenTelemetry traces. Tools: ELK stack, Grafana, Jaeger.',
    detailedExplanation: 'Observability is the ability to understand the internal state of a system from its external outputs. Logs provide detailed event records. Metrics provide aggregated numerical data (request rate, error rate, latency). Traces track a request as it flows through multiple services. Together they enable debugging and performance optimization.',
    bestAnswer: 'Three pillars: (1) Logs: structured JSON logs with correlation IDs, timestamps, and context. Use pino/winston (Node), configure log levels. Ship to centralized system (ELK, Loki). Include request ID, user ID, duration. (2) Metrics: numeric time-series data. Key metrics: RED (Rate, Errors, Duration) for services, USE (Utilization, Saturation, Errors) for infrastructure. Tools: Prometheus (collect), Grafana (visualize). Custom metrics: request duration histogram, error counter, active connections gauge. (3) Traces: distributed tracing across services. Use OpenTelemetry SDK for instrumentation. Each request gets a trace ID, spans represent operations. Tools: Jaeger, Zipkin, Tempo. Implementation: (1) Add correlation ID middleware — generates unique ID per request, propagates across services. (2) Instrument code with OpenTelemetry. (3) Export to collector, visualize in Jaeger/Grafana. (4) Set up alerts: error rate spike, latency increase, high memory.',
    alternativeAnswers: [
      'Focus on the RED method (Rate, Errors, Duration) for service-level monitoring.',
      'Discuss alerting strategies — when to page vs when to log.',
      'Emphasize the importance of correlation IDs for debugging across services.'
    ],
    commonMistakes: [
      'Logging unstructured text — use structured JSON logs for searchability.',
      'Not having distributed tracing in a microservices architecture.',
      'Alert fatigue — too many alerts desensitize the team.',
      'Not monitoring business metrics — technical metrics alone do not tell the full story.'
    ],
    followUpQuestions: [
      'How do you implement correlation IDs across services?',
      'What is OpenTelemetry and how do you instrument a Node.js app?',
      'How do you set up effective alerting without alert fatigue?'
    ],
    relatedQuestionIds: ['fs-021', 'fs-024'],
    references: [
      { title: 'OpenTelemetry', url: 'https://opentelemetry.io/' },
      { title: 'Three Pillars of Observability', url: 'https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-024',
    title: 'How do you manage environment configuration?',
    content: 'How do you manage environment variables, secrets, and configuration across development, staging, and production environments?',
    difficulty: 'beginner',
    track: 'fullstack',
    topic: 'DevOps',
    category: 'DevOps',
    companyTags: ['Vercel', 'Cloudflare', 'Heroku'],
    interviewRound: 'Technical',
    frequency: 65,
    expectedAnswer: 'Use .env files for local development (gitignored), platform env vars for staging/production (Vercel, AWS SSM), and secrets management (Vault, AWS Secrets Manager) for sensitive data. Never commit secrets to git. Validate env vars at startup.',
    detailedExplanation: 'Environment configuration separates deployment-specific values from code. Development uses .env files (gitignored). Staging/production use platform-specific env var management (Vercel dashboard, AWS SSM Parameter Store, Heroku config vars). Secrets (API keys, database URLs) require additional security: encryption at rest, access controls, audit logging.',
    bestAnswer: 'Environment management: (1) Local development: .env file (gitignored) with sensible defaults. Use .env.example to document required variables without exposing values. (2) Staging/production: platform env vars (Vercel, Railway, Render). Or secrets managers: AWS Secrets Manager, HashiCorp Vault, Doppler. (3) Validation: validate all required env vars at application startup. Use Zod or envalid to define and validate env schema. Fail fast if required vars are missing. (4) Types: define TypeScript types for env vars (env.d.ts). (5) Frontend: only NEXT_PUBLIC_* variables are exposed to the browser — never put secrets in frontend env vars. (6) Rotation: implement secret rotation without downtime. (7) Access control: restrict who can view/modify production secrets.',
    alternativeAnswers: [
      'Focus on Doppler or Vault for centralized secrets management.',
      'Discuss the 12-factor app approach to configuration.',
      'Emphasize the importance of environment parity (dev ≈ staging ≈ production).'
    ],
    commonMistakes: [
      'Committing .env files to git — always gitignore them.',
      'Putting secrets in frontend code — NEXT_PUBLIC_* is visible to the browser.',
      'Not validating env vars at startup — missing vars cause runtime errors.',
      'Hardcoding config values instead of using environment variables.'
    ],
    followUpQuestions: [
      'How do you rotate secrets without downtime?',
      'What is the difference between Vercel env vars and Vercel secrets?',
      'How do you manage environment variables in a monorepo?'
    ],
    relatedQuestionIds: ['fs-021', 'fs-022'],
    references: [
      { title: 'Twelve-Factor App Config', url: 'https://12factor.net/config' },
      { title: 'Vercel Environment Variables', url: 'https://vercel.com/docs/concepts/projects/environment-variables' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-025',
    title: 'How do you implement feature flags?',
    content: 'What are feature flags and how do you implement them? How do they enable safe deployments and A/B testing?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'DevOps',
    category: 'DevOps',
    companyTags: ['Netflix', 'Google', 'LaunchDarkly'],
    interviewRound: 'Technical',
    frequency: 60,
    expectedAnswer: 'Feature flags are boolean switches that control feature visibility without deployment. Implementation: a config service (LaunchDarkly, Unleash, or custom) stores flags. App checks flags before rendering features. Enables: gradual rollouts, A/B testing, kill switches.',
    detailedExplanation: 'Feature flags (feature toggles) decouple deployment from release. Code is deployed to production but hidden behind a flag. Flags are controlled externally, enabling instant feature toggle without redeployment. Types: release flags (short-lived, for gradual rollout), experiment flags (A/B testing), ops flags (kill switches, maintenance mode), permission flags (beta access).',
    bestAnswer: 'Feature flag implementation: (1) Flag storage: LaunchDarkly (managed), Unleash (open-source), or custom (Redis/DB). (2) SDK: initialize client with environment key. (3) Evaluation: in code, check if flag is enabled for user/context. (4) Targeting: rules for who sees the flag (percentage rollout, user segments, individual users). (5) Gradual rollout: enable for 1% → 10% → 50% → 100% of users. Monitor metrics at each stage. (6) Kill switch: instantly disable a feature if issues arise. (7) Cleanup: remove flag code after full rollout (prevent flag debt). (8) A/B testing: use flag variants (control vs treatment), track metrics per variant. Benefits: deploy to production without releasing, instant rollback via kill switch, test features with real users before full rollout.',
    alternativeAnswers: [
      'Discuss the LaunchDarkly vs Unleash comparison for feature flag management.',
      'Focus on the importance of flag cleanup to prevent technical debt.',
      'Emphasize the role of feature flags in trunk-based development.'
    ],
    commonMistakes: [
      'Not cleaning up flags after full rollout — flag debt accumulates.',
      'Using feature flags for long-lived configuration — use env vars instead.',
      'Not monitoring flag evaluation performance — should be <1ms.',
      'Too many flags — makes the system hard to reason about.'
    ],
    followUpQuestions: [
      'How do you implement A/B testing with feature flags?',
      'How do you handle feature flags in server-side rendering?',
      'What is flag debt and how do you prevent it?'
    ],
    relatedQuestionIds: ['fs-021', 'fs-024'],
    references: [
      { title: 'Feature Flags Patterns', url: 'https://martinfowler.com/articles/feature-toggles.html' },
      { title: 'LaunchDarkly', url: 'https://launchdarkly.com/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },

  // ── System Design (5) ──────────────────────────────────────────────────
  {
    id: 'fs-026',
    title: 'How do you design a URL shortener?',
    content: 'Design a URL shortening service like bit.ly. Cover: API design, database schema, hashing strategy, caching, and analytics.',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'System Design',
    category: 'System Design',
    companyTags: ['Google', 'Amazon', 'Uber'],
    interviewRound: 'System Design',
    frequency: 85,
    expectedAnswer: 'API: POST /shorten (long URL → short URL), GET /:code (redirect). Database: store code→URL mapping. Hashing: base62 encoding of auto-increment ID or MD5 hash. Caching: Redis for hot URLs. Analytics: track clicks, referrers, timestamps.',
    detailedExplanation: 'URL shortener converts long URLs to short codes (e.g., bit.ly/abc123). Core components: (1) API layer receives long URLs, generates short codes. (2) Database stores code→URL mapping. (3) Redirect service looks up code and redirects. (4) Caching layer reduces database lookups. (5) Analytics track usage.',
    bestAnswer: 'Design: (1) API: POST /api/shorten { longUrl, customCode?, expiresAt? } → { shortUrl, code }. GET /:code → 301/302 redirect. (2) Code generation: base62 encoding of auto-increment ID (simple, no collisions) OR MD5 hash of URL + salt (deterministic, dedup). Base62 chars: a-z, A-Z, 0-9. 7 chars = 62^7 ≈ 3.5 trillion URLs. (3) Database: PostgreSQL with (code PK, longUrl, userId, createdAt, expiresAt, clickCount). Index on code for O(log n) lookup. (4) Caching: Redis with TTL. Cache hot URLs (top 20% serve 80% traffic). Cache-aside pattern. (5) Redirects: use 302 (temporary) to track analytics, 301 (permanent) for SEO. (6) Analytics: async event on each click — store timestamp, referrer, user agent, IP. Use event queue for write-heavy analytics. (7) Scale: horizontal scaling, database sharding by code hash, CDN for static assets.',
    alternativeAnswers: [
      'Focus on the distributed ID generation (Snowflake, UUID) for code generation.',
      'Discuss the trade-offs between 301 and 302 redirects.',
      'Emphasize the analytics pipeline — real-time vs batch processing.'
    ],
    commonMistakes: [
      'Using MD5 of URL for code — deterministic, but collisions possible without salt.',
      'Not handling custom codes — users want branded short URLs.',
        'Ignoring expired URLs — need cleanup job or lazy deletion.',
      'Not considering analytics at scale — click tracking is write-heavy.'
    ],
    followUpQuestions: [
      'How do you handle custom short codes?',
      'How do you prevent abuse (spam, phishing)?',
      'How would you design the analytics pipeline?'
    ],
    relatedQuestionIds: ['fs-027', 'fs-028'],
    references: [
      { title: 'System Design: URL Shortener', url: 'https://github.com/donnemartin/system-design-primer' },
      { title: 'Base62 Encoding', url: 'https://en.wikipedia.org/wiki/Base62' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-027',
    title: 'How do you design a real-time chat application?',
    content: 'Design a real-time chat system like Slack or Discord. Cover: WebSocket management, message persistence, presence, and scaling.',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'System Design',
    category: 'System Design',
    companyTags: ['Discord', 'Slack', 'Meta'],
    interviewRound: 'System Design',
    frequency: 80,
    expectedAnswer: 'WebSocket for real-time bidirectional communication. Message persistence in database with message ordering. Presence service tracks online/offline status. Scaling: WebSocket servers behind load balancer, Redis pub/sub for cross-server message distribution.',
    detailedExplanation: 'Real-time chat requires bidirectional communication (WebSocket), message persistence (database), and presence tracking. Key challenges: scaling WebSocket connections (thousands per server), ensuring message ordering, handling reconnections, and distributing messages across servers.',
    bestAnswer: 'Design: (1) WebSocket connection: client connects to WebSocket server, authenticates via token. Server maintains connection pool. (2) Message flow: client sends message → server validates → persists to database → broadcasts to room members via Redis pub/sub → clients receive message. (3) Message persistence: PostgreSQL/MongoDB with (id, roomId, senderId, content, timestamp, status). Message ordering: use database timestamps or sequence numbers. (4) Presence service: Redis tracks online status (SET with TTL). Heartbeat every 30s. Offline detection on timeout. (5) Scaling: multiple WebSocket servers behind load balancer (sticky sessions or token-based routing). Redis pub/sub distributes messages across servers. (6) Reconnection: client reconnects with last message ID, server sends missed messages. (7) Read receipts: store read position per user per room. (8) File sharing: upload to S3, send URL in message.',
    alternativeAnswers: [
      'Focus on the WebSocket vs Server-Sent Events vs long-polling trade-offs.',
      'Discuss message ordering guarantees in a distributed system.',
      'Emphasize the presence service design with heartbeats and TTL.'
    ],
    commonMistakes: [
      'Not handling WebSocket reconnection — users lose connection on network changes.',
      'Broadcasting messages to all servers — use Redis pub/sub for targeted distribution.',
      'Ignoring message ordering — messages may arrive out of order without sequence numbers.',
      'Storing messages in memory — messages must be persisted for offline access.'
    ],
    followUpQuestions: [
      'How do you handle message ordering across multiple servers?',
      'How do you implement typing indicators?',
      'How do you scale to millions of concurrent connections?'
    ],
    relatedQuestionIds: ['fs-026', 'fs-028'],
    references: [
      { title: 'WebSocket Protocol', url: 'https://datatracker.ietf.org/doc/html/rfc6455' },
      { title: 'Scaling WebSockets', url: 'https://blog.discord.com/how-discord-stores-billions-of-messages-7fa6ec7ee4c7' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-028',
    title: 'How do you design a load balancer?',
    content: 'Explain load balancing algorithms (round-robin, least connections, consistent hashing). What is the difference between L4 and L7 load balancing?',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'System Design',
    category: 'System Design',
    companyTags: ['Cloudflare', 'Amazon', 'Google'],
    interviewRound: 'System Design',
    frequency: 75,
    expectedAnswer: 'Load balancing distributes traffic across servers. Algorithms: round-robin (equal distribution), least connections (route to least busy), consistent hashing (same server for same request). L4: operates on TCP/UDP (faster, less info). L7: operates on HTTP (content-aware, routing by URL/headers).',
    detailedExplanation: 'Load balancers distribute incoming traffic across multiple servers to ensure availability and scalability. L4 (transport layer) routes based on IP/port — faster but less flexible. L7 (application layer) routes based on HTTP content — enables path-based routing, SSL termination, and header-based decisions.',
    bestAnswer: 'Load balancing algorithms: (1) Round-robin: requests distributed equally across servers. Simple, fair. (2) Weighted round-robin: servers get proportional traffic based on capacity. (3) Least connections: route to server with fewest active connections. Better for varying request durations. (4) IP hash: same client IP → same server (session stickiness). (5) Consistent hashing: same request key → same server, minimal redistribution on server changes. L4 vs L7: L4 (TCP/UDP): works at transport layer. Fast, sees only IP/port. Cannot route by URL or headers. Used for raw throughput. L7 (HTTP): works at application layer. Can route by URL path, headers, cookies. Enables SSL termination, content-based routing, compression. Used for smart routing. Typical setup: L7 (Nginx/HAProxy) in front for routing, L4 (IPVS/Envoy) for raw throughput. Health checks: periodic probes to detect failed servers.',
    alternativeAnswers: [
      'Focus on consistent hashing for distributed caching (CDNs, databases).',
      'Discuss the health check mechanism and failover behavior.',
      'Emphasize the difference between hardware and software load balancers.'
    ],
    commonMistakes: [
      'Using round-robin for requests with varying durations — least connections is better.',
      'Not implementing health checks — traffic routed to failed servers.',
      'Ignoring session stickiness — stateful apps need consistent routing.',
      'Over-complicating — start with round-robin, optimize only when metrics show need.'
    ],
    followUpQuestions: [
      'How does consistent hashing work and when is it used?',
      'How do you implement health checks for load balancers?',
      'What is the difference between a reverse proxy and a load balancer?'
    ],
    relatedQuestionIds: ['fs-029', 'fs-030'],
    references: [
      { title: 'Load Balancing Algorithms', url: 'https://www.cloudflare.com/learning/load-balancing/what-is-load-balancing/' },
      { title: 'Nginx Load Balancing', url: 'https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-029',
    title: 'How do you design a database for scalability?',
    content: 'When do you need database sharding vs replication? How do you handle database migrations at scale?',
    difficulty: 'advanced',
    track: 'fullstack',
    topic: 'System Design',
    category: 'System Design',
    companyTags: ['Amazon', 'Google', 'Uber'],
    interviewRound: 'System Design',
    frequency: 70,
    expectedAnswer: 'Replication: copy data across servers for read scaling and availability. Sharding: split data across servers for write scaling. Migrations at scale: use online schema changes (pt-online-schema-change), blue-green deployments, and versioned migrations.',
    detailedExplanation: 'Database scaling: replication adds read replicas (scale reads), sharding splits data across nodes (scale writes). Replication is simpler but does not help with write load. Sharding distributes data by a shard key (user_id, region). Both add complexity: replication needs consistency management, sharding needs cross-shard query handling.',
    bestAnswer: 'Scaling strategies: (1) Replication: primary-replica setup. Primary handles writes, replicas handle reads. Synchronous replication for consistency, asynchronous for performance. Replication lag is a concern. (2) Sharding: split data by shard key (user_id hash, geographic region). Each shard is an independent database. Pros: linear write scaling. Cons: cross-shard queries, joins across shards, rebalancing. (3) Vertical scaling: bigger machine (first step before horizontal). (4) Caching: Redis for hot data, reduces database load. Migrations at scale: (1) Online schema changes: pt-online-schema-change (MySQL), pg_repack (PostgreSQL). (2) Blue-green: run old and new schema simultaneously during migration. (3) Expand-contract: add new column, migrate data, remove old column. (4) Versioned migrations: use tools like Flyway, Alembic with rollback support. (5) Test migrations on production data replicas.',
    alternativeAnswers: [
      'Focus on the CAP theorem implications for replication consistency.',
      'Discuss consistent hashing for shard key selection.',
      'Emphasize the importance of monitoring replication lag.'
    ],
    commonMistakes: [
      'Sharding too early — vertical scaling and read replicas come first.',
      'Choosing a bad shard key — uneven distribution causes hot spots.',
      'Running migrations without online schema change — locks tables.',
      'Not testing migrations against production data volume.'
    ],
    followUpQuestions: [
      'How do you handle cross-shard queries?',
      'What is the CAP theorem and how does it affect database design?',
      'How do you rebalance shards when adding new nodes?'
    ],
    relatedQuestionIds: ['fs-028', 'fs-030'],
    references: [
      { title: 'Database Sharding', url: 'https://www.mysqltutorial.org/mysql-sharding.aspx' },
      { title: 'Online Schema Changes', url: 'https://github.com/github/gh-ost' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  },
  {
    id: 'fs-030',
    title: 'How do you design a caching strategy?',
    content: 'Explain caching strategies (cache-aside, write-through, write-behind). What should you cache and how do you handle cache invalidation?',
    difficulty: 'intermediate',
    track: 'fullstack',
    topic: 'System Design',
    category: 'System Design',
    companyTags: ['Cloudflare', 'Amazon', 'Netflix'],
    interviewRound: 'System Design',
    frequency: 75,
    expectedAnswer: 'Caching strategies: cache-aside (app manages cache), write-through (write to cache + DB simultaneously), write-behind (write to cache, async to DB). Cache what is read frequently and expensive to compute. Invalidation: TTL-based, event-driven, or version-based.',
    detailedExplanation: 'Caching stores frequently accessed data in fast storage (Redis, CDN, browser cache) to reduce database load and latency. Cache-aside: app checks cache first, on miss queries DB and populates cache. Write-through: writes go to cache and DB simultaneously (consistency). Write-behind: writes go to cache, async to DB (performance).',
    bestAnswer: 'Strategies: (1) Cache-aside (lazy loading): app checks cache → miss → query DB → store in cache. Pros: only caches what is requested, resilient to cache failures. Cons: first request is slow (cache miss), cache can become stale. (2) Write-through: write to cache AND DB synchronously. Pros: cache is always consistent. Cons: write latency doubles, unused data is cached. (3) Write-behind (write-back): write to cache, async batch write to DB. Pros: fast writes, reduced DB load. Cons: data loss risk if cache fails before DB write. What to cache: user sessions, product catalogs, API responses, computed results, database query results. Invalidation: (1) TTL: expire after N seconds. Simple, eventual consistency. (2) Event-driven: invalidate on data change (Redis pub/sub). (3) Version-based: include version in cache key (product:v1). (4) Cache stampede: use locks or probabilistic early expiration to prevent thundering herd.',
    alternativeAnswers: [
      'Focus on cache stampede and how to prevent thundering herd.',
      'Discuss CDN caching vs application-level caching.',
      'Emphasize the importance of monitoring cache hit rates.'
    ],
    commonMistakes: [
      'Caching everything — cache only expensive, frequently accessed data.',
      'No invalidation strategy — stale data served indefinitely.',
      'Ignoring cache stampede — thundering herd on cache miss.',
      'Not monitoring cache hit rate — low hit rate means the cache is not effective.'
    ],
    followUpQuestions: [
      'What is cache stampede and how do you prevent it?',
      'How do you handle cache invalidation in a distributed system?',
      'When should you use a CDN vs an application cache?'
    ],
    relatedQuestionIds: ['fs-028', 'fs-029'],
    references: [
      { title: 'Caching Patterns', url: 'https://docs.aws.amazon.com/AmazonElastiCache/latest/userguide/BestPractices.html' },
      { title: 'Redis Caching Patterns', url: 'https://redis.io/docs/develop/patterns/' }
    ],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-01-15T10:00:00Z'
  }
];

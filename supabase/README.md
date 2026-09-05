# Supabase

Backend lives here, outside `src/`, and stays version-controlled.

- `migrations/` — schema changes, applied in order.
- `functions/` — edge functions.

Nothing in this folder is imported by frontend components. Frontend code reaches
data through a data-access layer, not by embedding SQL or schema knowledge in
pages.

Only `NEXT_PUBLIC_` variables may reach the browser. The service-role key is
server-only and must never appear in `src/`, in a client component, or in any
`NEXT_PUBLIC_` variable.

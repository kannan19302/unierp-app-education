# unierp-app-education

UniERP **Education** industry app — extracted from the core monorepo. Ships a marketplace bundle (`bundle/manifest.json`, runtime `declarative+service`) and a standalone NestJS service with its own database (`unierp_education`). Core proxies `/api/v1/ext/education/*` to it via the extension gateway.

See `docs/EXTENSION_SERVICE_CONTRACT.md` in the core repo for the contract, and `unierp-app-fieldservice` as the reference implementation.

## Local development

```bash
pnpm install && npx prisma generate
# CREATE DATABASE unierp_education;  (on the shared dev Postgres)
npx prisma migrate dev
EXT_SERVICE_JWT_SECRET=dev-ext-secret-change-me npm run dev   # :4101
```

Publish bundle: `UNIERP_API_URL=http://localhost:3001 node scripts/publish-bundle.mjs`
Cutover data: `CORE_DATABASE_URL=... DATABASE_URL=... npm run migrate:from-core`

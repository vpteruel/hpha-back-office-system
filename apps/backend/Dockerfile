# Use Bun's official image
FROM oven/bun:1 AS base
WORKDIR /app

# Install dependencies for the entire monorepo
FROM base AS deps
COPY package.json bun.lockb* ./
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared/package.json ./packages/shared/
RUN bun install --frozen-lockfile

# Build the shared package
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY packages/shared ./packages/shared
COPY apps/backend ./apps/backend
COPY package.json ./

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files
COPY --from=builder /app/packages/shared ./packages/shared
COPY --from=builder /app/apps/backend ./apps/backend
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

WORKDIR /app/apps/backend

EXPOSE 5000

CMD ["bun", "run", "src/index.ts"]

# syntax=docker/dockerfile:1

# ---- build ----------------------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /repo

# Workspace manifests first, so dependency installs cache independently of source.
COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/
COPY packages/ui/package.json packages/ui/
COPY packages/content/package.json packages/content/
RUN npm ci

COPY . .
RUN npm run build --workspace @kstar/web

# ---- runtime --------------------------------------------------------------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

# adapter-node emits a self-contained server in apps/web/build.
COPY --from=build /repo/apps/web/build ./build
COPY --from=build /repo/apps/web/package.json ./package.json

USER node
EXPOSE 3000
CMD ["node", "build/index.js"]

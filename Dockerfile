# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --ignore-scripts --no-audit --no-fund
COPY tsconfig.json tsconfig.build.json ./
COPY src ./src
RUN npm run build && npm prune --omit=dev

FROM node:${NODE_VERSION}-alpine AS runtime
LABEL org.opencontainers.image.title="Autom MCP Server" \
      org.opencontainers.image.description="Google, Bing and Brave search results as structured JSON — web, maps, news, shopping, images, jobs and AI Mode." \
      org.opencontainers.image.url="https://www.autom.dev" \
      org.opencontainers.image.source="https://github.com/automdev/autom-mcp" \
      org.opencontainers.image.licenses="MIT"
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --chown=node:node package.json LICENSE ./
USER node
ENTRYPOINT ["node", "dist/stdio.js"]

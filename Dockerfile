################################
# BUILD ANGULAR APP
################################
FROM node:trixie-slim@sha256:74ab724acf22ae7b0af5cf8a0e762f6c981ba882a459e2abc80a97a7237a92f1 AS builder

RUN npm install -g pnpm@latest-10

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

################################
# RUN NGINX
################################
FROM nginxinc/nginx-unprivileged:alpine3.23-perl@sha256:a1ae88ea0b8495cc3c7a062c4677902dfbd7c1d60c368c33e8e1a277a781a62e

USER nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /app/dist/*/browser /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

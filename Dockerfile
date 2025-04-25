FROM node:20 AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY package.json pnpm-lock.yaml* .npmrc* ./

# 安装依赖 (使用 frozen-lockfile 保证一致性)
RUN pnpm install --frozen-lockfile

# 复制源码并构建
COPY . .
RUN pnpm run build

# 阶段2: 使用 Deno 运行静态服务器
FROM denoland/deno:2.2.7
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 9999
CMD ["run", "-A", "jsr:@std/http/file-server", "--port=9999", "dist"]
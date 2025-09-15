FROM node:18-alpine as builder
WORKDIR /app
COPY apps/web-editor/package*.json ./
RUN npm ci
COPY apps/web-editor ./
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

FROM node:18-alpine
WORKDIR /app
COPY services/api-gateway/package*.json ./
RUN npm ci
COPY services/api-gateway ./
RUN npm run build
CMD ["node", "dist/main"]

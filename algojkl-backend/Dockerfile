FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
USER node
EXPOSE 5042
CMD ["node", "server.js"]

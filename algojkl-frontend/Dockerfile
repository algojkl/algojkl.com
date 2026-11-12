FROM node:22-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
ARG VITE_CONTENTFUL_SPACE_ID
ARG VITE_CONTENTFUL_ACCESS_TOKEN
ARG VITE_CALENDAR_API
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

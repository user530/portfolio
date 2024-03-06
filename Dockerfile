# Build stage
FROM node:current-alpine3.19 AS build

WORKDIR /builder

COPY package*.json .

RUN npm ci --omit=dev

COPY . .

RUN npm run build

# SAVE TO A FOLDER
FROM nginx

WORKDIR /portfolio

COPY --from=build /builder/build .

CMD ["/bin/sh", "-c", "sh", "echo", "'Build copied'"]

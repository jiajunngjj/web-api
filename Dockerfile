FROM node:lts-alpine AS build-env
COPY . /app
WORKDIR /app
ENV PORT=18800

RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs20-debian11
COPY --from=build-env /app /app
WORKDIR /app
EXPOSE $PORT
CMD [ "server.js"]
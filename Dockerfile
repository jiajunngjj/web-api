FROM node:lts-alpine

ENV PORT=18800

WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy source
COPY server.js /usr/src/app

EXPOSE $PORT
CMD [ "npm", "start" ]


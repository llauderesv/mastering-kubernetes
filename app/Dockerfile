FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json .

COPY index.js ./

RUN npm ci

EXPOSE 3000

CMD [ "npm", "run", "start" ]


FROM node:10-alpine

WORKDIR /usr/src/app/server

COPY package*.json ./usr/src/app/server/

RUN npm install

COPY . ./usr/src/app/server

CMD ["npm", "start"]


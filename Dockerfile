FROM registry.access.redhat.com/ubi8/nodejs-12:1-36 AS builder

WORKDIR /opt/app-root/src

COPY package.json .

RUN npm install

COPY . .

ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp

CMD [ "node", "app.js" ]

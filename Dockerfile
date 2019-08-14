FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD NODE_URLS=http://*:$PORT npm start

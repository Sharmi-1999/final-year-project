FROM node:14.17

RUN mkdir -p /usr/src/app
ENV PORT 80

WORKDIR /usr/src/app

COPY . ./

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 80

CMD ["yarn", "start", "-p", "80"]
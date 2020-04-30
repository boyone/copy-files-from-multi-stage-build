FROM node:13.7.0-alpine as base
LABEL id=hello
LABEL image=base
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY . /app

FROM base as test
LABEL id=hello
LABEL image=test
WORKDIR /app
RUN npm test

FROM base as builder
LABEL id=hello
LABEL image=builder
WORKDIR /app
RUN npm run compile

FROM base
WORKDIR /app
COPY package*.json /app/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
RUN npm prune --production

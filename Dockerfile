FROM node:10.11.0-alpine as builder

WORKDIR /app
LABEL image=test
COPY ./package*.json /app/
RUN npm install
COPY . /app
RUN ./node_modules/typescript/bin/tsc --build /app/tsconfig.json

FROM node:10.11.0-alpine
WORKDIR /app
COPY package*.json /app/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist
RUN npm prune --production

FROM node:alpine3.13 as build-step

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

COPY --from=build-step /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

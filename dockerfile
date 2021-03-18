FROM node:current-alpine as build
WORKDIR /app
COPY . ./
RUN \
  npm install &&\
  npm run prod

FROM nginx:stable-alpine as runner
COPY --from=build /app/dist/softplan-selecao-ui /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

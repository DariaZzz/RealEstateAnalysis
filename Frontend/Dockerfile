FROM node:20 as builder

WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install rimraf --save-dev

COPY . .
RUN npm run build

FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
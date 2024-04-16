FROM node:21

COPY . .
WORKDIR /app

RUN ["npm", "install"]

EXPOSE 4000

CMD ["npm", "run", "dev"]
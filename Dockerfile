FROM node
WORKDIR /usr/app
COPY package.json ./
RUN npm install
RUN npm install typeorm-cli
COPY . .
EXPOSE 3333
CMD ["npm", "run", "dev", "typeorm", "migration:run"]
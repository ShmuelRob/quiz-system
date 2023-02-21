FROM node as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig.json ./

RUN npm i

COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
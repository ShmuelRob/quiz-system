FROM node:18-alpine

COPY package.json package-lock.json ./
COPY tsconfig.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "host"]
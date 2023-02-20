FROM node:18-alpine

WORKDIR /react-vite-app

EXPOSE 5173

COPY package.json package-lock.json ./
COPY tsconfig.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]
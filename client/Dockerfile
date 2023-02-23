FROM node:18
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY vite.config.ts .
RUN npm install
COPY . .
EXPOSE 5173
WORKDIR /
CMD ["npm", "run", "dev"]



# *   new, didnt check this yet

# FROM node:12 as build
# RUN mkdir -p /client
# COPY package*.json /client
# COPY tsconfig.json /client
# COPY vite.config.ts /client
# WORKDIR /client
# RUN npm install

# FROM node:12
# RUN mkdir -p /client
# COPY package.json /client
# COPY package-lock.json /client
# COPY tsconfig.json /client
# COPY vite.config.ts /client
# COPY --from=build /client/node_modules /client/node_modules
# COPY /public /client/public
# COPY /src /client/src
# WORKDIR /client
# CMD ["npm", "run", "dev"]





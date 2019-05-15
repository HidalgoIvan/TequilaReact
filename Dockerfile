FROM node:8-alpine

# Sets work directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Installs dependencies 
RUN npm install

# Copy working files
COPY . .

# Expose port
EXPOSE 3000

# Starts run command
CMD npm start
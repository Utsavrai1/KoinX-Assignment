FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV=production
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install --only=development; \
    else npm install --only=production; \
    fi

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

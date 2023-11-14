FROM node:latest

WORKDIR /app

COPY . ./

RUN npm install --silent
# RUN npm run build-storybook

EXPOSE 6006

CMD ["npm", "run", "storybook"]
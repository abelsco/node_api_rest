FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn-lock*", "./"]
RUN yarn install
COPY . .
EXPOSE 3000
# RUN chown -R node /usr/src/app
# USER node
RUN chmod +x wait-for-it.sh
CMD [ "./wait-for-it.sh", "db:5432", "--strict", "--timeout=300", "--"]

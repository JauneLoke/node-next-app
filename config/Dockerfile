FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/scr/node-next-app
# RUN cd api && gulp
COPY . .
# COPY api/package*.json ./api/
# RUN cd api && npm run start

EXPOSE 3080

CMD ["node", "./server-bundle.js"]
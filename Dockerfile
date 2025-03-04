FROM node:20.17.0-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

FROM base as build

COPY . .

RUN npm run build

FROM base AS production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./

EXPOSE 3000

CMD ["npm", "run", "start"]

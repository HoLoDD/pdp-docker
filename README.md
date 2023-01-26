# NestJS API (NodeJS)

NestJS API with endpoint to send massages to telegram, contained **Dockerfile** and **docker-compose.yml** to run localy

## Using

-   Clone the repository, then run `npm install` to install the dependencies
-   Change TG_API_HOST in docker-compose.yml to your telegram API(explaned here https://github.com/HoLoDD/sls-telegram-bot)
-   run application with $ docker-compose up

## Commands

-   `npm run dev` Runs the bot in polling mode with the dev configuration.
-   `npm run deploy` Publish the bot on AWS using serverless-cli and prod configuration.
-   `npm run setHook` Set the webHook using the prod configuration.
-   `npm run delHook` Delete the webHook using the prod configuration.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

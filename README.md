# TWITTER clone with React, Tailwind, Next, Prisma, Mongo & NextAuth

![Fullstack Twitter Clone (2)](https://user-images.githubusercontent.com/23248726/224405420-03112a76-250a-4283-992c-60e235170678.png)


This is a repository for a FullStack Twitter clone using React, NextJS, TailwindCSS & Prisma.

Funcionalities such as:

- Authentication system
- Notification system
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Likes functionality

### Prerequisites

**Node version 14.x**

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
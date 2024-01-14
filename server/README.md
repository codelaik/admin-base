## Setup

Install postgres if you haven't already. Once installed, create a user and add a password.

Create a .env file in the root of server and add the following variables:

```
PORT="8081" //This should be the port you want the server to run on
DATABASE_URL="postgres://USER:PASSWORD@localhost:5432/admin-base" //all caps should be replaced with your user role : password
```

after this step, run

`npx prisma migrate dev`

And name the migration initial

### Once Set up is complete and you're ready to run

Open two seperate terminals. in the first, run

`pnpm run build-watch`

In the second, run

`pnpm run dev`

And you're good to go!

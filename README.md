Introduction
----

A skeleton docker compose setup for quickly building Rails API applications with React Frontend.

Features
----

* Postgres database
* Nginx proxy to avoid cross origin issues.
* Rails 5 API Application
* Hot code loading in both rails and react application.

Instructions
----
Install Docker on your local machine (https://docs.docker.com/install/)
[If you are running Windows on your machine, install Docker Compose (https://docs.docker.com/compose/install/)]

Clone this repository to your local machine. From the command line, run the command
docker-compose up

A lot of processes will begin executing culminating in the web server, frontend,
backend and database spinning up. Once you see the following output:
frontend_1  | Starting the development server...
frontend_1  |
frontend_1  | Compiled successfully!
frontend_1  |
frontend_1  | You can now view frontend in the browser.
frontend_1  |
frontend_1  |   Local:            http://localhost:3000/
frontend_1  |   On Your Network:  http://192.168.176.3:3000/
frontend_1  |
frontend_1  | Note that the development build is not optimized.
frontend_1  | To create a production build, use yarn build.

you can view the website by typing 'localhost' into your browser of choice.

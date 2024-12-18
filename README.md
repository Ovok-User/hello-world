# Ovok Hello World App

Welcome to the Ovok Hello World App, a simple demo application showcasing the capabilities of the Ovok healthcare platform.
This guide will walk you through the sign-in process, the home page, and the observation page.

## Register with Ovok

1. [Register](https://dashboard.staging.ovok.com/register) your project on Ovok.
2. [Sign in](https://dashboard.staging.ovok.com/signup) to the Ovok admin dashboard with your practitioner email and password .
3. Go to [Overview](https://dashboard.staging.ovok.com/developer) and create a new client by clicking on the **Create new client** text.
4. Input a client name (and optionally a description and redirect URI) and click on the **createClient** button.
5. Go to [ClientApplication](https://dashboard.staging.ovok.com/ClientApplication), click on the newly created client, and copy the client `ID`.
6. Go to [Project](https://dashboard.staging.ovok.com/admin/project), click on the **Details** tab and copy the project `ID`.

## Clone and Run the Ovok Hello World App

1. Clone the `hello-world` repository to your local machine:

   ```bash
   git clone https://github.com/Ovok-User/hello-world.git

   cd hello-world
   ```

2. Create an `.env` file by the provided `.env.example` file as template and populate the credentials.
   ```bash
   cp .env.example .env
   ```
   ```bash
   # Ovok Configuration
   REACT_APP_OVOK_CLIENT_ID=YOUR_OVOK_CLIENT_ID
   REACT_APP_OVOK_PROJECT_ID=YOUR_OVOK_PROJECT_ID
   REACT_APP_OVOK_BASE_URL=https://api.ovok.com/
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm run start
   ```

# Explore the Ovok Hello World App

## Register

1. The [Sign in](http://localhost:3000/login) page opens automatically.
2. Go to the [Sign up](http://localhost:3000/register) page and register.
3. Upon successful sign up you are redirected to the Ovok Hello World App [home page](http://localhost:3000/).

## Available Pages

- **Profile**: overview of your personal information, offering a quick snapshot of your Ovok account.
- **Observations**: list of the FHIR Observation resources related to your Ovok project.

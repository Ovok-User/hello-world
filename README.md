# Ovok Hello World App

Welcome to the Ovok Hello World App, a simple demo application showcasing the capabilities of the Ovok healthcare platform.
This guide will walk you through the sign-in process, the home page, and the observation page.

## Register with Ovok
1. [Subscribe](https://ovok.com/) to a payment plan that fits your project requirements.
2. Follow the link in the confirmation email to configure your password.
3. [Sign in](https://dashboard.dev.ovok.com/signup) to the Ovok dashboard with your email and password.
4. Go to [Overview](https://dashboard.dev.ovok.com/developer) and create a new client by clicking on "Create new client".
5. Input a client name (and optionally a description and redirect URI) and click on "createClient".
6. Go to [ClientApplication](https://dashboard.dev.ovok.com/ClientApplication), click on the newly created client, and copy the client ID.
7. Go to [Project](https://dashboard.dev.ovok.com/admin/project) and copy project ID.

## Clone and Run the Ovok Hello World App
1. Clone the `ovok-hello-world` repository to your local machine:
    ```bash
    git clone https://github.com/Ovok-Dev/ovok-hello-world.git
    
    cd ovok-hello-world
    ```
2. Create an `.env` file and populate the credentials, use the provided `.env.example` file as template.
    ```bash
    cp .env.example .env
    ```
    ```bash
    # Ovok Configuration
    REACT_APP_OVOK_CLIENT_ID=YOUR_OVOK_CLIENT_ID
    REACT_APP_OVOK_PROJECT_ID=YOUR_OVOK_PROJECT_ID
    ```
3. Install the dependencies:
    ```bash
    npm install  
    ```
4. Run the app:
    ```bash
    npm run start  
    ```

# Explore the Ovok Hello World App

## Register
1. The [Sign in](http://localhost:3000/login) pages opens automatically.
2. Go to the [Sign up](http://localhost:3000/register) page and register.
3. Upon successful sign in, you will be redirected to the Hello World home page.

## Home Page
Upon reaching the home page:
- **Profile Overview:** Your patient or practitioner profile details will be displayed, offering a quick snapshot of your Ovok account.
- **Available Observations:** Access additional options to explore and interact with your available observations.

## Observation Page
Clicking on the "Observations" option will take you to the Observation Page. Here, you can discover and manage all the FHIR observations related to your Ovok project.
- **List of Observations:** View a comprehensive list of all available FHIR observations within your project.

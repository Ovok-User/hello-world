# Ovok Hello World App

Welcome to the Ovok Hello World demo, a simple application showcasing the capabilities of the Ovok healthcare platform. This guide will walk you through the sign-in process, the home page, and the observation page.

## Register on Ovok

Before proceeding, make sure to register your account with Ovok.com [here](https://ovok.com/) and retrieve your `clientId`, `projectId`, and `organisationId`.



## Clone and Run the Sample App

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Ovok-Dev/ovok-hello-world.git
   
   cd ovok-hello-world
   ```

2. Create a .env file and populate the credentials. You can use the provided .env.example file as a template.
 
 	```bash
   cp .env.example .env
   ```

	```bash
	# Ovok Configuration
	OVOK_CLIENT_ID=YOUR_OVOK_CLIENT_ID
	OVOK_PROJECT_ID=YOUR_OVOK_PROJECT_ID
	OVOK_ORGANISATION_ID=YOUR_OVOK_ORGANISATION_ID.   
	```    

3. Install the dependencies and run the app:

	```bash
	npm install  
	```    
	
	```bash
	npm run start  
	```    
	
	
# Explore the Ovok Hello World App

## Sign-in

1. Navigate to the first page, where you'll be prompted to sign in using the Ovok credentials established in the registration tutorial.
2. Upon successful sign-in, you will be seamlessly redirected to the Hello World home page.

## Home Page

Upon reaching the home page:

- **Profile Overview:** Your patient or practitioner profile details will be displayed, offering a quick snapshot of your Ovok account.
- **Available Observations:** Access additional options to explore and interact with your available observations.

## Observation Page

Clicking on the "Observations" option will take you to the Observation Page. Here, you can discover and manage all the FHIR observations related to your Ovok project.

- **List of Observations:** View a comprehensive list of all available FHIR observations within your project.
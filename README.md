# Dinner Ideas

Get dinner ideas based on what ingredients you have.

## Table of Contents

1. [Installation](#installation)
2. [Authentication](#authentication)
3. [Usage](#usage)
4. [License](#license)

## Installation

Clone the repository
```bash
git clone https://github.com/geoffm39/dinner-ideas.git
```

Navigate to the project directory
```bash
cd dinner-ideas
```

Install dependencies
```bash
npm install
```

## Authentication 

To use the Spoonacular API you will need to create a free account
[Spoonacular Sign-up](https://spoonacular.com/food-api/console#Dashboard)
Navigate to the console, then under the profile tab copy the API key.

Create the .env file in the project directory
```bash
touch .env
```

Open the .env file in your editor and add the copied API key as API_KEY and save
`API_KEY="<YOUR-API-KEY>"`

## Usage

Start the development server
```bash
node index.js
```
or if using nodemon
```bash
nodemon index.js
```

Load the server URL in you browser
[http://localhost:3000/](http://localhost:3000/)

*Please note the spoonacular API as a request limit per day on a free account.*

## License

MIT License
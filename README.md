# Word Frequency App

React is being used for the front end. Client is the folder name for front end.

App is a combination of two components -

1. Input Form - It takes a number and return number of words with highest frequencies
2. List words - which actualy list all the words

React hooks state is being used to maintain the list of words which get updated every
time form get submitted.

Node is being used at the backend-

When the request came to fetch the words in a particular no it executes a request, get the text, parse it in to frequecy map and returns it to the client.

## create-react-app React Project with Node Express Backend

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```

## How this works

The key to use an Express backend with a project created with `create-react-app` is on using a **proxy**. We have a _proxy_ entry in `client/package.json`

```
"proxy": "http://localhost:5000/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**

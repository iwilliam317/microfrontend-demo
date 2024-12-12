# Microfrontend Demo with Webpack Module Federation
This project demonstrates Microfrontends using **Webpack Module Federation**, with two apps:
**Host App**: Loads remote components.
**Remote App**: Exposes components to be consumed by the host.

## Prerequisites
[Node.js](https://nodejs.org/) (>= 16.x)
[npm](https://npmjs.com/) or [Yarn](https://yarnpkg.com/) (>= 8.x)

## Project Structure
```
microfrontend-demo/
├── host/
│   ├── src/index.js      # Host entry
│   ├── webpack.config.js # Host Webpack config
│   └── .babelrc          # Host Babel config
├── remote/
│   ├── src/Button.jsx    # Exposed component
│   ├── webpack.config.js # Remote Webpack config
│   └── .babelrc          # Remote Babel config
├── package.json          # Root package.json
└── README.md             # This file
```

## Setup
**Install dependencies:**
```
cd host && npm install
cd ../remote && npm install
```

**Run both apps:**
- Terminal 1 (Host): `npm start` *(from host/)*
- Terminal 2 (Remote): `npm start` *(from remote/)*

## Running the Application
Once both apps are running:
- Host App: `http://localhost:3000`
- Remote App: `http://localhost:3001`

The Host app will display the Button component from the Remote app.

![]()

## How It Works
Host App:
- Webpack uses ModuleFederationPlugin to load the remote app at `http://localhost:3001`.
- React.lazy() and Suspense are used to load the remote component (Button) dynamically.

Remote App:
- Exposes Button.jsx via Webpack Module Federation.

Webpack Configuration
- Host (`webpack.config.js`):
```
new ModuleFederationPlugin({
  remotes: {
    remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
  },
});
```

- Remote (webpack.config.js):
```
new ModuleFederationPlugin({
  exposes: {
    "./Button": "./src/Button",
  },
});
```

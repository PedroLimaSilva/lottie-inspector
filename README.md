# Lottie animation inspector

This is a basic animation inspector made for developers to inspect Lottie animations and try to replicate them without using bodymovin or other JS animation libraries.

## How to use
 1. Place your lottie json files in the `/public` folder
 2. Either change the file name to `data.json` or change `src/components/Player/index.js` at line 23 to your lottie file's name.
 3. Run `yarn start` on this project's root folder.
 4. The animation should autoplay.

After those steps, you can:
* Pause the animation;
* Go to a certain frame and check what percentage of the animation that corresponds to (useful for `@keyframes`);
* See it's duration in seconds;
* Advance the animation frame by frame by focusing the number input field and using the up/down arrow keys;
* Use the `Playground` component to create html and css to emulate the animation. What you build will be rendered on top of the lotti animation.
 

#
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), but has been ejected later

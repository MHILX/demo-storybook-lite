# How to setup Storybook in React Typescript project

This is a step by step guide to setup Storybook in React typescript project using Create-react-app tool. Starting from a simple setup to a more useful setup with storybook addons.

## Why Storybook?

Storybook is a UI development tool that provide a way to record your UI component usage as scenario or story. It also provides a user interface to see your component usage scenario in action.

## Setup initial project
    npm init -y
    tsc --init
    npm i react react-dom

## You can also use CRA
    npx create-react-app . --typescript
    npx create-react-app my-app --typescript

## Install Storybook
    npx sb init
    npx storybook@latest init    

## Install the actions addon
    npm install @storybook/addon-actions --save-dev

This step is __optional__ to demo button click action.

## Install minireset.css
    npm install minireset.css

Follow the link to learn more about [minireset.css](https://github.com/jgthms/minireset.css)
- __resets the font sizes__ so that using semantic markup doesn't affect the styling
- __resets the block margins__ so that the spacing is only applied when you need it
- __resets tables__ so that tabular data only takes the space it needs
- __preserves the inline paddings__ so that buttons and inputs keep their default layout
- __sets the border-box box sizing__ so that borders and paddings don't affect the set dimensions
- __sets responsive media elements__ so that images and videos scale with the browser width
---
## Create an npm package

### Initialize the project
    npm init -y

### Log into NPM registry
    npm login

### Check login
    npm whoami

### Publish the package
    npm publish --access=public

### Install the package
    npm -i @liteobject/demo-my-button

---
## Create a docker image
     docker build --no-cache -t mhilx/demo-storybook-lite:latest . 

### Run the docker image
    docker run -p 6006:6006 mhilx/demo-storybook-lite:latest
---
## Links
- https://storybook.js.org/
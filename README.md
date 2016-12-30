
----
## Colorado-14ers


> An interactive map application of Colorado’s 14ers using React and Redux

----
## Redux Concepts
- **State** – The state is data that needs to be updated during the life cycle of a component. It contains information on the current state of the component. For example, if you have a switch that is toggled on, you might store something like *switch_value* in the state and then assign it a value of true.

- **Store** – The store is a big JavaScript object that represents the state of the entire app. It is where you save, update, and retrieve the data that needs to be accessible throughout the whole app.

- **Actions** – The specific actions in your app which allow you to update the store. For example, you can have a *SWITCH_ON* action which turns on a  *<Lightbulb/>* component.

- **Reducers** – Reducers specify how the state may change, given a specific action. These accept the data provided by the action and use it to update the store.

----
##Tech
* [React](https://facebook.github.io/react/docs/getting-started.html) - Open-source JavaScript library providing a view for data rendered as HTML
* [Redux](http://redux.js.org/) - a predictable state container for JavaScript apps.
* [react-motion](https://github.com/chenglou/react-motion) - A spring that solves your animation problems.
* [Heroku](https://devcenter.heroku.com/categories/reference) - Create, deploy, and manage apps in the cloud
* [Material UI](http://www.material-ui.com/) - Google's material design UI components built with React.

----
##Installation
Requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```
npm install
npm run
```

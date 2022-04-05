// Define an Action Creator
// After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

const action = {
  type: 'LOGIN'
}

// Define an action creator here:
function actionCreator() {
  return action;
}

// Define a function named actionCreator() that returns the action object when called.
// https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator

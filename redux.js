const redux = require('redux'); // default nodejsimport syntax for importing 3rd party packages

const counterReducer = (state = {counter:0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
        }
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        }
    }
    return state;
}

const store = redux.createStore(counterReducer);

console.log(store.getState()); 

const counterSubscriber = () => {
    const lateststate = store.getState(); // get the latest state
    console.log(lateststate);   
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'}); // dispatch an action
store.dispatch({type: 'decrement'}); 
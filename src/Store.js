import { CounterReducer } from "./components/services/reducers/CounterReducers";
const { createStore } = require("redux");

export const store = createStore(CounterReducer);

import { createStore } from 'redux';
import { reducers } from '../Reducers/Reducers'

const myStore = createStore(reducers)

export default myStore;


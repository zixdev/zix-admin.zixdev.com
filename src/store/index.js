import Vuex from 'vuex'
import Config from './config';
const store = new Vuex.Store({
    state: {
        authorized: false,
        config: Config
    }
});

export default store;

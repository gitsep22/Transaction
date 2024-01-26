import Vue from 'vue';
import Vuex from 'vuex';
import transaction from './modules/transaction';
import modal from './modules/modal';

Vue.use(Vuex);

const store = new Vuex.Store({
    
    modules: {
        transaction,
        modal
    },
    
});

module.exports = store;
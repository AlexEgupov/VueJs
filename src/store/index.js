import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import coffeeItems from './coffeeItems'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        links,
        coffeeItems,
    },
})

export default store
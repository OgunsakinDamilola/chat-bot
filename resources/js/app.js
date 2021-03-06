/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');


window.Vue = require('vue');

import Vue from 'vue'
import moment from 'moment'
import VueChatScroll from 'vue-chat-scroll'
import VueResource from 'vue-resource'
import Autocomplete from 'v-autocomplete'
import Toastr from 'vue-toastr'
import routes from "./routes";


Vue.prototype.moment = moment
Vue.use(VueChatScroll)
Vue.use(VueResource)
Vue.use(Toastr)
Vue.use(Autocomplete)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

import ChatBot from './components/ChatBot.vue';


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router : routes,
    data() {
        return {
            users : [],
            api_url : 'http://localhost:8081/v1'
        }
    },
    created(){
        console.log(this.$data.api_url)
    },
    components: {
        ChatBot
    },
    methods:{
        shadow(status, key){
            $('.message_' + key).removeClass("shadow")
            $('.message_' + key).addClass("shadow-none")
            if (status == 1)
                $('.message_' + key).addClass("shadow")
            $('.message_' + key).removeClass("shadow-none")
        }
    }



});

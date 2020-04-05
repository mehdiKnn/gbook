import Vue from 'vue';
import Home from '@/views/Home.vue';
import Book from '@/views/Book.vue'
import BookView from '@/views/BookView.vue'
import {IonicVueRouter} from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/book/:id',
            name: 'book',
            component: Book
        },
        {
            path: '/view/:id',
            name: 'bookview',
            component: BookView
        },
        {
            path: '*',
            redirect :{name:'home'}
        }
    ]
});
import HomeComp from './components/HomeComp.vue';
import SignUp from './components/SignUp.vue';
import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import AddRestaurant from './components/AddRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';

const routes = [
    {path: '/', name:'Home', component:HomeComp},
    {path: '/sign-up', name:'SignUp', component:SignUp},
    {path: '/login', name:'Login', component:LoginPage},
    {path: '/add', name:'Add', component:AddRestaurant},
    {path: '/update/:id', name:'Update', component:UpdateRestaurant},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
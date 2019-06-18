// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//引进组件
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

//引入全局样式
// import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;



const routes = [
{path:'/goods',component:goods},
{path:'/ratings',component:ratings},
{path:'/seller',component:seller},
{path:'/',redirect:'/goods'}     //重定向
]

var router = new VueRouter(
	{routes},
	);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  components: { App },
  template: '<App/>'
})
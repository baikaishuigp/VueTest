// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


// import ol from 'ol';

// console.log(ol);
// import map from 'ol.Map'
// import view from 'ol.View';
// import tile from 'ol.layer.Tile';
// import osm from 'ol.source.OSM'


Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small'});
// Vue.use(ol);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

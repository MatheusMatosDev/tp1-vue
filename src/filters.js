import Vue from 'vue'


Vue.filter('capitalizar', function(valor){
  return valor.toUpperCase();
})
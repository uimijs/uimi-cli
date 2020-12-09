import "./app.scss"
import "./paper.scss"

//import "./scripts.js"
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
$(document).on('click', '.page .grid,.page .components', function (e) {
  e.stopPropagation()
  $(".page .grid.active,.page .components.active").removeClass("active");
  $(this).addClass("active");
})

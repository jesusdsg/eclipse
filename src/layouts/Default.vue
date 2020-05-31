<template>
  <div class="layout" id="top">
    <div id="content-wrapper">
      <Header/>
      <slot/>
    </div>
    <a href="#" id="btn-top" @click="$scrollTop" class="btn-top" aria-label="Back to top"><fa-icon icon="angle-up" size="1x" /></a>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.prototype.$scrollTop = function(){
  window.scrollTo(0,0);
}

import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header,
  },
}
</script>


<style lang="scss">
.btn-top {
  width: 30px !important;
  height: 30px !important;
  padding: 4px 8px !important;
  font-size: 22px;
  line-height: 22px;
  position: fixed;
  bottom: 10em;
  right: 5em;
  background-color: #000 !important;
  color: #fff !important;
}

.btn-top:hover {
  background-color: #474747 !important;
  color: #fff !important;
}

@media (max-width: 467px){
    .btn-top {
        right: 2em;    
    }
}

body, html {
  height: 100%;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #474747 !important;
}


#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
}
</style>

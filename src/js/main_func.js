import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      webpath: ''
    }
  },
  methods: {
    showBTnav () {
      var bt = document.getElementsByClassName('navbar-toggler')
      for (var i = 0; i < bt.length; i++) {
        bt[i].style.display = 'block'
      }
    },
    hideBTnav () {
      var bt = document.getElementsByClassName('navbar-toggler')
      for (var i = 0; i < bt.length; i++) {
        bt[i].style.display = 'none'
      }
    }
  }
})

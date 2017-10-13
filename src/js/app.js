export default {
  name: 'app',
  data () {
    return {
      webpath: ''
    }
  },
  methods: {
    openNav () {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    },
    closeNav () {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      // document.body.style.backgroundColor = "white";
    }
  },
  mounted () {
    this.webpath = window.location.pathname
  }
}

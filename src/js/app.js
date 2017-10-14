export default {
  name: 'app',
  data () {
    return {
      
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
    },
    setHeightContent (height) {
      var con = document.getElementsByClassName('content')
      for (var i = 0; i < con.lenght; i++){
        con[i].style.maxHeight = height + 'px'
      }
    },
    logOut () {
      this.$router.push('/')
      this.closeNav()
    }
  },
  mounted () {
    this.setHeightContent(screen.height-100)
  }
}

export default {
  name: 'app',
  data () {
    return {
      screenwidth: 0
    }
  },
  methods: {
    openNav () {
      document.getElementById("mySidenav").style.width = this.screenwidth + "px";
      document.getElementById("main").style.marginLeft = this.screenwidth + "px";
      // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    },
    closeNav () {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      // document.body.style.backgroundColor = "white";
    },
    setHeightContent(height) {
      var con = document.getElementsByClassName('content')
      for (var i = 0; i < con.lenght; i++) {
        con[i].style.maxHeight = height + 'px'
        con[i].style.height = height + 'px'
      }
    },
    logOut () {
      this.$router.push('/')
      this.closeNav ()
    }
  },
  mounted() {
    if( screen.width > 769) {
      this.screenwidth = screen.width / 5
    }else{
      if(screen.width > 376){
        this.screenwidth = screen.width / 2  
      }else{
        this.screenwidth = screenwidth - 100
      }
    }
  }
}

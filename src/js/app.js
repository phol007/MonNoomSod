import numeral from 'numeral'

export default {
  name: 'app',
  data () {
    return {
      
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
    NavToggle () {
      if(this.navStatus == 0) {
        this.openNav()
        this.navStatus = 1
      }else{
        this.closeNav()
        this.navStatus = 0
      }
    },
    logOut () {
      this.$router.push('/')
      this.closeNav ()
    }
  },
  mounted() {
    if( screen.width > 768) {
      this.screenwidth = screen.width / 5
    }else{
      if ( screen.width > 375) {
        this.screenwidth = screen.width / 3
      }else{
        this.screenwidth = screen.width / 2
      }
    }
  }
}

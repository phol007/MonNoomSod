import './main_func.js'

export default {
  name: 'login',
  methods: {
    check_login () {
    	this.$router.push('/main')
    }
  },
  mounted () {  	
    this.hideBTnav()    
  }
}

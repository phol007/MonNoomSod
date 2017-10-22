import './main_func.js'
import $ from 'jquery'

export default {
  name: 'login',
  methods: {
    show_sck () {    	
	    $('#SCK').modal('show')
    },
    close_sck () {
    	$('#SCK').modal('hide')
    },
    show_mobile_payment () {
      $('#mobile-payment').modal('show')
    },
    close_mobile_payment () {
      $('#mobile-payment').modal('hide')
    },
    remove_item () {
      alert("ok")
    }
  }
}

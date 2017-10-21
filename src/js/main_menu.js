export default {
  name: 'main_menu',
  data () {
    return {
      titlePage: 'เมนูหลัก',
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    this.showBTnav()
  }
}

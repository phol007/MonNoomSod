# monmilk

> programe pos monmilk

## Framework css

### bootstrap and jquery

```
npm install bootstrap@4.0.0-alpha.6 --save
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

npm install --save jquery

Set JQuery in config file 
Add the ProvidePlugin to the plugins array in both build/webpack.dev.conf.js and build/webpack.prod.conf.js so that jQuery becomes globally available to all your modules:

plugins: [

  // ...

  new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })
]

# font awesome
npm install font-awesome --save
import '../node_modules/font-awesome/css/font-awesome.css'


# datepicker
https://www.npmjs.com/package/vuejs-datepicker

# alert 
npm install bootstrap-sweetalert
import SweetAlert from 'bootstrap-sweetalert'
import 'bootstrap-sweetalert/dist/sweetalert.css'
Vue.use(SweetAlert)

# numeral
npm install numeral --save
import numeral from 'numeral'

# moment
npm install moment --save
import moment from 'moment' 

```

===

## Set config after build project
### set path index
```
ลบ '/' ในไฟล์ config/index.js
ตัวอย่าง
===
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',
    
```
===

## Set static Fonts in Project
```
เพิ่ม คำสั่ง  publicPath: '../../' ในไฟล์ build/utils.js 
ตัวอย่าง 
	if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```
===
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

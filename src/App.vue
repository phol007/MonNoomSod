<template>
  <div id="app">
    <div id="main">
      <nav class="navbar" style="border-bottom: 5px solid red; text-align: left; padding:0;">
        <div class="navbar-brand" href="#" style="width: 100%;">
          <button class="navbar-toggler" id="gridMenu" type="button" @click="openNav">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div style="float: left;">
            <img src="static/img/logo.png" style="float:left;">    
          </div>
         </div>
      </nav>
      <router-view/>
    </div>
<!-- panel -->
    <div id="mySidenav" class="sidenav">
      <div class="list-group">
        <div class="list-group-item">
          <div class="row">
            <div class="col-sm-4">
              <img src="./assets/logo.png" id="proflie-image">
            </div>            
            <div class="col-sm-8"> 
              ชื่อ {{ screenwidth }} 
              <br />
              ตำแหน่ง
            </div>
          </div>
        </div>
         <div class="list-group-item list-group-item-action" @click="logOut">
          <i class="fa fa-sign-out" aria-hidden="true"></i><span>&nbsp;&nbsp;ออกจากระบบ</span>
        </div>
        <div class="list-group-item list-group-item-action" @click="closeNav">
          <i class="fa fa-times" aria-hidden="true"></i><span>&nbsp;&nbsp;Close</span>
        </div>
      </div>
    </div>
<!-- panel -->

  </div>
</template>

<script src="./js/app.js"></script>

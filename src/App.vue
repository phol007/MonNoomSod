<template>
  <div id="app">
    <div id="main">
      <nav class="navbar">
        <div class="navbar-brand" href="#" style="width: 100%;">
          <button class="navbar-toggler" id="gridMenu" type="button" @click="NavToggle">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div style="float: left;">
            <img src="static/img/logo.png" style="float:left;">    
          </div>
         </div>
      </nav>
      <div  @click="closeNav">
      <router-view/>
      </div>
    </div>
<!-- panel -->
    <div id="mySidenav" class="sidenav">
      <div class="list-group">
        <div class="list-group-item">
          <div class="row">
            <div class="col-sm-4">
              <img src="./assets/logo.png" id="profile-image">
            </div>            
            <div class="col-sm-8" id="content-profile"> 
              ชื่อ {{ screenwidth }} 
              <br />
              ตำแหน่ง
            </div>
          </div>
        </div>
         <div class="list-group-item list-group-item-action" @click="logOut">
          <i class="fa fa-sign-out" aria-hidden="true"></i><span>&nbsp;&nbsp;ออกจากระบบ</span>
        </div>
      </div>
    </div>
<!-- panel -->

  </div>
</template>

<script src="./js/app.js"></script>

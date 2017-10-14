<template>
  <div id="app">
    <div id="main">
      <nav class="navbar" style="border-bottom: 5px solid red; text-align: left; padding:0;">
        <div class="navbar-brand" href="#" style="width: 100%;">
          <button class="navbar-toggler" type="button" @click="openNav" style="cursor: pointer; border-color: red; color: red; float:left; margin: 1% 0.5%;">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div style="float: left;">
            <img src="static/img/logo.png" style="float:left; width: 150px;">    
          </div>
         </div>
      </nav>
      <router-view/>
    </div>
<!-- panel -->
    <div id="mySidenav" class="sidenav">
      <div class="list-group">
        <a href="#" class="list-group-item">
          <div class="row">
            <div class="col-sm-4">
              <img src="./assets/logo.png" width="50px;" style="border-radius: 100%;">
            </div>            
            <div class="col-sm-8"> name </div>
          </div>
        </a>
         <a href="#" class="list-group-item list-group-item-action" @click="logOut">
          Logout
        </a>
        <a href="#" class="list-group-item list-group-item-action" @click="closeNav">
          Close
        </a>
      </div>
    </div>
<!-- panel -->

  </div>
</template>

<script src="./js/app.js"></script>

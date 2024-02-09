<template>
  <div>
    <div class="bt-menu">
      <button class="bx bx-chevron-left toggle primary" @click="drawerVisible = true">
      </button>
    </div>
    <div
      class="right-drawer sidebar"
      :style="{
        width: drawerVisible ? '65%' : '0',
        paddingLeft: drawerVisible ? '1%' : '0',
      }"
    >
      
      <header>
              <div class="image-text">
                  <span class="image">
                      <img src="../assets/teste.png" alt="">
                  </span>
  
                  <div class="text logo-text">
                      <span class="name">SISAGRO</span>
                  </div>
              </div>
              <div style="text-align: left; margin: 10px;">
        <button class="bx bx-chevron-right toggle primary" @click="drawerVisible = false"> </button>
      </div>    
      </header>
          
      <div class="menu-bar">
              <div class="menu">
  
                  <li class="search-box">
                      <i class='bx bx-search icon'></i>
                      <input type="text" placeholder="Pesquisar...">
                  </li>
  
                  <ul class="menu-links">
                      <li class="nav-link">
                          <router-link to="/" class="button">
                              <i class='bx bx-home-alt icon' ></i>
                              <span class="text nav-text">Pagina Inicial</span>
                          </router-link>
                      </li>
  
                      <li class="nav-link">
                          <router-link to="/produtor" class="button">
                              <i class='bx bx-user icon' ></i>
                              <span class="text nav-text">Produtor</span>
                          </router-link>
                      </li>

                      <li class="nav-link">
                          <router-link to="/documentacao" class="button">
                            <i class='bx bx-notepad icon' ></i>
                              <span class="text nav-text">Documentações</span>
                          </router-link>
                      </li>
  
  
  
                      <li class="nav-link">
                          <router-link to="/relatorio" class="button">
                              <i class='bx bx-bar-chart-alt-2 icon' ></i>
                              <span class="text nav-text">Relatorio</span>
                          </router-link>
                      </li>
  
                      <li class="nav-link">
                          <router-link to="/duvidas-frequentes" class="button">
                              <i class='bx bx-bell icon'></i>
                              <span class="text nav-text">Duvidas Frequentes</span>
                          </router-link>
                      </li>
  
                      <li class="nav-link">
                          <router-link to="/analises" class="button">
                              <i class='bx bx-pie-chart-alt icon' ></i>
                              <span class="text nav-text">Análises</span>
                          </router-link>
                      </li>
  
                      <li class="nav-link">
                          <router-link to="/configuracoes" class="button">
                              <i class='bx bx-cog icon' ></i>
                              <span class="text nav-text">Configurações</span>
                          </router-link>
                      </li>
                      <li class="nav-link">
                          <router-link to="/geolocalizacao" class="button">
                              <i class='bx bx-globe icon'></i>
                              <span class="text nav-text">Geolocalização</span>
                          </router-link>
                      </li>
                      <li class="nav-link">
                          <router-link to="/local" class="button">
                              <i class='bx bx-globe icon'></i>
                              <span class="text nav-text">Local</span>
                          </router-link>
                      </li>
                      <li class="nav-link">
                          <router-link to="/assinatura" class="button">
                              <i class='bx bx-id-card icon'></i>
                              <span class="text nav-text">Assinatura Eletrônica</span>
                          </router-link>
                      </li>

                      
  
                  </ul>
              </div>
  
              <div class="bottom-content">
                  <li class="">
                      <router-link to="" class="button">
                          <i class='bx bx-log-out icon' ></i>
                          <span class="text nav-text">Logout</span>
                      </router-link>
                  </li>
  
                  <li class="mode">
                      <div class="sun-moon">
                          <i class='bx bx-moon icon moon'></i>
                          <i class='bx bx-sun icon sun'></i>
                      </div>
                      <span class="mode-text text">Dark mode</span>
  
                      <div class="toggle-switch">
                          <span class="switch"></span>
                      </div>
                  </li>
                  
              </div>
          </div>
  
        </div>
      
      
    </div>
    <!-- We will make the mask fill the screen while the menu is visible. Because its z-index is 1 less than that of the menu, the menu will still be displayed on top of it -->
    <div
      class="drawer-mask"
      :style="{
        width: drawerVisible ? '100%' : '0',
        opacity: drawerVisible ? '0.6' : '0',
       
      }"
      @click="drawerVisible = false"
    ></div>
  
  </template>
  
  <script>
  export default {
  data() {
    return {
      drawerVisible: false,
    };
  },
};
  </script>
  
  <style scoped>


  #app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
header{
  width: 100%;
}
.bt-menu .toggle{
text-align: right;
display: flex;


/*position: absolute;*/
  /*top: 50%;*/
  height: 40px;
  width: 40px;
  background-color: #4b3805;
  color: var(--sidebar-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  cursor: pointer;
  transition: var(--tran-05);
  position: fixed;
  margin: 10% 2%;
  transform: rotate(180deg);
  z-index: 200;
}
img {
  max-width: 100%;
  height: auto;
  margin-top: 5px;
  border-radius: 25%;
  margin-left: 20%;
}

.image-text{
  width: 75%;
  display: flex ;
  margin-top: 0px;
  border-radius: 25%;
}
.image-text .name {
  margin-left: 25%;
font-size: 30px;
font-weight: 600;

}
.image-text
  
  h1,
  h2,
  h3,
  h4,
  h5 {
  font-weight: 400;
  color: #0ca3a3;
  }
  
  h1 {
  color: teal;
  }
  
  a {
  color: tomato;
  }
  

  
  .close {
  background: white;
  border: 0;
  cursor: pointer;
  }

 .search-box{
  border-radius: 6px;
  background-color: var(--primary-color-light);
  cursor: pointer;
  transition: var(--tran-05);
}
li.search-box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: var(--primary-color-light);
  color: var(--text-color);
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  transition: var(--tran-05);
}
li a{
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);
}
  
  .right-drawer {
  position: absolute;
  top: 0;
  right: 0;
   width: 2%;/* initially */
  overflow: hidden;

  padding-left: 0; /* initially */
  border-left: 1px solid whitesmoke;
  background: white;
  z-index: 200;

  transition: all 0.1s;
  }
  
  .drawer-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 0; /* initially */
  height: 100%;
  background: #000;
  opacity: 0.3;
  z-index: 100;
  transition: opacity 0.2s;
  }
header .toggle .bt-menu{
  /*position: absolute;*/
  /*top: 50%;*/
  height: 40px;
  width: 40px;
  background-color: #584510;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  cursor: pointer;
  transition: var(--tran-05);
  color: var(--font-color);

}



*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}


body{
 
  background-color: var(--body-color);
  transition: var(--tran-05);

}

::selection{
  background-color: var(--primary-color);
  color: #fff;
}

body.dark{
  --body-color: #18191a;
  --sidebar-color: #242526;
  --primary-color: #2ab807;
  --primary-color-light: #3a3b3c;
  --toggle-color: #fff;
  --text-color: #ffffff;
  --box-color:#707070;
  --font-color:#fff;
}

/* ===== Sidebar ===== */
.sidebar{
  position: fixed;
  top: 0;
  left: 0%;
  height: 100%;
  padding: 5% 0%;
  background: var(--sidebar-color);
  transition: var(--tran-05);
  z-index: 200;  
  scrollbar-width: none;
}
.sidebar.close{
  width: 0px;
  margin-left: -7%
}
.sidebar.close header .image img{
  width: 0;

}
/* ===== Reusable code - Here ===== */
.sidebar li{
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon{
  min-width: 60px;
  border-radius: 6px;
}

.sidebar .icon{
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.sidebar .text,
.sidebar .icon{
  color: var(--text-color);
  transition: var(--tran-03);
}

.sidebar .text{
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
}
.sidebar.close .text{
  opacity: 0;
}
/* =========================== */

.sidebar header{
  position: relative;
  margin-top: -5%;
}

.sidebar header .image-text{
  display: flex;
  align-items: center;
}
.sidebar header .logo-text{
  display: flex;
  flex-direction: column;
}
header .image-text .name {
  margin-top: 2px;
  margin-left: 25%;
  font-size: 30px;
  font-weight: 600;
}

header .image-text .profession{
  font-size: 16px;
  margin-top: -2px;
  display: block;
}

.sidebar header .image{
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar header .image img{
  width: 70px;
  border-radius: 6px;
}
.sidebar.close header .toggle{
margin-left: 150px;
}
.sidebar header .toggle{
  /*position: absolute;*/
  /*top: 50%;*/
  transform: translateY(-50%) rotate(180deg);
  height: 50px;
  width: 50px;
  background-color: #5e480b;
  color: var(--sidebar-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  cursor: pointer;
  transition: var(--tran-05);
  margin-left: 80%;
  margin-top: 0%;

}

body.dark .sidebar header .toggle{
  color: var(--text-color);
}

.sidebar.close .toggle{
  transform: translateY(-50%) rotate(0deg);
  right: -150px;
}

.sidebar .menu{
  margin-top: -10px;
}

.sidebar li.search-box{
  border-radius: 6px;
  background-color: var(--primary-color-light);
  cursor: pointer;
  transition: var(--tran-05);
}

.sidebar li.search-box input{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: var(--primary-color-light);
  color: var(--text-color);
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
  transition: var(--tran-05);
}
.sidebar li a{
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: var(--tran-03);
}

.sidebar li a:hover{
  background-color: var(--primary-color);
}
.toggle a:hover{
  font-size: 50px;
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text{
  color: var(--sidebar-color);
}
body.dark .sidebar li a:hover .icon,
body.dark .sidebar li a:hover .text{
  color: var(--text-color);
}
body.dark .sidebar header .toggle{
  color: #18191a;
}

.sidebar .menu-bar{
  height: calc(98% - 85px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /*overflow: scroll;*/
  margin-top: -10px;
  
}

.menu-bar::-webkit-scrollbar{
  display: none;
}
.sidebar .menu-bar .mode{
  border-radius: 6px;
  background-color: var(--primary-color-light);
  position: relative;
  transition: var(--tran-05);
}


.menu-bar .mode .sun-moon{
  height: 50px;
  width: 60px;
}

.mode .sun-moon i{
  position: absolute;
}
.mode .sun-moon i.sun{
  opacity: 0;
}
body.dark .mode .sun-moon i.sun{
  opacity: 1;
}
body.dark .mode .sun-moon i.moon{
  opacity: 0;
}

.menu-bar .bottom-content .toggle-switch{
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}
.toggle-switch .switch{
  position: relative;
  height: 22px;
  width: 40px;
  border-radius: 25px;
  background-color: var(--toggle-color);
  transition: var(--tran-05);
}

.switch::before{
  content: '';
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: var(--sidebar-color);
  transition: var(--tran-04);
  color: var(--font-color);
}

body.dark .switch::before{
  left: 20px;
}

.home{
  position: absolute;
  top: 0;
  top: 0;
  left: 250px;
  height: 100vh;
  width: calc(100% - 250px);
  background-color: var(--body-color);
  transition: var(--tran-05);
}
.home .text{
  font-size: 30px;
  font-weight: 500;
  color: var(--text-color);
  padding: 12px 60px;
}

.sidebar.close  .home{
  
  height: 100vh;
  width: calc(100% - 78px);
}
body.dark .home .text{
  color: var(--text-color);
}


@media screen and (min-height: 927px){
  .sidebar .menu-bar{
      overflow: hidden;  
    }

}
 



  </style>




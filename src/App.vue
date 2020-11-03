<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-lg fixed-top" id="nav8">
        <div class="container">
          <a class="navbar-brand">V8</a>
          <button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <div class="collapse navbar-collapse " id="navbarResponsive">
            <ul class="nav navbar-nav">
              <li class="nav-item mx-1" role="presentation"><router-link to="/">Portada |</router-link></li>
              <li class="nav-item mx-1" role="presentation"><router-link to="/sobremi">Sobre mi |</router-link></li>
              <li class="nav-item mx-1" role="presentation"><router-link to="/contacto">Contacto |</router-link></li>
              <li class="nav-item mx-1" role="presentation"><router-link to="/post/1">Último post |</router-link></li>
              <li class="nav-item mx-1" role="presentation"><router-link to="/*">No existe</router-link></li>
            </ul>
          </div>
        </div>
      </nav>

    <transition name="router-anim" mode="out-in">
    <router-view></router-view>
    </transition>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav8 {
  padding: 30px;
  background-color: #FFFFFF;
 
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .navbar-brand {
    margin-right: 15rem;
  }
  
  .router-anim-enter-active {
    animation: coming .3s;
    animation-delay: .2s;
    opacity: 0;
  }

  .router-anim-leave-active {
    animation: going .3s;
  }
  @keyframes going {
    0% {
        transform: translateX(0)
    }
    100% {
        transform: translateX(0px);
        opacity: 0;
    }
  }
  @keyframes coming {
    from {
        transform: translateX(0px);
        opacity: 0;
    }
    to {
        transform: translateX(0px);
        opacity: 1;
    }
  }
}

</style>

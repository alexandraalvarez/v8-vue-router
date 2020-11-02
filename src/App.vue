<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="nav8">
        <div class="container">
          <a class="navbar-brand">V8</a>
          <button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item mx-3" role="presentation"> <router-link to="/">Portada</router-link></li>
              <li class="nav-item mx-3" role="presentation"><router-link to="/sobremi">Sobre mi</router-link></li>
              <li class="nav-item mx-3" role="presentation"><router-link to="/contacto">Contacto</router-link></li>
              <li class="nav-item mx-3" role="presentation"> <router-link to="/post/1">Último post</router-link></li>
              <li class="nav-item mx-3" role="presentation"><router-link to="/*">No existe</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    <router-view></router-view>
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
  opacity: 0.65;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

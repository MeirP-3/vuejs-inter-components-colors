<template>
  <div id="app" :style="styleBus">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/prefs">settings</router-link>
        </li>
      </ul>
    </nav>
    <main>
      <img src="./assets/logo.png">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import styleBus from './services/styleBus.js'
export default {
  name: 'app',
  data() {
    return {
      styleBus
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  overflow: hidden
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 10px;
  height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00f;
}
</style>

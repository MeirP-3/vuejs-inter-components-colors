<template>
  <div id="app" :style="style">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/prefs">settings</router-link>
      </li>
    </ul>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import { BG_COLOR, TXT_COLOR } from './services/consts.js'
import bus from './services/bus.js'
export default {
  name: 'app',
  data() {
    return {
      style: {
        backgroundColor: '#fff',
        color: '#000'
      }
    }
  },
  created() {
    bus.$on(BG_COLOR, e => this.style.backgroundColor = e.target.value)
    bus.$on(TXT_COLOR, e => this.style.color = e.target.value)
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
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

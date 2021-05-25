<template>
  <div id="app">
    <header>
      <!-- h1 + p isn't registering -->
      <h1>Vue Voxer</h1>
      <p>Real-time voice chat</p>
    </header>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { auth } from './components/firebase'
import { auth } from './components/firebase'

console.log(auth);

export default {


  name: 'App',
  components: {
    
  }
}
</script>

<style>



</style>

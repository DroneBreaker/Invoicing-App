<template>
  <div class="home">
    <center>
      <h1>{{ introMessage }}</h1>

      <router-link to="/login">
        <button class="btn" type="submit" >{{ buttonTitle }}</button>
      </router-link>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  
  data() {
    return {
      introMessage: 'Welcome to Droner\'s Invoicing App',
      buttonTitle: 'Click to Login'
    }
  }
}
</script>

<style scoped>
/* body{
  margin-top: 40px;
} */

 h1 {
    font-size: 25px;
    font-weight: 400;
    margin-top: 290px;
    margin-bottom: 2px;
  }

  button {
    border: 1px solid #ccc;
    background: blue;
    padding: 12px;
    margin:30px;
    border-radius: 40px;
    height: 55px;
    width: 120px;
    color: white;
    cursor: pointer;
  }

  .btn {
    font-size: small;
    font-weight: 500;
  }
</style>

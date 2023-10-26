<template>
  <div>
    <div class="intro-header">
      <div class="brand">
        <img src="#" alt="Logo">

        <!-- <h2>{{ gra }}</h2> -->
      </div>


      <!-- Avatar -->
      <div class="head-avatar">
        <!-- Image goes here -->
        <!-- <img src="#"/> -->
      </div>
    </div>
  
    <div class="login">
      <div class="avatar">
        <!-- Image goes here -->
        <!-- <img src="#"/> -->
      </div>
  
      <h2>{{ title }}</h2>

      <div>
        <form @submit.prevent="hanldeSubmit">
          <div class="input-items">
            <label for="businessTIN">{{ businessTIN }}</label>
            <input type="text" placeholder="Business Tin">
          
          
            <!-- PIN section -->
            <label for="pin">{{ piN }}</label>
            <input type="text" placeholder="Enter 6 digits pin code">
          

            <!-- Business name -->
            <label for="businessName">{{ businessName }}</label>
            <input class="disabledInput" disabled type="text">


            <!-- Full Name -->
            <label for="fullName">{{ fullName }}</label>
            <input class="disabledInput" disabled type="text">
          </div>

          <!-- <div class="login-items">
            <div class="checkbox-group">
              <input type="checkbox">
              <label for="rememberMe">{{ rememberance }}</label>
            </div> -->

            <!-- <router-link to="#"><h2>
              {{ forgotPassword }}
            </h2></router-link> -->

            <!-- <h2><router-link to="/">{{ forgotPassword }}</router-link></h2>
          </div> -->

          <button :type="submit"> {{ title }}</button>
          <!-- <Button title="Register">Next</Button> -->

          <h2 class="company">
            <router-link to="/login">
              {{ haveAnAccount }}
            </router-link>
            </h2>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    components: 'Button',

    data() {
        return {
            gra: 'GRA',
            title: 'Registration',
            businessTIN: 'Business TIN',
            businessName: 'Business Name',
            piN: 'PIN',
            fullName: 'Full Name',
            rememberance: 'Remember My Login',
            forgotPassword: 'Forgot Password?',
            haveAnAccount: 'Already have an account? Click to Login'
        }
    },

    methods: {
      async hanldeSubmit() {
        try {
          const response = await axios.post('', {
            businessTIN: businessTIN,
            username: username,
            password: password
          })
        } catch(error) {
          // Handle errors
        }
      },

      logout() {}
    }
}
</script>

<style scoped>
.intro-header {
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 5px; */
}

.brand {
  margin: 20px 30px;
  display: flex;
}

.brand > h2 {
  margin-left: 10px;
  color: black;
  font-size: 30px;
}

.head-avatar {
  margin: 25px 30px;
  height: 60px;
  width: 60px;
  background: rgb(39, 99, 178);
  border-radius: 100%;
}

.login {
  /* margin-top: 70px; */
  margin: auto;
  height: 560px;
  width: 440px;
  background: white;
  color: black;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.login > h2 {
  margin: 20px 175px;
  font-size: 14px;
  font-weight: 500;
}

.avatar {
  /* margin: auto; */
  /* margin: 25px 30px;
  height: 60px;
  width: 60px;
  background: rgb(39, 99, 178);
  border-radius: 100%; */



  margin: auto;
  height: 120px;
  width: 120px;
  background: rgb(39, 99, 178);
  border-radius: 100%;
}

form {
  margin-left: 20px;
  /* display: grid;
  grid-column: 1fr 5fr; */

  /* display: flex;
  flex-direction: column; */
}

.input-items {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input-items > label {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
}

.input-items > input {
  border: 1px solid rgb(201, 198, 198);
  width: 94%;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 8px;
}

.login-items {
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  width: 96%;
}

.login-items > h2 {
  font-size: small;
  font-weight: 400;
}

.checkbox-group > label {
  font-size: small;
  font-weight: 400;
  color: gray;
  margin-top: 10px;
  /* text-decoration: none; */
}

.checkbox-group {
  display: flex;
}

.company {
  margin-left: 125px;
  font-size: 15px;
  font-weight: 400;  
}

h2 > router-link {
  text-decoration: none;
  /* color: red; */
}

.disabledInput {
  background: rgb(196, 188, 188);
}


button {
    color: white;
    background: rgb(62, 111, 132);
    padding: 5px;
    width: 98%;
    height: 40px;
    border-radius: 5px;
}
</style>
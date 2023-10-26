<template>
    <div class="login">
      <div class="avatar">
        <!-- Image goes here -->
        <!-- <img src="#"/> -->
      </div>
  
      <h2>{{ title }}</h2>

      <div>
        <form @submit.prevent="login">
          <div class="input-items">
            <label for="businessTIN">{{ businessTIN }}</label>
            <input type="text" placeholder="Business Tin">
          
          
          
            <label for="businessTIN">{{ username }}</label>
            <input type="text" placeholder="Username">
          

          
            <label for="businessTIN">{{ password }}</label>
            <input type="text" placeholder="Password">
          </div>

          <div class="login-items">
            <div class="checkbox-group">
              <input type="checkbox">
              <label for="rememberMe">{{ rememberance }}</label>
            </div>

            <!-- <router-link to="#"><h2>
              {{ forgotPassword }}
            </h2></router-link> -->

            <h2><router-link to="/">{{ forgotPassword }}</router-link></h2>
          </div>

          <Button title="Login">Login</Button>

          <h2 class="company">
            <router-link to="/register">
              {{ newCompany }}
            </router-link>
            </h2>
        </form>
      </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    components: 'Button',

    data() {
        return {
            title: 'Login',
            businessTIN: 'Business TIN',
            username: 'Username',
            password: 'Password',
            rememberance: 'Remember My Login',
            forgotPassword: 'Forgot Password?',
            newCompany: 'Register New Company?'
        }
    },

    methods: {
      async login() {
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
.login {
  /* margin-top: 70px; */
  margin: 60px auto;
  height: 550px;
  width: 440px;
  background: white;
  color: black;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.login > h2 {
  margin: 30px 190px;
  font-size: 14px;
  font-weight: 500;
}

.avatar {
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
  margin: 15px 100px;
  font-size: 15px;
  font-weight: 400;  
}

h2 > router-link {
  text-decoration: none;
  /* color: red; */
}

/* :hover input {
  border: 1px solid green;
} */
</style>
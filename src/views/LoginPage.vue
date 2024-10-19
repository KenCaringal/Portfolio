<template>
  <div class="login-container d-flex align-items-center justify-content-center vh-100">
    <div class="card p-4 position-relative" style="width: 300px;">
      <h5 class="text-center mb-4">Login</h5>
      <h1></h1>
      <h1></h1>
      <div v-if="errorMessage" class="toast-message" :class="{ 'fade-out': fadeOut }">{{ errorMessage }}</div>
      <div class="form-group mt-3">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
          placeholder="Enter username"
          @keyup.enter="login"
        />
      </div>
      <div class="form-group mt-3">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Enter password"
          @keyup.enter="login"
        />
      </div>
      <button class="btn btn-primary w-100 mt-4" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      fadeOut: false,
    };
  },
  methods: {
    login() {
      const validUsername = 'ken';
      const validPassword = '2024';

      if (this.username === validUsername && this.password === validPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        this.$router.push({ name: 'Home' }); // Change this to redirect to Home
      } else {
        if (this.username !== validUsername && this.password !== validPassword) {
          this.errorMessage = "Invalid username and password!";
        } else if (this.username !== validUsername) {
          this.errorMessage = "Invalid username!";
        } else if (this.password !== validPassword) {
          this.errorMessage = "Invalid password!";
        }

        this.fadeOut = false;
        setTimeout(() => {
          this.fadeOut = true;
        }, 3000);

        setTimeout(() => {
          this.errorMessage = '';
          this.fadeOut = false;
        }, 4000);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  background-color: #B99470;
  height: 100vh;
}

.toast-message {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  transition: opacity 1s ease-in-out;
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

.form-group {
  margin-bottom: 10px; /* Add consistent space between form groups */
}
</style>

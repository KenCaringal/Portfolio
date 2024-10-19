<template>
  <div class="container">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="mb-4">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="form.name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="5"
          v-model="form.message"
          placeholder="Type your message here..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn"
        :style="{ backgroundColor: isPressed ? '#C0EBA6' : (isHovered ? '#A6B37D' : '#626F47'), color: '#ffffff' }"
        @mousedown="isPressed = true"
        @mouseup="isPressed = false"
        @mouseleave="isPressed = false; isHovered = false" 
        @mouseover="isHovered = true"
      >
        Send Message
      </button>
    </form>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'ConTact',
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      isPressed: false, // Track the pressed state of the button
      isHovered: false, // Track the hover state of the button
    };
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.form.name}`);
      // Handle form submission logic here
      this.isPressed = false; // Reset the button state after submission
    },
  },
  components: {
    AppFooter,
  },
};
</script>

<style scoped>
.container {
  padding: 40px; /* Increased padding for more space */
  background-color: #493628; /* Dark background color */
  border-radius: 10px; /* Rounded corners */
  max-width: 600px; /* Max width for form container */
  margin: 0 auto; /* Centering the container */
  color: #ffffff; /* White text color */
}

h2 {
  text-align: center; /* Center the title */
  margin-bottom: 40px; /* Space below the title */
  color: #ffffff; /* Light blue color for the title */
  font-family: 'Courier New', monospace; /* Techy font style */
  font-size: 2rem; /* Larger font size for the title */
}

.contact-form {
  display: flex;
  flex-direction: column; /* Column layout for the form */
}

.form-label {
  margin-bottom: 5px; /* Space below labels */
  font-weight: 600; /* Bold labels */
}

.form-control {
  padding: 15px; 
  border: 1px solid #FEFAE0; 
  border-radius: 5px; 
  background-color: #B99470; 
  color: #ffffff; 
  font-size: 1rem; 
  transition: border-color 0.3s, box-shadow 0.3s; 
}

.form-control::placeholder {
  color: #ffffff; 
  opacity: 1; 
}

.form-control:focus {
  border-color: #FEFAE0; 
  box-shadow: 0 0 5px rgba(254, 250, 224, 0.5); 
  outline: none; 
}

.btn {
  padding: 15px 20px; 
  border: none; 
  border-radius: 5px; 
  color: white; 
  font-weight: bold; 
  transition: background-color 0.3s, transform 0.2s; 
  font-size: 1rem; 
  cursor: pointer; /* Change cursor to pointer for buttons */
}
</style>

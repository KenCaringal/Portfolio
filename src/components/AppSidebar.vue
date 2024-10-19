<template>
  <div id="sidebar-wrapper">
    <div class="navbar-brand text-center py-3 fs-4 text-light border-bottom">
      <strong>My Portfolio</strong>
    </div>

    <div class="list-group list-group-flush flex-grow-1 overflow-auto">
      <button
        class="list-group-item list-group-item-action text-light d-flex align-items-center"
        :class="{ active: isActive('/dashboard') }"
        @click="navigateTo('/dashboard')"
      >
        <i class="bi bi-speedometer2 me-2"></i> Dashboard
      </button>

      <button
        class="list-group-item list-group-item-action text-light d-flex align-items-center"
        :class="{ active: isActive('/dashboard/profile') }"
        @click="navigateTo('/dashboard/profile')"
      >
        <i class="bi bi-people me-2"></i> Profile
      </button>

      <button
        class="list-group-item list-group-item-action text-light d-flex align-items-center"
        :class="{ active: isActive('/dashboard/portfolio') }"
        @click="navigateTo('/dashboard/portfolio')"
      >
        <i class="bi bi-gear me-2"></i> Portfolio Showcase
      </button>

      <button
        class="list-group-item list-group-item-action text-light d-flex align-items-center"
        :class="{ active: isActive('/dashboard/contact') }"
        @click="navigateTo('/dashboard/contact')"
      >
        <i class="bi bi-gear me-2"></i> Contact
      </button>

      <button
        class="list-group-item list-group-item-action text-light d-flex align-items-center"
        :class="{ active: isActive('/dashboard/creative') }"
        @click="navigateTo('/dashboard/creative')"
      >
        <i class="bi bi-gear me-2"></i> Creative
      </button>
    </div>

    <div class="p-3 border-top">
      <button
        class="btn w-100 d-flex align-items-center justify-content-center"
        :style="{ backgroundColor: isLogoutPressed ? '#C0EBA6' : (isLogoutHovered ? '#A6B37D' : '#626F47'), color: isLogoutPressed || isLogoutHovered ? 'black' : '#ffffff' }"
        @click="logout"
        @mousedown="isLogoutPressed = true"
        @mouseup="isLogoutPressed = false"
        @mouseleave="isLogoutPressed = false; isLogoutHovered = false" 
        @mouseover="isLogoutHovered = true"
      >
        <i class="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
      isLogoutPressed: false,
      isLogoutHovered: false,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route); // Navigate to the specified route
    },
    logout() {
      localStorage.removeItem('isAuthenticated'); // Remove authentication flag
      this.$router.push({ name: 'Login' }); // Redirect to the Login page
    },
    isActive(route) {
      return this.$route.path === route; // Check if the current route matches the button's route
    },
  },
};
</script>

<style scoped>
#sidebar-wrapper {
  width: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  background-color: #626F47; /* Sidebar background color */
}

.list-group-item {
  border: none;
  color: #ffffff; /* Set text color to white */
  background-color: transparent; /* Make the background transparent by default */
  transition: background-color 0.3s ease, font-size 0.3s ease, color 0.3s ease; /* Add transition for color and font size */
  cursor: pointer; /* Change cursor to pointer for buttons */
}

.list-group-item:hover {
  background-color: #A6B37D; /* Change background on hover */
  color: black; /* Change text color to black on hover */
}

.active {
  background-color: #C0EBA6 !important; /* Active background color */
  color: black !important; /* Active text color */
  font-size: 1.1rem; /* Slightly larger font size for active state */
}

/* Ensure the links scroll independently of the logout button */
.list-group-flush {
  overflow-y: auto;
}

/* Ensure sidebar fills the height and logout stays pinned */
.flex-grow-1 {
  flex-grow: 1;
}

/* Button styles */
.btn {
  background-color: #626F47; /* Set default button color */
  color: #ffffff; /* Button text color */
  border: 2px solid #A6B37D; /* Set button border color */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
}

.btn:hover {
  background-color: #A6B37D; /* Change color on hover */
  border-color: #A6B37D; /* Keep border color consistent on hover */
  color: black; /* Change font color to black on hover */
}

.btn:active {
  color: black; /* Change font color to black when pressed */
}
</style>

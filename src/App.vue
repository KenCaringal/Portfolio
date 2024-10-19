<template>
  <div id="app" class="d-flex">
    <!-- Conditionally render the sidebar -->
    <AppSidebar v-if="$route.name !== 'Login'" />

    <!-- Main Content Wrapper -->
    <div class="content-wrapper d-flex flex-column flex-grow-1 w-100">
      <router-view class="content flex-grow-1 p-4" />
    </div>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";

export default {
  name: "AppRoot",
  components: {
    AppSidebar,
  },
};
</script>

<style>
/* Ensure the wrapper takes the full height */
#wrapper {
  min-height: 100vh;
  display: flex;
}

/* Sidebar stays fixed with a width */
#sidebar-wrapper {
  width: 250px;
  flex-shrink: 0;
  background-color: #F7DCB9;
  overflow-y: auto; /* Scrollable sidebar if content overflows */
}

/* Main content and footer take full remaining space */
#page-content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Ensure content area grows and pushes footer down */
.container-fluid {
  flex-grow: 1;
  overflow-y: auto;
}
</style>

<template>
  <div id="wrapper" class="d-flex">
    <div id="page-content-wrapper" class="w-100">
      <div class="container-fluid my-4">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue';

export default {
  name: 'DashboardLayout',
  components: {
    AppFooter,
  },
};
</script>

<style scoped>
#wrapper {
  background-color: #F7DCB9; /* Set the background color to match your sidebar */
  height: 100vh; /* Ensure it takes full height */
  display: flex; /* Flex display to align sidebar and content */
}

#page-content-wrapper {
  background-color: #F7DCB9; /* Match the dashboard's background color */
  flex-grow: 1; /* Allow it to take remaining space */
  overflow-y: auto; /* Ensure scroll if needed */
}
</style>

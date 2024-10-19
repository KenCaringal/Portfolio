<template>
  <div class="container mt-4">
    <h2 class="mb-4">Overview</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div class="card" style="background-color: #493628; border: none;">
          <div class="card-body text-center"> <!-- Added text-center class -->
            <h5 class="card-title text-white">Total Soft Skills</h5>
            <p class="card-text fs-4 text-white">16</p>
            <i class="bi bi-people card-icon"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card" style="background-color: #493628; border: none;">
          <div class="card-body text-center"> <!-- Added text-center class -->
            <h5 class="card-title text-white">Total Hard Skills</h5>
            <p class="card-text fs-4 text-white">6</p>
            <i class="bi bi-person-check card-icon"></i>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-3">
        <div class="card" style="background-color: #493628; border: none;">
          <div class="card-body text-center"> <!-- Added text-center class -->
            <h5 class="card-title text-white">Total Portfolios</h5>
            <p class="card-text fs-4 text-white">2</p>
            <i class="bi bi-currency-dollar card-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
.card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

#page-content-wrapper {
  flex: 1;
  background-color: #DEAC80;
}

.card-icon {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 2rem;
  opacity: 0.3;
}
</style>

<template>
  <div class="portfolio-container">
    <h1 class="text-center">My Portfolio</h1>

    <div class="projects-section">
      <div class="project-card">
        <h2>GitHub Project</h2>
        <img src="../assets/website.jpg" alt="GitHub Project Image" class="project-image" />
        <p>View this project on GitHub</p>
        <a href="https://github.com/your-github-username/your-project-repo" target="_blank" class="btn btn-primary">View on GitHub</a>
      </div>

      <div class="project-card">
        <h2>YouTube Project</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/mZiU5Mxbmo0" 
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        
        <p>Other Website Designed.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortFolio',
};
</script>

<style scoped>
.portfolio-container {
  padding: 20px;
  background-color: #F7DCB9; /* Background color for the portfolio page */
  min-height: calc(100vh - 100px); /* Adjust for header/footer height */
}

.projects-section {
  display: flex;
  justify-content: space-around; /* Space out the project cards */
  margin: 20px 0; /* Space above and below */
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

.project-card {
  background-color: #fff; /* Card background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  padding: 20px;
  max-width: 45%; /* Max width for each project card */
  flex: 1; /* Allow sections to grow and fill space */
  margin: 10px; /* Space between project sections */
  text-align: center; /* Center align content */
}

.project-card h2 {
  margin-bottom: 10px; /* Space below the title */
}

.project-card p {
  margin-bottom: 20px; /* Space below the description */
}

.project-image {
  width: 100%; /* Make the image responsive */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 10px; /* Space below the image */
}

.btn {
  margin-top: 10px; /* Space above the button */
}
</style>

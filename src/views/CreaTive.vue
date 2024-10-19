<template>
  <div class="creative-container">
    <h1 class="text-center">My Skills and YouTube Highlights</h1>

    <div class="skills-section">
      <div class="skills hard-skills">
        <h2>Hard Skills</h2>
        <div class="hard-skills-columns">
          <ul>
            <li>Basic Programming Knowledge</li>
            <li>Basic SQL</li>
            <li>Computer Literacy</li>
          </ul>
          <ul>
            <li>Data Analysis</li>
            <li>Financial Organizing</li>
            <li>Video Editing</li>
          </ul>
        </div>
      </div>

      <div class="skills soft-skills">
        <h2>Soft Skills</h2>
        <div class="soft-skills-columns">
          <ul>
            <li>Active Listener</li>
            <li>Analytical Thinker</li>
            <li>Curiosity</li>
            <li>Fast Learner</li>
            <li>Flexible</li>
            <li>Honest</li>
            <li>Integrity</li>
            <li>Patient</li>
          </ul>
          <ul>
            <li>Perseverance</li>
            <li>Persuasion</li>
            <li>Problem-Solver</li>
            <li>Relationship Builder</li>
            <li>Resilient</li>
            <li>Teamwork</li>
            <li>Trustworthy</li>
            <li>Willingness to Learn</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="youtube-players">
      <div class="youtube-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/PZKMHEABJXk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Kac8HpoEz3A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
  <h1 class="h1"></h1>
</template>

<script>
export default {
  name: 'CreaTive',
};
</script>

<style scoped>
.creative-container {
  padding: 20px;
  background-color: #F7DCB9; /* Background color for the creative page */
  min-height: calc(100vh - 100px); /* Adjust for header/footer height */
}

.skills-section {
  display: flex;
  justify-content: space-around; /* Space out the skills sections */
  margin: 20px 0; /* Space above and below */
}

.skills {
  background-color: #fff; /* Card background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  padding: 20px;
  max-width: 45%; /* Max width for each skills section */
  flex: 1; /* Allow sections to grow and fill space */
  margin: 10px; /* Space between skill sections */
}

.soft-skills-columns {
  display: flex;
  justify-content: space-between; /* Space between the two columns */
}

.soft-skills-columns ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  width: 48%; /* Each column takes up to 48% of the width */
}

.skills h2 {
  text-align: center; /* Center align the title */
}

.skills li {
  padding: 5px 0; /* Space between list items */
  text-align: left; /* Align text to the left */
}

.youtube-players {
  margin-top: 30px; /* Space above the YouTube player */
  text-align: center; /* Center the YouTube section */
}

.youtube-container {
  display: flex;
  justify-content: center; /* Center videos in a row */
  gap:71px; /* Space between videos */
}

iframe {
  border: none; /* Remove border for the iframe */
  max-width: 45%; /* Set maximum width for each video */
  height: 315px; /* Fixed height for videos */
}

.hard-skills-columns {
  display: flex; /* Use flexbox for two columns */
  justify-content: space-between; /* Space between the two columns */
}

.hard-skills-columns ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  width: 48%; /* Each column takes up to 48% of the width */
}

.h1 {
  height: 30px;
}
</style>

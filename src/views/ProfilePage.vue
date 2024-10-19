<template>
  <div class="profile-container">
    <h1 class="text-center">Profile Page</h1>
    <div class="profile-card">
      <div class="profile-header text-center">
        <!-- Use the imported image here -->
        <img
          :src="profileImage"  
          alt="Profile Picture"
          class="profile-picture"
        />
        <h2 class="profile-name">Ken Caringal</h2>
        <p class="profile-bio">Computer Engineering Student | Cyber Security | Lifelong Learner | Programmer</p>
      </div>
      <div class="profile-info">
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Email:</strong> mkrcaringal1@tip.edu.ph</li>
          <li><strong>Phone:</strong> 09062156993</li>
        </ul>
        <h3>Social Media</h3>
        <ul class="social-media-links"> 
          <li><a href="https://www.instagram.com/lorenkrc/" target="_blank">Instagram</a></li>
          <li><a href="https://github.com/KenCaringal" target="_blank">GitHub</a></li>
          <li><a href="https://www.facebook.com/caringal.ken/" target="_blank">Facebook</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '@/assets/profile.jpg'; // Import the image

export default {
  name: 'ProfilePage',
  data() {
    return {
      profileImage, // Bind the imported image to a data property
    };
  },
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
  background-color: #F7DCB9; /* Background color for the profile page */
  min-height: calc(100vh - 100px); /* Adjust for header/footer height */
}

.profile-card {
  background-color: #fff; /* Card background color */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  padding: 20px;
  max-width: 600px;
  margin: 20px auto; /* Center the card */
}

.profile-header {
  margin-bottom: 20px;
}

.profile-picture {
  border-radius: 50%; /* Circular profile picture */
  width: 150px; /* Set width */
  height: 150px; /* Set height */
}

.profile-name {
  margin: 10px 0 5px; /* Spacing for the name */
}

.profile-bio {
  font-style: italic; /* Italicize the bio */
  color: #666; /* Slightly darker color for bio */
}

.profile-info h3 {
  margin-top: 20px; /* Space above section headings */
}

.profile-info ul {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
}

.profile-info li {
  margin-bottom: 10px; /* Space between list items */
}

.social-media-links {
  padding-left: 0; /* Ensure left alignment */
}

.social-media-links li {
  display: inline; /* Display links inline */
  margin-right: 15px; /* Space between links */
}

.profile-info a {
  color: #007bff; /* Link color */
  text-decoration: none; /* Remove underline */
}

.profile-info a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>

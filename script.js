function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  let currentIndex = 0;
  const projects = document.querySelectorAll('.details-container');
  const projectsPerPage = 3;
  
  function showProjects() {
    projects.forEach((project, index) => {
      project.classList.remove('active');
      if (index >= currentIndex && index < currentIndex + projectsPerPage) {
        project.classList.add('active');
      }
    });
  }
  
  function nextProjects() {
    if (currentIndex + projectsPerPage < projects.length) {
      currentIndex += projectsPerPage;
    }
    showProjects();
  }
  
  function prevProjects() {
    if (currentIndex - projectsPerPage >= 0) {
      currentIndex -= projectsPerPage;
    }
    showProjects();
  }
  

  
  // Initialize the display
  showProjects();

  


  const slideshowImages = document.querySelectorAll(".about-containers4");
  const nextImageDelay = 3000;
  let currentImageCounter = 0;
  
  // Show the initial image
  slideshowImages[currentImageCounter].style.display = "flex";
  
  setInterval(nextImageWithFade, nextImageDelay);
  
  function nextImageWithFade() {
      // Hide the current image
      slideshowImages[currentImageCounter].style.display = "none";
  
      // Increment counter to show the next image
      currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  
      // Display the next image
      slideshowImages[currentImageCounter].style.display = "flex";
      
  }
  





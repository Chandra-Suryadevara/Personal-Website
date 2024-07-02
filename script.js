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

  








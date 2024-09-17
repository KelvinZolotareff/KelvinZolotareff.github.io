document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove 'active' class from all menu links
      document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));

      // Add 'active' class to clicked menu link
      this.classList.add('active');

      // Hide all sections
      document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

      // Show the selected section
      const sectionId = this.getAttribute('data-section');
      document.getElementById(sectionId).classList.add('active');
    });
  });

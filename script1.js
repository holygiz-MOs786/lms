// Sample content for each subject
const subjectsContent = {
    math: `<h3>Mathematics</h3><p>Resources for Algebra, Geometry, Trigonometry, and Probability.</p>`,
    science: `<h3>Science</h3><p>Explore Physics, Chemistry, and Biology with detailed notes and videos.</p>`,
    social: `<h3>Social Science</h3><p>Learn History, Geography, Civics, and Economics.</p>`,
  };
  
  // Load content based on subject selection
  function loadContent(subject) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = subjectsContent[subject] || `<p>Content not available.</p>`;
  }
  
  // Form submission handler
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    e.target.reset();
  });
  
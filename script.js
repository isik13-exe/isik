// Store all page content
const pages = {
  home: `
    <section id="home" class="section">
      <div class="content">
        <div class="left">
          <br><br>
          <h3>Hi, I'm isik!</h3>
          <h1>web <span>designer</span></h1>
          <p>
            isik is a passionate and creative web designer known for crafting visually stunning 
            and user-friendly websites. With a keen eye for design and a deep understanding of 
            modern web development, she transforms ideas into beautifully functional digital experiences.
          </p>
          <div class="cta-section">
            <button class="cta-1">Projects <i class="fa-solid fa-code"></i></button>
            <button class="cta-2">Hire me <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
          <div class="social-section">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div class="right">
          <div class="img-wrap">
            <img class="hero-img" src="pro-pic.png">
          </div>
        </div>
      </div>
    </section>
  `,
  
  about: `
    <section id="about" class="section">
      <div class="content">
        <div class="left">
          <br><br>
          <h3>About Me</h3>
          <h1>my <span>story</span></h1>
          <p>
            With over 5 years of experience in web design, I've developed a passion for creating 
            digital experiences that are both beautiful and functional. My journey began with a 
            degree in Graphic Design, which evolved into a love for web technologies.
          </p>
          <p>
            I specialize in responsive design, user experience, and bringing creative visions to life. 
            When I'm not designing, you can find me exploring new design trends, mentoring aspiring 
            designers, or enjoying outdoor adventures.
          </p>
          <div class="cta-section">
            <button class="cta-1">My Skills <i class="fa-solid fa-code"></i></button>
            <button class="cta-2">Download CV <i class="fa-solid fa-download"></i></button>
          </div>
        </div>
        <div class="right">
          <div class="img-wrap">
            <img class="hero-img" src="pro-pic.png">
          </div>
        </div>
      </div>
    </section>
  `,

  portfolio: `
    <section id="portfolio" class="section">
      <div class="content">
        <div class="left">
          <br><br><br><br><br><br><br>
          <h3>My Work</h3>
          <h1>portfolio <span>projects</span></h1>
          <p>
            Here's a selection of my recent work. Each project represents a unique challenge and creative solution, 
            showcasing my skills in web design, user experience, and development.
          </p>
          
          <div class="portfolio-grid">
            <div class="portfolio-item">
              <h4>E-commerce Website</h4>
              <p>Modern online store with custom CMS integration</p>
            </div>
            <div class="portfolio-item">
              <h4>Corporate Branding</h4>
              <p>Complete visual identity for tech startup</p>
            </div>
            <div class="portfolio-item">
              <h4>Mobile App UI</h4>
              <p>Fitness tracking application interface</p>
            </div>
          </div>
          
          <div class="cta-section">
            <button class="cta-1">View All <i class="fa-solid fa-eye"></i></button>
          </div>
        </div>
      </div>
    </section>
  `,

  blog: `
    <section id="blog" class="section">
      <div class="content">
        <div class="left">
          <br><br><br><br>
          <h3>My Thoughts</h3>
          <h1>blog <span>posts</span></h1>
          <p>
            Sharing insights about web design, user experience, and creative process. 
            Here you'll find tutorials, case studies, and reflections on design trends.
          </p>
          
          <div class="blog-posts">
            <div class="blog-post">
              <h4>The Future of Responsive Design</h4>
              <p>Exploring upcoming trends in adaptive layouts...</p>
            </div>
            <div class="blog-post">
              <h4>Color Psychology in Web Design</h4>
              <p>How colors influence user behavior and perception...</p>
            </div>
          </div>
          
          <div class="cta-section">
            <button class="cta-1">Read More <i class="fa-solid fa-book-open"></i></button>
          </div>
        </div>
      </div>
    </section>
  `,

  contact: `
    <section id="contact" class="section">
      <div class="content">
        <div class="left">
          <br>
          <h3>Get In Touch</h3>
          <h1>contact <span>me</span></h1>
          <p>
            Have a project in mind or want to discuss potential collaboration? 
            I'd love to hear from you! Fill out the form below or reach out directly 
            through my contact information.
          </p>
          
          <form class="contact-form">
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" class="cta-1">Send Message <i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </section>
  `
};

// Load initial page
document.addEventListener('DOMContentLoaded', () => {
  // Check URL hash or default to home
  const initialPage = window.location.hash.substring(1) || 'home';
  loadPage(initialPage);
  setupNavigation();
});

function loadPage(page) {
  const content = document.getElementById('content');
  if (pages[page]) {
    content.innerHTML = pages[page];
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${page}`) {
        item.classList.add('active');
      }
    });
    
    // Update URL without reload
    window.history.pushState({}, '', `#${page}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Re-attach any event listeners needed for this page
    setupPageSpecificInteractions();
  }
}

function setupNavigation() {
  // Handle nav clicks
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('href').substring(1);
      loadPage(page);
    });
  });
  
  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const page = window.location.hash.substring(1) || 'home';
    loadPage(page);
  });
}

function setupPageSpecificInteractions() {
  // Add any page-specific JavaScript here
  // For example, form submission handling for contact page
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! (This is a demo)');
      contactForm.reset();
    });
  }
  
  // Add similar handlers for other interactive elements
}
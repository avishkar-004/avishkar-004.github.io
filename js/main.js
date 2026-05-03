/* ================================================================
   Main JavaScript - Portfolio App Logic & Data Population
   No async, no fetch — works on file:// protocol
   ================================================================ */

// Global data storage (var for hoisting / global access)
var portfolioData = {};

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', function () {
  portfolioData = typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : {};
  initNavigation();
  initThemeToggle();
  initScrollProgress();
  populateHero();
  populateAbout();
  populateSkills();
  populateProjects();
  initProjectFilters();
  populateExperience();
  populateAchievements();
  initBackToTop();

  // Signal that dynamic content is ready for animations
  document.dispatchEvent(new CustomEvent('portfolioDataReady'));
});

// ===== 1. NAVIGATION =====
function initNavigation() {
  var navbar = document.getElementById('navbar');
  var navMenu = document.getElementById('nav-menu');
  var mobileToggle = document.getElementById('mobile-toggle');
  var navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect — add .scrolled class
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Active link detection on scroll
  var sections = document.querySelectorAll('.section, .hero');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll for all anchor links (offset 80px for fixed navbar)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        var offsetTop = targetEl.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===== 2. THEME TOGGLE =====
function initThemeToggle() {
  var themeToggle = document.getElementById('theme-toggle');
  var html = document.documentElement;

  // Restore saved preference
  var savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  var icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

// ===== 3. SCROLL PROGRESS =====
function initScrollProgress() {
  var progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(scrollPercent));
  });
}

// ===== 4. POPULATE HERO =====
function populateHero() {
  var personal = portfolioData.personal;
  var stats = portfolioData.stats;
  if (!personal) return;

  // Set tagline
  var bioEl = document.getElementById('bio');
  if (bioEl) bioEl.textContent = personal.tagline || '';

  // Set stats
  var statMap = {
    'stat-cgpa': stats ? stats.cgpa : null,
    'stat-projects': stats ? stats.projects : null,
    'stat-tech': stats ? stats.technologies : null,
    'stat-certs': stats ? stats.certifications : null
  };
  Object.keys(statMap).forEach(function (id) {
    var el = document.getElementById(id);
    if (el && statMap[id]) el.textContent = statMap[id];
  });

  // Build social links
  var socialContainer = document.getElementById('social-links');
  if (socialContainer && personal.social) {
    var socialConfig = [
      { key: 'github', icon: 'fab fa-github', label: 'GitHub' },
      { key: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn' },
      { key: 'credly', icon: 'fas fa-certificate', label: 'Credly' }
    ];

    socialContainer.innerHTML = socialConfig
      .filter(function (s) { return personal.social[s.key]; })
      .map(function (s) {
        return '<a href="' + personal.social[s.key] + '" class="social-link" target="_blank" rel="noopener" aria-label="' + s.label + '" title="' + s.label + '">' +
          '<i class="' + s.icon + '"></i>' +
          '</a>';
      }).join('');
  }
}

// ===== 5. POPULATE ABOUT =====
function populateAbout() {
  var personal = portfolioData.personal;
  var education = portfolioData.education;
  if (!personal || !education) return;

  // Bio
  var bioEl = document.getElementById('about-bio');
  if (bioEl) bioEl.textContent = personal.bio || '';

  // Education details
  var eduEl = document.getElementById('education-details');
  if (eduEl) {
    eduEl.innerHTML =
      '<h4>' + education.degree + '</h4>' +
      '<p>' + education.university + '</p>' +
      '<p><strong>CGPA:</strong> ' + education.cgpa + '/' + education.cgpa_scale + ' | ' + education.duration + '</p>';
  }
}

// ===== 6. POPULATE SKILLS =====
function populateSkills() {
  var skills = portfolioData.skills;
  if (!skills) return;

  var skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) return;

  var categories = [
    { title: 'Languages', icon: 'fas fa-code', data: skills.languages },
    { title: 'Frameworks', icon: 'fas fa-layer-group', data: skills.frameworks },
    { title: 'Databases', icon: 'fas fa-database', data: skills.databases },
    { title: 'Tools', icon: 'fas fa-tools', data: skills.tools },
    { title: 'Concepts', icon: 'fas fa-brain', data: skills.concepts }
  ];

  skillsGrid.innerHTML = categories.map(function (cat) {
    var pills = cat.data.map(function (skill) {
      return '<span class="skill-pill">' + skill + '</span>';
    }).join('');

    return '<div class="skill-group">' +
      '<span class="skill-group-title"><i class="' + cat.icon + '"></i> ' + cat.title + '</span>' +
      '<div class="skill-pills">' + pills + '</div>' +
      '</div>';
  }).join('');
}

// ===== 7. POPULATE PROJECTS =====
function populateProjects() {
  var projects = portfolioData.projects;
  if (!projects) return;

  var projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map(function (project) {
    // Metrics section (only if metrics exist and have entries)
    var hasMetrics = project.metrics && Object.keys(project.metrics).length > 0;
    var metricsHtml = '';
    if (hasMetrics) {
      metricsHtml = '<div class="project-metrics">' +
        Object.keys(project.metrics).map(function (key) {
          return '<div class="metric">' +
            '<span class="metric-val">' + project.metrics[key] + '</span>' +
            '<span class="metric-key">' + key.replace(/_/g, ' ') + '</span>' +
            '</div>';
        }).join('') +
        '</div>';
    }

    // Links section
    var linksHtml = '';
    if (project.github || project.demo) {
      linksHtml = '<div class="project-links">';
      if (project.github) {
        linksHtml += '<a href="' + project.github + '" class="project-link" target="_blank" rel="noopener">' +
          '<i class="fab fa-github"></i> GitHub</a>';
      }
      if (project.demo) {
        linksHtml += '<a href="' + project.demo + '" class="project-link" target="_blank" rel="noopener">' +
          '<i class="fas fa-external-link-alt"></i> Live Demo</a>';
      }
      linksHtml += '</div>';
    }

    // Tags
    var tagsHtml = project.tags.map(function (tag) {
      return '<span class="project-tag">' + tag + '</span>';
    }).join('');

    return '<div class="project-card" data-category="' + project.category + '">' +
      '<div class="project-thumb"><i class="fas fa-code"></i></div>' +
      '<div class="project-body">' +
      '<h3 class="project-title">' + project.title + '</h3>' +
      '<p class="project-subtitle">' + project.subtitle + '</p>' +
      '<div class="project-tags">' + tagsHtml + '</div>' +
      '<p class="project-desc">' + project.description + '</p>' +
      metricsHtml +
      linksHtml +
      '</div>' +
      '</div>';
  }).join('');
}

// ===== 8. PROJECT FILTERS =====
function initProjectFilters() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      // Update active button + aria
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter with fade animation
      projectCards.forEach(function (card) {
        var matches = filter === 'all' || card.getAttribute('data-category') === filter;
        if (matches) {
          card.style.display = '';
          // Trigger reflow then fade in
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          requestAnimationFrame(function () {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.transition = 'opacity 0.25s ease';
          card.style.opacity = '0';
          setTimeout(function () {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// ===== 9. POPULATE EXPERIENCE =====
function populateExperience() {
  var experience = portfolioData.experience;
  if (!experience) return;

  var timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = experience.map(function (exp) {
    var tasks = exp.responsibilities.map(function (r) {
      return '<li>' + r + '</li>';
    }).join('');

    var techTags = exp.technologies.map(function (tech) {
      return '<span class="tech-tag">' + tech + '</span>';
    }).join('');

    return '<div class="timeline-item">' +
      '<div class="timeline-dot"></div>' +
      '<div class="timeline-content">' +
      '<div class="timeline-header">' +
      '<img src="' + (exp.logo || '') + '" class="company-logo" alt="' + exp.company + '" onerror="this.style.display=\'none\'">' +
      '<div>' +
      '<h3>' + exp.company + '</h3>' +
      '<p class="timeline-role">' + exp.role + ' (' + exp.type + ')</p>' +
      '<p class="timeline-period">' + exp.duration + ' | ' + exp.location + '</p>' +
      '</div>' +
      '</div>' +
      '<p class="timeline-desc">' + exp.description + '</p>' +
      '<ul class="timeline-tasks">' + tasks + '</ul>' +
      '<div class="timeline-tech">' + techTags + '</div>' +
      '</div>' +
      '</div>';
  }).join('');
}

// ===== 10. POPULATE ACHIEVEMENTS =====
function populateAchievements() {
  var achievements = portfolioData.achievements;
  var certifications = portfolioData.certifications;

  // Achievement cards
  if (achievements) {
    var achievementsGrid = document.getElementById('achievements-grid');
    if (achievementsGrid) {
      achievementsGrid.innerHTML = achievements.map(function (ach) {
        var linkHtml = ach.link
          ? '<a href="' + ach.link + '" class="achievement-link" target="_blank" rel="noopener">' +
            '<i class="fas fa-file-pdf"></i> ' + (ach.link_text || 'View Certificate') + '</a>'
          : '';
        return '<div class="achievement-card">' +
          '<div class="achievement-icon"><i class="fas fa-' + ach.icon + '"></i></div>' +
          '<h3>' + ach.title + '</h3>' +
          '<p>' + ach.description + '</p>' +
          linkHtml +
          '<span class="achievement-date">' + ach.date + '</span>' +
          '</div>';
      }).join('');
    }
  }

  // Certification cards
  if (certifications) {
    var certsContainer = document.getElementById('certifications-slider');
    if (certsContainer) {
      certsContainer.innerHTML = certifications.map(function (cert) {
        var iconHtml = cert.icon
          ? '<img src="' + cert.icon + '" alt="' + cert.issuer + '" class="cert-icon" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
          : '';

        var initialHtml = '<div class="cert-initial"' + (cert.icon ? ' style="display:none"' : '') + '>' + cert.issuer[0] + '</div>';

        return '<div class="cert-card">' +
          '<div class="cert-icon-wrap">' + iconHtml + initialHtml + '</div>' +
          '<div class="cert-details">' +
          '<h4>' + cert.name + '</h4>' +
          '<p>' + cert.issuer + (cert.score ? ' &middot; Score: ' + cert.score : '') + '</p>' +
          '</div>' +
          '</div>';
      }).join('');
    }
  }
}

// ===== 11. BACK TO TOP =====
function initBackToTop() {
  var backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

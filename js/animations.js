/* ================================================================
   Animations JavaScript - Visual Effects, Terminal Boot & CLI
   No async, no fetch, no purple — works on file:// protocol
   ================================================================ */

// ===== 1. TERMINAL BOOT CLASS =====
var TerminalBoot = (function () {
  function TerminalBoot() {
    this.output = document.getElementById('boot-output');
    this.container = document.getElementById('terminal-boot');
    if (!this.output || !this.container) return;
    this.charDelay = 25;
    this.lines = [
      { text: '> initializing avishkar.system v2.0...', color: '#7ECEC0' },
      { text: '> loading modules...', color: '#7ECEC0' },
      { text: '  [progress]', color: '#7ECEC0', isProgress: true },
      { text: '> distributed_database    [loaded] \u2713', color: '#7ECEC0' },
      { text: '> event_streaming         [loaded] \u2713', color: '#7ECEC0' },
      { text: '> vector_database         [loaded] \u2713', color: '#7ECEC0' },
      { text: '> GATE 2026: AIR 3124 | Score: 601 \u2713', color: '#7ECEC0' },
      { text: '> certifications: 8 loaded \u2713', color: '#7ECEC0' },
      { text: '> system ready. launching portfolio...', color: '#7ECEC0' }
    ];
    this.currentLine = 0;
    this.start();
  }

  TerminalBoot.prototype.start = function () {
    this.typeLine();
  };

  TerminalBoot.prototype.typeLine = function () {
    var self = this;
    if (self.currentLine >= self.lines.length) {
      // All lines done — wait 500ms then add boot-done class
      setTimeout(function () {
        self.container.classList.add('boot-done');
      }, 500);
      return;
    }

    var lineData = self.lines[self.currentLine];

    if (lineData.isProgress) {
      self.typeProgressBar(function () {
        self.currentLine++;
        self.typeLine();
      });
      return;
    }

    var span = document.createElement('span');
    span.style.color = lineData.color;
    self.output.appendChild(span);

    var text = lineData.text;
    var charIdx = 0;

    function typeChar() {
      if (charIdx < text.length) {
        span.textContent += text[charIdx];
        charIdx++;
        self.scrollOutputDown();
        setTimeout(typeChar, self.charDelay);
      } else {
        // Add newline
        self.output.appendChild(document.createTextNode('\n'));
        self.currentLine++;
        // Small gap between lines
        setTimeout(function () {
          self.typeLine();
        }, 80);
      }
    }

    typeChar();
  };

  TerminalBoot.prototype.typeProgressBar = function (callback) {
    var self = this;
    var totalBlocks = 20;
    var currentBlock = 0;
    var prefix = '  [';
    var suffix = '] ';

    var span = document.createElement('span');
    span.style.color = '#7ECEC0';
    span.textContent = prefix;
    self.output.appendChild(span);

    var barSpan = document.createElement('span');
    barSpan.style.color = '#7ECEC0';
    self.output.appendChild(barSpan);

    var suffixSpan = document.createElement('span');
    suffixSpan.style.color = '#7ECEC0';
    self.output.appendChild(suffixSpan);

    function addBlock() {
      if (currentBlock < totalBlocks) {
        currentBlock++;
        // Build the bar: filled blocks + remaining spaces
        var filled = '';
        for (var i = 0; i < currentBlock; i++) filled += '\u2588';
        var empty = '';
        for (var j = currentBlock; j < totalBlocks; j++) empty += ' ';
        barSpan.textContent = filled + empty;

        var pct = Math.round((currentBlock / totalBlocks) * 100);
        suffixSpan.textContent = suffix + pct + '%';
        self.scrollOutputDown();
        setTimeout(addBlock, 40);
      } else {
        self.output.appendChild(document.createTextNode('\n'));
        callback();
      }
    }

    addBlock();
  };

  TerminalBoot.prototype.scrollOutputDown = function () {
    if (this.output.parentElement) {
      this.output.parentElement.scrollTop = this.output.parentElement.scrollHeight;
    }
  };

  return TerminalBoot;
})();

// Initialize terminal boot on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  new TerminalBoot();
});


// ===== 2. INTERACTIVE CLI CLASS =====
var InteractiveCLI = (function () {
  function InteractiveCLI() {
    this.overlay = document.getElementById('cli-overlay');
    this.input = document.getElementById('cli-input');
    this.outputEl = document.getElementById('cli-output');
    this.closeBtn = document.getElementById('cli-close');
    this.toggleBtn = document.getElementById('terminal-btn');
    if (!this.overlay || !this.input || !this.outputEl) return;

    this.isOpen = false;
    this.history = [];
    this.historyIndex = -1;
    this.bindEvents();
  }

  InteractiveCLI.prototype.bindEvents = function () {
    var self = this;

    // Toggle with backtick key
    document.addEventListener('keydown', function (e) {
      // Backtick — keyCode 192, or key === '`'
      if (e.keyCode === 192 || e.key === '`') {
        // Don't trigger when typing in input fields (except our own cli-input)
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          if (e.target !== self.input) return;
        }
        e.preventDefault();
        self.toggle();
      }
      // Escape to close
      if (e.key === 'Escape' && self.isOpen) {
        self.close();
      }
    });

    // Toggle button click
    if (self.toggleBtn) {
      self.toggleBtn.addEventListener('click', function () {
        self.toggle();
      });
    }

    // Close button click
    if (self.closeBtn) {
      self.closeBtn.addEventListener('click', function () {
        self.close();
      });
    }

    // Backdrop click to close
    self.overlay.addEventListener('click', function (e) {
      if (e.target === self.overlay) {
        self.close();
      }
    });

    // Enter to process command
    self.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var cmd = self.input.value.trim();
        if (cmd) {
          self.history.push(cmd);
          self.historyIndex = self.history.length;
          self.processCommand(cmd);
        }
        self.input.value = '';
      }
      // Command history with up/down arrows
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (self.historyIndex > 0) {
          self.historyIndex--;
          self.input.value = self.history[self.historyIndex];
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (self.historyIndex < self.history.length - 1) {
          self.historyIndex++;
          self.input.value = self.history[self.historyIndex];
        } else {
          self.historyIndex = self.history.length;
          self.input.value = '';
        }
      }
    });
  };

  InteractiveCLI.prototype.toggle = function () {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  InteractiveCLI.prototype.open = function () {
    this.overlay.classList.add('active');
    this.isOpen = true;
    var self = this;
    setTimeout(function () { self.input.focus(); }, 100);
  };

  InteractiveCLI.prototype.close = function () {
    this.overlay.classList.remove('active');
    this.isOpen = false;
  };

  InteractiveCLI.prototype.appendOutput = function (html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    this.outputEl.appendChild(div);
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  };

  InteractiveCLI.prototype.appendPrompt = function (cmd) {
    this.appendOutput(
      '<span style="color:#3A8F85">visitor@avishkar</span>' +
      '<span style="color:#7ECEC0">:</span>' +
      '<span style="color:#89B4E8">~</span>' +
      '<span style="color:#7ECEC0">$ </span>' +
      '<span style="color:#E6E6E6">' + this.escapeHtml(cmd) + '</span>'
    );
  };

  InteractiveCLI.prototype.escapeHtml = function (str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  InteractiveCLI.prototype.highlight = function (text) {
    return '<span style="color:#7ECEC0">' + text + '</span>';
  };

  InteractiveCLI.prototype.error = function (text) {
    return '<span style="color:#F2A9A9">' + text + '</span>';
  };

  InteractiveCLI.prototype.info = function (text) {
    return '<span style="color:#89B4E8">' + text + '</span>';
  };

  InteractiveCLI.prototype.processCommand = function (cmdRaw) {
    this.appendPrompt(cmdRaw);

    var parts = cmdRaw.toLowerCase().split(/\s+/);
    var cmd = parts[0];
    var arg = parts.slice(1).join(' ');

    switch (cmd) {
      case 'help':
        this.cmdHelp();
        break;
      case 'about':
        this.cmdAbout();
        break;
      case 'projects':
        this.cmdProjects();
        break;
      case 'skills':
        this.cmdSkills();
        break;
      case 'gate':
        this.cmdGate();
        break;
      case 'experience':
        this.cmdExperience();
        break;
      case 'contact':
        this.cmdContact();
        break;
      case 'certs':
      case 'certifications':
        this.cmdCertifications();
        break;
      case 'clear':
        this.cmdClear();
        break;
      case 'theme':
        this.cmdTheme(arg);
        break;
      case 'whoami':
        this.cmdWhoami();
        break;
      case 'neofetch':
        this.cmdNeofetch();
        break;
      default:
        this.appendOutput(
          '<pre>' + this.error('command not found: ' + this.escapeHtml(cmd) + ". Type 'help' for available commands.") + '</pre>'
        );
    }
  };

  // ----- COMMAND IMPLEMENTATIONS -----

  InteractiveCLI.prototype.cmdHelp = function () {
    var lines = [
      '',
      this.highlight('  Available Commands:'),
      '  ' + this.highlight('help') + '             Show this help message',
      '  ' + this.highlight('about') + '            About Avishkar (scrolls to section)',
      '  ' + this.highlight('projects') + '         List all projects',
      '  ' + this.highlight('skills') + '           Show skills grouped by category',
      '  ' + this.highlight('gate') + '             GATE exam comparison (2025 vs 2026)',
      '  ' + this.highlight('experience') + '       Work history',
      '  ' + this.highlight('contact') + '          Contact information & links',
      '  ' + this.highlight('certs') + '            List certifications',
      '  ' + this.highlight('clear') + '            Clear terminal output',
      '  ' + this.highlight('theme dark|light') + ' Toggle theme',
      '  ' + this.highlight('whoami') + '           Who is this?',
      '  ' + this.highlight('neofetch') + '         System info with ASCII art',
      ''
    ];
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdAbout = function () {
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var personal = data.personal || {};
    var education = data.education || {};

    var lines = [
      '',
      this.highlight('  ' + (personal.name || 'Avishkar Mahesh Pawar')),
      '  ' + (personal.title || ''),
      '',
      '  ' + (personal.bio || ''),
      '',
      '  ' + this.info('Education:') + ' ' + (education.degree || ''),
      '  ' + (education.university || '') + ' | CGPA: ' + (education.cgpa || '') + '/' + (education.cgpa_scale || ''),
      ''
    ];
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');

    // Scroll to about section
    var aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  InteractiveCLI.prototype.cmdProjects = function () {
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var projects = data.projects || [];

    var lines = ['', this.highlight('  Projects (' + projects.length + ')')];
    lines.push('  ' + '\u2500'.repeat(50));

    for (var i = 0; i < projects.length; i++) {
      var p = projects[i];
      lines.push('');
      lines.push('  ' + this.highlight((i + 1) + '. ' + p.title));
      lines.push('     ' + this.info('Category:') + ' ' + p.category);
      lines.push('     ' + p.description);
    }
    lines.push('');
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdSkills = function () {
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var skills = data.skills || {};

    var categories = [
      { name: 'Languages', key: 'languages' },
      { name: 'Frameworks', key: 'frameworks' },
      { name: 'Databases', key: 'databases' },
      { name: 'Tools', key: 'tools' },
      { name: 'Concepts', key: 'concepts' }
    ];

    var lines = ['', this.highlight('  Skills')];
    lines.push('  ' + '\u2500'.repeat(40));

    for (var i = 0; i < categories.length; i++) {
      var cat = categories[i];
      var items = skills[cat.key] || [];
      lines.push('');
      lines.push('  ' + this.info(cat.name + ':'));
      lines.push('    ' + items.join(', '));
    }
    lines.push('');
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdGate = function () {
    var lines = [
      '',
      this.highlight('  GATE CS Exam Results'),
      '',
      '  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510',
      '  \u2502  Year   \u2502   AIR    \u2502 Score \u2502 Marks  \u2502',
      '  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524',
      '  \u2502  2025   \u2502  9860    \u2502  453  \u2502 39.32  \u2502',
      '  \u2502  2026   \u2502  3124    \u2502  601  \u2502 51.45  \u2502',
      '  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518',
      '',
      '  ' + this.highlight('Improvement:') + ' 3.16x rank, +148 score',
      ''
    ];
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdExperience = function () {
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var experience = data.experience || [];

    var lines = ['', this.highlight('  Work Experience')];
    lines.push('  ' + '\u2500'.repeat(50));

    for (var i = 0; i < experience.length; i++) {
      var exp = experience[i];
      lines.push('');
      lines.push('  ' + this.highlight(exp.company) + ' \u2014 ' + exp.role + ' (' + exp.type + ')');
      lines.push('  ' + this.info(exp.duration) + ' | ' + exp.location);
      lines.push('  ' + exp.description);
      for (var j = 0; j < exp.responsibilities.length; j++) {
        lines.push('    \u2022 ' + exp.responsibilities[j]);
      }
      lines.push('  ' + this.info('Tech:') + ' ' + exp.technologies.join(', '));
    }
    lines.push('');
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdContact = function () {
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var personal = data.personal || {};
    var social = personal.social || {};

    var lines = [
      '',
      this.highlight('  Contact Information'),
      '  ' + '\u2500'.repeat(40),
      '',
      '  ' + this.info('Email:') + '    ' + (personal.email || 'N/A'),
      '  ' + this.info('Phone:') + '    ' + (personal.phone || 'N/A'),
      '  ' + this.info('Location:') + ' ' + (personal.location || 'N/A'),
      ''
    ];

    if (social.github) lines.push('  ' + this.info('GitHub:') + '   ' + social.github);
    if (social.linkedin) lines.push('  ' + this.info('LinkedIn:') + ' ' + social.linkedin);
    if (social.portfolio) lines.push('  ' + this.info('Website:') + '  ' + social.portfolio);
    if (social.credly) lines.push('  ' + this.info('Credly:') + '   ' + social.credly);
    lines.push('');

    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdCertifications = function () {
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var certs = data.certifications || [];

    var lines = ['', this.highlight('  Certifications (' + certs.length + ')')];
    lines.push('  ' + '\u2500'.repeat(50));

    for (var i = 0; i < certs.length; i++) {
      var c = certs[i];
      var num = (i + 1 < 10 ? ' ' : '') + (i + 1);
      var extra = '';
      if (c.score) extra = ' [Score: ' + c.score + ']';
      if (c.date) extra += ' (' + c.date + ')';
      lines.push('  ' + this.info(num + '.') + ' ' + c.name + ' \u2014 ' + c.issuer + extra);
    }
    lines.push('');
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  InteractiveCLI.prototype.cmdClear = function () {
    this.outputEl.innerHTML = '';
  };

  InteractiveCLI.prototype.cmdTheme = function (arg) {
    var html = document.documentElement;
    if (arg === 'dark') {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      updateThemeIcon('dark');
      this.appendOutput('<pre>' + this.highlight('  Theme switched to dark mode.') + '</pre>');
    } else if (arg === 'light') {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      updateThemeIcon('light');
      this.appendOutput('<pre>' + this.highlight('  Theme switched to light mode.') + '</pre>');
    } else {
      this.appendOutput('<pre>' + this.error("  Usage: theme dark | theme light") + '</pre>');
    }
  };

  InteractiveCLI.prototype.cmdWhoami = function () {
    this.appendOutput(
      '<pre>' + this.highlight('  Avishkar Mahesh Pawar') + ' \u2014 Systems & AI/ML Engineer</pre>'
    );
  };

  InteractiveCLI.prototype.cmdNeofetch = function () {
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    var data = typeof portfolioData !== 'undefined' ? portfolioData : {};
    var stats = data.stats || {};
    var skills = data.skills || {};
    var languages = (skills.languages || []).join(', ');

    var lines = [
      '',
      '       ' + this.highlight('_    ____'),
      '      ' + this.highlight('/ \\  |  _ \\'),
      '     ' + this.highlight('/ _ \\ | |_) |'),
      '    ' + this.highlight('/ ___ \\|  __/'),
      '   ' + this.highlight('/_/   \\_\\_|'),
      '',
      '   ' + this.highlight('avishkar@portfolio'),
      '   ' + '\u2500'.repeat(17),
      '   ' + this.info('OS:') + '        Portfolio v2.0',
      '   ' + this.info('Languages:') + ' ' + languages,
      '   ' + this.info('GATE:') + '      AIR 3124 (2026)',
      '   ' + this.info('CGPA:') + '      ' + (stats.cgpa || '9.24') + '/10',
      '   ' + this.info('Projects:') + '  ' + (stats.projects || '7+'),
      '   ' + this.info('Certs:') + '     ' + (stats.certifications || '8+'),
      '   ' + this.info('Theme:') + '     ' + currentTheme,
      ''
    ];
    this.appendOutput('<pre>' + lines.join('\n') + '</pre>');
  };

  return InteractiveCLI;
})();

// Initialize CLI on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  new InteractiveCLI();
});


// ===== 3. TYPEWRITER CLASS =====
var TypeWriter = (function () {
  function TypeWriter(element, words, typeSpeed, deleteSpeed, pauseTime) {
    this.element = element;
    this.words = words;
    this.typeSpeed = typeSpeed || 80;
    this.deleteSpeed = deleteSpeed || 40;
    this.pauseTime = pauseTime || 2000;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.tick();
  }

  TypeWriter.prototype.tick = function () {
    var self = this;
    var currentWord = self.words[self.wordIndex % self.words.length];

    if (self.isDeleting) {
      self.charIndex--;
    } else {
      self.charIndex++;
    }

    self.element.textContent = currentWord.substring(0, self.charIndex);

    var delay = self.isDeleting ? self.deleteSpeed : self.typeSpeed;

    // Finished typing the word — pause then delete
    if (!self.isDeleting && self.charIndex === currentWord.length) {
      delay = self.pauseTime;
      self.isDeleting = true;
    }
    // Finished deleting — move to next word
    else if (self.isDeleting && self.charIndex === 0) {
      self.isDeleting = false;
      self.wordIndex++;
      delay = 400; // brief pause before next word starts
    }

    setTimeout(function () { self.tick(); }, delay);
  };

  return TypeWriter;
})();

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function () {
  var typingEl = document.getElementById('typing-text');
  if (typingEl) {
    new TypeWriter(
      typingEl,
      ['Systems Engineer', 'Backend Developer', 'Database Architect', 'AI/ML Engineer', 'Problem Solver'],
      80,   // type speed
      40,   // delete speed
      2000  // pause
    );
  }
});


// ===== 4. SCROLL ANIMATIONS (IntersectionObserver) =====
var ScrollAnimations = (function () {
  function ScrollAnimations() {
    var self = this;
    self.observer = new IntersectionObserver(
      function (entries) { self.onIntersect(entries); },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    self.init();
  }

  ScrollAnimations.prototype.init = function () {
    var selectors = '.bento-card, .project-card, .timeline-item, .achievement-card, .cert-card';
    var elements = document.querySelectorAll(selectors);
    var self = this;

    elements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      self.observer.observe(el);
    });
  };

  ScrollAnimations.prototype.onIntersect = function (entries) {
    var self = this;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      var el = entry.target;

      // Stagger delay based on sibling index
      var siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      var index = siblings.indexOf(el);
      var staggerDelay = index * 80;

      setTimeout(function () {
        el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, staggerDelay);

      self.observer.unobserve(el);
    });
  };

  return ScrollAnimations;
})();

// Wait for dynamic content to be populated before observing
document.addEventListener('portfolioDataReady', function () {
  new ScrollAnimations();
});


// ===== 5. TILT EFFECT ON [data-tilt] ELEMENTS =====
var TiltEffect = (function () {
  function TiltEffect() {
    // Disable on mobile / touch devices
    if (this.isMobile()) return;

    var self = this;
    self.elements = document.querySelectorAll('[data-tilt]');
    self.elements.forEach(function (el) {
      el.addEventListener('mousemove', function (e) { self.onMove(e, el); });
      el.addEventListener('mouseleave', function () { self.onLeave(el); });
    });
  }

  TiltEffect.prototype.isMobile = function () {
    return window.innerWidth <= 768 || 'ontouchstart' in window;
  };

  TiltEffect.prototype.onMove = function (e, el) {
    var rect = el.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var centerX = rect.width / 2;
    var centerY = rect.height / 2;

    // Max 5deg rotation
    var rotateX = ((y - centerY) / centerY) * -5;
    var rotateY = ((x - centerX) / centerX) * 5;

    requestAnimationFrame(function () {
      el.style.transition = 'transform 0.1s ease-out';
      el.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });
  };

  TiltEffect.prototype.onLeave = function (el) {
    requestAnimationFrame(function () {
      el.style.transition = 'transform 0.4s ease-out';
      el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    });
  };

  return TiltEffect;
})();

document.addEventListener('DOMContentLoaded', function () {
  new TiltEffect();
});


// ===== 6. GRADIENT ORBS PARALLAX =====
var GradientOrbs = (function () {
  function GradientOrbs() {
    this.heroSection = document.querySelector('.hero');
    this.orbs = document.querySelectorAll('.gradient-orb');
    if (!this.heroSection || this.orbs.length === 0) return;

    this.mouseX = 0;
    this.mouseY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.rafId = null;

    // Only apply parallax on non-touch devices
    if (!this.isTouchDevice()) {
      var self = this;
      this.heroSection.addEventListener('mousemove', function (e) { self.onMouseMove(e); });
      this.heroSection.addEventListener('mouseleave', function () { self.onMouseLeave(); });
      this.animate();
    }
  }

  GradientOrbs.prototype.isTouchDevice = function () {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  GradientOrbs.prototype.onMouseMove = function (e) {
    var rect = this.heroSection.getBoundingClientRect();
    // Normalize to -1..1 range centered on hero
    this.mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    this.mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  GradientOrbs.prototype.onMouseLeave = function () {
    this.mouseX = 0;
    this.mouseY = 0;
  };

  GradientOrbs.prototype.animate = function () {
    var self = this;
    // Smooth lerp toward target
    self.currentX += (self.mouseX - self.currentX) * 0.05;
    self.currentY += (self.mouseY - self.currentY) * 0.05;

    // Subtle shift: max 10px
    var maxShift = 10;
    self.orbs.forEach(function (orb, i) {
      var factor = (i + 1) * 0.4; // each orb moves slightly differently
      var tx = self.currentX * maxShift * factor;
      var ty = self.currentY * maxShift * factor;
      orb.style.transform = 'translate(' + tx + 'px, ' + ty + 'px)';
    });

    self.rafId = requestAnimationFrame(function () { self.animate(); });
  };

  return GradientOrbs;
})();

document.addEventListener('DOMContentLoaded', function () {
  new GradientOrbs();
});


// ===== 7. HERO PARALLAX ON SCROLL =====
(function initHeroParallax() {
  var ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
          var scrollY = window.scrollY;
          var speed = 0.3;
          heroVisual.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();


// ===== 8. REMOVE PARTICLE CANVAS (gradient orbs replace it) =====
document.addEventListener('DOMContentLoaded', function () {
  var particleCanvas = document.getElementById('particles');
  if (particleCanvas) {
    particleCanvas.remove();
  }
});

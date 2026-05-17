var PORTFOLIO_DATA = {
  "personal": {
    "name": "Avishkar Mahesh Pawar",
    "title": "Computer Engineering Student | Systems & AI/ML Engineer",
    "tagline": "Building production-grade distributed systems from scratch",
    "bio": "Final-year Computer Engineering student at MIT Academy of Engineering, Pune with 9.24 CGPA. Built 3 production-grade distributed systems from scratch \u2014 a database engine in C++, an event streaming platform in Java, and an AI-powered vector database in Python. GATE 2026 qualified (AIR 3124) \u2014 a 3x rank improvement from GATE 2025. Currently working as a Software Developer at OSMOS.",
    "image": "assets/profile.png",
    "resume": "resumes/Avishkar_Pawar_SDE_Resume.pdf",
    "email": "avishkarpawar004@gmail.com",
    "phone": "+91-8623005430",
    "location": "Pune, Maharashtra, India",
    "social": {
      "github": "https://github.com/avishkar-004",
      "linkedin": "https://www.linkedin.com/in/avishkarpawar",
      "portfolio": "https://avishkar.digital",
      "credly": "https://www.credly.com/users/avishkar-pawar.3cf03fe8"
    }
  },
  "education": {
    "degree": "B.Tech. - Computer Engineering",
    "university": "MIT Academy of Engineering, Pune",
    "duration": "2022 - 2026",
    "cgpa": "9.24",
    "cgpa_scale": "10",
    "logo": "assets/mit-logo.png"
  },
  "skills": {
    "languages": [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL"
    ],
    "frameworks": [
      "Spring Boot",
      "FastAPI",
      "React",
      "Node.js",
      "Express.js",
      "Vue.js"
    ],
    "databases": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis"
    ],
    "tools": [
      "Git",
      "Docker",
      "Linux",
      "AWS",
      "CMake",
      "Maven"
    ],
    "concepts": [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Distributed Systems",
      "System Design",
      "Deep Learning",
      "Computer Vision"
    ]
  },
  "projects": [
    {
      "id": "minidb",
      "title": "MiniDB \u2014 Distributed Database",
      "subtitle": "Key-Value Database with ACID Transactions & Raft Consensus",
      "category": "distributed-systems",
      "tags": [
        "C++17",
        "Distributed Systems",
        "Raft",
        "MVCC",
        "B+ Tree"
      ],
      "description": "Built a distributed key-value database from scratch with B+ Tree indexing, MVCC concurrency control, Raft consensus, full SQL-like query processing with JOINs, consistent hash sharding, and HTTP monitoring.",
      "github": "https://github.com/avishkar-004/minidb",
      "demo": null,
      "metrics": {
        "throughput": "10,000+ ops/sec",
        "latency": "<1ms",
        "commits": "99"
      },
      "technologies": {
        "primary": "C++17",
        "secondary": [
          "CMake",
          "Google Test",
          "POSIX Sockets"
        ]
      }
    },
    {
      "id": "streamflow",
      "title": "StreamFlow \u2014 Event Streaming Platform",
      "subtitle": "Kafka-like Distributed Message Queue",
      "category": "distributed-systems",
      "tags": [
        "Java 17",
        "Spring Boot",
        "Netty",
        "Docker"
      ],
      "description": "Architected a Kafka-like distributed message queue with consumer groups, leader-follower replication, ISR tracking, zero-copy transfer, Spring Boot admin API, and Prometheus monitoring.",
      "github": "https://github.com/avishkar-004/streamflow",
      "demo": null,
      "metrics": {
        "throughput": "50,000+ msg/sec",
        "consumers": "100+ concurrent",
        "commits": "78"
      },
      "technologies": {
        "primary": "Java 17",
        "secondary": [
          "Spring Boot",
          "Netty",
          "Docker",
          "Prometheus"
        ]
      }
    },
    {
      "id": "vectorflow",
      "title": "VectorFlow \u2014 AI Vector Database",
      "subtitle": "Semantic Search Engine with HNSW & RAG Pipeline",
      "category": "ai-ml",
      "tags": [
        "Python",
        "FastAPI",
        "HNSW",
        "NumPy",
        "Numba"
      ],
      "description": "Built a vector database with HNSW indexing for ANN search, Numba JIT optimization (10x speedup), FastAPI REST server, WAL persistence, consistent hash sharding, and RAG pipeline with OpenAI integration.",
      "github": "https://github.com/avishkar-004/vectorflow",
      "demo": null,
      "metrics": {
        "vectors": "1M+",
        "latency": "<100ms",
        "recall": "95%+",
        "commits": "52"
      },
      "technologies": {
        "primary": "Python 3.11",
        "secondary": [
          "FastAPI",
          "NumPy",
          "Numba",
          "OpenAI"
        ]
      }
    },
    {
      "id": "eye-disease",
      "title": "Eye Disease Detection",
      "subtitle": "CNN-based Retinal Image Classification",
      "category": "ai-ml",
      "tags": [
        "Python",
        "TensorFlow",
        "Flask",
        "Deep Learning"
      ],
      "description": "Deep learning model for automated detection of eye diseases (cataract, diabetic retinopathy, glaucoma) from retinal images using CNN. Deployed with Flask web interface.",
      "github": "https://github.com/avishkar-004/Eye-Disease-Detection-Using-Deep-Learning",
      "demo": null,
      "metrics": {
        "classes": "4",
        "dataset": "4,200+ images"
      },
      "technologies": {
        "primary": "Python",
        "secondary": [
          "TensorFlow",
          "Keras",
          "Flask",
          "OpenCV"
        ]
      }
    },
    {
      "id": "krushidhan",
      "title": "KrushiDhan \u2014 Smart Agriculture",
      "subtitle": "Bilingual Platform for Farmers",
      "category": "full-stack",
      "tags": [
        "React",
        "Node.js",
        "MongoDB",
        "Express"
      ],
      "description": "Full-stack platform empowering farmers with real-time market prices, weather forecasting, AI-powered government scheme recommendations, crop disease detection, and equipment rental marketplace.",
      "github": "https://github.com/avishkar-004/KrushiDhan",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "React.js",
        "secondary": [
          "Node.js",
          "Express.js",
          "MongoDB"
        ]
      }
    },
    {
      "id": "player-reid",
      "title": "Player Re-Identification",
      "subtitle": "Sports Footage Computer Vision System",
      "category": "ai-ml",
      "tags": [
        "Python",
        "PyTorch",
        "YOLO",
        "Computer Vision"
      ],
      "description": "Computer vision system for re-identifying players across camera angles in sports footage using YOLO detection and deep feature-based ReID tracking.",
      "github": "https://github.com/avishkar-004/Player-Re-Identification-in-Sports-Footage-",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "Python",
        "secondary": [
          "PyTorch",
          "Ultralytics",
          "OpenCV",
          "SciPy"
        ]
      }
    },
    {
      "id": "blood-connect",
      "title": "Blood Connect",
      "subtitle": "Blood Bank Management System",
      "category": "full-stack",
      "tags": [
        "TypeScript",
        "React",
        "Shadcn UI",
        "Vite"
      ],
      "description": "Full-featured blood bank portal with donor/recipient/admin roles, blood request matching, inventory management, donation camps, and real-time notifications.",
      "github": "https://github.com/avishkar-004/blood-connect",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "TypeScript",
        "secondary": [
          "React",
          "Vite",
          "Shadcn UI",
          "Tailwind"
        ]
      }
    },
    {
      "id": "flash-commerce",
      "title": "Flash Commerce UI",
      "subtitle": "Modern E-Commerce Platform",
      "category": "full-stack",
      "tags": [
        "TypeScript",
        "React",
        "Tailwind",
        "Vite"
      ],
      "description": "Modern e-commerce UI with buyer/seller/admin portals, product management, cart system, checkout flow, and responsive design built with React and Shadcn UI.",
      "github": "https://github.com/avishkar-004/flash-commerce-ui",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "TypeScript",
        "secondary": [
          "React",
          "Vite",
          "Tailwind CSS",
          "Shadcn UI"
        ]
      }
    },
    {
      "id": "dark-store",
      "title": "Dark Store Network Projection",
      "subtitle": "ML-Powered Location Analytics",
      "category": "ai-ml",
      "tags": [
        "Python",
        "React",
        "XGBoost",
        "FastAPI"
      ],
      "description": "ML pipeline using KMeans clustering and XGBoost for optimal dark store placement. Features Gemini-powered impact analysis, React dashboard with Leaflet maps, and Node.js backend.",
      "github": "https://github.com/avishkar-004/city-wide-dark-store-network-projection",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "Python + React",
        "secondary": [
          "FastAPI",
          "XGBoost",
          "Node.js",
          "Leaflet"
        ]
      }
    },
    {
      "id": "energy-prediction",
      "title": "Energy Prediction System",
      "subtitle": "Energy Consumption Analytics Dashboard",
      "category": "full-stack",
      "tags": [
        "JavaScript",
        "React",
        "Charts",
        "Vite"
      ],
      "description": "Energy consumption prediction and visualization system with interactive dashboards, real-time graphs, ideal value comparisons, and detailed reports.",
      "github": "https://github.com/avishkar-004/EnergyPrediction",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "JavaScript",
        "secondary": [
          "React",
          "Vite",
          "Recharts",
          "Tailwind"
        ]
      }
    },
    {
      "id": "auth-system",
      "title": "Authentication System",
      "subtitle": "Full-Stack Auth with JWT",
      "category": "full-stack",
      "tags": [
        "JavaScript",
        "React",
        "Node.js",
        "MySQL"
      ],
      "description": "Secure authentication system with user registration, JWT-based login, session management, and React frontend with Express.js backend.",
      "github": "https://github.com/avishkar-004/authentication-system",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "JavaScript",
        "secondary": [
          "React",
          "Express.js",
          "MySQL",
          "JWT"
        ]
      }
    },
    {
      "id": "society-mgmt",
      "title": "Society Management System",
      "subtitle": "DBMS Project with PHP & MySQL",
      "category": "full-stack",
      "tags": [
        "PHP",
        "MySQL",
        "HTML",
        "CSS"
      ],
      "description": "Web-based residential society administration system with member management, complaint tracking, notice board, payment records, and photo gallery. Built as a DBMS course project.",
      "github": "https://github.com/avishkar-004/dbms-project-using-php-society-management-system",
      "demo": null,
      "metrics": {},
      "technologies": {
        "primary": "PHP",
        "secondary": [
          "MySQL",
          "HTML/CSS",
          "Bootstrap"
        ]
      }
    }
  ],
  "experience": [
    {
      "company": "OSMOS",
      "role": "Software Developer",
      "type": "Internship",
      "duration": "Jul 2025 - Present",
      "location": "India",
      "logo": "assets/osmos-logo.png",
      "description": "Working on backend services and application development.",
      "responsibilities": [
        "Developed backend services using Node.js and Python",
        "Contributed to product development from scratch",
        "Built scalable solutions ensuring high performance"
      ],
      "technologies": [
        "Node.js",
        "Python",
        "MySQL",
        "System Design",
        "Microservices"
      ]
    },
    {
      "company": "Core-Decimal Solutions",
      "role": "Software Developer",
      "type": "Internship",
      "duration": "Feb 2025 - Aug 2025",
      "location": "India",
      "logo": "assets/core-decimal-logo.png",
      "description": "Full-stack development with Vue.js and Express.js.",
      "responsibilities": [
        "Built full-stack project using Vue.js, Express.js, and Sequelize",
        "Developed reusable Vue.js components",
        "Designed Sequelize models for dynamic UI mapping"
      ],
      "technologies": [
        "Vue.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize"
      ]
    },
    {
      "company": "Campus Credential",
      "role": "Software Engineer Intern",
      "type": "Internship",
      "duration": "Jun 2024 - Aug 2024",
      "location": "India",
      "logo": "assets/campus-credential-logo.png",
      "description": "Developed web-based society management system.",
      "responsibilities": [
        "Built secure web-based system for society administration",
        "Implemented resident management and complaint tracking",
        "Developed event scheduling and community features"
      ],
      "technologies": [
        "React.js",
        "Express.js",
        "JavaScript",
        "Databases"
      ]
    }
  ],
  "achievements": [
    {
      "title": "GATE 2026 Qualified \u2014 AIR 3124",
      "description": "Secured All India Rank 3124 with GATE Score 601 and 51.45 marks in CS. Improved from AIR 9860 (2025) to AIR 3124 (2026) \u2014 a 3x rank improvement.",
      "date": "Feb 2026",
      "icon": "trophy",
      "link": "certificates/GATE_2026_ScoreCard.pdf",
      "link_text": "View Scorecard"
    },
    {
      "title": "GATE 2025 Qualified \u2014 AIR 9860",
      "description": "Secured AIR 9860 with GATE Score 453 in Computer Science",
      "date": "Feb 2025",
      "icon": "trophy",
      "link": "certificates/GATE_2025_ScoreCard.pdf",
      "link_text": "View Scorecard"
    },
    {
      "title": "First Place in Technodium 25",
      "description": "Won first place in technical competition",
      "date": "2025",
      "icon": "medal"
    },
    {
      "title": "Second Place in Code Sprint Competition",
      "description": "Awarded second place demonstrating exceptional algorithmic skills",
      "date": "2024",
      "icon": "medal"
    },
    {
      "title": "Research Publication",
      "description": "Published paper on Sign Language Recognition using Machine Learning at Avinya 2025",
      "date": "Feb 2025",
      "icon": "book"
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Cloud Practitioner",
      "issuer": "AWS",
      "date": "May 2026",
      "icon": "assets/awsCloudPractitioner.png"
    },
    {
      "name": "CCNA: Introduction to Networks",
      "issuer": "Cisco",
      "date": "Sep 2024",
      "icon": "assets/ccnaCisco.png"
    },
    {
      "name": "CCNA: Switching, Routing, and Wireless Essentials",
      "issuer": "Cisco",
      "date": "Nov 2024",
      "icon": "assets/ccnaCisco.png"
    },
    {
      "name": "CCNA: Enterprise Networking, Security, and Automation",
      "issuer": "Cisco",
      "date": "Nov 2024",
      "icon": "assets/ccnaCisco.png"
    },
    // 
    // {
    //   "name": "PCAP: Programming Essentials in Python",
    //   "issuer": "Python Institute",
    //   "icon": "assets/python-logo.png"
    // },
    {
      "name": "Programming in Modern C++",
      "issuer": "NPTEL",
      "score": "55/100",
      "icon": "assets/nptelLogo.png"
    },
    {
      "name": "Introduction to Machine Learning",
      "issuer": "NPTEL",
      "icon": "assets/nptelLogo.png"
    },
    {
      "name": "CS260: Introduction to Cryptography and Network Security",
      "issuer": "Saylor University",
      "date": "Mar 2026"
    },
    {
      "name": "Red Hat Academy Program",
      "issuer": "Red Hat",
      "date": "2024",
      "icon": "assets/redhatLogo.png"
    }
  ],
  "stats": {
    "cgpa": "9.24",
    "projects": "12+",
    "technologies": "25+",
    "certifications": "8+"
  }
};

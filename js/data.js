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
      "credly": "https://www.credly.com/users/avishkar-pawar"
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
      "title": "Distributed Database (MiniDB)",
      "subtitle": "Production-grade Key-Value Database with ACID Transactions",
      "category": "distributed-systems",
      "tags": [
        "C++",
        "Distributed Systems",
        "Databases"
      ],
      "thumbnail": "assets/minidb-thumb.jpg",
      "banner": "assets/minidb-banner.jpg",
      "description": "Built a distributed key-value database from scratch in C++ with B+ Tree indexing, MVCC concurrency control, and Raft consensus algorithm.",
      "duration": "6 weeks",
      "status": "Complete (All 6 Phases)",
      "github": "https://github.com/avishkar-004/minidb",
      "demo": null,
      "highlights": [
        "10,000+ concurrent transactions with <1ms latency",
        "B+ Tree indexing with LRU buffer pool (60% faster disk I/O)",
        "MVCC-based transaction isolation with snapshot reads",
        "Raft consensus for 3-node cluster with automatic failover",
        "Write-Ahead Logging for crash recovery"
      ],
      "technologies": {
        "primary": "C++17",
        "secondary": [
          "Boost.Asio",
          "Protocol Buffers",
          "CMake",
          "Google Test"
        ]
      },
      "metrics": {
        "throughput": "10,000+ ops/sec",
        "latency": "<1ms",
        "concurrent_transactions": "1000+",
        "nodes": "3-node cluster"
      }
    },
    {
      "id": "streamflow",
      "title": "Event Streaming Platform (StreamFlow)",
      "subtitle": "Kafka-like Distributed Message Queue",
      "category": "distributed-systems",
      "tags": [
        "Java",
        "Spring Boot",
        "Distributed Systems"
      ],
      "thumbnail": "assets/streamflow-thumb.jpg",
      "banner": "assets/streamflow-banner.jpg",
      "description": "Architected a distributed message queue system similar to Apache Kafka with consumer groups, partition replication, and Spring Boot admin API.",
      "duration": "6 weeks",
      "status": "Complete (6/6 Phases)",
      "github": "https://github.com/avishkar-004/streamflow",
      "demo": null,
      "highlights": [
        "Processing 50,000+ messages/sec with guaranteed ordering",
        "Consumer group coordination with automatic rebalancing",
        "Log-based storage with memory-mapped files and zero-copy transfer",
        "REST API with Prometheus metrics integration",
        "Docker containerized deployment"
      ],
      "technologies": {
        "primary": "Java 17",
        "secondary": [
          "Spring Boot",
          "Netty",
          "Docker",
          "Prometheus"
        ]
      },
      "metrics": {
        "throughput": "50,000+ msg/sec",
        "consumers": "100+ concurrent",
        "latency": "<100ms rebalance",
        "partitions": "32 partitions"
      }
    },
    {
      "id": "vectorflow",
      "title": "AI-Powered Vector Database (VectorFlow)",
      "subtitle": "Semantic Search Engine with RAG Pipeline",
      "category": "ai-ml",
      "tags": [
        "Python",
        "AI/ML",
        "Vector Search"
      ],
      "thumbnail": "assets/vectorflow-thumb.jpg",
      "banner": "assets/vectorflow-banner.jpg",
      "description": "Built a vector database implementing HNSW algorithm for approximate nearest neighbor search with OpenAI embeddings integration.",
      "duration": "4-6 weeks",
      "status": "Complete",
      "github": "https://github.com/avishkar-004/vectorflow",
      "demo": null,
      "highlights": [
        "1,000,000+ vectors indexed with 95%+ recall",
        "HNSW algorithm for sub-100ms query latency",
        "Numba JIT optimization (10x speedup)",
        "RAG pipeline with OpenAI + LangChain integration",
        "FastAPI server with async endpoints"
      ],
      "technologies": {
        "primary": "Python 3.11",
        "secondary": [
          "FastAPI",
          "NumPy",
          "Numba",
          "OpenAI API",
          "LangChain"
        ]
      },
      "metrics": {
        "vectors": "1M+",
        "latency": "<100ms",
        "recall": "95%+",
        "dimensions": "1536"
      }
    },
    {
      "id": "grocery-delivery",
      "title": "Grocery Delivery System",
      "subtitle": "Real-time Quotation Platform",
      "category": "full-stack",
      "tags": [
        "React",
        "Node.js",
        "MySQL"
      ],
      "thumbnail": "assets/grocery-thumb.jpg",
      "banner": "assets/grocery-banner.jpg",
      "description": "Full-stack web application enabling real-time quotation and order negotiation between buyers and local shop owners.",
      "duration": "2 months",
      "status": "Complete",
      "github": null,
      "demo": null,
      "highlights": [
        "Role-based dashboards for buyers, shops, and admin",
        "Real-time order tracking with GPS location",
        "Notification system for live status updates",
        "React + Tailwind CSS frontend",
        "Express.js + MySQL backend"
      ],
      "technologies": {
        "primary": "React.js",
        "secondary": [
          "Node.js",
          "Express.js",
          "MySQL",
          "Tailwind CSS"
        ]
      },
      "metrics": {}
    },
    {
      "id": "smart-agriculture",
      "title": "Smart Agriculture Platform (KrushiDhan)",
      "subtitle": "Bilingual Platform for Farmers",
      "category": "full-stack",
      "tags": [
        "React",
        "Node.js",
        "AI"
      ],
      "thumbnail": "assets/agriculture-thumb.jpg",
      "banner": "assets/agriculture-banner.jpg",
      "description": "Digital platform empowering farmers with real-time market data, weather forecasting, and AI-powered scheme recommendations.",
      "duration": "3 months",
      "status": "Complete",
      "github": "https://github.com/avishkar-004/KrushiDhan",
      "demo": null,
      "highlights": [
        "Bilingual support (Marathi + English)",
        "Real-time market prices and weather forecasting",
        "AI-powered government scheme recommendations",
        "Equipment rental and cold storage locator",
        "Direct-to-consumer selling feature"
      ],
      "technologies": {
        "primary": "React.js",
        "secondary": [
          "Node.js",
          "Express.js",
          "MySQL"
        ]
      },
      "metrics": {}
    },
    {
      "id": "eye-disease-detection",
      "title": "Eye Disease Detection",
      "subtitle": "Deep Learning for Medical Imaging",
      "category": "ai-ml",
      "tags": [
        "Python",
        "Deep Learning",
        "Computer Vision"
      ],
      "thumbnail": null,
      "banner": null,
      "description": "Deep learning-based system for detecting eye diseases from retinal images using convolutional neural networks and transfer learning techniques.",
      "duration": null,
      "status": "Complete",
      "github": "https://github.com/avishkar-004/Eye-Disease-Detection-Using-Deep-Learning",
      "demo": null,
      "highlights": [
        "CNN-based classification of retinal diseases",
        "Transfer learning with pre-trained models",
        "Image preprocessing and augmentation pipeline",
        "Medical imaging analysis with high accuracy"
      ],
      "technologies": {
        "primary": "Python",
        "secondary": [
          "TensorFlow",
          "Keras",
          "OpenCV",
          "NumPy"
        ]
      },
      "metrics": {}
    },
    {
      "id": "blood-connect",
      "title": "Blood Connect",
      "subtitle": "Blood Bank Management System",
      "category": "full-stack",
      "tags": [
        "TypeScript",
        "Full-Stack",
        "Healthcare"
      ],
      "thumbnail": null,
      "banner": null,
      "description": "Full-stack blood bank management system enabling donors and recipients to connect efficiently, with inventory tracking and request management.",
      "duration": null,
      "status": "Complete",
      "github": "https://github.com/avishkar-004/blood-connect",
      "demo": null,
      "highlights": [
        "Donor-recipient matching and notification system",
        "Blood inventory tracking and management",
        "Request and fulfillment workflow",
        "TypeScript full-stack implementation"
      ],
      "technologies": {
        "primary": "TypeScript",
        "secondary": [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB"
        ]
      },
      "metrics": {}
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
      "name": "CCNA: Introduction to Networks",
      "issuer": "Cisco",
      "date": "Sep 2024",
      "icon": "assets/cisco-logo.png"
    },
    {
      "name": "CCNA: Switching, Routing, and Wireless Essentials",
      "issuer": "Cisco",
      "date": "Nov 2024",
      "icon": "assets/cisco-logo.png"
    },
    {
      "name": "CCNA: Enterprise Networking, Security, and Automation",
      "issuer": "Cisco",
      "date": "Nov 2024",
      "icon": "assets/cisco-logo.png"
    },
    {
      "name": "PCAP: Programming Essentials in Python",
      "issuer": "Python Institute",
      "icon": "assets/python-logo.png"
    },
    {
      "name": "Programming in Modern C++",
      "issuer": "NPTEL",
      "score": "55/100"
    },
    {
      "name": "Introduction to Machine Learning",
      "issuer": "NPTEL"
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
      "icon": "assets/redhat-logo.png"
    }
  ],
  "stats": {
    "cgpa": "9.24",
    "projects": "7+",
    "technologies": "25+",
    "certifications": "8+"
  }
};

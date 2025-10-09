---
title: 'Web-Based Ultrasound Simulator'
description: 'A web platform focused on ultrasound education and knowledge assessment.'
tech: ['Node', 'NuxtJS', 'Supabase']
github: https://github.com/SimuFisio
pubDate: 'Jun 19 2024'
updatedDate: 'Jan 20 2025'
heroImage: '../../../assets/ultrazound.webp'
lang: en
---

A web-based platform designed to simulate real-time ultrasound scanning for educational purposes in physiotherapy. The application enables students to interactively explore and visualize ultrasound simulations, as well as access a map-style chart of muscle structures, where each anatomical region can be dynamically inspected and identified. In addition, the system allows students to practice echography techniques and assess their knowledge through automatically generated quizzes.

The platform integrates a NuxtJS frontend that delivers a responsive and modular interface with smooth, real-time visualization. The backend, developed with Node.js and Express, provides a RESTful API for authentication, data exchange, and test management. Supabase (PostgreSQL) handles data persistence, file storage, and authentication, hosted on a self-managed instance to ensure complete control over resources and security.

A key component of the system is the media processing workflow powered by FFmpeg, which converts ultrasound recordings into sequences of I-frames (intra-coded frames) to enable precise and latency-free scrubbing within the simulation environment. This technique allows users to navigate seamlessly through echographic sequences without full video decoding, improving responsiveness and overall interactivity.

To enhance anatomical comprehension, SVG overlays are superimposed on the ultrasound frames to highlight specific structures, created with Inkscape. System modeling and interface design were carried out with Visual Paradigm and Figma, while GitHub was used for version control and modular project organization. Development followed Agile methodologies, ensuring iterative progress and continuous collaboration.

This solution offers an accessible and cost-effective alternative to traditional ultrasound hardware, providing physiotherapy students with an immersive and dynamic learning environment that bridges theoretical and practical knowledge.

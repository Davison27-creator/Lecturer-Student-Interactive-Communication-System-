# Lecturer-Student Interactive Communication System

A comprehensive web-based platform designed for **Federal College of Fisheries and Marine Technology (FCFMT)** to facilitate seamless communication and interaction between lecturers and students.

[![Firebase](https://img.shields.io/badge/Firebase-v9.22.2-orange.svg)](https://firebase.google.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3.2-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [User Roles](#user-roles)
- [Key Features by Role](#key-features-by-role)
- [Firebase Configuration](#firebase-configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The Lecturer-Student Interactive Communication System is a modern educational platform that streamlines academic interactions, course material distribution, assignment management, and real-time communication between faculty and students. Built with Firebase for real-time data synchronization and secure authentication, the platform provides role-based access control for administrators, lecturers, and students.

## ✨ Features

### Core Functionality
- 🔐 **Secure Authentication** - Firebase-powered login/signup with role-based access control
- 📚 **Course Material Management** - Upload, view, and download course materials
- 📝 **Assignment System** - Create, submit, and grade assignments with deadline tracking
- 📢 **Announcements** - Course-specific and global announcements
- 💬 **Discussion Forum** - Interactive community forum with posts and comments
- 📊 **Grade Management** - Grade submission, viewing, and GPA calculation
- 👤 **Profile Management** - User profile editing with avatar upload
- 🔔 **Real-time Updates** - Live notifications and data synchronization

### User Experience
- 🎨 **Modern UI** - Gradient-themed design with Bootstrap 5
- 📱 **Responsive Design** - Mobile-friendly interface across all pages
- ⚡ **Loading States** - Visual feedback during async operations
- 🧭 **Consistent Navigation** - Role-specific navigation bars across all pages
- ✅ **Bootstrap Alerts** - Clean, dismissible notification system

## 🛠️ Tech Stack

### Frontend
- **HTML5/CSS3/JavaScript** - Vanilla JavaScript for core functionality
- **Bootstrap 5.3.2** - Responsive UI framework
- **Bootstrap Icons 1.11.3** - Icon library
- **Google Fonts** - Roboto, Poppins, Inter typography

### Backend & Services
- **Firebase v9.22.2** (Compat Mode)
  - Authentication - User management and role-based access
  - Firestore - NoSQL database for real-time data
  - Storage - File storage for avatars and documents
  - Functions - Serverless backend logic (Node.js 22)
- **Supabase Storage** - Alternative file storage for course materials

### Development Tools
- **Firebase CLI** - Deployment and emulator tools
- **Node.js 22** - Runtime for Firebase Functions

## 📁 Project Structure

```
Lecturer-Student-Interactive-Communication-System/
├── 📄 index.html                      # Landing page
├── 📄 login.html                      # Authentication page
├── 📄 signup.html                     # User registration
├── 📄 landing-pagehtml.html           # Marketing landing page
│
├── 👨‍💼 Admin Pages
│   └── 📄 admin-dashboard.html        # Admin control panel
│
├── 👨‍🏫 Lecturer Pages
│   ├── 📄 lecturer-dashboard.html     # Lecturer home
│   ├── 📄 lecturer-profile.html       # Profile settings
│   ├── 📄 upload-materials.html       # Material upload interface
│   ├── 📄 view-materials.html         # Uploaded materials view
│   ├── 📄 assignment_page.html        # Create assignments/quizzes
│   ├── 📄 view-assignments.html       # Assignment management
│   ├── 📄 view-submissions.html       # Grade student submissions
│   ├── 📄 grade-submission.html       # Grade entry interface
│   ├── 📄 announcements.html          # Post announcements
│   └── 📄 forum.html                  # Discussion forum
│
├── 👨‍🎓 Student Pages
│   ├── 📄 student-dashboard.html      # Student home
│   ├── 📄 student-profile.html        # Profile settings
│   ├── 📄 student-materials.html      # View/download materials
│   ├── 📄 student-course-view.html    # Course details
│   ├── 📄 student-assignments.html    # View/submit assignments
│   ├── 📄 student-grades.html         # Grade viewing
│   ├── 📄 student-forum.html          # Forum participation
│   └── 📄 assignment-details.html     # Assignment detail view
│
├── ⚙️ Configuration
│   ├── 📄 firebase.json               # Firebase config
│   ├── 📄 package.json                # Node.js dependencies
│   └── 📄 index.js                    # Firebase Functions entry
│
└── 📚 Documentation
    └── 📄 README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22 or higher
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project with enabled services:
  - Authentication (Email/Password)
  - Firestore Database
  - Storage
  - Hosting
- (Optional) Supabase account for alternative storage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Davison27-creator/Lecturer-Student-Interactive-Communication-System-.git
   cd Lecturer-Student-Interactive-Communication-System-
   ```

2. **Install Firebase Functions dependencies**
   ```bash
   cd functions
   npm install
   cd ..
   ```

3. **Configure Firebase**
   
   Update the Firebase configuration in each HTML file with your project credentials:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

4. **Set up Firestore security rules**

   Configure appropriate security rules in Firebase Console for:
   - Users collection
   - Courses collection
   - Assignments collection
   - Submissions collection
   - Materials collection
   - Announcements collection
   - Forum posts/comments

5. **Run locally**
   ```bash
   firebase serve
   ```
   Or use any local web server to serve the HTML files.

### First-Time Setup

1. **Create an admin account** - Manually set a user's role to "admin" in Firestore
2. **Lecturer access code** - Default: `LECTURER@FCFMT` (configured in `signup.html`)
3. **Configure courses** - Set up courses in Firestore with departments and levels

## 👥 User Roles

### 🔴 Admin
- Full system access and user management
- Platform configuration and oversight
- Analytics and reporting (dashboard features)

### 🔵 Lecturer
- Course material management (upload/delete)
- Assignment and quiz creation
- Grade submission and management
- Student submission review
- Announcement posting
- Forum moderation
- Profile management

### 🟢 Student
- Course material access and download
- Assignment viewing and submission
- Grade viewing and GPA tracking
- Announcement reading
- Forum participation (posts/comments)
- Profile management

## 🎯 Key Features by Role

### Lecturer Features

| Feature | Description |
|---------|-------------|
| **Material Upload** | Upload PDFs, documents, videos with course/department filtering |
| **Assignment Creation** | Create assignments with deadlines, file attachments, filtering by level/department |
| **Submission Grading** | View submissions, provide feedback, assign grades |
| **Announcements** | Post course-specific or global announcements |
| **Forum Management** | Participate in discussions, monitor student activity |

### Student Features

| Feature | Description |
|---------|-------------|
| **Material Access** | Browse and download course materials by enrollment |
| **Assignment Submission** | Submit assignments before deadline, track status |
| **Grade Viewing** | View grades, GPA, pass/fail status with statistics |
| **Forum Participation** | Create posts, comment, like, engage with community |
| **Profile Management** | Update details, change password, upload avatar |

## 🔥 Firebase Configuration

### Firestore Collections

```javascript
users/               # User profiles and roles
  {userId}/
    - email
    - role (admin/lecturer/student)
    - name, matricNo, department, level, etc.

courses/             # Course definitions
  {courseId}/
    - courseName, courseCode, department, level

assignments/         # Assignment metadata
  {assignmentId}/
    - title, description, deadline, courseId, lecturerId

submissions/         # Student submissions
  {submissionId}/
    - assignmentId, studentId, fileURL, grade, feedback

materials/           # Course materials
  {materialId}/
    - title, fileURL, courseId, uploadDate

announcements/       # Platform announcements
  {announcementId}/
    - title, content, courseId, date

forumPosts/          # Forum posts
  {postId}/
    - title, content, authorId, likes, comments
```

### Storage Buckets

- `/avatars/{userId}/` - User profile pictures
- `/assignments/{assignmentId}/` - Assignment files
- `/submissions/{submissionId}/` - Student submission files

## 📦 Deployment

### Deploy to Firebase Hosting

1. **Build and test locally**
   ```bash
   firebase emulators:start
   ```

2. **Deploy functions**
   ```bash
   firebase deploy --only functions
   ```

3. **Deploy hosting**
   ```bash
   firebase deploy --only hosting
   ```

4. **Deploy everything**
   ```bash
   firebase deploy
   ```

### Environment Variables

Set up environment variables for:
- Firebase project credentials
- Supabase credentials (if using)
- Lecturer access codes
- API keys for third-party services

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the patterns documented in `.github/copilot-instructions.md`
- Use Bootstrap alerts instead of `alert()` popups
- Implement loading states for all async operations
- Maintain consistent navigation across pages
- Test with all three user roles
- Ensure mobile responsiveness

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Federal College of Fisheries and Marine Technology (FCFMT)** - Project context
- **Firebase** - Backend infrastructure
- **Bootstrap** - UI framework
- **Supabase** - Alternative storage solution

## 📧 Contact

**Project Maintainer:** Davison27-creator  
**Repository:** [Lecturer-Student-Interactive-Communication-System](https://github.com/Davison27-creator/Lecturer-Student-Interactive-Communication-System-)

---

**Built with ❤️ for FCFMT**

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsGrid = document.querySelector('.projects-grid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        filterProjects(filter);
    });
});

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Sample Projects Data
const projects = [
    {
        title: "Laravel E-commerce Platform",
        description: "A full-featured e-commerce platform built with Laravel, featuring user authentication, product management, and RESTful API endpoints. This platform serves as the backend for both web and mobile applications.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "RESTful API"],
        category: "web",
        githubUrl: "https://github.com/josephchamoun/internship-web-project"
    },
    {
        title: "Flutter E-commerce Mobile App",
        description: "The mobile counterpart of the Laravel e-commerce platform. Built with Flutter, this app provides a seamless shopping experience on mobile devices, consuming the same API endpoints as the web version.",
        technologies: ["Flutter", "Dart", "RESTful API", "Provider State Management"],
        category: "mobile",
        githubUrl: "https://github.com/josephchamoun/flutter_internship_project"
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card" data-category="${project.category}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" class="btn secondary">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Function to display projects
function displayProjects() {
    projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

// Resume Download
const resumeDownload = document.getElementById('resume-download');
resumeDownload.addEventListener('click', (e) => {
    e.preventDefault();
    // Link to your resume PDF in the assets folder
    window.open('assets/my_resume.pdf', '_blank');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize projects display
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
}); 
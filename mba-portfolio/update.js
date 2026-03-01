const fs = require('fs');
const htmlFile = 'C:/Users/V S SURESH/.gemini/antigravity/scratch/mba-portfolio/index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// 1. Contact Section Restructure
const oldContact = `        <!-- Contact -->
        <section id="contact" class="section section-light">
            <div class="section-container">
                <h2 class="section-title">Get In Touch</h2>
                <p
                    style="text-align: center; color: var(--text-light); margin-bottom: 3rem; max-width: 800px; margin-left: auto; margin-right: auto; font-size: 1.1rem; line-height: 1.6;">
                    <strong>Open to research collaborations, consulting opportunities, and strategic roles in
                        sustainable retail and agribusiness innovation.</strong>
                </p>
                <div class="contact-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                    <a href="mailto:jayasuriya.india@gmail.com" class="contact-card">
                        <i class="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>jayasuriya.india@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/s-jayasuriya" target="_blank" class="contact-card">
                        <i class="fab fa-linkedin"></i>
                        <h3>LinkedIn</h3>
                        <p>Connect Remotely</p>
                    </a>
                    <a href="assets/pdfs/S_Jayasuriya_Resume.pdf" target="_blank" class="contact-card"
                        style="background-color: var(--accent-color); color: white; border-color: var(--accent-color);">
                        <i class="fas fa-file-download" style="color: white;"></i>
                        <h3 style="color: white;">Download CV</h3>
                        <p style="color: rgba(255,255,255,0.8);">View Full Resume</p>
                    </a>
                </div>
            </div>
    </main>`;

const newContact = `        <!-- Contact -->
        <section id="contact" class="section contact-section">
            <div class="section-container" style="text-align: center; max-width: 800px; margin: 0 auto;">
                <h2 class="section-title" style="margin-bottom: 24px;">Get In Touch</h2>
                <p style="color: var(--text-light); margin-bottom: 3rem; font-size: 1.1rem; line-height: 1.6;">
                    <strong>Open to research collaborations, consulting opportunities, and strategic roles in
                        sustainable retail and agribusiness innovation.</strong>
                </p>
                <div class="contact-actions animate-on-scroll">
                    <a href="mailto:jayasuriya.india@gmail.com" class="contact-pill btn">
                        <i class="fas fa-envelope"></i> Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/s-jayasuriya" target="_blank" class="contact-pill btn">
                        <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="assets/pdfs/S_Jayasuriya_Resume.pdf" target="_blank" class="contact-pill btn btn-resume">
                        <i class="fas fa-file-download"></i> Download CV
                    </a>
                </div>
            </div>
        </section>
    </main>`;

html = html.replace(oldContact, newContact);

// 2. Add animate-on-scroll classes to existing elements without duplicating
const toAnimate = [
    'class="about-text"',
    'class="stat-card"',
    'class="timeline-item"',
    'class="edu-card"',
    'class="cert-item"',
    'class="publication-card"',
    'class="skill-category"'
];

toAnimate.forEach(cls => {
    // replace unless it already has it
    const newCls = cls.substring(0, cls.length - 1) + ' animate-on-scroll"';
    html = html.split(cls).join(newCls);
});

// Remove inline styles in publication-card
html = html.replace(/style="background: white; padding: 2\.5rem; border-radius: var\(--border-radius\); box-shadow: 0 4px 6px -1px rgba\(0,0,0,0\.05\); border-left: 4px solid var\(--accent-color\);"/g, '');

fs.writeFileSync(htmlFile, html, 'utf8');
console.log('HTML updated successfully!');

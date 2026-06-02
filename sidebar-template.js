// Sidebar template - fallback used only if a page has an empty .sidebar.
// All pages here ship an inline sidebar, so this is just a safety net.
const sidebarTemplate = `
<div class="profile-section">
    <div class="avatar">
        <img src="figures/profile.jpg" alt="Profile Picture" id="profile-img">
    </div>
    <h1 class="name">Zhangcheng Hou</h1>
    <p class="title">PhD Student · Ohtsuki Laboratory<br><a href="https://www.keio.ac.jp/en/" target="_blank" rel="noopener noreferrer"><img src="figures/keio-en.svg" alt="Keio University" class="inline-logo"></a></p>
</div>

<nav class="page-navigation">
    <a href="index.html" class="nav-btn glass-btn" data-page="index"><span class="nav-icon">🎓</span><span class="nav-text">Academic</span></a>
    <a href="about.html" class="nav-btn glass-btn" data-page="about"><span class="nav-icon">📂</span><span class="nav-text">Projects</span></a>
    <a href="link.html" class="nav-btn glass-btn" data-page="link"><span class="nav-icon">🔗</span><span class="nav-text">Links</span></a>
</nav>

<div class="info-section">
    <h3>Contact</h3>
    <div class="contact-item">
        <span class="icon">📧</span>
        <span>zhangcheng@ohtsuki.ics.keio.ac.jp<br>hou@keio.jp</span>
    </div>
    <div class="contact-item">
        <span class="icon">🎓</span>
        <a href="https://scholar.google.com/citations?user=FkuEc38AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    </div>
    <div class="contact-item">
        <span class="icon">💻</span>
        <a href="https://github.com/HouV001" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
</div>

<div class="info-section">
    <h3>Visitor Map</h3>
    <div id="globe-container"></div>
</div>

<div class="theme-toggle-container">
    <button class="theme-toggle glass-btn" id="theme-toggle" aria-label="Toggle theme">
        <span class="theme-toggle-icon">🌙</span>
        <span class="theme-toggle-text">Dark Mode</span>
    </button>
</div>
`;

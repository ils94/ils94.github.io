const projects = [
    {
        title: "SnapSeed",
        tags: ["Android", "Bitcoin", "Security", "Offline"],
        description: "Ephemeral Bitcoin wallet. Generate seeds offline with photo + sensors, everything in RAM. Close it, gone forever.",
        link: "https://github.com/ils94/SnapSeed"
    },
    {
        title: "LNPay-Backend",
        tags: ["Python", "Flask", "Bitcoin", "Lightning"],
        description: "A simple Python backend to receive BTC through the Lightning Network using Flask and Strike API.",
        link: "https://github.com/ils94/LNPay-Backend"
    },
    {
        title: "Encrypt It",
        tags: ["Android", "Java", "RSA", "AES"],
        description: "A simple Android application for secure text encryption and decryption using a hybrid RSA/AES encryption scheme. Encrypt It allows users to encrypt messages with a contact's public key so they can decrypt it with their private key, ensuring secure communication.",
        link: "https://github.com/ils94/Encrypt_It"
    },
    {
        title: "Encrypt It Web",
        tags: ["Web", "JavaScript", "Encryption"],
        description: "Web version of the Encrypt It Android App",
        link: "https://github.com/ils94/encrypt-it-web"
    },
    {
        title: "Electrum Companion",
        tags: ["Android", "Bitcoin", "PSBT"],
        description: "Electrum Companion helps you create and share PSBTs and SBTs on Android. Since the Electrum Wallet doesn't let you save these files, this app steps in to make it easy!",
        link: "https://github.com/ils94/Electrum_Companion"
    },
    {
        title: "Tails OS Bitcoin Cold Wallet",
        tags: ["Tutorial", "Tails OS", "Bitcoin", "Security"],
        description: "Tutorial: Creating a Bitcoin cold wallet using Tails OS with persistent storage (multilanguage).",
        link: "https://github.com/ils94/TailsOSBitcoinColdWallet"
    }
];

const skills = [
    {
        text: `<strong>Languages:</strong> Python, Java, JavaScript`
    },
    {
        text: `<strong>Technologies:</strong> Bitcoin, Blockchains, I.A`
    },
    {
        text: `<strong>Tools:</strong> Git, Android Studios, PyCharm`
    },
    {
        text: `<strong>OS:</strong> Linux, Windows, Android`
    }
];

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        return `
        <div class="project-card">
        <h3>${project.title}</h3>
        <div class="tags">${tagsHtml}</div>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noopener">View on GitHub</a>
        </div>
        `;
    }).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(skill => `
    <div class="skill-item">
    <span>${skill.text}</span>
    </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove("active"));
                const id = entry.target.id;
                const link = document.querySelector('a[href="#' + id + '"]');
                if (link) link.classList.add("active");
            }
        });
    }, { threshold: 0.35 });
    sections.forEach(s => observer.observe(s));
});

const webButton = document.getElementById('webButton');
if (webButton) {
    webButton.addEventListener('click', () => {
        renderProjects('WEB');
    });
}

const appButton = document.getElementById('appButton');
if (appButton) {
    appButton.addEventListener('click', () => {
        renderProjects('APP');
    });
}

const gameButton = document.getElementById('gameButton');
if (gameButton) {
    gameButton.addEventListener('click', () => {
        renderProjects('GAMES');
    });
}

const etcButton = document.getElementById('etcButton');
if (etcButton) {
    etcButton.addEventListener('click', () => {
        renderProjects('ETC');
    });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    
    if (linkHref === currentPage) {
        link.classList.add("active");
    }
    

});

const projectsData = {
    WEB: [
        {name: "Portfolio Site", thumbnail: "images/web_portfolio.png"},
        
    ],
    APP: [
        {name: "Blood Drive Registration App", thumbnail: "images/app_bloodDrive.png"},
        {name: "App2", thumbnail: "images/app1.png"},
        {name: "App3", thumbnail: "images/app1.png"},
        {name: "App4", thumbnail: "images/app1.png"},
        {name: "App5", thumbnail: "images/app1.png"},
        {name: "App6", thumbnail: "images/app1.png"}
    ],
    GAMES: [
        {name: "Game1", thumbnail: "images/game1.png"},
        {name: "Game2", thumbnail: "images/game1.png"},
        {name: "Game3", thumbnail: "images/game1.png"},
        {name: "Game4", thumbnail: "images/game1.png"},
    ],
    ETC: [
        {name: "ETC1", thumbnail: "images/etc1.png"}
    ]
};

const projectsContainer = document.getElementById("projectsContainer");

document.querySelectorAll(".categories button").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.parentElement.dataset.category;
        renderProjects(category);
    });
});

let currentCategory = null;

function renderProjects(category) {
    currentCategory = category;
    const projects = projectsData[category] || [];
    projectsContainer.innerHTML = "";
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = "<p style='color: white; text-align: center;'>No projects in this category yet.</p>";
        return;
    }
    
    const isListView = projectsContainer.classList.contains("list-view");
    
    projects.forEach(p => {
        const div = document.createElement("div");
        div.className = "project-card";
        
        if (isListView) {
            div.innerHTML = `
                <h4 style="color: white; font-size: 20px; margin: 10px 0; text-align: left;">${p.name}</h4>
            `;
        } else {
            div.innerHTML = `
                <img src="${p.thumbnail}" alt="${p.name}">
                <h4 style="color: white; font-size: 20px; margin: 10px 0;">${p.name}</h4>
                <p style="color: #bee3f4; font-size: 14px; margin: 0;">${p.description || ''}</p>
            `;
        }
        projectsContainer.appendChild(div);
    });
}

document.getElementById("tileViewBtn").addEventListener("click", () => {
    projectsContainer.classList.add("tile-view");
    projectsContainer.classList.remove("list-view");
    if (currentCategory) renderProjects(currentCategory); // Re-render
});

document.getElementById("listViewBtn").addEventListener("click", () => {
    projectsContainer.classList.add("list-view");
    projectsContainer.classList.remove("tile-view");
    if (currentCategory) renderProjects(currentCategory); // Re-render
});
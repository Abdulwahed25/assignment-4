const GITHUB_USERNAME = 'Abdulwahed25';

const projectsData = [
  {
    id: 1,
    title: 'Student Resource Hub',
    category: 'Web Dev',
    description: 'A web app to organize academic resources: notes, links and project materials.',
    image: 'Gemini_Generated_Image_z1vdwuz1vdwuz1vd.png',
    date: '2024-08-01',
    level: 'Beginner'
  },
  {
    id: 2,
    title: "Gamer's Guide",
    category: 'Design',
    description: 'Game reviews, guides and recommendations.',
    image: 'Screenshot 1447-04-02 at 4.59.19 pm.png',
    date: '2024-12-10',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Web Dev',
    description: 'This website: interactive features, dark mode and project filtering.',
    image: 'Screenshot 1447-06-07 at 10.46.23 am.png',
    date: '2025-01-02',
    level: 'Advanced'
  }
];

const state = {
  theme: localStorage.getItem('theme') || 'light',
  loggedIn: localStorage.getItem('loggedIn') === 'true',
  visitorName: localStorage.getItem('visitorName') || '',
  projectsVisible: true,
  filteredCategory: 'all',
  sortMode: 'date-desc'
};

const projectsContainer = document.getElementById('projects-container');
const emptyState = document.getElementById('empty-state');
const filterControls = document.getElementById('filter-controls');
const sortSelect = document.getElementById('sort-select');
const showHideProjectsBtn = document.getElementById('show-hide-projects');
const themeToggle = document.getElementById('theme-toggle');
const authToggle = document.getElementById('auth-toggle');
const greetingEl = document.getElementById('greeting');
const visitTimerEl = document.getElementById('timer');
const formFeedback = document.getElementById('form-feedback');

function applyTheme(theme) {
  state.theme = theme;
  if (theme === 'dark') document.body.classList.add('dark-mode');
  else document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', theme);
  if (themeToggle) themeToggle.setAttribute('aria-pressed', theme === 'dark');
}

function loadTheme() {
  applyTheme(state.theme);
}

function saveVisitorName(name) {
  state.visitorName = name;
  localStorage.setItem('visitorName', name);
}

function formatDate(d) {
  const date = new Date(d);
  if (isNaN(date)) return d;
  return date.toLocaleDateString();
}

function createProjectCard(project) {
  const div = document.createElement('article');
  div.className = 'project-card';
  div.innerHTML = `
    <img loading="lazy" src="${project.image}" alt="${project.title} image" />
    <h3>${project.title} <small>(${project.category})</small></h3>
    <p>${project.description}</p>
    <p><small>Level: ${project.level} • Date: ${formatDate(project.date)}</small></p>
  `;
  return div;
}

function sortProjectsList(list, mode) {
  const copy = [...list];
  switch (mode) {
    case 'date-asc': return copy.sort((a,b) => new Date(a.date) - new Date(b.date));
    case 'date-desc': return copy.sort((a,b) => new Date(b.date) - new Date(a.date));
    case 'title-asc': return copy.sort((a,b) => a.title.localeCompare(b.title));
    case 'title-desc': return copy.sort((a,b) => b.title.localeCompare(a.title));
    default: return copy;
  }
}

function renderProjects(data) {
  if (!projectsContainer) return;
  let list = data;
  if (state.filteredCategory !== 'all') {
    list = list.filter(p => p.category === state.filteredCategory);
  }
  list = sortProjectsList(list, state.sortMode);
  projectsContainer.innerHTML = '';
  if (list.length === 0) {
    if (emptyState) emptyState.hidden = false;
    return;
  }
  if (emptyState) emptyState.hidden = true;
  const frag = document.createDocumentFragment();
  list.forEach(p => frag.appendChild(createProjectCard(p)));
  projectsContainer.appendChild(frag);
}

if (filterControls) {
  filterControls.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      const cat = e.target.getAttribute('data-filter');
      state.filteredCategory = cat;
      filterControls.querySelectorAll('button').forEach(b => b.classList.remove('active-filter'));
      e.target.classList.add('active-filter');
      renderProjects(projectsData);
    }
  });
}

if (sortSelect) {
  sortSelect.addEventListener('change', e => {
    state.sortMode = e.target.value;
    renderProjects(projectsData);
  });
}

if (showHideProjectsBtn) {
  showHideProjectsBtn.addEventListener('click', () => {
    state.projectsVisible = !state.projectsVisible;
    const section = document.getElementById('projects-section');
    if (section) section.style.display = state.projectsVisible ? 'block' : 'none';
    showHideProjectsBtn.textContent = state.projectsVisible ? 'Hide Projects' : 'Show Projects';
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));
}

function clearUserStateOnSignOut() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('visitorName');
  state.loggedIn = false;
  state.visitorName = '';
  if (authToggle) authToggle.textContent = 'Sign In';
}

function handleSignOut() {
  clearUserStateOnSignOut();
  setTimeout(() => {
    const name = prompt("You've signed out. Enter your name to continue:");
    if (name && name.trim()) saveVisitorName(name.trim());
    updateGreeting();
  }, 250);
}

if (authToggle) {
  authToggle.addEventListener('click', () => {
    if (state.loggedIn) handleSignOut();
    else {
      state.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      authToggle.textContent = 'Sign Out';
      if (!state.visitorName) {
        const name = prompt('Welcome! What is your name?');
        if (name && name.trim()) saveVisitorName(name.trim());
        updateGreeting();
      }
    }
  });
}

function showFormFeedback(type, message) {
  if (!formFeedback) return;
  formFeedback.hidden = false;
  formFeedback.style.backgroundColor = type === 'success' ? 'var(--success)' : 'var(--danger)';
  formFeedback.style.color = type === 'success' ? '#0b2f1a' : '#6b0f11';
  formFeedback.textContent = message;
  setTimeout(() => {
    if (formFeedback) formFeedback.hidden = true;
  }, 6000);
}

function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    let ok = true;
    if (!name.value.trim()) { document.getElementById('name-error').style.display = 'block'; ok = false; }
    if (!email.value.trim() || !validateEmail(email.value)) { document.getElementById('email-error').style.display = 'block'; ok = false; }
    if (!message.value.trim()) { document.getElementById('message-error').style.display = 'block'; ok = false; }
    if (!ok) { showFormFeedback('error', 'Please correct the highlighted fields.'); return; }
    showFormFeedback('success', 'Success! Your message has been sent (simulated).');
    contactForm.reset();
  });
}

function updateGreeting() {
  if (!greetingEl) return;
  if (state.visitorName) greetingEl.textContent = `Welcome back, ${state.visitorName}!`;
  else {
    const hour = new Date().getHours();
    greetingEl.textContent = hour < 12 ? 'Good Morning!' : (hour < 18 ? 'Good Afternoon!' : 'Good Evening!');
  }
}

function promptForNameIfNeeded() {
  if (!state.visitorName) {
    setTimeout(() => {
      const name = prompt('Hi! What is your name?');
      if (name && name.trim()) saveVisitorName(name.trim());
      updateGreeting();
    }, 900);
  } else updateGreeting();
}

let secondsOnPage = 0;
setInterval(() => {
  secondsOnPage += 1;
  if (visitTimerEl) visitTimerEl.textContent = `${secondsOnPage}s`;
}, 1000);

async function fetchGitHubRepo() {
  const container = document.getElementById('github-repos');
  if (!container) return;
  container.textContent = 'Loading repository...';
  try {
    const res = await fetch(`https://api.github.com/repos/${encodeURIComponent(GITHUB_USERNAME)}/assignment-3`);
    if (!res.ok) {
      const fallbackUser = `https://api.github.com/repos/${encodeURIComponent('Abdulwahed25')}/assignment-3`;
      const fallback = await fetch(fallbackUser);
      if (!fallback.ok) throw new Error('Repo not found');
      const repoFallback = await fallback.json();
      container.innerHTML = `<p><a href="${repoFallback.html_url}" target="_blank" rel="noopener noreferrer">${repoFallback.name} — ⭐ ${repoFallback.stargazers_count}</a></p>`;
      return;
    }
    const repo = await res.json();
    container.innerHTML = `<p><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name} — ⭐ ${repo.stargazers_count}</a></p>`;
  } catch (err) {
    container.textContent = 'Could not load assignment-3 repository.';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  if (authToggle) authToggle.textContent = state.loggedIn ? 'Sign Out' : 'Sign In';
  promptForNameIfNeeded();
  renderProjects(projectsData);
  const initialFilter = filterControls ? filterControls.querySelector('[data-filter="all"]') : null;
  if (initialFilter) initialFilter.classList.add('active-filter');
  fetchGitHubRepo();
});
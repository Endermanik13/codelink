// script.js
lucide.createIcons();

// Проверка авторизации
firebase.auth().onAuthStateChanged(user => {
  const authLinks = document.querySelectorAll('.auth-required');
  const userMenu = document.getElementById('user-menu');
  if (user) {
    authLinks.forEach(el => el.style.display = 'flex');
    if (userMenu) {
      userMenu.innerHTML = `
        <img src="${user.photoURL || 'https://placehold.co/32x32/58a6ff/ffffff?text=' + (user.displayName?.[0] || 'U')}" class="user-avatar">
        <span>${user.displayName}</span>
        <button onclick="logout()" class="btn btn-outline">Выйти</button>
      `;
    }
  } else {
    authLinks.forEach(el => el.style.display = 'none');
  }
});

function logout() {
  firebase.auth().signOut();
  window.location.href = 'index.html';
}
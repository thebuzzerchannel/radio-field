document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    { name: 'Number Stations', url: 'numstat.html' },
    { name: 'Military Stations', url: 'milstat.html' },
    { name: 'News', url: 'newspage.html' },
    { name: 'Main Page', url: 'index.html' },
    // Добавляй свои страницы сюда
  ];
  document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const suggestions = document.getElementById('suggestions');

  // Пример слов для подсказок
  const words = ['Radio', 'Station', 'Log', 'Number Station', 'Frequency', 'Signal'];

  input.addEventListener('input', () => {
    const value = input.value.toLowerCase().trim();

    // Очистить подсказки
    suggestions.innerHTML = '';

    if (!value) {
      suggestions.style.display = 'none';
      return;
    }

    // Фильтруем слова
    const filtered = words.filter(w => w.toLowerCase().includes(value));

    if (filtered.length === 0) {
      suggestions.style.display = 'none';
      return;
    }

    // Показываем подсказки
    filtered.forEach(word => {
      const a = document.createElement('a');
      a.textContent = word;
      a.href = '#'; // тут можно подставить реальные ссылки
      a.addEventListener('click', (e) => {
        e.preventDefault();
        input.value = word;
        suggestions.style.display = 'none';
      });
      suggestions.appendChild(a);
    });

    suggestions.style.display = 'block';
  });

  // Скрыть подсказки при клике вне
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container')) {
      suggestions.style.display = 'none';
    }
  });
});


  const input = document.getElementById('search-input');
  const suggestions = document.getElementById('suggestions');
  const container = document.getElementById('search-container');

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    suggestions.innerHTML = '';

    if (query.length === 0) {
      suggestions.style.display = 'none';
      return;
    }

    const filtered = pages.filter(page => page.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
      suggestions.style.display = 'none';
      return;
    }

    filtered.forEach(page => {
      const a = document.createElement('a');
      a.href = page.url;
      a.textContent = page.name;
      suggestions.appendChild(a);
    });

    suggestions.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      suggestions.style.display = 'none';
    }
  });
});

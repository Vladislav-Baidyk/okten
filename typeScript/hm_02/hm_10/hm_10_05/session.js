var sessionsList = JSON.parse(localStorage.getItem('sessions-list')) || '[]';
sessionsList.push(new Date().toLocaleString());
localStorage.setItem('sessions-list', JSON.stringify(sessionsList));

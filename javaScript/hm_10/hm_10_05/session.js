let sessionsList =  JSON.parse(localStorage.getItem('sessions-list')) || [];
sessionsList.push(new Date());
localStorage.setItem('sessions-list',JSON.stringify(sessionsList));
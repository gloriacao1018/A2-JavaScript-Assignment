const visitorData = {
    'April': 323,
    'May': 456,
    'June': 65,
    'July': 321,
    'August': 654,
    'September': 789,
  };
  
  function createVisitorTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 
  
    for (const month in data) {
      const row = document.createElement('tr');
      const cellMonth = document.createElement('td');
      cellMonth.textContent = month;
  
      const cellVisitors = document.createElement('td');
      cellVisitors.textContent = data[month];
  
      row.appendChild(cellMonth);
      row.appendChild(cellVisitors);
      tableBody.appendChild(row);
    }
  }
  
  function updateVisitorData() {
    const monthInput = document.getElementById('month');
    const visitorsInput = document.getElementById('visitors');
    const month = monthInput.value;
    const visitors = visitorsInput.value;
  
    if (month && !isNaN(visitors)) {
      console.log('Updating data:', month, visitors);
      visitorData[month] = +visitors;
  
    
      createVisitorTable(visitorData);
  
      
      monthInput.value = '';
      visitorsInput.value = '';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    createVisitorTable(visitorData);
  
    ///
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesDiv = document.getElementById('accept-cookies');
    const revokeCookiesDiv = document.getElementById('revoke-cookies-div');

    acceptCookiesDiv.addEventListener('click', function (event) {
        event.preventDefault();
        cookieBanner.innerHTML = '<a href="#" id="revoke-cookies"></a>';
        revokeCookiesDiv.style.display = 'block';
    });

    revokeCookiesDiv.querySelector('#revoke-cookies').addEventListener('click', function (event) {
        event.preventDefault();
        cookieBanner.innerHTML = 'We use cookies to improve your experience!!<br> <a href="#" id="accept-cookies">Accept Cookies</a>';
        revokeCookiesDiv.style.display = 'none';
    });

    ////
    const toggleButton = document.getElementById('contrast-toggle');
    const siteBody = document.body;
    let isHighContrast = false;
    
    
    toggleButton.addEventListener('click', function () {
        isHighContrast = !isHighContrast;
    
        if (isHighContrast) {
            siteBody.style.backgroundColor = '#000';
            siteBody.style.color = '#fff';
            siteBody.style.padding = '20px';
            siteBody.style.lineHeight = '2';
            siteBody.style.letterSpacing = '2px';
            siteBody.style.fontSize = '20px';
            siteBody.style.fontStyle = 'Bold'
            toggleButton.textContent = 'Go Back!';
        } else {
            siteBody.style.backgroundColor = '';
            siteBody.style.color = '';
            siteBody.style.padding = '';
            siteBody.style.lineHeight = '';
            siteBody.style.letterSpacing = '';
            siteBody.style.fontSize = '';
            siteBody.style.fontStyle = ''
            toggleButton.textContent = 'Unlock High Contrast Mode!!!'; 
        }
        toggleButton.classList.toggle('on');
    });

    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyA' && (event.ctrlKey || event.metaKey)) {
          alert('Unlock High Contrast Mode!')
          toggleButton.click();
          event.preventDefault();
        } else if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
            isHighContrast = isHighContrast; 
            toggleButton.click();
            event.preventDefault();
        }
      });

});



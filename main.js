document.addEventListener('DOMContentLoaded', function () {

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
        console.log('Function executed'); // Add this line for debugging
      
        const monthInput = document.getElementById('month');
        const visitorsInput = document.getElementById('visitors');
        const month = monthInput.value;
        const visitors = visitorsInput.value;
      
        if (month && !isNaN(visitors)) {
          console.log('Updating data:', month, visitors);
          visitorData[month] = parseInt(visitors);
          createVisitorTable(visitorData);
      
          monthInput.value = '';
          visitorsInput.value = '';
        }
      }
      
  
    createVisitorTable(visitorData);

    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesLink = document.getElementById('accept-cookies');
    const revokeCookiesDiv = document.getElementById('revoke-cookies-div');

    acceptCookiesLink.addEventListener('click', function (event) {
        event.preventDefault();
        cookieBanner.innerHTML = 'Cookies were accepted. Would you like to revoke? <a href="#" id="revoke-cookies"></a>';
        revokeCookiesDiv.style.display = 'block';
    });

    revokeCookiesDiv.querySelector('#revoke-cookies').addEventListener('click', function (event) {
        event.preventDefault();
        cookieBanner.innerHTML = 'We use cookies to improve your experience!!<br> <a href="#" id="accept-cookies">Accept Cookies</a>';
        revokeCookiesDiv.style.display = 'none';
    });

    const siteBody = document.body;
    let isHighContrast = false;
    
    const toggleButton = document.getElementById('contrast-toggle');
    toggleButton.addEventListener('click', function () {
        isHighContrast = !isHighContrast;
    
        if (isHighContrast) {
            siteBody.style.backgroundColor = '#000';
            siteBody.style.color = '#fff';
            siteBody.style.padding = '20px';
            siteBody.style.lineHeight = '3';
            siteBody.style.letterSpacing = '6px';
            siteBody.style.fontSize = '20px';
            adjustTextStyles(true);
        } else {
            siteBody.style.backgroundColor = '';
            siteBody.style.color = '';
            siteBody.style.padding = '20px';
            siteBody.style.lineHeight = '1';
            siteBody.style.letterSpacing = '1px';
            siteBody.style.fontSize = '16px';
            adjustTextStyles(false);
        }
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
  
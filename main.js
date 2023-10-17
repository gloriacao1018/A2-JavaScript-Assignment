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
  });
  
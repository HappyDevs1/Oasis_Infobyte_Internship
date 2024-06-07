let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        displayCalculation();
      }

      function saveCalculation () {
        localStorage.setItem('calculation', calculation);
      }
      function displayCalculation () {
        document.querySelector('.js-calculation-text').innerHTML = calculation;
      }
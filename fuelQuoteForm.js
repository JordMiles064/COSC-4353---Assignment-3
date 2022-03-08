class PricingModule {


}

$(document).ready(function() {
  $('#submitGallons').click(function() {
      var value = document.getElementById('gallonsReq').value;
      if (value === '') {
          alert('Please do not leave blank and enter a number');
      }
  })
});

function sum(a, b) {
  return a + b;
}
module.exports = sum;
function compute() {
  p = document.getElementById('principal').value
  var principal = document.getElementById('principal').value
  if (parseInt(principal) <= 0 || principal == '') {
    alert('Please enter a positive number')
    document.querySelector('#principal').focus()
    return
  }
  var rate = document.getElementById('rate').value
  var years = document.getElementById('years').value
  var interest = principal * years * rate / 100
  var year = new Date().getFullYear() + parseInt(years)

  var result = document.querySelector('#result')
  result.innerText = `If you deposit ${principal}\nat an interest rate of ${rate}%\nyou will receive an amount of ${interest}, in the year ${year}`
}

function updateRate() {
  var rateval = document.getElementById('rate').value
  document.getElementById('rate_val').innerText = rateval
}
        
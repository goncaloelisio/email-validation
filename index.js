const emailInput = document.querySelector('#email')

const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/

emailInput.addEventListener('keyup', (e) => {
  
  if (emailRegex.test(e.target.value)) {
    emailInput.parentElement.classList.add('valid')
  } else {
    emailInput.parentElement.classList.remove('valid')
  }

})
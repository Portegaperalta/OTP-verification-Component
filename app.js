const digitOne = document.querySelector('#digit-one')
const digitTwo = document.querySelector('#digit-two')
const digitThree = document.querySelector('#digit-three')
const digitFour = document.querySelector('#digit-four')

const validateOtpButton = document.querySelector('#verify-otp-button')

const verificationCode = [3, 4, 8, 4]


validateOtpButton.addEventListener('click', () => {
  const userCode = [digitOne.value, digitTwo.value, digitThree.value, digitFour.value]

  if (userCode[0] == verificationCode[0] && userCode[1] == verificationCode[1] && userCode[2] == verificationCode[2] && userCode[3] == verificationCode[3]) {
    validateOtpButton.style.borderColor = 'green'
  } else {
    validateOtpButton.style.borderColor = 'red'
  }
})
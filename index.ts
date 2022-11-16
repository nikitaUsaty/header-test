import './style.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const form = document.getElementById('form')
const input = document.querySelector('.form-input') as HTMLInputElement
const message = document.querySelector('.message')
const showMes = document.getElementById('popup')
const closeBtn = document.getElementById('close')
const formShape = document.querySelector('.form-shape')
const messageError = document.querySelector('.message-error')

form?.addEventListener('submit', (e) => {
  validator()
  e.preventDefault()
})

async function getReq(): Promise<any> {
  const response = await fetch('http://ptsv2.com/t/bla/post')

  if (response.status === 200) {
    let text = await response.text()
    return text
  }
}

async function handleReq() {
  getReq().then((res) => (message!.innerHTML = res))
  showMes?.classList.remove('display')
}

closeBtn?.addEventListener('click', () => {
  showMes?.classList.add('display')
})

function validator() {
  let x = input.value

  if (!x) {
    // formShape?.classList.add('error-input')
    messageError?.classList.remove('display')
  } else {
    // formShape?.classList.remove('error-input')
    messageError?.classList.add('display')
    handleReq()
  }
}

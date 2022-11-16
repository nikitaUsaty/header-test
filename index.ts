import './style.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const form = document.getElementById('form')
const message = document.querySelector('.message')
const showMes = document.getElementById('popup')
const closeBtn = document.getElementById('close')

form?.addEventListener('submit', (e) => {
  e.preventDefault()
  handleReq()
})

async function getReq(): Promise<any> {
  const response = await fetch('http://ptsv2.com/t/bla/post')

  if (response.status === 200) {
    let text = await response.text()
    console.log(text)

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

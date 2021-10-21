const btnContacto = document.getElementById('get-contacto')
const btnQuery = document.getElementById('get-query')
const divResult = document.getElementById('result')

const displayResult = (data) => {
  divResult.innerHTML = ''
  divResult.innerHTML = JSON.stringify(data)
}
const getContacto = async () => {
  fetch(`/server/sandbox/books/getContacto/888587000033680404`)
    .then((resp) => resp.json())
    .then((data) => displayResult(data))
}

const getQuery = async () => {
  fetch(`/server/sandbox/users`)
    .then((resp) => resp.json())
    .then((data) => displayResult(data))
}

btnContacto.addEventListener('click', getContacto)
btnQuery.addEventListener('click', getQuery)

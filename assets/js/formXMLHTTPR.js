// requisição que busca o html em outro arquivo do projeto 
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

// escolhendo e capturando qual html a ser chamado
document.querySelector('#secAreaSpaces').addEventListener('click', e=> {
    e.preventDefault()
    const el = e.target.closest('a')
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        loadForm(el)
    }
})

// chamando a requisição que vai carregar novo html
function loadForm(el) {
    const href = el.getAttribute('href')

    let secFormDiv1 = document.querySelectorAll("#secForm div")[0]
    if (href == "HTML/verificationPage.html") secFormDiv1.innerHTML = "CADASTRAR NA ÁREA DE VERIFICAÇÃO"
    if (href == "HTML/tiPage.html") secFormDiv1.innerHTML = "CADASTRAR NA ÁREA DE TI"
    if (href == "HTML/supportPage.html") secFormDiv1.innerHTML = "CADASTRAR NA ÁREA DE SUPORTE"

    const config = {
        method: 'GET',
        url: href
    }

    request(config)
    .then((response) => {
        applyResult(response)
    })
}

// aplicar no index.html o html requisitado
function applyResult(response) {
    const result = document.querySelector('#formHtmlArea')
    result.innerHTML = response
    openForm()
}

// mostrar o novo html na página
function openForm() {
    const formHtmlArea = document.querySelector('#secForm')
    formHtmlArea.style.display = 'flex'
    formHtmlArea.scrollIntoView()
}








// NOME
// SOBRENOME
// CPF
// IDADE
// NATURALIDADE
// AREA DE FORMAÇÃO

// VERIFICAÇÃO
// AREA DE TRABALHO
// CHECKLISTS ENCARREGADAS
// NIVEL DE ATUAÇÃO (1,2,3...)

// TI
// HARD SKILLS
// AREA DE DESENVOLVIMENTO
// NIVEL DE EXPERIENCIA

// SUPORTE
// AREA DE ATUAÇÃO
// REGIÃO QUE ATENDE
// IDIOMAS

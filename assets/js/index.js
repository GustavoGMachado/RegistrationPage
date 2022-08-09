class Employee {
    constructor(name, lastName, age, cpf, countryOrigin, profissionalArea) {
        this.name = name 
        this.lastName = lastName
        this.age = age
        this.cpf = cpf
        this.countryOrigin = countryOrigin
        this.profissionalArea = profissionalArea
    }

    checkCPF(cpf) {

    }
}

class VerificationEmployee extends Employee {
    constructor(name, lastName, age, cpf, countryOrigin, profissionalArea, workArea, listsCharge, performanceLevel) {
        super(name, lastName, age, cpf, countryOrigin, profissionalArea) 

        this.workArea = workArea
        this.listsCharge = listsCharge
        this.performanceLevel = performanceLevel
    }
}

class TiEmployee extends Employee {
    constructor(name, lastName, age, cpf, countryOrigin, profissionalArea, developmentArea, hardSkills, seniority) {
        super(name, lastName, age, cpf, countryOrigin, profissionalArea) 
        
        this.developmentArea = developmentArea
        this.hardSkills = hardSkills
        this.seniority = seniority
    }
}

class supportEmployee extends Employee {
    constructor(name, lastName, age, cpf, countryOrigin, profissionalArea, knowledgeArea, regionServes, languages) {
        super(name, lastName, age, cpf, countryOrigin, profissionalArea) 
        
        this.knowledgeArea = knowledgeArea
        this.regionServes = regionServes
        this.languages = languages
    }
}

function createVerificationEmployee() {
    const verGeneralData = captureGeneralData() // Array com os valores nas inputs é retornado
    const newVerEmployee = new VerificationEmployee(...verGeneralData)
    manageReg(newVerEmployee)
}
function createTiEmployee() {
    const tiGeneralData = captureGeneralData() // Array com os valores nas inputs é retornado
    const newTiEmployee = new TiEmployee(...tiGeneralData)
    manageReg(newTiEmployee)
}
function createSupportEmployee() {
    const supGeneralData = captureGeneralData() // Array com os valores nas inputs é retornado
    const newSupEmployee = new supportEmployee(...supGeneralData)
    manageReg(newSupEmployee)
}

// capturando os dados do form e apagando as mensagens de erro
function captureGeneralData() {
    document.querySelectorAll('.formRegistrationSpan').forEach((el, key) => {
        el.remove()
    })

    const generalData = []

    document.querySelectorAll("#formRegistration div input").forEach((el, key) => {
        verficationData(el, key)
        generalData.push(el.value)
    })

    return generalData
}

//lançador de erros
function verficationData(el, key) {
    if (!el.value) throwErrorData(el, `Campo ${el.placeholder.toUpperCase()} não pode estar vazio, tente novamente!`)
    console.log(el.placeholder)
    if ((key === 0 || key === 1 || key === 4)) {
        const regexLetters = /^[a-záàâãéèêíïóôõöúçñ]+$/i
        if (regexLetters === false) throwErrorData(el, `Campo ${el.placeholder.toUpperCase()} detectou caracteres inválidos, tente novamente!`)
    }
    if ((key === 2 || key === 3) && !Number(el.value)) throwErrorData(el, `Campo ${el.placeholder.toUpperCase()} reconhece apenas números, tente novamente!`)
    if (key === 3 && el.value.length !== 11) throwErrorData(el, `Campo ${el.placeholder.toUpperCase()} não possui a quantidade de caracteres necessária, tente novamente!`)

}

// erro de campos vazios
function throwErrorData(el, msg) {
    let newSpan = document.createElement("span")
    newSpan.innerHTML = msg
    newSpan.classList.add("formRegistrationSpan")
    el.insertAdjacentElement('afterend', newSpan)
}

// array de cadastrados
let arrayEmployeeReg = []
function manageReg(objEmployee) {
    arrayEmployeeReg.push(objEmployee)
}

// criando ou cancelando o form
document.querySelector("#submitForm").addEventListener('click', e => {
    e.preventDefault()
    const definedReg = document.querySelector("#secFormTitle").getAttribute("definedReg")

    // verifcando qual tipo de form e chamando a função necessária para setar o constructor correto
    if (definedReg ==="verificationReg") createVerificationEmployee()
    if (definedReg ==="tiReg") createTiEmployee()
    if (definedReg ==="supReg") createSupportEmployee()

})
document.querySelector("#cancelForm").addEventListener('click', e => {
    e.preventDefault()
    document.querySelector("#secArea").scrollIntoView()

    setTimeout(() => {
        document.querySelector('#secForm').style.display = 'none'
    }, 500)
})











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
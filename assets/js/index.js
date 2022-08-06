class Employee {
    constructor(name, lastName, age, cpf, countryOrigin, profissionalArea) {
        this.name = name 
        this.lastName = lastName
        this.age = age
        this.cpf = cpf
        this.countryOrigin = countryOrigin
        this.profissionalArea = profissionalArea
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
    console.log(newVerEmployee)
    
}
function createTiEmployee() {
    const tiGeneralData = captureGeneralData() // Array com os valores nas inputs é retornado
    const newTiEmployee = new TiEmployee()
    
}
function createSupportEmployee() {
    const supGeneralData = captureGeneralData() // Array com os valores nas inputs é retornado
    const newSupEmployee = new supportEmployee()
    
}


// capturando os dados do form
function captureGeneralData() {
    const generalData = []

    document.querySelectorAll("#formRegistration div input").forEach((el, key) => {
        generalData.push(el.value)
    })

    return generalData
    // const name = document.querySelector("input#name").value
    // const lastName = document.querySelector("input#lastName")
    // const cpf = document.querySelector("input#cpf")
    // const age = document.querySelector("input#age")
    // const countryOrigin = document.querySelector("input#countryOrigin")
    // const profissionalArea = document.querySelector("input#profissionalArea")

    // return [name, lastName, cpf, age, countryOrigin, profissionalArea]
}










// criando ou cancelando o form
document.querySelector("#submitForm").addEventListener('click', e => {
    e.preventDefault()
    const definedReg = document.querySelectorAll("#secForm div")[0].getAttribute("definedReg")

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
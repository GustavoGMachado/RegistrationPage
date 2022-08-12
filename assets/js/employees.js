// função para imprimir cadastros na tela
export function showEmployeesArea(arrayEmployeeReg) {
    if (arrayEmployeeReg.length === 0) {
        return
    } else {
        document.querySelector('#employeesArea').style.display = 'flex'
        const secEmployeeArea = document.querySelector('#regEmployeesArea')
        secEmployeeArea.innerHTML = ''

        arrayEmployeeReg.forEach((el, key) => {
            const newElement = document.createElement('div')
            newElement.classList = 'divAreaEmployee'

            // dados padrão
            createSpan('Nome: ', el.name)
            createSpan('Sobrenome: ', el.lastName)
            createSpan('Idade: ', el.age)
            createSpan('CPF: ', el.cpf)
            createSpan('País de Origem: ', el.countryOrigin)
            createSpan('Formação: ', el.profissionalArea)

            // dados específicos
            if (el.department === "Verification") {
                createSpan('Área de Trabalho: ', el.workArea)
                createSpan('Checklists Encarregadas: ', el.listsCharge)
                createSpan('Nível de Atuação: ', el.performanceLevel)
                createSpan('Departamento: ', 'Verificação')
            }
            if (el.department === "informationTechnology") {
                createSpan('Área de Desenvolvimento: ', el.developmentArea)
                createSpan('Hard Skills: ', el.hardSkills)
                createSpan('Senioridade: ', el.seniority)
                createSpan('Departamento: ', 'Tecnologia da Informação')

            }
            if (el.department === "Support") {
                createSpan('Área de Conhecimento: ', el.knowledgeArea)
                createSpan('Região que Atende: ', el.regionServes)
                createSpan('Idiomas: ', el.languages)
                createSpan('Departamento: ', 'Suporte')
            }

            function createSpan(keyName, keyValue) {
                const spanElement = document.createElement('span')
                spanElement.innerText = keyName + keyValue
                newElement.appendChild(spanElement)
                newElement.appendChild(document.createElement('br'))
            }

            secEmployeeArea.appendChild(newElement)
        })
    }
}
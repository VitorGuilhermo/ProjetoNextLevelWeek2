// Procurar o botao 
// Quanto clicar no botão
document.querySelector("#add-time").addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Limpar os campos
    const fields = newFieldsContainer.querySelectorAll('input')
    // Para cada campo, limpar
    fields.forEach(function(field) {
        field.value = ""
    })
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
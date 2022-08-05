












document.querySelector("#submitForm").addEventListener('click', e => {
    e.preventDefault()
})
document.querySelector("#cancelForm").addEventListener('click', e => {
    e.preventDefault()
    document.querySelector("#secArea").scrollIntoView()

    setTimeout(() => {
        document.querySelector('#secForm').style.display = 'none'
    }, 500)
})
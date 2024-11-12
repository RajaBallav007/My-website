const scriptURL = 'https://script.google.com/macros/s/AKfycbysxE5o4YQgEWMIQnpN4u-p7cOOdNrrpTDGoOxNCus-NbyzE2ewsLfLSatOtZdtmyNUow/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 1000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
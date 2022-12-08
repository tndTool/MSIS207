form.addEventListener('submit',() => {
    const login = {
        tel_or_email: tel_or_email.value,
        password: password.value
    }
   fetch('/api/login', { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(login),
}).then(res => res.json())
    .then(data => {
    if (data.status === 'ok') {
        console.log('Got the token: ', data.data)
        // alert(data.success)
        window.location.href = '/'
    }else {
    alert (data.error)
    }
    })
})
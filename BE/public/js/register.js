form.addEventListener('submit',() => {
    const register = {
        username: requestAnimationFrame.body,
        password: password.value,
        password_confirmation: confirm_password.value,
        tel_or_email: tel_or_email.value
    }
    fetch('/api/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(register),
     }).then(res => res.json())
          .then(data => {
            if (data.status === 'ok') {
              alert(data.success)
              window.location.href = '/login'
           }else {
             alert (data.error)
           }
          })
})


  

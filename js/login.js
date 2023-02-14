document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // Step for password 
    const passwordField = document.getElementById('user-pass');
    const pass = passwordField.value;

    if( email === 'ap@gmail.com' && pass === 'secret'){
        console.log('Valid User')
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid.. Nikkamma Password vule gesis !!')
    }
})
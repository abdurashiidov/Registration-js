const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// Sign up
submitBtnSignUp.addEventListener('click', e => {
    e.preventDefault()  
    let username = usernameInput.value.trim()
    let email = emailInput.value.trim()
    let passwordOne = passwordInput1.value
    let passwordTwo = passwordInput2.value
    let currentTime = Date.now()
    let foundUser = users.find(item => item.email == email || item.username == username)

    if (passwordOne == passwordTwo) {
        if (!foundUser) {
            users.push({
            id: currentTime,
            username,
            email,
            passwordOne,
            passwordTwo,
            })
            alert('Success')
        } else {
            alert('User exists ')
        }
    } else{
        alert("Passwords don't match")
    }

    saveData(users, "users")

    usernameInput.value = ''
    emailInput.value = ''
    passwordInput1.value = ''
    passwordInput2.value = ''
})
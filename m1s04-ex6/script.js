function concatenateNames() {
    let firstName = window.prompt('digite o seu primeiro nome:');
    let lastName = window.prompt('digite o seu sobrenome:');
    let fullName = firstName.concat(" ", lastName);
    window.alert(`você é ${fullName}`);
}

concatenateNames()

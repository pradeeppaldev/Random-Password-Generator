const generate = document.getElementById('generateBtn');

const passwordText = document.getElementById('password');

    let pass = "";

generate.addEventListener('click', () => {

    const arr = new Array(12);

    pass = "";

    for(let i = 0;i < 12; i++){
        arr[i] = Math.floor(Math.random() * (126 - 33 + 1) + 33);
        pass = pass + String.fromCharCode(arr[i]);
    }

    passwordText.value = pass;

});
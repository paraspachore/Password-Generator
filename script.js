const lengthSlider = document.querySelector(".pass_length input"),
options = document.querySelectorAll(".option input")
generateBtn = document.querySelector(".generate_btn");

const characters = { //object of letters, numbers, symbols
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"`~!@#$%^&*_"
}

const generatePassword = ()=> {
    let staticPassword = "",
    randomPassword = "",
    passLength = lengthSlider.value;

    options.forEach(option => { //looping through each option's checkbox
        if(option.checked){ //if checkbox is checked
            //adding particular key value from character object to staticPassword
            staticPassword += characters[option.id];
        }
    });

    for (let i = 0; i < passLength; i++) {
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }

    document.querySelector(".input_box input").value = randomPassword;
    console.log(randomPassword);
}
generatePassword();

const updateSlider = ()=> {
    // Passing slider value as conter text
    document.querySelector(".pass_length span").innerText = lengthSlider.value;
}
updateSlider();

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
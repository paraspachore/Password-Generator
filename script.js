const lengthSlider = document.querySelector(".pass_length input"),
    options = document.querySelectorAll(".option input")
generateBtn = document.querySelector(".generate_btn");

const characters = { //object of letters, numbers, symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "`~!@#$%^&*_",
    spaces: "    "
}

const generatePassword = () => {
    let staticPassword = "",
        randomPassword = "",
        excludeDuplicate = false,
        passLength = lengthSlider.value;

    options.forEach(option => { //looping through each option's checkbox
        if (option.checked) { //if checkbox is checked
            if (option.id !== "exc_duplicate") {
                //adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
            } else {
                excludeDuplicate = true;
                // staticPassword += characters[option.id];
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        // if (excludeDuplicate) {
        //     // randomPassword += randomChar;
        //     if (randomPassword.includes(randomChar) || randomChar == " ") {
        //         console.log(randomChar);
        //         console.log(randomPassword);
        //         passLength++;
        //     } else {
        //         randomPassword += randomChar;
        //     }
        // } else {
        //     randomPassword += randomChar;
        // }
        randomPassword += randomChar;
    }

    document.querySelector(".input_box input").value = randomPassword;
    console.log(randomPassword);
}
generatePassword();

const updateSlider = () => {
    // Passing slider value as conter text
    document.querySelector(".pass_length span").innerText = lengthSlider.value;
}
updateSlider();

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
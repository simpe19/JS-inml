const submitform = (e) => {
    e.preventDefault()
    validate(e)
}


const validate = (e) => {

    console.log(e.type)

    switch(e.type) {
        case "submit":
            break;

        case "keyup":
            break;
    }
}
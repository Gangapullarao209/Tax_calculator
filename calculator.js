function calculateCube() {
    const inputNumber = parseFloat(document.getElementById("number").value);
    if (!isNaN(inputNumber)) {
        const cube = inputNumber * inputNumber * inputNumber;
        document.getElementById("result").value = cube;
    } else {
                 window.alert("Input should be number.");
    }
    document.getElementById("number").value = "";

}
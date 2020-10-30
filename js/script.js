function calculatebmi() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    // unit of measurment chosen
    var HeightUnit = document.getElementById("dropdown-height").value;
    var WeightUnit = document.getElementById("dropdown-weight").value;

    // checking each unit and calculating new value
    if (HeightUnit == 2) {
        height = height / 100;
    }
    if (WeightUnit == 2) {
        weight = weight / 1000;
    }

    var bmicalculated = weight / (height * height);

    // print output
    document.getElementById('bmivalue').innerHTML = "Your BMI is: " + bmicalculated;

    if (bmicalculated <= 18.5) {
        document.getElementById('outputtext').innerHTML = "You are underweight";
    } else if (bmicalculated > 18.5 && bmicalculated <= 25) {
        document.getElementById('outputtext').innerHTML = "Your weight is normal";
    } else if (bmicalculated > 25 && bmicalculated <= 30) {
        document.getElementById('outputtext').innerHTML = "You are overweight";
    } else if (bmicalculated > 30) {
        document.getElementById('outputtext').innerHTML = "You are obese";
    }
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

var acc = document.querySelectorAll("button.login");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
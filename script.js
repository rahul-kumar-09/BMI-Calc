function calculateBMI() {

    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = weight / (height / 100) ** 2
    let results = bmi.toFixed(2) //last 2 decimal

    console.log(results)
    
    if (bmi < 18.5) {
        results = results + "(Underweight)"
    }

    else if (bmi >= 18.5 && bmi < 25){
        results = results + "(Normal)"
    }


    else if (bmi >= 25 && bmi < 30) {
        results = results + "(Overweight)"
    }
    
    
    else if (bmi >= 30){
        results = results + "(Obese)"
    } 
    
    
    else {
        results = results + "Enter valid height and Weight!"
    }

    document.getElementById('result').innerHTML = results;
}

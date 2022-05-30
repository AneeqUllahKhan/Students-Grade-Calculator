const calcy = () =>{
    let computer = document.getElementById('cmp').value
    let physics = document.getElementById('phys').value
    let maths = document.getElementById('maths').value
    let english = document.getElementById('eng').value
    let urdu = document.getElementById('urdu').value
    let pst = document.getElementById('pst').value
    let grades =""
    

    let totalGrades = parseFloat(computer) + parseFloat(physics) + parseFloat(maths )+ parseFloat(english) + parseFloat(urdu) + parseFloat(pst);
    let percent = ((totalGrades/550) *100).toFixed(2);

    if(percent <=100 && percent >= 80){
        grades = "A+"

    }
    
    else if(percent <=79 && percent >= 70){
        grades = "A"

    }
    
    else if(percent <=69 && percent >= 55){
        grades = "B"

    }

    
    else if(percent <=54 && percent >= 33){
        grades = "C"

    }

    
    else {
        grades = "F"

    }

    if(percent >= 30) {
        document.getElementById('showdata').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} Congratulation You are pass!`

    }

    else{
        document.getElementById('showdata').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} You are fail!`
    }

    // document.getElementById('showdata').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} `
}




const calc = () =>{
    let computer = document.getElementById('chem').value
    let physics = document.getElementById('physics').value
    let maths = document.getElementById('math').value
    let english = document.getElementById('urd').value
    let urdu = document.getElementById('english').value
    let pst = document.getElementById('pak-std').value
    let sindhi = document.getElementById('sindhi').value
    let grades =""
    

    let totalGrades = parseFloat(computer) + parseFloat(physics) + parseFloat(maths )+ parseFloat(english) + parseFloat(urdu) + parseFloat(pst) + parseFloat(sindhi);
    let percent = ((totalGrades/550) *100).toFixed(2);

    if(percent <=100 && percent >= 80){
        grades = "A+"

    }
    
    else if(percent <=79 && percent >= 70){
        grades = "A"

    }
    
    else if(percent <=69 && percent >= 55){
        grades = "B"

    }

    
    else if(percent <=54 && percent >= 33){
        grades = "C"

    }

    
    else {
        grades = "F"

    }

    if(percent >= 30) {
        document.getElementById('showresult').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} Congratulation You are pass!`

    }

    else{
        document.getElementById('showresult').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} You are fail!`
    }

    // document.getElementById('showdata').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} `
}




const cal = () =>{
    let computer = document.getElementById('sub1').value
    let physics = document.getElementById('sub2').value
    let maths = document.getElementById('sub3').value
    let english = document.getElementById('sub4').value
    let urdu = document.getElementById('sub5').value
    let total = document.getElementById('total').value
    let grades =""
    

    let totalGrades = parseFloat(computer) + parseFloat(physics) + parseFloat(maths )+ parseFloat(english) + parseFloat(urdu);
    let percent = ((totalGrades/total) *100).toFixed(2);

    if(percent <=100 && percent >= 80){
        grades = "A+"

    }
    
    else if(percent <=79 && percent >= 70){
        grades = "A"

    }
    
    else if(percent <=69 && percent >= 55){
        grades = "B"

    }

    
    else if(percent <=54 && percent >= 33){
        grades = "C"

    }

    
    else {
        grades = "F"

    }

    if(percent >= 30) {
        document.getElementById('show-result').innerHTML = ` Out Of ${total} Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} Congratulation You are pass!`

    }

    else{
        document.getElementById('show-result').innerHTML = ` Out Of ${total} Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} You are fail!`
    }

    // document.getElementById('showdata').innerHTML = ` Out Of 550 Your Total Is ${totalGrades} and your percentage is ${percent}%. <br> Your Grade Is ${grades} `
}
function calculatetip(event){
    event.preventDefault();
    
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numofpeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
        alert("por favor, preencha os valores");
        return ;
    }

    if(numofpeople == "" | numofpeople <= 1){
        numofpeople = 1;
        document.getElementById('aech').style.display = "none"
    }else {
        document.getElementById('aech').style.display = "block"
    } 
    let total = (bill * serviceQual) / numofpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = "block"

    }

document.getElementById('totaltip').style.display = "none";
document.getElementById('aech').style.display = "none";

document.getElementById('tipsform').addEventListener('submit',calculatetip );

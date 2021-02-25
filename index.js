document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault();
    });


    const diceButtonObject = document.querySelector('#diceButton');
    const diceInputObject = document.querySelector('#diceInputTextbox');
    const diceParaSumParaDiv = document.querySelector('#diceParaSumParaDiv');
    const uList = document.querySelector('#dice-ul')

    diceButtonObject.addEventListener('click', (e)=>{
            const numberOfDice = diceInputObject.value;
            let dicePara = document.createElement('p');
                dicePara.setAttribute('id', 'dice-para');
            let sumPara = document.createElement('p');
                sumPara.setAttribute('id', 'sum-para');
            let listItem = document.createElement('li');
            if(numberOfDice <= 0){
                while(diceParaSumParaDiv.firstChild){
                    diceParaSumParaDiv.removeChild(diceParaSumParaDiv.firstChild);
                }
                dicePara.textContent = 
                "Enter a Number greater than 0";
                diceParaSumParaDiv.appendChild(dicePara);
            }else{
                while(diceParaSumParaDiv.firstChild){
                    diceParaSumParaDiv.removeChild(diceParaSumParaDiv.firstChild);
                }

                let str = "";
                let sum = 0;
                let counter = 1;
                while(counter <= numberOfDice){
                    let dice = Math.floor(Math.random() * 6) + 1;
                    switch(true){
                        case dice === 1:
                            str += '&#9856';
                            sum += dice;
                            break;
                        case dice === 2:
                            str += '&#9857';
                            sum += dice;
                            break;
                        case dice === 3:
                            str += '&#9858';
                            sum += dice;
                            break;
                        case dice === 4:
                            str += '&#9859';
                            sum += dice;
                            break;
                        case dice === 5:
                            str += '&#9860';
                            sum += dice;
                            break;
                        case dice === 6:
                            str += '&#9861';
                            sum += dice;
                            break;
                        default:
                            console.log("Error in Switch.");
                            console.log(str)

                    }
                    counter++;
                }
                dicePara.innerHTML = str;
                sumPara.textContent = "Sum = "+sum;
                diceParaSumParaDiv.appendChild(dicePara);
                diceParaSumParaDiv.appendChild(sumPara);
                listItem.innerHTML = str+" = "+sum;
                uList.appendChild(listItem);
                
            }
    })
})
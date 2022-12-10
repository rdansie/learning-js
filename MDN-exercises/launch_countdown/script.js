//While i >= 0, i = 10
    //if i is equal to 10 then add "Countdown 10"
    //elseif i is equal to 0 add "Blast off!"
    //else append i to the para
    //i--



let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10){
        para.textContent = "Countdown 10";
        output.appendChild(para);
        i--;
    } else if( i === 0){
        para.textContent = "Blast off!";
        output.appendChild(para);
        i--;
    } else {
        para.textContent = i;
        output.appendChild(para);
        i--;
    }
    
}


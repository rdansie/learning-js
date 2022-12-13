const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';


//Iterate through people Array

for (let tits of people) {
    //if name is equal to Phil or Lola concatenate to refused paragraph
    if (tits === "Phil" || tits === "Lola") {
        refused.textContent += tits + ", ";
    } else {
        //else concatenate to admitted paragraph
        admitted.textContent += tits + ", ";
    }
}

refused = refused.slice(0, -1);
admitted = admitted.slice(0, -1);

    




    //else concatenate to admitted paragraph


// refused.textContent += ;
// admitted.textContent += ;
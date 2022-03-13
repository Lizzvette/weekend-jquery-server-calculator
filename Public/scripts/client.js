$(document).ready(onReady); //1

function onReady(){    //2
    console.log('it is ready');

$('button').on('click',function (event) {
    event.preventDefault();
    operator = $(this).text();
    console.log(operator);
});
$(`#formCalc`).on('submit', addCalculation)

  (); //
// !!!!!!    call above - here the server let ...](review Instructions) !!!!!!!!
}// end onReady function 

function addCalculation(event){
    event.preventDefault();
}

let calculator = {
    

}

// ajax goes here / function
$(document).ready(onReady); //1

function onReady(){    //2
    console.log('it is ready');

$('button').on('click',function (event) {
    event.preventDefault();
    operator = $(this).text();
    console.log(operator);
});
$(`#formCalc`).on('submit', addCalculation)

  reset (); //   So ask...I must move function reset... !!!!!
// !!!!!!    call above - here the server let ...](review Instructions) !!!!!!!! ASK...

}// end onReady function 

function addCalculation(event){
    event.preventDefault();
}

let theCalculator = {
    firstNum: $(`firstInput`).val();
    secondNum: $(`secondInput`).val();
    operators: operator,
    total: 0;
};
console.log(theCalculator);

// ajax goes here / function
$.ajax({
    method: 'POST',
    url: '/theCalculator',
    data: theCalculator,
   //  Oops no host here???!!!!!! 
}).then((response) => {
    console.log('POST response', response);

    reset ();
}
);
let operator;
function clearFields(){  // auto fill Not always helpful...
    $('#firstInput').val('');
    $('#secondInput').val('');
}

function reset(){  // 3  (Review these steps)
    let ajaxOptions = {
        method:"GET",
        url:'/theCalculator',
    };
}
function render (theCalculator){
    // to the DOM  !!! ISSUES.......
$(#answer).empty(); 
for (let result of theCalculator){   
$(`#answer`).append(`
<li>
    ${result.firstNum} ${result.operators}
    ${result.secondNum} = ${result.total}

</li>
`);
$(`#theResult`.text(result.total);
}
} // ask about option / need for div between 61-63

function totalRender(total) {
    $(`#Result`).text(`{$total}`);
}

function total(){
    let ajax = {
        method:"GET",
        ulr: `/result`,
    };

    $ajax(ajax).then(response => {
        console.log('We did it!? Ajax request ~', response);
    totalRender(response);
    });
}


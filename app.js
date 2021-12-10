var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice =  document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");


function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current&&initial>=0 && current>=0&&quantity>=0)
    {
        //loss logic
        var loss = initial-current;
        var lossPercentage = (loss/initial)*100;
        showOutput(`oops the loss is ${loss} and the loss percentage is ${lossPercentage}`);

    }
    else if(current > initial&&initial>=0 && current>=0&&quantity>=0)
    {
       //profit logic
       var profit =current-initial;
       var profitPercentage = (profit/initial)*100;
       showOutput(`hey the profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }
    else{
        //display message 
        if (initial < 0 || quantity < 0||current<0) {
            showOutput("Please do not enter negative values");
        }
            else
            {
     showOutput("no pain no gain");
    }
}

}

function submitHandler(){
    var initial = Number(initialPrice.value);
    var quantity = Number(stocksQuantity.value);
    var current = Number(currentPrice.value);
    calculateProfitAndLoss(initial, quantity, current)
    
    
}
function showOutput(msg){
    outputEl.innerText = msg;
}
submitBtn.addEventListener("click", submitHandler);



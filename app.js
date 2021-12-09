var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice =  document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputEl = document.querySelector("#output");


function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current) {
    var loss = (initial-current)*quantity;
    var lossPercentage = (loss/initial)*100;
    showOutput(`hey the loss is ${loss} and the loss percentage is ${lossPercentage}`);
    
    } else if(initial < current) {
        var profit =(current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput(`hey the profit is ${profit} and the profit percentage is ${profitPercentage}`);

    }else {
    showOutput("No pain, no gain and no gain, no pain!");
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



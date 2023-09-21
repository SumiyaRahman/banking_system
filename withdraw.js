document.getElementById("withdraw-btn").addEventListener("click", function(){
    const newWithdrawAmount = getTotalWithdrawInput("withdraw-field");
    
    const withdrawValue = document.getElementById("withdraw-value");
    const preWithAmount = getWithdrawElement("withdraw-value");

    const totalwithdraw = preWithAmount + newWithdrawAmount;
    withdrawValue.innerText = totalwithdraw;

    const balanceAmount = document.getElementById("balance-amount");
    const preblancefloat = getWithdrawElement("balance-amount");

    const newBalance = preblancefloat -  newWithdrawAmount;
    balanceAmount.innerText = newBalance;

    const withdrawField = document.getElementById("withdraw-field");
    withdrawField.value = " ";
});
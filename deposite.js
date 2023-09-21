document.getElementById("deposit-btn").addEventListener("click", function () {
  const newConvertedAmount = getInputFieldValueById("deposit-field");

  const depositeAmountValue = document.getElementById("deposite-amount-value");
  const preConvertedAmount = getElementValueById("deposite-amount-value");

  const TotalDeposit = preConvertedAmount + newConvertedAmount;
  depositeAmountValue.innerText = TotalDeposit;

  const balanceAmount = document.getElementById("balance-amount");
  const preblancefloat = getElementValueById("balance-amount");

  const newBalance = newConvertedAmount + preblancefloat;
  balanceAmount.innerText = newBalance;
});

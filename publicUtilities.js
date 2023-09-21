function getInputFieldValueById(input) {
  const inputField = document.getElementById(input);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);
  return value;
}

function getTotalWithdrawInput(withdrawInput){
  const withdrawField = document.getElementById(withdrawInput);
  const withdrawAmount = withdrawField.value;
  const convertedWithdrawAmount = parseFloat(withdrawAmount);
  return convertedWithdrawAmount;
}
function getWithdrawElement(withdrawElement){
  const getWithdraw = document.getElementById(withdrawElement);
  const getElementValue = getWithdraw.innerText;
  const convertedElementValue = parseFloat(getElementValue);
  return convertedElementValue;
}
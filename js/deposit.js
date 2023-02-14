// step-1 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2 get the deposit amount 
    const DepositField = document.getElementById('deposit-amount');
    const newDepositAmount = DepositField.value;
    
    // step-3 Now catch the input filed entry and pass it to the deposit box 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    const currentDeposit = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = currentDeposit;

})
// step-1 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2 get the deposit amount 
    const DepositField = document.getElementById('deposit-amount');
    const newDepositAmount = DepositField.value;
    
    // step-later for clearing the form
    DepositField.value = '';
    
    // checking if it is a number or not 
    if(isNaN(newDepositAmount)){
        alert('Please provide some valid amount in number')
        return;
    }
    // step-3 Now catch the input filed entry and pass it to the deposit box 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    const currentDeposit = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = currentDeposit;
    
    // step -5 get balance current 
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotal = balanceTotalElement.innerText;

    const currentTotalBalance = parseFloat(prevBalanceTotal) + parseFloat(newDepositAmount);

    balanceTotalElement.innerText = currentTotalBalance;
 
    

})


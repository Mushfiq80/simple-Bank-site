document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmountField = document.getElementById('withdraw-amount');
    const newWithdrawString = withdrawAmountField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);
    
    // Clearing input data
    withdrawAmountField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid amount in number')
        return;
    }

    const WithdrawElement = document.getElementById('withdraw-total');
    const prevWithdrawTotal = WithdrawElement.innerText;

    // adjust with main balance
    const TotalAmountElement = document.getElementById('balance-total');
    const prevTotalAmount = TotalAmountElement.innerText;

    
    

    if(newWithdrawAmount > prevTotalAmount){
        alert('Baap er bank a etto taka nai');
        return;
    }
    const currentWithdrawTotal = newWithdrawAmount + parseFloat(prevWithdrawTotal);
    
    WithdrawElement.innerText = currentWithdrawTotal;

    const newTotalAmount = parseFloat(prevTotalAmount) - newWithdrawAmount;

    TotalAmountElement.innerText = newTotalAmount;

    
})



document.getElementById('btn-money').addEventListener('click', function(event){
   event.preventDefault();

    const addMoney = document.getElementById('add-money-input').value;
   const money = parseFloat(addMoney);
    const addPin = document.getElementById('add-pin').value;

    if( addPin === '1234'){
        const accountBalance =  document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(accountBalance);
         const balance = money + balanceNumber;
       document.getElementById('account-balance').innerText = balance;
    }
    else{
        alert('Failed to add money');
    }
})
const setDepositAmountInLocalStorage = (newDepositTotal, newBalanceTotal, newWithdrawTotal) =>{
    let depositAmounts = getLocalStorageData();
  
    if(!depositAmounts){
      const depoAmount = [
        {
          depositTotal: newDepositTotal,
          totalBalance: newBalanceTotal,
          totalWithdraw: newWithdrawTotal
  
        },
      ];
      localStorage.setItem('My-Bank', JSON.stringify(depoAmount));
    } else{
      const depoAmount = [
        {
          depositTotal: newDepositTotal,
          totalBalance: newBalanceTotal,
          totalWithdraw: newWithdrawTotal
  
        },
      ];
      localStorage.setItem('My-Bank', JSON.stringify(depoAmount));
    }
    displayAmountFromLocalStorage();   
  }

  const displayAmountFromLocalStorage = () =>{
    const amounts = getLocalStorageData();
    if(amounts !== null){
        console.log(amounts);
        setTextElementValueById("deposit-total", amounts[0].depositTotal);
        setTextElementValueById("balance-total", amounts[0].totalBalance);
        setTextElementValueById("withdraw-total", amounts[0].totalWithdraw);
    }
  }
  displayAmountFromLocalStorage();
// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   
   const coins = {
      50 : "H",
      25 : "Q",
      10 : "D",
      5 : "N",
      1 : "P"
    }
    
    if(currency <= 0){
    	return {};
    }
    if(currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    let currencyInCoins = {};
    const keys = Object.keys(coins).sort((a, b) => b-a);
    for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
    	let quotient = Math.floor(currency/key);
    	if(quotient == 0) {
      	continue;
      } else {
      	currencyInCoins[coins[key]] = quotient;
      	currency = currency%key;
      }
      if(currency == 0) {
      	break;
      }
      
    }
    return currencyInCoins;
}

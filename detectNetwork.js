// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardLen = cardNumber.length;

  if( (cardNumber.slice(0, 2)==='38' || cardNumber.slice(0, 2)==='39') && cardLen===14 )
  {
  	return 'Diner\'s Club';
  }

  if( (cardNumber.slice(0, 2)==='34' || cardNumber.slice(0, 2)==='37') && cardLen===15 )
  {
  	return 'American Express';
  }

  if( ( cardNumber.slice(0,4)==='4903' || cardNumber.slice(0,4)==='4905' || cardNumber.slice(0,4)==='4911' || cardNumber.slice(0,4)==='4936'
        || cardNumber.slice(0,6)==='564182' || cardNumber.slice(0,6)==='633110'
        || cardNumber.slice(0,4)==='6333' || cardNumber.slice(0,4)==='6759' )
      && ( cardLen===16 || cardLen===18 || cardLen===19 ) )
  {
  	return 'Switch';
  }

  if( cardNumber.slice(0, 1)==='4' && ( cardLen===13 || cardLen===16 || cardLen===19) )
  {
  	return 'Visa';
  }

  if( ( cardNumber.slice(0, 2)==='51' || cardNumber.slice(0, 2)==='52' || cardNumber.slice(0, 2)==='53' || cardNumber.slice(0, 2)==='54' || cardNumber.slice(0, 2)==='55' )
  	  && cardLen===16 )
  {
  	return 'MasterCard';
  }

  if( ( cardNumber.slice(0, 4)==='6011' 
  	    || ( cardNumber.slice(0, 2)==='64' && cardNumber.slice(2, 3)>='4' && cardNumber.slice(2, 3)<='9' )
        || cardNumber.slice(0, 2)==='65' )
  	  && ( cardLen===16 || cardLen===19) )
  {
  	return 'Discover';
  }

  if( ( cardNumber.slice(0, 4)==='5018' || cardNumber.slice(0, 4)==='5020' || cardNumber.slice(0, 4)==='5038' || cardNumber.slice(0, 4)==='6304' )
  	  && ( cardLen>=12 && cardLen<=19 ) )
  {
  	return 'Maestro';
  }


///China UnionPay
  for(var prefix = 624; prefix <= 626; prefix++){
  	prefix = prefix.toString();
  	if( cardNumber.slice(0,3)===prefix && ( cardLen>=16 && cardLen<=19 ) ){
  		return 'China UnionPay';
  	}
  }
  for(var prefix = 622126; prefix <= 622925; prefix++){
  	prefix = prefix.toString();
  	if( cardNumber.slice(0,6)===prefix && ( cardLen>=16 && cardLen<=19 ) ){
  		return 'China UnionPay';
  	}
  }
  for(var prefix = 6282; prefix <= 6288; prefix++){
  	prefix = prefix.toString();
  	if( cardNumber.slice(0,4)===prefix && ( cardLen>=16 && cardLen<=19 ) ){
  		return 'China UnionPay';
  	}
  }
  ///end China UnionPay


  return 0;
};



console.log('hello world');

//1:The question is to find the average cost of all the items in item.js
//To do this I am already looking at using the .forEach() method.
//The reason I want to use a .forEach() method is to avoid having to write a for loop for everything provided.
//I also need to think about using the .reduce() method in order to find the average of all the prices.
(function(){

  var itemIndex = 0; //set the item index to 0 to start the loop at the beginning of the array
  items.forEach(function(num){ //items, to select my obj, pass a value to the callback
    itemIndex += num.price //take what the loop is making itemIndex and add it, yet equal to value.price
  }) //.price because I want to select just the price of each item
  console.log(itemIndex / 25);  //you can do match in you console.log

}());

//2: Show me how to get an array of items that cost between $14 and $18 USD
//I already see I should maybe filter to find the prices between and including 14 and 18
//

(function(){

// var priceIndex = 0
//   items.forEach(function(num){
//     priceIndex = num.price
//     return priceIndex
//   })
//
//   console.log(priceIndex);
  function priceIndex(value){ //created a function to find the index of the price attributes
    return value.price >= 14 && value.price <= 18; //use these comparisons to find the objects within 14 & 18
  }

  var filtered = items.filter(priceIndex); //call my priceIndex function within my filter method

  console.log(filtered); //lot the filtered result.

}());


//3: Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you //find.
//We need to find the GBP with currency_code.
//I'm thinking to just use the code from question 2.
//Use that code to pass the argument to not store anything with USD
(function (){

  function currencyId(value){ //this function is to find what object attribute doesn't equal 'USD'
    return value.currency_code != 'USD'
  }

  var currencyType = items.filter(currencyId); //then plug the currencyId function as my callback

console.log(currencyType); //prints the only object with a curency_code of 'GBP'
console.log('1970s-schlitz-malt-liquor-glass-beer')
}());



//4: Show me how to find which items are made of wood. Please console.log the ones you find.
//I feel I could just re-use the code above for this one as well.
//
(function (){

  var materialUsed = items.filter(function(element){

    if(element.materials.indexOf('wood') >= 0){ //element into materials, then the index of materials 'wood' then >= 0 to find everything
      return true; //that is made with wood. If it has wood then return true
  }else{
    return false; //else return false
  }

  });

  materialUsed.forEach(function(element){ //forEach in order to apply the above function to a loop in order to print the wood
    console.log(element.title + ' is made of wood'); //element's title along with our own string.
  });


}());


//5: Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
//Above I a have a function that goes through each item element to find an index of wood.
//My thoughts are leading me to do something similar, but only to find items with a material index of > 8.
(function (){

  //so above I created a variable for filtering the materials used.
  var materialAmount = items.filter(function(element){ //so now I have created a variable to filter the number of mats used.
    if (element.materials.length >= 8){ //since i need to find a specific number of mats I use an elements.mats.length argument.
      return true; //Since I need to find a length >= 8 I pass that in my if statement and set to return true, else return false
    }else{
      return false;
    }
  })

  materialAmount.forEach(function(element){ //I use a forEach() in order to loop through the items that pass my filter test
    console.log(element.title + element.materials); //then printing those items with thier desired title and mat list.
  })


}());


//6: Show me how to calculate how many items were made by their sellers
//Im going to assume that user_id accounts for each seller. So I need to go through the opbject of items and find each unique seller id.

(function (){
//I think i'm going to try using the map method just to get the element array for all the sellers.
//Then I think I can just consol.log that to see if any of them repeat. If so, add an if else statement in order to not print repeats?

  var sellers = items.map(function(element){
    return element.user_id;
  })

console.log(sellers); //so now this prints every seller id to the console, but I need to show how many items where made by thier seller.

//I'm going to keep the above in here just to show I used map...
//after talking to some other students it seems using filter again will allow me to print the desired answer to the console.

  var sellerItems = items.filter(function(element){
    if(element.who_made === 'i_did'){ //this is just so it doesn't return -1.
      return true;
    }else{
      return false;
    }
  })
  console.log(sellerItems.length + ' where made by their sellers');
  // var whoMade = sellerItems.forEach(function(element){
  //   console.log(element.who_made + ' where made by their sellers');
  // })


}());

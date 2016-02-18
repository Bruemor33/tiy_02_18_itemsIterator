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

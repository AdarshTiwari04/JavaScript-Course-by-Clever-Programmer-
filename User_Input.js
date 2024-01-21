const prompt= require('prompt-sync')()

food= prompt('What is the cost of the Food? ');
tipPercentage= prompt('What will be the Tip Percentage? ')/100;
tipamount=food*tipPercentage;
Total= food + tipamount;

console.log(Total);
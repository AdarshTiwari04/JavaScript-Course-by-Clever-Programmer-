const prompt= require('prompt-sync')()

food=Number(prompt('What is the cost of the Food? '));
tipPercentage=Number( prompt('What will be the Tip Percentage? ')/100) ;
tipamount=food*tipPercentage;
Total= food + tipamount;

console.log(Total);
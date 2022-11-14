// const prompts = require("prompt");

// prompts.start();



//     prompts.get(['value1', 'value2'], function (err, result){

//     console.log("add :"+console.log(result.value1+result.value2),)
//     console.log("sup :"+console.log(result.value1-result.value2))
//     console.log("dev :"+console.log(result.value1/result.value2))
//     console.log("mul :"+console.log(result.value1*result.value2))
//     //    console.log(value1-value2);
//     //    console.log(value1*value2);
//     //    console.log(value1/value2);

// });





// var prompt2 = require('prompt');

//   //
//   // Start the prompt2
//   //
//   prompt2.start();

//   //
//   // Get two properties from the user: username and email
//   //

//   prompt2.get(['n1', 'n2'],
//    function (err: any, result: { n1: number; n2: number; }) {
//     //
//     // Log the results.
//     //
//     console.log('Command-line input received:');
//     console.log('  number1: ' + result.n1);
//     console.log('  number2: ' + result.n2);
//     let num1 =Number(result.n1);
//     let num2 =Number(result.n2);
//     console.log('  result: ' + num1+num2);
//   });

const prompt2 = require('prompt');

prompt2.start();

prompt2.get(['num1', 'num2','op'], function (err :any, result :any) {
    if (result.op ==='+'){
        console.log(Number(result.num1)+ Number(result.num2 ));

    }
    if (result.op ==='-'){
        console.log(Number(result.num1)- Number(result.num2 ));

    }
    if (result.op ==='*'){
        console.log(Number(result.num1)* Number(result.num2 ));

    }
    if (result.op ==='/'){
        console.log(Number(result.num1)/ Number(result.num2 ));

    }

})

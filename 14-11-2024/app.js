
// //number variable
// var num = 23

// //string variable

// var str = "My name is Abdul.Moiz"



// var name = prompt("Enter your name")

// if(name ==="Ali"){

//     alert(`Welcome ${name}!!`);
    
// }else{

//     alert("Ali is not Found");
    


// }



// var arr = ["Lahore","Karachi","Islamabad","Multan","HyderAbad"];

// console.log("First Element:",arr[0]);

// console.log("last Element:",arr[arr.length-1]);



// for(var i=1; i<=10 ; i++){


//     console.log(i);
    
// }


// function addnumber(num1,num2){

//     return num1+num2;

// }

// let sum = addnumber(50,40)
// console.log(sum);



// var num1 = prompt("Enter your first number");

// var num2 = prompt("Enter your Second number");


// function compare(num1,num2){


// if(num1>num2){

//     alert("num1 is greater");
    

// }

// if(num2 > num1){

//     alert("num2 is greater");
    

// }



// if(num1=== num2){

//     alert( "Both numbers are equal");
    

// }


// return

// }


// let num = compare(num1,num2)
// console.log(num);




var num1 = parseFloat(prompt("Enter your first number")); 
var num2 = parseFloat(prompt("Enter your second number")); 

function compare(num1, num2) {
    if (num1 > num2) {
        alert("num1 is greater");
    } else if (num2 > num1) {
        alert("num2 is greater");
    } else {
        alert("Both numbers are equal");
    }
}

compare(num1, num2);
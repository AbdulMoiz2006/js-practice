// class Toyotacar{

//     constructor(brand,mileage){
//     console.log("creating new object");
//     this.brandName = brand;
//     this.mileage = mileage;
//     }     
//     start(){
//     console.log("start");
//     }
    
//     stop(){
//         console.log("stop");
//     }
//     }
     
//     let fortuner=new Toyotacar("fortuner",10);
//     console.log(fortuner);
//     let lexus = new Toyotacar("lexus",12);
//     console.log(lexus);
    
    
// class parent{

// Hello(){
//     console.log("Hello");
// }
// }

// class child extends parent{}

// let obj = new child();


// class person{
// constructor(name){
//   this.species = "homo sapiens"
//   this.name = name;
// }

// eat(){
// console.log("eat");
// }

// sleep(){
//     console.log("sleep");
// }

// work(){

//     console.log("do nothing");
// }
    
// }


// class Engineer extends person{
//  constructor(name,branch){
    
//     super(name);
//     this.branch= branch;
//  }   
// work(){
// console.log("Solve problem,build something");
// }
// };

// let Moiz = new Engineer("Hussain","chemical Engineeer"); 


class person{
    constructor(name){
      this.species = "homo sapiens"
      this.name = name;
    }
    
    eat(){
    console.log("eat");
    }
    
    sleep(){
        console.log("sleep");
    }
    
    work(){
    
        console.log("do nothing");
    }
        
    }
    
    
    class Engineer extends person{
     constructor(name,branch){ 
        super(name);
        this.branch= branch;
     }    
    work(){
    super.eat();
    console.log("Solve problem,build something");
    }
    };
    

    let Moiz = new Engineer("Hussain","chemical Engineeer"); 
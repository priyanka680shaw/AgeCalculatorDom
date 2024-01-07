let body = document.querySelector("body");
body.style.color = "gray" ;
let calculatorBox = document.querySelector("#calc-container");
// css styling
calculatorBox.style.width = "600px" ;
calculatorBox.style.height = "350px";
calculatorBox.style.backgroundColor = "white";
calculatorBox.style.margin = "auto";
calculatorBox.style.marginTop = "50px";
calculatorBox.style.boxShadow = " 2px 2px 6px 3px gray";
calculatorBox.style.borderRadius = "40px";
// html part
//calculatorBox.innerHTML = "<h1>Age Calculator <h1>";

calculatorBox.style.textAlign = "center";
calculatorBox.style.fontSize = "23px";

calculatorBox.style.padding = "2px"
//input-box
let inputBox = calculatorBox.querySelector("#input-box");
inputBox.style.width = "300px";
inputBox.style.height = "30px"
inputBox.style.border = "1px solid grey";
inputBox.style.borderRadius = "5px";
inputBox.style.marginBottom = "15px";
//button
let btn = document.querySelector("#btn>button");
btn.style.backgroundColor = "#007BFF";
btn.style.width = "150px";
btn.style.height = "40px";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px" ;

//click button
let showAge = document.querySelector("#showAge");
let inputAgeVal = document.querySelector("input");
    btn.addEventListener("click" , (e) =>{
        let myBDay =new Date(inputAgeVal.value);
        let today = new Date();
        if(inputAgeVal.value == ""){
            alert("please enter your birthday");
        }
        else{
            let year = today.getFullYear()- myBDay.getFullYear();
            let month = today.getMonth()- myBDay.getMonth();
            //let day = today.getDay()- myBDay.getDay();

            showAge.innerHTML = (`your Current age is ${year} year ${month} months`);
        }
   
    })




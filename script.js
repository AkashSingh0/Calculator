//step 1- enter 1st value
//step 2- operator
//step 3- enter 2nd value
//step 4- equal to
// step 5- clear screen


//Declaration done
let Val1 ="";
let opr = "";
let Val2 ="";
let total= 0;

//DOM Manipulatuion

let input=document.querySelector("#result");
let button=document.querySelector(".buttons");
button.addEventListener("click",(event)=>{
console.log(event.target.innerText);

if(opr=="" && event.target.innerText>="0" && event.target.innerText<="9"){
    Val1+=(event.target.innerText);
}
else if((event.target.innerText!="C" || event.target.innerText!="=" )&& opr==""){
    opr=event.target.innerText;
}
else if(event.target.innerText>="0" && event.target.innerText<="9"){
    Val2+=(event.target.innerText);
}
if(event.target.innerText=="C"){
    input.value=0;
    Val1="";
    opr="";
    Val2="";
    total=0;
}
if(event.target.innerText=="="){
    Val1=parseInt(Val1);
    Val2=parseInt(Val2);

    if(opr=="+"){
        total=Val1+Val2;
    }
    else if(opr=="-"){
        total=Val1-Val2;
    }
    else if(opr=="*"){
        total=Val1*Val2;
    }
    else if(opr=="/"){
        total=Val1/Val2;
    }
    Val1=total;
    Val2=0;
    total=0;
    opr="";
    input.value=Val1;
}

})








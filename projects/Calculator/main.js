console.log("hello world");
let eq = "";
let num = 0;
let num1 = 0;
let result = 0;
let screen = document.getElementById('calscreen');
let prevop=null;

let nums = ["0","1","2","3","4","5","6","7","8","9","."];
let opps = ["add","sub","multi","multi","divide","percent","equal","clear"];

displayScreen=()=>{
    document.getElementById('calscreen').value=eq;
}
displayResult=()=>{
    document.getElementById('result').innerHTML=result;
}
clear=()=>{
    num = "";
    document.getElementById('calscreen').innerHTML= "0";
}
allClear=()=>{
    prevop=null;
    result=0;
    eq="";
    num=0;
    displayScreen();
    displayResult();
}

operate=(action,value)=>{
    if(action==="clear"){
        allClear()
    }else if(action==="num"){
        eq+=value;
        num = num+value;
        displayScreen()
        if(prevop!==null)
            solve(eq)
    }else{
        console.log("line44");
        switch(action){
            case "add":
                prevop ="add"
                eq+="+"
                break;
            case "sub":
                eq+="-"
                prevop ="sub"
                break;
            case "multi":
                prevop ="multi"
                eq+="*"
                break;
            case "div":
                prevop ="div"
                eq+="\'/"
                break;
        }
    }
}

calculate=(op,num)=>{
    console.log("line65");
    switch(op){
        case "add":
            add(num);
            break;
        case "sub":
            sub(num)
            break;
        case "multi":
            multiply(num)
            break;
        case "div":
            divide(num)
            break;
    }
}

onButtonClick=(e)=>{
    let ty = verify(e.value);
    if(ty.includes("num")){
        let t = "num";
        let v = ty.replace("num",'')
        operate(t,v)
    }else if(ty.includes("ops")){
        let t = e.value;
        let v = 0;
        operate(t,v);
    }
}

solve=(eq)=>{
    result = eval(eq);
    displayResult()
}

add=(num)=>{
    result = parseInt(result) + parseInt(num);
    displayResult();
}
sub=(num)=>{
    result = parseInt(result) - parseInt(num);
    displayResult();
}
multiply=(num)=>{
    result = (parseInt(result)*parseInt(num));
    displayResult();
}
divide=(num)=>{
    result = (parseInt(result) / parseInt(num));
    displayResult();
}
mod=(num)=>{
    result = (parseInt(result) % parseInt(num));
    displayResult();
}

verify=(value)=>{
    if(nums.includes(value)){
        return "num"+value
    }else if(opps.includes(value)){
        return "ops"+value;
    }else{
        return false
    }
}



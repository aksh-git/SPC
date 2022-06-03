console.log("hello world");
let eq = [];
let screen = document.getElementById("screen");

let nums = ["0","1","2","3","4","5","6","7","8","9","."];
let opps = {
    61:"add",
    173:"sub",
    88:"multi",
    56:"multi",
    191:"divide",
    53:"percent",
    61:"equals",
    67:"clear"
}

handleKeyPress = (charkey,keycode) =>{
    let keycase = verifyKey(charkey,keycode)
    //switch(keycase){
    //    case "num":
    //        eq.push(parseInt(charkey))
    //        break;
    //    default:
    //        return;
    //}
    if(keycase==="num")
        console.log(document.getElementById("key"+charkey));
}

verifyKey = (charkey,keycode) =>{
    if(nums.includes(charkey)){
        return "num"
    }else{
        return opps[keycode]
    }
}

function add(a,b){
    return a+b;
}

window.onkeydown = function(e) {
    var charkey = e.key;
    var keycode = e.keyCode || e.charCode;
    if( keycode == 8 || keycode == 46 )
        //backspace
        console.log("back");    
    else
        handleKeyPress(charkey,keycode)   
        //console.log(key);
};


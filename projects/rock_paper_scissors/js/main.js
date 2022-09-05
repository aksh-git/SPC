function hide(elementID){
    var elem = document.getElementById(elementID);
    if(!elem.classList.contains("hidden")){
        elem.classList.add("hidden")
    }
}
function visible(elementID){
    var elem = document.getElementById(elementID);
    if(elem.classList.contains("hidden")){
        elem.classList.remove("hidden")
    }
}

function toogleElementVisibilityByID(elementID){
    var elem = document.getElementById(elementID);
    if(!elem.classList.contains("hidden")){
        hide(elementID)
    }else{
        visible(elementID)
    }
}

function topNotify(msg,autoRemove){
    visible('topNotification')
    let topNtext = document.getElementById("topNtext");
    topNtext.innerHTML=msg;
    if(autoRemove){
        setTimeout(()=>{
            hide('topNotification')
        },1500);
    }
}

window.onload = () =>{
    topNotify("hello",true)
}
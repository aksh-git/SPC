class Bot {

    options = ['rock','paper','scissors']
    playCounter = 0
    botwins = 0
    userwins = 0
    lastwin = ""
    userWinStreak = 0
    highestStreak = 0
    lastChoosed = ""

    choose(){
        let botchoosed = this.options[Math.floor(Math.random() * this.options.length)]
        this.lastChoosed = botchoosed
        return botchoosed
    }
    updateWin(type){
        if(this.lastwin==="bot" && type==="user"){
            this.userWinStreak=1
            this.lastwin='user'
        }else if(this.lastwin==="user" && type==="user"){
            this.userWinStreak++
            this.lastwin='user'
        }else{
            //bot streak
            if(type==="draw"){
                //dont
            }
            if(type==="bot"){
                this.userWinStreak=0
            }
        }

        if(type==="bot"){
            this.botwins++
        }else if(type==="user"){
            this.userwins++
        }else{
            //pass
        }
        //update play counter
        this.playCounter++
        //update streak
        
        if(this.highestStreak<=this.userWinStreak){
            this.highestStreak=this.userWinStreak
        }   
    }
    getPlayCount(){
        return this.playCounter
    }
    getWinnerName(){
        if(this.botwins===this.userwins){
            return 'Draw '+this.userwins+':'+this.botwins
        }else if(this.botwins>=this.userwins){
            return "Bot "+this.userwins+':'+this.botwins
        }else{
            return 'You '+this.userwins+':'+this.botwins
        }
    }
}

let bot = new Bot()

function init(){
    playCounthtml.innerHTML= 0
}

function update(res){
    let playCounthtml = document.getElementById("playCounter")
    let resTable = document.getElementById("resultTable")
    let winnerNameBoard = document.getElementById("winnerName")
    console.log(bot.getPlayCount());
    playCounthtml.innerHTML=bot.getPlayCount()
    if(res===1){
        let tr = document.createElement("tr")
        tr.innerHTML="<td>1</td><td>0</td>"
        resTable.append(tr)
    }else if(res===-1){
        let tr = document.createElement("tr")
        tr.innerHTML="<td>0</td><td>1</td>"
        resTable.append(tr)
    }else if(res===0){
        let tr = document.createElement("tr")
        tr.innerHTML="<td>0</td><td>0</td>"
        resTable.append(tr)
    }else{
        //pass
    }
    winnerNameBoard.innerText=bot.getWinnerName()
}

function checkWin(user, bot){
    if(user===bot){
        return 0
    }else if(user==="rock"){
        if(bot==="paper"){
            //bot wins
            return -1
        }else{
            //user wins
            return 1
        }
    }else if(user==="paper"){
        if(bot==="scissors"){
            //bot wins
            return -1
        }else{
            //user wins
            return 1
        }
    }else if(user==="scissors"){
        if(bot==="rock"){
            //bot wins
            return -1
        }else{
            //user wins
            return 1
        }
    }else{
        alert("something went wrong")
        return 404
    }
}
function userChoosed(useroption){
    let bcPaper = document.getElementById('cpaper')
    let bcRock = document.getElementById('crock')
    let bcScissors = document.getElementById('cscissors')
    
    bcPaper.classList.contains('hidden')?'':bcPaper.classList.add('hidden')
    bcRock.classList.contains('hidden')?'':bcRock.classList.add('hidden')
    bcScissors.classList.contains('hidden')?'':bcScissors.classList.add('hidden')

    let botop = bot.choose()
    switch (botop) {
        case 'rock':
            bcRock.classList.remove('hidden')
            break;
        case 'paper':
            bcPaper.classList.remove('hidden')
            break;
        case 'scissors':
            bcScissors.classList.remove('hidden')
            break;
        default:
            break;
    }
    let res = checkWin(useroption,botop)
    if(res===1){
        bot.updateWin('user')
        topNotify("🎊 You Won! 🎊",true)
    }else if(res===-1){
        bot.updateWin('bot')
        topNotify("You Lose!!",true)
    }else if(res===0){
        bot.updateWin('draw')
        topNotify("Draw 😉",true)
    }else{
        console.log("Error");
    }
    update(res)
}



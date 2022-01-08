let turn = false
let focused = false;
let min = 0.0000001; // minimum bet 
let standard = 0.001; //to zmień (połowe oczekiwanej stawki)
const reset =  0.001; // zmień na to co wyżej 
let safe = 5; // to po ilu razach zacznie betować normalną stawką
let lst = 0;
let lastBetwas = 0;
let lastLSTwas = 0;
const engine = document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg;
document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.payout = 1.5;
let connected = false;
let socket = false
setInterval(()=>{ 

    connected = window.navigator.onLine
    socket = document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.socket.connected
    if(connected == true && socket == true){
        if(focused == true){
            main();
        }
        
    }else{
        console.log("wait for connection...")
        document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = lastBetwas;
        lst = lastLSTwas;
        console.clear();
    }
    if(document.hidden == false){
        focused = true
    }else{
        focused = true
    }
},1000)

function main(){
    if(turn == true){
        if(engine.gameIsWin == true){
            lst = 0
            standard = reset;
            document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = min;
            setTimeout(() => {
                document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                lastBetwas = min
            }, 150);
        }else{
            if((lst+1) >= safe){
                standard*=3
                document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = standard;
                setTimeout(() => {
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                    lastBetwas = standard
                    lastLSTwas = lst;
                }, 150);
            }else{
                standard = reset;
                document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = min;
                setTimeout(() => {
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                    lastBetwas = min
                    lastLSTwas = lst;
                }, 150);
            }
            lst++
        }
    }
}



let turn = false
let min = 0.0000001; // minimum bet 
let standard = 0.0005; //to zmień (połowe oczekiwanej stawki)
const reset =  0.0005; // zmień na to co wyżej 
let safe = 5; // to po ilu razach zacznie betować normalną stawką
let lst = 0;
const engine = document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg;
document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.payout = 1.5;
let connected = false;
setInterval(()=>{ 
    connected = window.navigator.onLine
    if(connected == true){
        main();
    }else{
        turn = false;
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
            }, 150);
        }else{
            if((lst+1) >= safe){
                standard*=3
                document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = standard;
                setTimeout(() => {
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                }, 150);
            }else{
                standard = reset;
                document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = min;
                setTimeout(() => {
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                }, 150);
            }
            lst++
        }
    }
}

    let turn = false
    let min = 0.0000001; // minimum bet 
    let standard = 0.00005; //to zmień (połowe oczekiwanej stawki)
    const reset =  0.00005; // zmień na to co wyżej 
    let safe = 12; // to po ilu razach zacznie betować normalną stawką
    let lst = 0;
    const engine = document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg;
    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.payout = 2;
    setInterval(()=>{ 
        if(turn == true){
            if(engine.gameIsWin == true){
                //reset value 
                console.log("Win")
                lst = 0
                standard = reset;
                document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = min;
                setTimeout(() => {
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                }, 150);
            }else{
                //continue bet
                console.log("lost" + lst)
                if((lst+1) >= safe){
                    console.log("Safe bet: " +safe)
                    standard*=2
                    console.log(standard)
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = standard;
                    setTimeout(() => {
                        document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                    }, 150);
                }else{
                    console.log("Bet min: " + min)
                    standard = reset;
                    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = min;
                    setTimeout(() => {
                        document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
                    }, 150);
                }
                lst++
            }
        }

    },1000)

let turn = false
let focused = false;

let min = 0.00000107; // minimum bet 
let standard = 0.0002; //to zmień (połowe oczekiwanej stawki)
const reset =  0.0002; // zmień na to co wyżej 
let safe = 5; // to po ilu razach zacznie betować normalną stawką
let payout = 1.5;
let multiply = 3;
let speedBet = 1000; //zalecane 1000ms. zależnie od szybkości internetu 

let lastBetwas = 0;
let betQueue = 0;
const engine = document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg;
document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.payout = payout;
let history = []; 
let connected = false;
let socket = false
setInterval(()=>{ 

    connected = window.navigator.onLine
    socket = document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.socket.connected
    history = []
    for(let i = 0; i < document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.myBets.length; i++){
        
        history.push(
            {
                gameId: document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.myBets[i].betId,
                odds: document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.myBets[i].gameValue
            }
        );
    }

    if(connected == true && socket == true){
        if(focused == true){
            if(document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.isBetting == false){
                main();
            }else{
                console.log("wait for end")
            }
        }
        
    }else{
        console.log("wait for connection...")
        document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = lastBetwas;
        console.clear();
    }
    if(document.hidden == false){
        focused = true
    }else{
        focused = true
    }
},speedBet)

function main(){
    if(turn == true){
        if(engine.gameIsWin == true){
            standard = reset;      
            bet(min)
        }else{

            let r1 = (history[0].odds / 100)  // r1 2 < 1.5 payout flase
            let r2 = (history[1].odds / 100)
            if(safe == 2){
                if(r1 < payout && r2 < payout){
                    betQueue = standard
                    if(history[2].odds / 100 < payout){
                        //time 2
                        betQueue = (standard*multiply)
                        
                        if(history[3].odds / 100 < payout){
                            //time 3
                             betQueue = (standard*multiply*multiply)
                            
                            if(history[4].odds / 100 < payout){
                                //time 4
                                 betQueue = (standard*multiply*multiply*multiply)
                                
                                if(history[5].odds / 100 < payout){
                                    //time 5
                                     betQueue = (standard*multiply*multiply*multiply*multiply)
                                    
                                    if(history[6].odds / 100 < payout){
                                        //time 6
                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply)
                                        
                                        if(history[7].odds / 100 < payout){
                                            //time 7
                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply)
                                            
                                            if(history[8].odds / 100 < payout){
                                                //time 8
                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                
                                                if(history[9].odds / 100 < payout){
                                                    //time 9
                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                    
                                                    if(history[10].odds / 100 < payout){
                                                        //time 10
                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                        
                                                        if(history[11].odds / 100 < payout){
                                                            //time 11
                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                            
                                                            if(history[12].odds / 100 < payout){
                                                                //time 12
                                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                
                                                                if(history[13].odds / 100 < payout){
                                                                    //time 13
                                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                    
                                                                    if(history[14].odds / 100 < payout){
                                                                        //time 14
                                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                        
                                                                        if(history[15].odds / 100 < payout){
                                                                            //time 15
                                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                            
                                                                            if(history[16].odds / 100 < payout){
                                                                                //time 16
                                                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                                 if(history[17].odds / 100 < payout){ //
                                                                                    //time 17
                                                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                                     if(history[18].odds / 100 < payout){
                                                                                        //time 18
                                                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                                         if(history[19].odds / 100 < payout){
                                                                                            //time 19
                                                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                                           
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                           
                                                                        }
                                                                       
                                                                    }
                                                                   
                                                                }
                                                               
                                                            }
                                                           
                                                        }
                                                       
                                                    }
                                                   
                                                }
                                               
                                            }
                                           
                                        }
                                     
                                    }
                                  
                                }
                               
                            }
                           
                        }
                      
                    }
                    bet(betQueue)
                }else{
                    standard = reset;  
                    betQueue = 0;
                    bet(min)
                }
            }else if(safe == 5){
                if(r1 < payout && r2 < payout && r3 < payout && r4 < payout && r5 < payout){
                    betQueue = standard
                    if(history[5].odds / 100 < payout){
                        //time 2
                        betQueue = (standard*multiply)
                        
                        if(history[6].odds / 100 < payout){
                            //time 3
                             betQueue = (standard*multiply*multiply)
                            
                            if(history[7].odds / 100 < payout){
                                //time 4
                                 betQueue = (standard*multiply*multiply*multiply)
                                
                                if(history[8].odds / 100 < payout){
                                    //time 5
                                     betQueue = (standard*multiply*multiply*multiply*multiply)
                                    
                                    if(history[9].odds / 100 < payout){
                                        //time 6
                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply)
                                        
                                        if(history[10].odds / 100 < payout){
                                            //time 7
                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply)
                                            
                                            if(history[11].odds / 100 < payout){
                                                //time 8
                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                
                                                if(history[12].odds / 100 < payout){
                                                    //time 9
                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                    
                                                    if(history[13].odds / 100 < payout){
                                                        //time 10
                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                        
                                                        if(history[14].odds / 100 < payout){
                                                            //time 11
                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                            
                                                            if(history[15].odds / 100 < payout){
                                                                //time 12
                                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                
                                                                if(history[16].odds / 100 < payout){
                                                                    //time 13
                                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                    
                                                                    if(history[17].odds / 100 < payout){
                                                                        //time 14
                                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                        
                                                                        if(history[18].odds / 100 < payout){
                                                                            //time 15
                                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                            
                                                                            if(history[19].odds / 100 < payout){
                                                                                //time 16
                                                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                               
                                                                            }
                                                                           
                                                                        }
                                                                       
                                                                    }
                                                                   
                                                                }
                                                               
                                                            }
                                                           
                                                        }
                                                       
                                                    }
                                                   
                                                }
                                               
                                            }
                                           
                                        }
                                     
                                    }
                                  
                                }
                               
                            }
                           
                        }
                      
                    }
                    bet(betQueue)
                }else{
                    standard = reset;  
                    betQueue = 0;
                    bet(min)
                }
            }else if(safe == 6){
                let r1 = (history[0].odds / 100)  // r1 2 < 1.5 payout flase
                let r2 = (history[1].odds / 100)
                let r3 = (history[2].odds / 100)
                let r4 = (history[3].odds / 100)
                let r5 = (history[4].odds / 100)
                let r6 = (history[5].odds / 100)
                if(r1 < payout && r2 < payout && r3 < payout && r4 < payout && r5 < payout  && r6 < payout){
                    // min val
                    betQueue = standard;
                    if(history[6].odds / 100 < payout){
                        //time 2
                         betQueue = (standard * multiply)
                        
                        if(history[7].odds / 100 < payout){
                            //time 3
                             betQueue = (standard*multiply*multiply)
                            
                            if(history[8].odds / 100 < payout){
                                //time 4
                                 betQueue = (standard*multiply*multiply*multiply)
                                
                                if(history[9].odds / 100 < payout){
                                    //time 5
                                     betQueue = (standard*multiply*multiply*multiply*multiply)
                                    
                                    if(history[10].odds / 100 < payout){
                                        //time 6
                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply)
                                        
                                        if(history[11].odds / 100 < payout){
                                            //time 7
                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply)
                                            
                                            if(history[12].odds / 100 < payout){
                                                //time 8
                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                
                                                if(history[13].odds / 100 < payout){
                                                    //time 9
                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                    
                                                    if(history[14].odds / 100 < payout){
                                                        //time 10
                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                        
                                                        if(history[15].odds / 100 < payout){
                                                            //time 11
                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                            
                                                            if(history[16].odds / 100 < payout){
                                                                //time 12
                                                                 betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                
                                                                if(history[17].odds / 100 < payout){
                                                                    //time 13
                                                                     betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                    
                                                                    if(history[18].odds / 100 < payout){
                                                                        //time 14
                                                                         betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                        
                                                                        if(history[19].odds / 100 < payout){
                                                                            //time 15
                                                                             betQueue = (standard*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply*multiply)
                                                                           
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                   bet(betQueue)
                }else{
                    standard = reset; 
                    betQueue = 0;
                    bet(min)
                }
            }else{
                console.log("Wybierz 2, 5 lub 6 stopień bezpieczeństwa.")
            }
        }
    }
}

function bet(betvalue){
    betQueue = 0;
    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.amount = betvalue;
    document.querySelector("#game-Limbo").attributes[0].ownerDocument.defaultView.lbg.hotkeyList[2].handler()
    lastBetwas = betvalue

}


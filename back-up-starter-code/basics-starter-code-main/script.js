var player1account = 1000
var player2account = 1000
var houseAccount = 0
var gameRecord  = []

var main = function(input){
  for(let i = 1; i <= 50; i++){
    let coin = coinflip()
    if(coin == "heads")
    {
      player1account = player1account  * 1.5
      player2account = player2account * 0.5
    }
    else{
      player1account = player1account * 0.5;
      player2account = player2account * 1.5;
    }
    houseAccount = 2000 - (player1account + player2account)
    gameRecord.push([`Game ${i}`, coin , player1account, player2account, houseAccount])
  }
  console.table(gameRecord)
  return 0
}

var coinflip = function(){
  let num = Math.floor(Math.random() * 2)
  if(num === 0)
    return "heads"
  else
    return "tails";
}

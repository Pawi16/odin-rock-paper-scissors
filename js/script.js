function computerPlay(){
  let choice = ['Rock','Paper','Scissors'];
  return choice[Math.floor(Math.random()*2)];
}
console.log(computerPlay())

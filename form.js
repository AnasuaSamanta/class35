class form{     
 constructor()   {

 }
 display(){
 var title= createElement  ('h1') ;
 var input=createInput("Name") ;
 var button=createButton("play");
 input.position(130,160);
 button.position(250,200);
 title.position(130,0);
 button.mousePressed(function(){
  input.hide();
  button.hide()  ;
  var Name=input.value();
  playerCount=playerCount+1;
  player.update(Name);
  player.update(playerCount);
  var greeting = createElement('h2');
  greeting.html("hello"+Name);
  greeting.position(130,160);
 })

 }
}
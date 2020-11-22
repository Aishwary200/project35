//Create variables here
var dog,dogImg,happyDogImg;
var database;
var foodS,foodStock;
var foodCount

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(200,250,20,20)
  dog.addImage(dogImg)
  dog.scale=0.2;
  foodStock=database.ref('food')
  foodStock.on("value",(data)=>{
    foodS=data.val();
    console.log(data.val())
  });
  console.log(foodStock)
}


function draw() {  
  background(46,139,87)
  drawSprites();
  //add styles here
 if(keyWentDown(UP_ARROW)){
  //  if(foodS!==undefined){
    writeStock(foodS);
   //}
   
   dog.addImage(happyDogImg)
 }
 if(keyWentUp(UP_ARROW)){
  
  dog.addImage(dogImg)
}
 textSize(20)
 fill("red")
 text("food: "+foodS,250,50)


}

function readStock(data){
  foodS=data.val();
 console.log(data)
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
  
})
}




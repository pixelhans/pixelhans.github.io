function setup(){
  var theCanvas = createCanvas(640,360);
  theCanvas.parent("sketch");
}

function draw(){
  fill(255);
  for ( i= 0; i < width; i++)
      {
        for( j=0; j < height; j++){
        ellipse(i*20,j*20,j+2,j+2);
      }
  }
}

function setup(){
  var theCanvas = createCanvas(640,360);
  theCanvas.parent("sketch");
}

function draw(){
  background(255);
  for (int i= 0; i < width; i++)
  ellipse(i*20,j*20,j+2,j+2);
  }
}

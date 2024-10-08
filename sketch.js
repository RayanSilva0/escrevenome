function setup() {
    createCanvas(1000, 1000);
     background("black");
    }
    
    
    function draw() {
    rect(0,0,100,100);
    
      stroke("yellow");
      strokeWeight(5);
      fill("red");
    
    //console.log(mouseIsPressed);
      
      if (mouseIsPressed) {
     rect(mouseX,mouseY,20,35);
      }
    
    
    }
    
    
    
    
    
    
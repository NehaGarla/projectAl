var fixed_rect,moving_rect;
 function setup()
  { createCanvas(800,400);
     fixed_rect= createSprite(300,100,50,80);
      fixed_rect.shapeColor="blue"; 
      moving_rect=createSprite(400,250,80,50);
       moving_rect.shapeColor="blue";

       }
        function draw()
        { background("lightgreen")
         moving_rect.x=World.mouseX; 
         moving_rect.y=World.mouseY;

          if(fixed_rect.x-moving_rect.x < fixed_rect.width/2+moving_rect.width/2
            && moving_rect.x -fixed_rect.x< fixed_rect.width/2+moving_rect.width/2
            &&  fixed_rect.y-moving_rect.y < fixed_rect.height/2+moving_rect.height/2
            && moving_rect.y -fixed_rect.y< fixed_rect.height/2+moving_rect.height/2)
           {
            moving_rect.shapeColor="red";
                      fixed_rect.shapeColor="red";
           }
              else {
                      moving_rect.shapeColor="blue";
                      fixed_rect.shapeColor="blue";
                    }
                  drawSprites();
                   }
                   
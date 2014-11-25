//anregungen von Chris Coleman @ Open Processing

import processing.pdf.*; //für pdf export notwendig
int duenn = 2; //anfang ist der pinsel dünn -> daher aktiviert
int mittel = 0; //deaktiviert
int fett = 0; //deaktiviert
int strich = 0; //anfangs auf 0, damit nicht die ganze zeit gezeichnet wird
int dicke = 10; //dicke des pinsels
color strichFarbe = color (255); //farbe des pinsels (anfangs weiss)
PImage lila, blau, rot, gelb, gruen, weiss, radier, orange, schwarz, pngButton, jpgButton, pdfButton; //auflistung der bilder, die importiert werden


void setup()
{
  size(900,700); //größe der arbeitsfläche

  //verschiedenfarbige cursor
  lila = loadImage("cursor/lila.png");
  gruen = loadImage("cursor/gruen.png");
  blau = loadImage("cursor/blau.png");
  rot = loadImage("cursor/rot.png");
  gelb = loadImage("cursor/gelb.png");
  weiss = loadImage("cursor/weiss.png");
  radier = loadImage("cursor/radierer.png");
  orange = loadImage("cursor/orange.png");
  schwarz = loadImage("cursor/schwarz.png");
  pngButton = loadImage("button/png.png");
  pdfButton = loadImage("button/pdf.png");
  jpgButton = loadImage("button/jpg.png");
  cursor(weiss); //anfangs weiss
  beginRecord(PDF, "screenshot/screenshot.pdf"); //pdf aufzeichnung beginnt
  background(100); //hintergrundfarbe -> dunkles grau //hintergrundfarbe
}

void draw()
{
  if(mousePressed == true) //wenn maustaste gedrückt wird ...
    {
      if(mouseX < 40 && mouseX > 10 && mouseY < 40 && mouseY > 10) //bestimmter bereich, indem die maus gedrückt werden muss, damit eine aktion ausgeführt wird .. in dem fall wird der pinsel rot
        {
          cursor(rot); //cursor rot, damit man weiss, welche farbe aktiv ist
          strichFarbe = color(255,0,0); //farbe des pinsels wird geändert
        }

        else if(mouseX < 70 && mouseX > 40 && mouseY < 40 && mouseY > 10)
          {
            cursor(gelb);
            strichFarbe = color(255,255,0);
          }

          else if(mouseX < 40 && mouseX > 10 && mouseY < 70 && mouseY > 40)
            {
              cursor(gruen);
              strichFarbe = color(0,255,0);
            }

            else if(mouseX < 70 && mouseX > 40 && mouseY < 70 && mouseY > 40)
              {
                cursor(lila);
                strichFarbe = color(127,0,255);
              }

              else if(mouseX < 40 && mouseX > 10 && mouseY < 100 && mouseY > 70)
                {
                  cursor(blau);
                  strichFarbe = color(0,0,255);
                }

                else if(mouseX < 70 && mouseX > 40 && mouseY < 100 && mouseY > 70)
                  {
                    cursor(orange);
                    strichFarbe = color(255,127,0);
                  }

                  else if(mouseX < 40 && mouseX > 10 && mouseY < 130 && mouseY > 100)
                    {
                      cursor(weiss);
                      strichFarbe = color(255);
                    }

                    else if(mouseX < 70 && mouseX > 40 && mouseY < 130 && mouseY > 100)
                      {
                        cursor(schwarz);
                        strichFarbe = color(0);
                      }

                      else if(mouseX < 70 && mouseX > 10 && mouseY < 160 && mouseY > 130)
                        {
                          cursor(radier);
                          strichFarbe = color(100);
                        }

                        //arbeitsfläche wird geleert
                        else if(mouseX < 70 && mouseX > 10 && mouseY < 320 && mouseY > 270)
                          {
                            background(100);
                          }

                          //pinselstärke wird geändert
                          else if(mouseX < 60 && mouseX > 20 && mouseY < 185 && mouseY > 175)
                            {
                              dicke = 10;

                              //um die ausgewählte pinselstärke wird ein rahmen erzeugt
                              duenn = 2;
                              mittel = 0;
                              fett = 0;
                            }

                            else if(mouseX < 60 && mouseX > 20 && mouseY < 215 && mouseY > 195)
                              {
                                dicke = 20;

                                duenn = 0;
                                mittel = 2;
                                fett = 0;
                              }

                              else if(mouseX < 60 && mouseX > 20 && mouseY < 255 && mouseY > 225)
                                {
                                  dicke = 30;

                                  duenn = 0;
                                  mittel = 0;
                                  fett = 2;
                                }

                                //export in verschiedene formate
                                else if(mouseX < 70 && mouseX > 10 && mouseY < 610 && mouseY > 580)
                                  {
                                    //JPG
                                    PImage screen = get(80, 0, 820, 700); //werkzeugleiste wird ausgelassen
                                    screen.save("screenshot/screenshot.jpg");
                                  }

                                  else if(mouseX < 70 && mouseX > 10 && mouseY < 650 && mouseY > 620)
                                    {
                                      //PDF
                                      endRecord(); //wenn pdf-button geklickt wird -> pdf aufnahme wird beendet und pdf gespeichert
                                    }

                                    else if(mouseX < 70 && mouseX > 10 && mouseY < 690 && mouseY > 660)
                                      {
                                        //PNG
                                        PImage screen = get(80, 0, 820, 700);
                                        screen.save("screenshot/screenshot.png");
                                      }
                                    }

                                    strokeWeight(dicke); //pinsel bekommt den ausgewählten wert zugewiesen (10, 20 oder 30)
                                    stroke(strichFarbe); //pinsel bekommt die farbe zugewiesen

                                    if(strich==1 && mouseX > 80) //wenn pinselstrich aktiviert ist und man sich nicht auf der werkzeugleiste befindet, dann ...
                                      {
                                        line(mouseX, mouseY, pmouseX, pmouseY); //wird eine linie von der mausposition des letzten frames zum aktuellen frame gezogen -> so entstehen keine lücken beim zeichnen
                                      }


                                      //werkzeugleiste

                                      //balken
                                      noStroke();
                                      fill(150);
                                      rect(0,0,80,height);

                                      //buttons
                                      fill(255,0,0); //rot
                                      rect (10,10,30,30);

                                      fill(0,255,0); //grün
                                      rect (10,40,30,30);

                                      fill(0,0,255); //blau
                                      rect (10,70,30,30);

                                      fill(255); //weiss
                                      rect (10,100,30,30);

                                      fill(255,255,0); //gelb
                                      rect (40,10,30,30);

                                      fill(127,0,255); //lila
                                      rect (40,40,30,30);

                                      fill(255,127,0); //orange
                                      rect (40,70,30,30);

                                      fill(0); //schwarz
                                      rect (40,100,30,30);

                                      fill(100); //radierer
                                      rect (10,130,60,30);

                                      strokeWeight(duenn); //2 wenn aktiv -> rahmen ------- 0 wenn inaktiv -> kein rahmen
                                      stroke(color(50));
                                      fill(255); //dünn
                                      rect(20,175,40,10);

                                      strokeWeight(mittel);
                                      fill(255); //mittel
                                      rect(20,195,40,20);

                                      strokeWeight(fett);
                                      fill(255); //fett
                                      rect(20,225,40,30);

                                      strokeWeight(0);
                                      fill(50); //löschen
                                      rect(10,270,60,50);

                                      image(jpgButton, 10, 580); //jpg export
                                      image(pdfButton, 10, 620); //pdf export
                                      image(pngButton, 10, 660); //png export

                                    }

                                    void mouseDragged() //maustaste gedrück + maus bewegt -> pinselstrich wird erzeugt
                                    {
                                      strich=1;
                                    }

                                    void mouseReleased() //maustaste losgelassen -> pinselstrich wird beendet
                                    {
                                      strich=0;
                                    }


                                    

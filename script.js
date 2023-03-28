
var ourBackgroundColour = 'black';

function setup(){
    createCanvas(720, 480);
    background( ourBackgroundColour );
    // https://p5js.org/reference/#/p5/createColorPicker
    colourPicker = createColorPicker('red'); 
    sizeSlider = createSlider(0.1, 100, 5);   
    clearButton = createButton("Clear Canvas");
    clearButton.mousePressed( clearBackground );
    saveButton = createButton('Save Canvas');
    saveButton.mousePressed( saveCanvas );
    eraserCheckbox = createCheckbox('Eraser', false);
}

function clearBackground(){
    background(ourBackgroundColour);
}

function draw(){
    //background( "pink" );
    //fill( colourPicker.color() );
    
    // this code inspired by checkbox demo
    // https://p5js.org/reference/#/p5/createCheckbox
    if( eraserCheckbox.checked() ){
        stroke( ourBackgroundColour );
    }else{
        stroke( colourPicker.color() );
    }

    //circle(mouseX, mouseY, sizeSlider.value());
    strokeWeight( sizeSlider.value() );

    /// this pattern comes from drawing tutorial lines 8-10
    /// https://p5js.org/examples/drawing-continuous-lines.html
    if ( mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

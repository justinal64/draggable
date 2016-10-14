"use strict";

let $board = $('#board-test');
let blackLine = "";
let whiteLine = "";
let currentLine = "";

// eventListener
$('.container').click((event)=> {
    // console.log("event = ", event.target);
    let $currentEvent = $(event.target);
    if($currentEvent.hasClass('white')) {
        console.log("you clicked a white slot");
        $currentEvent.html("0");
    } else if ($currentEvent.hasClass('black')){
        console.log("you clicked a black slot");
        $currentEvent.html("X");
    }

});

function white() {
    // This is where I' will build the row starting with a white block'
    currentLine = "";
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
    currentLine += `</div>`;
    $board.append(currentLine);
}

function black() {
    // This is where I will build the row starting with a black block
    currentLine = "";
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
    currentLine += `</div>`;
    $board.append(currentLine);
}



function whichColor() {
    for(var i = 0; i < 10; i++) {
        if(i % 2 === 0) {
            black();
            console.log("It's blacks turn");
        } else {
            white();
            console.log("It's whites turn");
        }
    }
}

whichColor();

$(() => {
    $( "#draggable" ).draggable();
});

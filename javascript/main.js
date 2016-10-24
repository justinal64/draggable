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
    // This is where I will build the row starting with a white block
        currentLine = "";
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
    currentLine += `</div>`;
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_12" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_13" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_14" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_15" width="50px" height="50px"></canvas></div>`;
    currentLine += `</div>`;
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 black"><canvas id="myCanvas_16" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_17" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_18" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_19" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
    currentLine += `</div>`;
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_20" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_21" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_22" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_23" width="50px" height="50px"></canvas></div>`;
    currentLine += `</div>`;
    $board.append(currentLine);
}

function black() {
    // This is where I will build the row starting with a black block
    currentLine = "";
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 black"><canvas id="myCanvas_0" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_1" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_2" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_3" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
    currentLine += `</div>`;
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_4" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_5" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_6" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_7" width="50px" height="50px"></canvas></div>`;
    currentLine += `</div>`;
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 black"><canvas id="myCanvas_8" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_9" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_10" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 black"><canvas id="myCanvas_11" width="50px" height="50px"></canvas></div>`;
            currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 white"></div>`;
    currentLine += `</div>`;
    currentLine += `<div class="row">`;
        currentLine += `<div class="col-xs-1 col-sm-1 col-md-1 col-md-offset-2 white"></div>`;
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

function whichColor() {
    // for(var i = 0; i < 5; i++) {
        // if(i % 2 === 0) {
            black();
            white();
        // }
        //  else {
        //     white();
        // }
    // }
}

whichColor();

$(() => {
    $( "#draggable" ).draggable();
});

$(() => {
    $( "#myCanvas_4" ).draggable();
});

// Black Canvas Elements
for(let i = 0; i <= 11; i++) {
    var canvas = document.getElementById(`myCanvas_${i}`);
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 20;


    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'grey';
    context.stroke();

    // eventListener
    $(() => {
        $( `#myCanvas_${i}` ).draggable();
    });
}

// Black Canvas Elements
for(let i = 12; i <= 23; i++) {
    var canvas = document.getElementById(`myCanvas_${i}`);
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 20;


    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();

    // eventListener
    $(() => {
        $( `#myCanvas_${i}` ).draggable();
    });
}
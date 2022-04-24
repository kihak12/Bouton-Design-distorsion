
var buttons = document.querySelectorAll(".distorsion-button");

buttons.forEach(button => {
    var canvas = button.getContext('2d');

    canvas.fontColor = button.attributes.fontColor.nodeValue;
    canvas.fontSize = button.attributes.fontSize.nodeValue;
    canvas.backColor = button.attributes.backColor.nodeValue;
    canvas.text = button.attributes.text.nodeValue;    
    if(button.attributes.click){
        canvas.click = button.attributes.click.nodeValue;
    }else{
        canvas.click = 'console.log("Clicked")';
    }

    button.addEventListener("click", evt => { canvasClick(evt, canvas) }, false);
    button.addEventListener("pointermove", evt => { handleMove(evt, canvas) }, false);
    button.addEventListener("mouseleave", evt => { mouseOut(evt, canvas) }, false);

    InitBtn(canvas);
})

function canvasClick(evt, canvas) {
    eval(canvas.click);

    let d = document.querySelector(".hidden");
    d.classList.remove("hidden");
    setTimeout(() => {
        d.classList.add("hidden");
    }, "1000")
}

function mouseOut(evt, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    InitBtn(ctx);
}

function handleMove(evt, canvas) {
    console.log("Pointeur :");
    console.log("Y : ", evt["offsetY"]);
    console.log("X : ", evt["offsetX"]);
    UpdateButton(evt, canvas);
}

function UpdateButton(evt, ctx) {
    ctx.beginPath();

    if ((evt["offsetX"] < 125 && evt["offsetY"] < 75) && (evt["offsetX"] <= 75 || evt["offsetY"] <= 60)) {
        //console.log("Haut à gauche");

        ctx.lineTo(evt["offsetX"], evt["offsetY"]);
        ctx.lineTo(200, 50);
        ctx.lineTo(200, 100);
        ctx.lineTo(50, 100);

    } else if ((evt["offsetX"] < 125 && evt["offsetY"] > 75) && (evt["offsetX"] <= 75 || evt["offsetY"] >= 90)) {
        //console.log("Bas à gauche");

        ctx.moveTo(50, 50);
        ctx.lineTo(200, 50);
        ctx.lineTo(200, 100);
        ctx.lineTo(evt["offsetX"], evt["offsetY"]);

    } else if ((evt["offsetX"] > 125 && evt["offsetY"] < 75) && (evt["offsetX"] >= 170 || evt["offsetY"] <= 60)) {
        //console.log("Haut à droite");

        ctx.moveTo(50, 50);
        ctx.lineTo(evt["offsetX"], evt["offsetY"]);
        ctx.lineTo(200, 100);
        ctx.lineTo(50, 100);

    } else if ((evt["offsetX"] > 125 && evt["offsetY"] > 75) && (evt["offsetX"] >= 170 || evt["offsetY"] >= 90)) {
        //console.log("Bas à droite");

        ctx.moveTo(50, 50);
        ctx.lineTo(200, 50);
        ctx.lineTo(evt["offsetX"], evt["offsetY"]);
        ctx.lineTo(50, 100);

    } else {
        //console.log("Milieu");
        ctx.moveTo(50, 50);
        ctx.lineTo(200, 50);
        ctx.lineTo(200, 100);
        ctx.lineTo(50, 100);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = ctx.backColor;
    ctx.fill();

    ctx.font = ctx.fontSize;
    ctx.fillStyle = ctx.fontColor;
    ctx.fillText(ctx.text, 90, 80);

    ctx.closePath();
    ctx.stroke();
}

function InitBtn(ctx) {
    ctx.beginPath();

    ctx.moveTo(50, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 100);
    ctx.lineTo(50, 100);

    ctx.fillStyle = ctx.backColor;
    ctx.fill();

    ctx.font = ctx.fontSize;
    ctx.fillStyle = ctx.fontColor;
    ctx.fillText(ctx.text, 90, 80);

    ctx.closePath();
    ctx.stroke();
}

function replace_text(){
    document.querySelector(".hidden-8").innerHTML = "Merci"
}
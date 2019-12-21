var bases = ['Fullbody', 'Thigh up', 'Waist up', 'Bust', 'Headshot'];
var baseprices = [13, 10, 8, 5, 3];
var basenum = 0;
var basecost = 0;

$(".rightbase").click(function() {
    basenum++;
    $(".ph_base").text(bases[basenum]);
    if (basenum === 5 || basenum <= 0) {
        basenum = 0;
    }
    basecost = baseprices[basenum];
    // console.log(basenum);
    $(".ph_base").text(bases[basenum]);
});

$(".leftbase").click(function() {
    basenum--;
    $(".ph_base").text(bases[basenum]);
    if (basenum <= -1 || basenum >= 5) {
        basenum = 4;
    }
    basecost = baseprices[basenum];
    // console.log(basenum);

});
// Line vvv

var linestyle = ['Marker', 'Marker Simple', 'Pen'];
var lineprices = [3, 2, 4];
var linenum = 0;
var linecost = 0;

$(".rightline").click(function() {
    linenum++;
    if (linenum >= 3 || linenum <= 0) {
        linenum = 0;
        console.log(linenum);
    }
    linecost = lineprices[linenum];
    console.log(linecost);
    $(".ph_line").text(linestyle[linenum]);

});

$(".leftline").click(function() {
    linenum--;
    if (linenum < 0 || linenum >= 3) {
        linenum = 2;
    }
    linecost = lineprices[linenum];
    console.log(linecost);
    $(".ph_line").text(linestyle[linenum]);


});

// Color vvv
var colorstyle = ['None', 'Flats', 'Minimal', 'Full'];
var colorprices = [0, 3, 5, 8];
var colornum = 0;
var colorcost = 0;

$(".rightcolor").click(function() {
    colornum++;
    if (colornum >= 4 || colornum <= -1) {
        colornum = 0;
    }
    colorcost = colorprices[colornum];
    $(".ph_color").text(colorstyle[colornum]);
    // console.log(colornum);
});

$(".leftcolor").click(function() {
    colornum--;

    if (colornum < 0 || colornum >= 4) {
        colornum = 3;
    }
    colorcost = colorprices[colornum];
    $(".ph_color").text(colorstyle[colornum]);
    // console.log(linenum);

});

var backgs = ['Simple Color, Design, or Pattern', 'Simple Scene', 'Complex Scene'];
var bgprices = [0, 18, 30];
var bgnum = 0;
var bgcost = 0;


$(".rightbg").click(function() {
    bgnum++;
    if (bgnum >= 3 || bgnum <= -1) {
        bgnum = 0;
    }
    bgcost = bgprices[bgnum];
    $(".ph_bgs").text(backgs[bgnum]);
    // console.log(bgnum);
});

$(".leftbg").click(function() {
    bgnum--;
    $(".ph_bgs").text(backgs[bgnum]);
    if (bgnum < 0 || bgnum >= 2) {
        bgnum = 2;
    }
    bgcost = bgprices[bgnum];
    $(".ph_bgs").text(backgs[bgnum]);
    console.log(bgcost);

});

// CALCULATING COST!!


$("button").click(function() {
    var totalCost = basecost + linecost + colorcost + bgcost;
    $(".cost").text("cost = $" + totalCost);

    console.log(colorcost);

    $(".ph_base").text(bases[basenum]);
    $(".ph_bgs").text(backgs[bgnum]);
    $(".ph_color").text(colorstyle[colornum]);
    //LINE  
    // MARKER
    if (linecost === lineprices[0]) {
        $(".lineartHolder").html('<img class="line preview" src="https://i.imgur.com/1YgqS7I.png">'); //MARKER SIMPLE
    } else if (linecost === lineprices[1]) {
        $(".lineartHolder").html('<img class="line preview" src="https://i.imgur.com/WFvNGg1.png">');
    } else if (linecost === lineprices[2]) {
        $(".lineartHolder").html('<img class="line preview" src="https://i.imgur.com/aNofpkR.png">');
    }
    //COLOR
    if (linecost === lineprices[2] && colorcost === colorprices[1]) {
        // PEN COLOR
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/FcK2xpJ.png">');

    } else if (linecost === lineprices[0] && colorcost ===  colorprices[1]) {
        // SIMPLE COLOR
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/3q6pewH.png">');
    } else if (linecost === lineprices[1] && colorcost ===  colorprices[1]) {
        // MARKER COLOR
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/DrQvq9u.png">');
    } else if (linecost === lineprices[2] && colorcost ===  colorprices[2]) {
        // PEN COLOR MINIMAL
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/agncZN0.png">');

    } else if (linecost === lineprices[0] && colorcost === colorprices[2]) {
        // SIMPLE COLOR MINIMAL
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/tTNZk39.png">');
    } else if (linecost === lineprices[1] && colorcost === colorprices[2]) {
        // MARKER COLOR MINIMAL
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/JhoyRaZ.png2">');
    }else if (linecost === lineprices[2] && colorcost === colorprices[3]) {
        // PEN COLOR FULL
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/YydmLul.png">');

    } else if (linecost === lineprices[0] && colorcost === colorprices[3]) {
        // SIMPLE COLOR FULL
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/wgdhbbv.png">');
    } else if (linecost === lineprices[1] && colorcost === colorprices[3]) {
        // MARKER COLOR FULL
        $(".colorHolder").html('<img class="color preview" src="https://i.imgur.com/zjNSmob.png">');
    }  else {
        $(".colorHolder").html('');
    }
    // BASE LABELERS
    if (basecost === baseprices[0]){
        // Fullbody
        $(".labels").html('<img class="labels preview" src="">');
    }
    else if (basecost === baseprices[1]){
        // Thigh Up
        $(".labels").html('<img class="labels preview" src="https://i.imgur.com/l4sbO3I.png">');
    }
    else if (basecost === baseprices[2]){
        // Waist Up
        $(".labels").html('<img class="labels preview" src="https://i.imgur.com/cozEJ5z.png">');
    }
    else if (basecost === baseprices[3]){
        // Bust
        $(".labels").html('<img class="labels preview" src="https://i.imgur.com/lc6Lkle.png">');
    }
    else if (basecost === baseprices[4]){
        // Headshot
        $(".labels").html('<img class="labels preview" src="https://i.imgur.com/X6eJQCu.png">');
    }
    // BACKGROUNDS!!!
    if (bgcost === bgprices[0]){
        $(".bgHolder").html('<img class="bg preview" src="https://i.imgur.com/uDSfPUx.png">');
        
    } else if (bgcost === bgprices[1]){
        $(".bgHolder").html('<img class="bg preview" src="https://i.imgur.com/Dd9vZyZ.png">');
        
    }else if (bgcost === bgprices[2]){
        $(".bgHolder").html('<img class="bg preview" src="https://i.imgur.com/GJ6WVLR.png">');
    }
});





// extras vvv
$(".ph_color").text(colorstyle[colornum]);
$(".ph_line").text(linestyle[linenum]);
$(".ph_base").text(bases[basenum]);
$(".ph_line").text(linestyle[linenum]);

$('.scroller').click(function() {

    $('html, body').animate({
        scrollTop: 0
    }, 500);

});
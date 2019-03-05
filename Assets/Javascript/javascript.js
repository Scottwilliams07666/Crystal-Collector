



var random_result;
var lost = 0;
var win = 0;
var score = 0;
var previous = 0;




var resetAndStart = function () {

    $(".crystals").empty();

    var images = {
        
        imageUrl: "Assets/Images/Bear.jpg",
        imageUrl:"Assets/Images/Tiger.jpg ",
        imageUrl:"Assets/Javascript/javascript.jswolf.jpg",
        imageUrl:"Assets/Javascript/javascript.jsDragon.jpg",}

    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html("Beast Master Number:" + random_result);

    for (var i = 0; i < 4; i++) {

        // This is the random number that has to match
        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random)

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size":"cover"
        })

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);

}



resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);


    if (previous > random_result) {

        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;


        resetAndStart();

    }

    else if (previous === random_result) {

        win++;

        $("#win").html("You win: " + win);

        previous = 0;

        resetAndStart();

    }
});





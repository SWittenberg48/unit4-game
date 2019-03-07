
document.write();

var wins = 0;

var losses = 0;

var counter = 0;

var targetNumber = Math.floor((Math.random() * 100) + 19);

$("#number-to-guess").html(targetNumber);

var reset = function () {
    user = 0;
    targetNumber = Math.floor((Math.random() * 100) + 19);


    purple = Math.floor((Math.random() * 12) + 1)
    green = Math.floor((Math.random() * 12) + 1)
    blue = Math.floor((Math.random() * 12) + 1)
    white = Math.floor((Math.random() * 12) + 1)
    updateCounter();

}

function crystalImage() {
    var allCrystal = $('.crystal-image');
    for (var i = 0; i < allCrystal.length; i++) {
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        $(allCrystal[i]).attr("data-crystalValue", crystalNumber);
    }
}

crystalImage()

$('.crystal-image').on('click', function () {
    var targetNumber = parseInt($(this).attr('data-crystalValue'));
    counter += targetNumber;
    console.log('counter: ', counter);

    $('#user').html(counter);

    if (counter === targetNumber) {
        wins++
        alert("You Win")
        $('#wins').html(wins);
        $('#user').html(wins);
        $('target').html(targetNumber)
        crystalImage();

        reset();
    }

    else if (counter > targetNumber) {
        losses++
        alert("You lose")
    }
    crystalImage();
    reset();

});

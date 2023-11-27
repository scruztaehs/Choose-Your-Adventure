$(document).ready(function() {
    function restart() {
        $(".hidden").fadeOut();
        $("#intro").fadeIn();
        $("#startBtn").fadeIn();
        $(".restartBtn").addClass("hidden");
    }

    $("#startBtn").click(function() {
        $("#intro").fadeOut(function() {
            $("#scene1").fadeIn();
            $("#choice1, #choice2").fadeIn();
            $("#startBtn").fadeOut();
        });
    });

    $("#choice1").click(function() {
        $("#scene1").fadeOut(function() {
            $("#scene2").fadeIn();
            $("#choice3, #choice4").fadeIn();
        });
    });

    $("#choice2").click(function() {
        $("#scene1").fadeOut(function() {
            $("#scaredyCatEnd, .restartBtn").fadeIn();
        });
    });

    $("#scaredyCatEnd .restartBtn").click(function() {
        restart();
    });

    $("#choice3").click(function() {
        $("#scene2").fadeOut(function() {
            $("#scene3, #choice5").fadeIn();
        });
    });

    $("#choice4").click(function() {
        $("#scene2").fadeOut(function() {
            $("#withoutEnteringCaveEnd").fadeIn();
            $(".restartBtn").fadeIn();
        });
    });

    $("#withoutEnteringCaveEnd .restartBtn").click(function() {
        restart();
    });

    $(".chest").dblclick(function() {
        $("#scene3").fadeOut(function() {
            $("#scene4").fadeIn();
            $(".dragon").hover(function() {
                $(".dragon_text").fadeIn();
            }, function() {
                $(".dragon_text").fadeOut();
            });
            $("#choice7, #choice8").fadeIn();
        });
    });

    $("#choice7").click(function() {
        $("#scene4").fadeOut(function() {
            $("#scene6").fadeIn();
            $(".sword").fadeIn();
        });
    });

    $("#choice8").click(function() {
        $("#scene4").fadeOut(function() {
            $("#sceneRunAway, .restartBtn").fadeIn();
        });
    });

    $("#sceneRunAway .restartBtn").click(function() {
        restart();
    });

    var collectedSwords = 0;

    $(".sword").dblclick(function() {
        if (!$(this).hasClass("collected")) {
            $(this).addClass("collected").fadeOut();

            collectedSwords++;

            if (collectedSwords === $(".sword").length) {
                $("#scene6").fadeOut(function() {
                    $("#scene7").fadeIn();
                    $(".restartBtn").fadeIn();
                });
            }
        }
    });

    $("#scene7 .restartBtn").click(function() {
        restart();
    });
});
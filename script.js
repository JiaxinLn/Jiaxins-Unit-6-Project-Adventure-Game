$(".restart").click(function() {
	$(".Start").show();
    $(".Part-One1").hide();
    $(".Part-One2").hide();
    $(".Filler").hide();
    $(".Part-Two1").hide();
    $(".Part-Two2").hide();
    $(".Story-Ending1").hide();
    $(".Story-Ending2").hide();
});

$(".button1").click(function() {
	$(".Part-One1").show();
    $(".Start").hide();
});

$(".button2").click(function() {
   	$(".Part-One2").show();
   	$(".Start").hide();
});

$(".Hide-img").dblclick(function() {
   	$(".Filler").show();
   	$(".Part-One1").hide();
});

$(".Investigate-img").dblclick(function() {
   	$(".Filler").show();
   	$(".Part-One2").hide();
});

$(".Phone").hover(function() {
   	$(".Part-Two1").show();
   	$(".Filler").hide();
});

$(".Rifle").hover(function() {
   	$(".Part-Two2").show();
   	$(".Filler").hide();
});

$(".Phone-img").click(function() {
   	$(".Story-Ending1").show();
   	$(".Part-Two1").hide();
});

$(".Rifle-img").click(function() {
   	$(".Story-Ending2").show();
   	$(".Part-Two2").hide();
});
//jQueryの書き方
$(document).ready(function(){

$('#js').on('click',function(){
  var elem = '<a href="#">次ページ</a>';
  $("#js").html(elem);
  $("#js").text(elem);
  $("#js").css("color","#ff0");
  $("#js").show(4000);
  $("#js").prepend(elem);
  $("#js").append(elem);
});

// $("#js").empty();
// $("#js").remove();

}); //セミコロン忘れないでくださいねー♪

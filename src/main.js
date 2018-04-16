import './bootstrap.css';
import './styles.css';
import { isMatch } from './memory.js';

var firstCard;
var firstCardId;

$(document).ready(function(){

});

$(document).on("click",".first-click", function(){
  firstCard = $(this).attr("name");
  firstCardId = this.id;
  $("h1").addClass("second-click");
  $(this).removeClass("second-click");
  $("h1").removeClass("first-click");
  $(this).parent().children("img").show();
});

$(document).on("click",".second-click", function(){
  var secondCard = $(this).attr("name");
  $("h1").removeClass("second-click");
  $("h1").addClass("first-click");
  $(this).parent().children("img").show();
  var secondCardId = this.id;
  setTimeout(function(){
    if(isMatch(firstCard,secondCard) === false){
      $("#" + firstCardId).parent().children("img").hide();
      $("#" + secondCardId).parent().children("img").hide();
    }
  }, 300);
  if(!$("img").is(":hidden")){
    $(".output").show();
  }
});

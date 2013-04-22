// JavaScript Document
$(document).ready(function(){
{
  $('#challengeModal').foundation('reveal', {
	  animation: 'fade',
	  animationSpeed: 400,
	  closeOnBackgroundClick: false,
	  dismissModalClass: 'challengeModal-skip-link'
	});
}
 setTimeout(function(){
	  $("#challengeModal").foundation('reveal', 'open');
	}, 1000);
});
function closeModal(){
	$('#challengeModal').foundation('reveal', 'close');	
}
//function switchIframes(){
	//$('#challenge1').fadeOut(200);
	//$('#challenge2').delay(200).fadeIn(200);		}

var name = null;
var cookie;
var age = 0;
var value;
  $("#submit").click(function() {
      $("#userInfo").validate({ 
	  rules: { 
	      name: "required",
	      age: "required",  
	  },
	  submitHandler: function(form) {
 // some other code
 // maybe disabling submit button
 // then:
    setCookie(name, age) //for calc, change age to years
	  } 
    });
  });
function setCookie(name,age){   //for calc change age to 'years'
//collect the cookie for Name and Age fields
  $.cookie("eol_challengeName", name , { expires: 1,  path: '/' }); //how do we have the expiration be anytime they return to the start of the challenge?
  cookie = parseInt($.cookie('eol_challengeAge')); //do we need this line?
  var years = 65 - age; //calcs the years
  $.cookie("eol_challengeAge", years, { expires: 1,  path: '/' });
  //alert($.cookie("eol_challengeName" + "eol_challengeAge"));
  //print the data in the console
  //console.log($.cookie('eol_challengeName'));
  
  };

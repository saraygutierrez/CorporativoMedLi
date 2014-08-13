$(document).ready(function() {
	var titles = $(".title, .title a"),
		disabled = $("#disable"),
		arrow = $(".content-area .down .arrow a");
	//Hide
	titles.next(".content-area").hide();
	//Open first
	titles.first().attr("id", "active").find("span").text("-").parent().next(".content-area").stop(true, true).slideDown(350);
	//Click the tabs
	titles.not("#disable a").click(function(){
		if($(this).parent(".title").attr("id") != "active") {
			//Open
			$(this).parent(".title").attr("id", "active").find("span").text("-").parent().next(".content-area").slideDown(350);
		} else {
			//Hide
			$(this).parent(".title").removeAttr("id").find("span").text("+").parent().next(".content-area").slideUp(350);
		}
		return false;
	});
	//Hide after click the arrow
	arrow.click(function(){
			$(this).parents(".content-area").slideUp(390).prev("#active").removeAttr("id").find("span").text("+");
		return false;
	});
	//Disable documentation
	if(window.location.protocol != "file:") {
		disabled.css("opacity", 0.5).children().click(function(){
			alert("Documentation of the script will be available when you purchase it");
			return false;
		});	
	}
	
});


/*----------------------------------------------------*/
/*	Contact Form
/*----------------------------------------------------*/

(function() {
var animateSpeed=1000;

var emailReg = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

		//if submit button is clicked
        function validateName(name)
        {
                    if (name.val()=='*') 
                        {
                            name.addClass('validation-error',animateSpeed);
                            return false;
                        }
                    else
                        {
                            name.removeClass('validation-error',animateSpeed);
                            return true;
                        }
         }
		 
         function validateEmail(email,regex)
         {
                    if (!regex.test(email.val()))
                        {
                            email.addClass('validation-error',animateSpeed);
                            return false;
                        }
                    else
                        {
                            email.removeClass('validation-error',animateSpeed);
                            return true;
                        }
         }
		 
         function validateMessage(message)
         {
                    if (message.val()=='')
                        {
                            message.addClass('validation-error',animateSpeed);
                            return false;
                        }
                     else
                         {
                             message.removeClass('validation-error',animateSpeed);
                             return true;
                         }
          }
                
		$('#send').click(function()
        {
		// result of action
                var result=true;
                
		//Get the data from all the fields
		var name = $('input[name=name]');
		var email = $('input[name=email]');
		var message = $('textarea[name=message]');
                
                
         // validate of name input
         if(!validateName(name)) result=false;
         if(!validateEmail(email,emailReg)) result=false;
         if(!validateMessage(message)) result=false;
		
         if(result==false) return false;
		//organize the data properly
		var data = 'name=' + name.val() + '&email=' + email.val() + '&message='  + encodeURIComponent(message.val());
		
		//disabled all the text fields
		$('.text').attr('disabled','true');
		
		//show the loading sign
		$('.loading').fadeIn('slow');
		
		//start the ajax
		$.ajax({
		
			//this is the php file that processes the data and send mail
			url: "contact.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {	

					//show the loading sign
					$('.loading').fadeOut('slow');	
					
					//show the success message
					$('.success-message').slideDown('slow');
                                        
                    //deactivate submit
					$('#send').attr('disabled',true);
					
				//if process.php returned 0/false (send mail failed)
				} else 
               
			   {
                  $('.loading').fadeOut('slow')
                  alert('Sorry, unexpected error. Please try again.');				
               }
			   
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
        });
        $('input[name=name]').blur(function(){
           validateName($(this)); 
        });
        $('input[name=email]').blur(function(){
           validateEmail($(this),emailReg); 
        });
        $('textarea[name=message]').blur(function(){
           validateMessage($(this)); 
        });
       
})();

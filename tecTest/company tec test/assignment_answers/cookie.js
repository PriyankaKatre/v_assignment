$(document).ready(function() {
    if(document.cookie.indexOf("formClosedManually") < 0) {
        if(window.outerWidth < 767) {
            setInterval(function(){
                $("#myPopup").show();
            },(5000));
        }
        else {
            $("body").mouseleave(function(){
                $("#myPopup").show();
            });
        }
    }

    $("#signup").click(function() {
        $("#form").validate({
            errorElement: 'p',
            errorClass: 'error',
            rules: {
                email: {
                    required: true,
                    email: true
                },
                checkbox: {
                    required: true
                }
            },
            messages: {
                email: "Please enter the valid email address",
                checkbox: " Please select the check box for monthly newsletter"
            },

            errorPlacement: function (error, element) {
                if (element.attr("type") == "checkbox") {
                    error.insertAfter($(element).next($('span')));
                } else {
                    error.insertAfter($(element));
                }
            },
        });

        if( $("#form").valid() == true) {
            createCookie();
            if(document.cookie.indexOf("formClosedManually") > 0) {
                $("body").mouseleave(function(){
                    $("#myPopup").hide();
                });
            }
        }
    })

    $(".close").click(function() {
      createCookie();
      if(document.cookie.indexOf("formClosedManually") > 0) {
        $("body").mouseleave(function(){
            $("#myPopup").hide();
        });
    }
    })
})

function createCookie() {
  var name = $("#name").val();
  var email = $("#email").val();
  var checkbox =  $("#checkbox").val();
  var cookieObject = {
    name:name,
    email:email,
    newsletter:checkbox
  };

  if(email=="" || $("#checkbox").is(":not(:checked)")) {
    document.cookie="formValues=null";
    document.cookie="formClosedManually=true";
    event.preventDefault();
   }

  else {
    document.cookie="fromValues="+JSON.stringify(cookieObject);
    document.cookie="formClosedManually = false"
    event.preventDefault();
  }
  $("#myPopup").hide();
}

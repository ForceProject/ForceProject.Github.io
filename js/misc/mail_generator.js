$(document).ready(function(){
    $("#contact-form #send-message").click(function() {
        var name = $("#contact-form #name").val();
        var email = $("#contact-form #email").val();
        var phone = $("#contact-form #phone").val();
        var subject = $("#contact-form #reason").val();
        var message = $("#contact-form #message").val();
        if (name.length <= 1) {
            alert("Please enter your name.")
        } else if (subject == "---") {
            alert("Please pick a subject.");
        } else {
            var href =  "mailto:forceproject@icloud.com"
                        + "?subject=Force: " + subject
                        + "&body="          + message
                        + "%0D--------------------"
                        + "%0D RETURN CONTACT TO "  + name + " @ " + email + " / " + phone + ".";
            href = href.replace('\n', "%0D");
            href = href.replace('\r', '%0D');
            href = href.replace(" ", "%20");

            var wndMail = window.open(href, "_blank");
            if (wndMail) {
                pausecomp(100);
                wndMail.close();
            }
        }
    });

    function pausecomp(millis) {
      var date = new Date();
      var curDate = null;
      do { curDate = new Date(); }
      while(curDate-date < millis);
    }
})

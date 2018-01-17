// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
//  console.log(video);
  //document.getElementById("vimeo").setAttribute('autoplay', 1);
  document.getElementById(video_id).src = video+'?autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
  }

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('?autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
//  console.log(video);
  document.getElementById(div).style.display = 'none';
}

jQuery(function($) {
    console.log("jquery");
    $("#signup_form").submit(function() {
        var email = $("#f\\:ZW1haWw\\:MA\\:").val(); // get email field value
        var name = $("#f\\:ZnVsbF9uYW1l\\:MA\\:").val(); // get name field value
        var org = $("#f\\:Y29tcGFueV9uYW1l\\:MA\\:").val(); // get message field value


//        woopra.identify({
//                email: email,
//                name: name,
//                company: org
//        });
//
//        // The identify code should be added before the "track()" function
//        woopra.track();
//
        var data = $(this).serialize();
        console.log(data);

        // $.ajax({
        //     url: "https://leads-capturer.futuresimple.com/form",
        //     data: data,
        //     dataType: "json",
        //     type: "post",
        //     error: errorCallback,
        //     success: successCallback
        // });
        // return false;

console.log("hi");
        $.ajax({
                url: "https://hooks.zapier.com/hooks/catch/670032/6sp04a/",
                data: data,
                dataType: "json",
                type: "post"
                }
            )
            .done(function(response) {
                console.log("im in");
                alert('You have taken the first step! We will be in touch to get your organisation set up'); // show success message
                var submit = 1;
                $("#f\\:ZnVsbF9uYW1l\\:MA\\:").val(''); // reset field after successful submission
                $("#f\\:ZW1haWw\\:MA\\:").val(''); // reset field after successful submission
                $("#f\\:Y29tcGFueV9uYW1l\\:MA\\:").val(''); // reset field after successful submission
            })
            .fail(function(response) {
                alert('Error sending message.');
            });
        return false; // prevent page refresh
    });
});

var ref = new Firebase("https://allbestbrands.firebaseio.com");

window.fbAsyncInit = function() {
   FB.init({
       appId      : '960632784021692',
       xfbml      : true,
       version    : 'v2.6'
   });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$("#loginWithFacebookButton").click(function(){
   ref.authWithOAuthPopup("facebook", function(error, authData) { 
       authData = authData.facebook.id;
       if (error) {
           console.log("Login Failed!", error);
       } else {
           // console.log("Authenticated successfully with payload:", authData);
           // $("#login").css("display", "none");
           // $("#loginWithFacebookButton").css("display", "none");
           // $("#loggedIn").css("display", "block");
           // console.log(authData);
           if (authData.facebook.id==1000231920018619){
               window.location="/post.html"
           }
           else
           {
               alert("Not authorised");
           }
       }

   }, {
       remember: "none",
       scope: "email,user_likes"
   });
});

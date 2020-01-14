$(document).ready(function() {
  
  
    var dana = function (sent) {
      var firstLastCap = (sent.charAt(sent.length-1).toUpperCase() + sent.charAt(0).toUpperCase());
      return firstLastCap;
    };
    
    var userSent = prompt("Enter a sentence...");
    alert(dana(userSent));



});


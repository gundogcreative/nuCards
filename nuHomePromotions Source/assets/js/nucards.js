//Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
}); 


// On Browser Window Resize Add/Remove Collapse Class to Main Navigation
window.onresize = function() {
  if (window.innerWidth >= 769) {
    $('#navigation').removeClass('collapse');
  } else if (window.innerWidth <= 768) {
    $('#navigation').addClass('collapse');
  }
};


// Backstretch Full Screen Background Images
$("#homeCompany").backstretch("assets/img/blueHouseBackground.jpg");
$("#nucardsPage-Bg").backstretch("assets/img/blueFamilyHouseBackground.jpg");


// On Page Load Add/Remove Collapse Class to Main Navigation
$(document).ready(function(e) { 
  if (window.innerWidth >= 769) {
    $('#navigation').removeClass('collapse');
  } else if (window.innerWidth <= 768) {
    $('#navigation').addClass('collapse');
  }
});


// Mobile Navigation - Toggle bars / close icon
$('#mobileNavControl').click(function() {
  $("#mobileNavControl i").toggleClass("fa-bars");
  $("#mobileNavControl i").toggleClass("fa-times");
});


// Twitter feed
$(document).ready(function() {
  $('#tweecool').tweecool({
  //settings
    username : 'nuhomepromos', 
    limit : 1
  });
});









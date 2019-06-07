/**
 *
 */

$(document).ready(function() {
  // Simple script for the mobile nav
  $('#nav-toggle').on('click', function() {
    $('#nav-container').toggleClass('active');
    $('#overlay').toggleClass('active');
  });

  $('#overlay').on('click', function() {
    $('#nav-container').removeClass('active');
    $('#overlay').removeClass('active');
  });
});

$(document).ready(function () {
  $('li').hover(function () {
    $('.submenu', this).show();
  }, function () {
    $('.submenu', this).hide();
  });

  $('#acquisition').hover(function () {
    $('#check-acquisition', this).show();
  }, function () {
    $('#check-acquisition', this).hide();
  });

  $('#activation').hover(function () {
    $('#check-activation', this).show();
  }, function () {
    $('#check-activation', this).hide();
  });

  $('#retention').hover(function () {
    $('#check-retention', this).show();
  }, function () {
    $('#check-retention', this).hide();
  });
});

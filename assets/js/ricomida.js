$(function () {
    // alert("funcionaaaaa :D")
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  
    $('#button-registro').click(function () {
      alert("El correo fue enviado correctamente")
      $('#button-registro').toggle();
    });
  })

  $(document).ready(function(){
    $("h5").dblclick(function(){
      $(this).show('slow');
  });

    $("h5").click(function(){
      $(this).css({
      "color": "red"
    });
  });

  $( '.card-text1').click(function() {
    $('.card-text1').toggle( "slow", function() {
      $(this).hide('slow');
    });
  });

  $( '.card-text2').click(function() {
    $('.card-text2').toggle( "slow", function() {
      $(this).hide('slow');
    });
  });
  
  $( '.card-text3').click(function() {
    $('.card-text3').toggle( "slow", function() {
      $(this).hide('slow');
    });
  });
});
    
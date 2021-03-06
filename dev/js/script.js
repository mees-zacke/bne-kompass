jQuery(function ($) {

  $(document).ready(function () {
    isIE();
  });

  /* https://jsfiddle.net/alvaroAV/svvz7tkn/ */
  function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
  }
  /* Create an alert to show if the browser is IE or not */
  if (isIE()){
    alert('Ihr Browser wird nicht mehr Unterstützt. Bitte verwenden Sie einen neuen. Zum Beispiel: Microsoft Edge, Google Chrome oder Mozilla Firefox');
  }


// Ctlg Filter Akkordion

  var form_head = $(".ce_catalogFilterForm .ctlg_form_field > p").not(".description");

    form_head.on('click touch', function accordeonToggle(){
      $(this).toggleClass('accordeon-active');
      $(this).siblings(".accordeon-body").slideToggle();
    });

// BA Treffer Count

  $(document).ready(function(){
    countHits();
  });

  function countHits(){
    var count = $('.mod_catalogUniversalView #treffer-gesamt').val();
    if (($('.ctlg_form_field.checkbox').find(':checked').length > 0) || ($('#id_form_volltextsuche').val() != 0)){
      $('.treffer-count').append(count);
    }
    else {
      $('.treffer-count').append('Alle ' + count);
    }
  }

// BA Filter ACC bleiben checked

  $(document).ready(function stayChecked() {

          $('.ctlg_form_field.checkbox').each(function(){
          if ($(this).find(':checked').length > 0){
            $(this).children('.label').addClass('accordeon-checked');
            $(this).children('.accordeon-body').css('display', 'block');
          }
        });

  });

});
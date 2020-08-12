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
      console.log("hey")
      $(this).siblings(".accordeon-body").slideToggle();
    });
});




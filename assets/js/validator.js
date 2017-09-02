$(document).ready(function () {
    $('#newsletter-form').on('success', function(e) {
      e.preventDefault();
      var $form = $(e.target);
      var url = 'https://script.google.com/macros/s/AKfycbxsve0qEpeOrsLFaZcfamvt_PRtm4kU6wSbgNIr7-llNp1TK-Nn/exec';
      var jqxhr = $.post(url, $form.serialize(), function(data) {
        $('')
      })
       .fail(function(data){
         $('')
       });

    });
  });

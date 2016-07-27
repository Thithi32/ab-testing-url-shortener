$('.btn-shorten').on('click', function(){

  var urls = [];
  $('.url-field').map(function(){
    if (this.value) {
        urls.push(this.value);
    }
  });

  $.ajax({
    url: '/api/shorten',
    type: 'POST',
    dataType: 'JSON',
    data: {url: urls.join()},
    success: function(data){
        var resultHTML = '<a class="result" href="' + data.shortUrl + '">'
            + data.shortUrl + '</a>';
        $('#link').html(resultHTML);
        $('#link').hide().fadeIn('slow');
    }
  });

});

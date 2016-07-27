function set_click_events() {
	$('.btn-add').unbind("click").on('click', function(){
	  var $line = $('#new_link').clone();
	  $line.removeAttr("id");
	  $('#new_links').append($line);
	  set_click_events();
	});

	$('.btn-remove').unbind("click").on('click', function(){
		this.closest('.new-link').remove();
	});	
}

set_click_events();
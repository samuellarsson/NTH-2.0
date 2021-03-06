(function() {

	$('.m-listitem.comp').on('click', 'h2', function(){
		var $this = $(this);
		var toggledSection = $this.siblings('.sectionToggled');
		var toggleIcon = $this.find('span');
		toggledSection.slideToggle();
		toggleIcon.toggleClass('s-is-active');
	});
	
	var selectable = $('.m-code__box');
	
	selectable.each(function(i){
		var $this = $(this);
		$this.attr('id', 'index-'+i);
	});
	
	function SelectText(element) {
    var doc = document,
        text = doc.getElementById(element),
        range,
        selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
	}
	
  selectable.on('click', function() {
  	var $this = $(this);
  	var thisId = $this.attr('id');
    SelectText(thisId);
   	selectable.removeClass('s-is-selected');
   	$this.addClass('s-is-selected');
  });

})();
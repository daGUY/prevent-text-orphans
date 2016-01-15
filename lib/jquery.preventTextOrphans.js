(function($) {
	$.fn.preventTextOrphans = function(options) {
		var defaults = {
			minimum: 2,
			wrapperClass: "no-wrap",
			wrapperElement: "span"
		};
		
		// Force minimum to be at least 2
		if (options) {
			if (options.minimum < 2) {
				options.minimum = 2;
			}	
		}
		
		var settings = $.extend({}, defaults, options);
		
		return this.each(function() {
			// Split text into array (note: HTML tags that contain multiple words are treated as one item)
			// See http://stackoverflow.com/a/7552371/778581
			var text = $(this).html().match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g),
				wrapped;
			
			// Rebuild text into string, wrapping the specified minimum number of words
			for (var i = 0; i < text.length; i++) {
				if (!wrapped) {
					wrapped = text[i] + " ";
				} else {
					if (text.length > settings.minimum) {
						if (i == text.length - settings.minimum) {
							wrapped += "<" + settings.wrapperElement + " class='" + settings.wrapperClass +"'>" + text[i] + " ";
						} else if (i == text.length - 1) {
							wrapped += text[i] + "</" + settings.wrapperElement + ">";
						} else {
							wrapped += text[i] + " ";
						}
					} else {
						wrapped += text[i] + " ";
					}
				}
			}
	
			// Replace original text with wrapped version
			$(this).html(wrapped);
		});
	};	
}(jQuery));
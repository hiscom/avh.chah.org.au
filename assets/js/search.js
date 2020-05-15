var docs;
var idx;


(function ($) {

var urlParams = new URLSearchParams(window.location.search);
var q = urlParams.getAll('q');
if (q.length) {
	q = q[0];

	$('input[name=q]').val(q);

	$('.page-header>h1').append(" '" + q + "'");

	docs = window.docs;

	idx = lunr(function () {
		this.ref('id');
		this.field('title', 10);
		this.field('body');
	
		docs.forEach(function (doc) { this.add(doc) }, this);
	});
	
	var result = idx.search(q);
	
	if (result.length) {
		$.each(result, function (index, item) {
			var title;
			var excerpt = null;
			var date = null;
			$.each(docs, function (i, doc) {
				if (doc.id === item.ref) {
					title = doc.title;
					excerpt = doc.excerpt;
					date = doc.date;
				}
			});

			var searchResult = $('<div/>', {
				class: 'search-result',
				html: '<h3><a href="' + item.ref + '"><b>' + title + '</b></a></h3>'
			}).appendTo('#search-results');

			if (date) {
				searchResult.append('<p><i class="far fa-calendar-alt"></i> <time class="dt-published" itemprop="datePublished">' + date + '</p>');
			}

			if (excerpt) {
				searchResult.append('<p>' + excerpt + '<a href="' + item.ref + '"> Read more...</a></p>');
			}
		});
		
	}
}

})(jQuery);

(function() {
	var newButtons = ["ljuser", "google_plus", "wordpress", "habrahabr", "github"];
	tinymce.create('tinymce.plugins.RikkiSocialIconsPlugin', {
	init : function(ed, url) {
		for (var i in newButtons) {
			var itemTitle = newButtons[i];
			(function(itemTitle) {
				var itemCommand = 'mce'+itemTitle;
				ed.addCommand(itemCommand, function() {
					var newcontent = '[userid type="'+itemTitle+'"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton(itemTitle, {
					title : itemTitle,
					cmd : itemCommand,
					image : url + '/img/'+itemTitle+'.gif'
				});
			})(itemTitle);
		}
	},
		getInfo : function() {
			return {
				longname : 'Rikki\'s WP Social Icons',
				author : 'Rikki Mongoose',
				authorurl : 'http://github.com/rikkimongoose/',
				infourl : 'http://github.com/rikkimongoose/rikkis-wp-social-icons/',
				version : "1.1.1"
			};
		}
	});
	tinymce.PluginManager.add('rikkisocialicons', tinymce.plugins.RikkiSocialIconsPlugin);
})();

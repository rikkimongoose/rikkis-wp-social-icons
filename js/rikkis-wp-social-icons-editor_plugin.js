//a JavaScript extension to the ECMA-262 standard (for IE < 9)
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

(function() {
	var newButtons = ["blogspot", "ljuser", "twitter", "google_plus", "wordpress", "habrahabr", "github"];
	tinymce.create('tinymce.plugins.RikkiSocialIconsPlugin', {
		init : function(ed, url) {
			if(newButtons.indexOf("blogspot") > -1){
				ed.addCommand('mce-blogspot', function() {
					var newcontent = '[userid type="blogspot"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('blogspot', {
					title : 'blogspot',
					cmd : 'mce-blogspot',
					image : url + '/img/blogspot.gif'
				});
			}
			if(newButtons.indexOf("ljuser") > -1){
				ed.addCommand('mce-ljuser', function() {
					var newcontent = '[userid type="ljuser"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
			});
				ed.addButton('ljuser', {
					title : 'ljuser',
					cmd : 'mce-ljuser',
					image : url + '/img/ljuser.gif'
				});
			}
			if(newButtons.indexOf("ljcomm") > -1){
				ed.addCommand('mce-ljcomm', function() {
					var newcontent = '[userid type="ljcomm"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('ljcomm', {
					title : 'ljcomm',
					cmd : 'mce-ljcomm',
					image : url + '/img/ljcomm.gif'
				});
			}
			if(newButtons.indexOf("liruboy") > -1){
			ed.addCommand('mce-liruboy', function() {
					var newcontent = '[userid type="liruboy"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
			});
				ed.addButton('liruboy', {
					title : 'liruboy',
					cmd : 'mce-liruboy',
					image : url + '/img/liruboy.gif'
				});
			}
			if(newButtons.indexOf("lirugirl") > -1){
				ed.addCommand('mce-lirugirl', function() {
					var newcontent = '[userid type="lirugirl"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('lirugirl', {
					title : 'lirugirl',
					cmd : 'mce-lirugirl',
					image : url + '/img/lirugirl.gif'
				});
			}
			if(newButtons.indexOf("ljr") > -1){
				ed.addCommand('mce-ljr', function() {
					var newcontent = '[userid type="ljr"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('ljr', {
					title : 'ljr',
					cmd : 'mce-ljr',
					image : url + '/img/ljr.gif'
				});
			}
			if(newButtons.indexOf("vk") > -1){
				ed.addCommand('mce-vk', function() {
					var newcontent = '[userid type="vk"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('vk', {
					title : 'vk',
					cmd : 'mce-vk',
					image : url + '/img/vk.gif'
				});
			}
			if(newButtons.indexOf("twitter") > -1){
				ed.addCommand('mce-twitter', function() {
					var newcontent = '[userid type="twitter"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('twitter', {
					title : 'twitter',
					cmd : 'mce-twitter',
					image : url + '/img/twitter.gif'
				});
			}
			if(newButtons.indexOf("facebook") > -1){
				ed.addCommand('mce-facebook', function() {
					var newcontent = '[userid type="facebook"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('facebook', {
					title : 'facebook',
					cmd : 'mce-facebook',
					image : url + '/img/facebook.gif'
				});
			}
			if(newButtons.indexOf("google_plus") > -1){
				ed.addCommand('mce-google_plus', function() {
					var newcontent = '[userid type="google_plus"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('google_plus', {
					title : 'google_plus',
					cmd : 'mce-google_plus',
					image : url + '/img/google_plus.gif'
				});
			}
			if(newButtons.indexOf("wordpress") > -1){
				ed.addCommand('mce-wordpress', function() {
					var newcontent = '[userid type="wordpress"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('wordpress', {
					title : 'wordpress',
					cmd : 'mce-wordpress',
					image : url + '/img/wordpress.gif'
				});
			}
			if(newButtons.indexOf("habrahabr") > -1){
				ed.addCommand('mce-habrahabr', function() {
					var newcontent = '[userid type="habrahabr"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('habrahabr', {
					title : 'habrahabr',
					cmd : 'mce-habrahabr',
					image : url + '/img/habrahabr.gif'
				});
			}
			if(newButtons.indexOf("github") > -1){
				ed.addCommand('mce-github', function() {
					var newcontent = '[userid type="github"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
					tinyMCE.activeEditor.selection.setContent(newcontent);
				});
				ed.addButton('github', {
					title : 'github',
					cmd : 'mce-github',
					image : url + '/img/github.gif'
				});
			}
		},
		getInfo : function() {
			return {
				longname : 'Rikki\'s WP Social Icons',
				author : 'Rikki Mongoose',
				authorurl : 'http://rikkimongoose.ru',
				infourl : 'http://rikkimongoose.ru/projects/rikkis-wp-social-icons/',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('rikkisocialicons', tinymce.plugins.RikkiSocialIconsPlugin);
})();
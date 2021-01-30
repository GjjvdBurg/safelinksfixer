/* SafelinksFixer namespace */

// based on 
// https://github.com/matthias-g/smileyfixer/blob/7fea7daf61e8be3b5fd87467b21f5afc58b1c50a/scripts/smileyfixer.js

if (typeof SafelinksFixer == "undefined") {
	var SafelinksFixer = {};

	SafelinksFixer.replaceURLs = function(text) {
		var result;
		var regexes = new Array(
			new RegExp("https:\/\/.*\.safelinks\.protection.*url=(.*)&data=.*reserved=0"),
			new RegExp("https:\/\/.*\.safelinks\.protection.*url=(.*)&amp;data=.*reserved=0"),
			new RegExp("https:\/\/.*\.safelinks\.protection.*url=(.*)&sdata=.*reserved=0"),
			new RegExp("https:\/\/.*\.safelinks\.protection.*url=(.*)&amp;sdata=.*reserved=0"),
		);
		var i;
		for (i=0; i<regexes.length; i++) {
			reg = regexes[i];
			while ((result = reg.exec(text)) != null) {
				//console.log("Replacing ", result[0], " with 
				//", decodeURIComponent(result[1]));
				text = text.replace(result[0], decodeURIComponent(result[1]));
			}
		}
		return text;
	}

	SafelinksFixer.fixLink = function(link) {
		link.firstChild.data = SafelinksFixer.replaceURLs(link.firstChild.data);
		link.href = SafelinksFixer.replaceURLs(link.href);
	}

	SafelinksFixer.doFixups = function(contentDocument) {
		var links = contentDocument.getElementsByTagName("a");
		for (var i = 0; i < links.length; i++) {
			try {
				var link = links[i];
				SafelinksFixer.fixLink(link);
			}
			catch (e) {
				//console.log(e);
			}
		}
		if (contentDocument.body && contentDocument.body.innerHTML) {
			try {
				html = SafelinksFixer.replaceURLs(contentDocument.body.innerHTML);
				contentDocument.body.innerHTML = html;
			}
			catch (e) {
				//console.log(e);
			}
		}
	};

	SafelinksFixer.init = function() {
		SafelinksFixer.doFixups(document);
	};
}

SafelinksFixer.init();

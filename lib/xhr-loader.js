exports.load = function(url, callback) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) {
			return;
		}

		if (xhr.status >= 200 && xhr.status < 300) {
			callback(null, xhr.responseText);
		} else {
			var msg = xhr.status + ": failed to request file '" + url + "'";
			callback(new Error(msg));
		}
	};

	try {
		xhr.open('GET', url, true);
		xhr.send(null);
	} catch (err) {
		callback(err);
	}
};
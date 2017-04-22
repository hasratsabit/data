

window.onload = function() {

	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var data = JSON.parse(http.responseText);
			console.log(data)
		}
	}

	http.open("GET", "https://github.com/hasratsabit/data.git", true);
	http.send()
}

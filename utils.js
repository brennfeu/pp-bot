function getRandomPercent() {
	var i = Math.floor(Math.random() * 100 + 1);
	return i;
}

function changeTextUwu(_texte) {
	var lettres = [];

	_texte = _texte.split("r").join("w");
	_texte = _texte.split("R").join("W");

	_texte = _texte.split(" ");
	for (var i in _texte) {
		if (getRandomPercent() <= 5 && /^[a-zA-Z]+$/.test(_texte[i])) {
			_texte[i] = "fuck"
		}
	}
	_texte = _texte.join(" ")

	if (getRandomPercent() <= 15) {
		_texte += " uwu";
	}
	else if (getRandomPercent() <= 25) {
		_texte += " owo";
	}
	else if (getRandomPercent() <= 35) {
		_texte += " TwT";
	}

	return _texte;
}
function changeTextLeet(_texte) {
	_texte = _texte.split("o").join("0");
	_texte = _texte.split("O").join("0");
	_texte = _texte.split("i").join("1");
	_texte = _texte.split("I").join("1");
	_texte = _texte.split("e").join("3");
	_texte = _texte.split("E").join("3");
	_texte = _texte.split("a").join("4");
	_texte = _texte.split("A").join("4");
	_texte = _texte.split("s").join("5");
	_texte = _texte.split("S").join("5");
	_texte = _texte.split("b").join("8");
	_texte = _texte.split("B").join("8");

	return _texte;
}
function changeTextRandomCap(_texte) {
	var lettres = _texte.split("");

	for (var i = 0; i < lettres.length; i++) {
		if (getRandomPercent() <= 33) {
			lettres[i] = lettres[i].toUpperCase();
		}
	}
	_texte = lettres.join("");

	return _texte;
}
function changeTextRussian(_texte) {
	_texte = _texte.split(" ");
	for (var i in _texte) {
		if (getRandomPercent() <= 10 && /^[a-zA-Z]+$/.test(_texte[i])) {
			_texte[i] = _texte[i] + "ovo"
		}
	}
	_texte = _texte.join(" ")

	return _texte;
}
function changeTextRandomSpoil(_texte) {
	var lettres = _texte.split(" ");

	for (var i = 0; i < lettres.length; i++) {
		if (getRandomPercent() <= 33) {
			lettres[i] = "||" + lettres[i] + "||";
		}
	}
	_texte = lettres.join(" ");

	return _texte;
}
function changeTextChristian(_texte) {
	_texte = _texte.split("PP").join("Power Puff Girl");
	_texte = _texte.split("Pp").join("Power Puff Girl");
	_texte = _texte.replace(/hitler/gi, "Angry German");
	_texte = _texte.replace(/villager/gi, "infidel");
	_texte = _texte.replace(/dick/gi, "Richard");
	_texte = _texte.replace(/raped/gi, "raked");
	_texte = _texte.replace(/satan/gi, "Stanley");
	_texte = _texte.replace(/hell/gi, "Hottube");
	_texte = _texte.replace(/gay/gi, "Brenn");
	_texte = _texte.replace(/kidney stone/gi, "volleyball");
	_texte = _texte.replace(/circumcised/gi, "trims");
	_texte = _texte.replace(/punches/gi, "hugs");
	_texte = _texte.replace(/punching/gi, "hugging");
	_texte = _texte.replace(/punch/gi, "hug");
	_texte = _texte.replace(/dong/gi, "dog");
	_texte = _texte.replace(/espinoza/gi, "Uncle");
	_texte = _texte.replace(/hog/gi, "Teddy Bear");
	_texte = _texte.replace(/ancient Fungus/gi, "Papa Stalin");
	_texte = _texte.replace(/furry/gi, "Hairy Man");
	_texte = _texte.replace(/fuck/gi, "duck");
	_texte = _texte.replace(/cum/gi, "milky white substance");
	_texte = _texte.replace(/terrorist/gi, "Muslim"); // That's racist:o
	_texte = _texte.replace("SEXUAL CONFUSION", "ROMANTIC TENSION");
	return _texte;
}
function changeTextPoopoo(_texte) {
	_texte = _texte.split("PP").join("Poopoo");
	_texte = _texte.split("Pp").join("Poopoo");
	return _texte;
}

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
function randomFromList(_list) {
	if (_list.length == 0) {
		return null;
	}
	return shuffleArray(_list.slice())[0];
}

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function fibonacciNumber(_n) {
	var a = 1, b = 0, temp;
	while (_n >= 0 ){
		temp = a;
		a = a + b;
		b = temp;
		_n--;
	}
	return b;
}

function sciText(_texte) {
    var l = _texte.toString().split("\n").join(" \n").split(" ");
    for (var i in l) {
        if (isNaN(l[i])) continue;
        if (l[i].includes("e")) continue; // power of 10 notation

        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(l[i])) l[i] = l[i].replace(pattern, "$1,$2");
    }
    return l.join(" ");
}
function romanizeNumber(num) {
    if (num == 0) return "N";
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

function formatDate(d) {
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

	var hour = d.getHours();
	var min = d.getMinutes();

	if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
	if (hour.length < 2)
        hour = '0' + hour;
    if (min.length < 2)
        min = '0' + min;

    return [day, month, year].join('/') + " - " + [hour, min].join(":");
}

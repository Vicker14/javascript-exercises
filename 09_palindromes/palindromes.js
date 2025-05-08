const palindromes = function (word) {
	word = word.toLowerCase().replace(/[^a-z0-9]/g, '');
	let ini = 0;
	let end = word.length - 1;
	while (ini < word.length / 2) {
		if (word[ini] != word[end]) return false;
		ini++;
		end--;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;

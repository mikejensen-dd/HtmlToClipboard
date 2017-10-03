module.exports = {
	"env": {
		"browser": true,
		"greasemonkey": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"brace-style": "warn",
		"comma-dangle": ["warn", "always-multiline"],
		"curly": "warn",
		"indent": ["warn","tab"],
		"linebreak-style": ["off"],
		"no-console": ["warn", {allow: ["warn", "error"]}],
		"no-multiple-empty-lines": ["warn", {"max": 1}],
		"no-var": "warn",
		"prefer-template": "warn",
		"quotes": ["warn","single"],
		"semi": ["warn","always"]
	}
};
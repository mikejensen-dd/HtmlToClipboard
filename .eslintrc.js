module.exports = {
	"env": {
		"browser": true,
		"greasemonkey": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"comma-dangle": [
			"warn", 
			"always-multiline"
		],
		"indent": [
			"warn",
			"tab"
		],
		"linebreak-style": [
			"off"
		],
		"no-console": [
			"error", { 
				allow: [
					"warn", 
					"error"
				] 
			}
		],
		"quotes": [
			"warn",
			"single"
		],
		"semi": [
			"warn",
			"always"
		]
	}
};
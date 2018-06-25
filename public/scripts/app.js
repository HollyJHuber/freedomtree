"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	let currentWhat1;
	let currentWhat2;
	const choices = [];
*/

// start React Code

var FreedomTreeApp = function (_React$Component) {
	_inherits(FreedomTreeApp, _React$Component);

	function FreedomTreeApp() {
		_classCallCheck(this, FreedomTreeApp);

		return _possibleConstructorReturn(this, (FreedomTreeApp.__proto__ || Object.getPrototypeOf(FreedomTreeApp)).apply(this, arguments));
	}

	_createClass(FreedomTreeApp, [{
		key: "render",
		value: function render() {
			var what1s = [["Discrimination", "fas fa-users", "Discrimination"], ["Bullying", "fas fa-child", "Bullying"], ["Sexual Harassment", "fas fa-hand-rock", "Sexual Harassment"], ["LGBTQ", "fas fa-transgender-alt", "LGBTQ"], ["Religion", "fas fa-church", "Religion", [["Prayer", "Prayer"], ["Invocation/Blessing", "Invocation/Blessing"], ["Bible/Scripture", "Bible/Scripture"], ["Other Holy Book/Scripture", "Other Holy Book/Scripture"], ["Creation Science/Intelligent Design", "Creation Science/Intelligent Design"], ["Holidays/Songs", "Holidays/Songs"], ["Proselytizing/Witnessing", "Proselytizing/Witnessing"], ["Attire/Jewelry", "Attire/Jewelry"], ["Baccalaureate", "Baccalaureate"], ["Other Religion", "Other"]]], ["Speech", "fas fa-bullhorn", "Speech", [["Censorship", "Censorship"], ["Press", "Press"], ["Art/Music", "Art/Music"], ["Personal Expression/Attire<", "Personal Expression/Attire"], ["Pledge of Allegiance", "Pledge of Allegiance"], ["National Anthem", "National Anthem"], ["Other Speech", "Other"]]], ["Protest/Assembly", "fas fa-newspaper", "Protest/Assembly"], ["Disability", "fab fa-accessible-icon", "Disability"], ["Health & Safety", "fas fa-medkit", "Health & Safety"], ["Police (Interactions)", "fas fa-exclamation-triangle", "Police (Interactions)"], ["Emergency", "fas fa-ambulance", "Emergency (Call 911)"], ["Other", "fas fa-question", "Other"]];
			return React.createElement(
				"div",
				null,
				React.createElement(NavBar, null),
				React.createElement(Hero, null),
				React.createElement(Interview, { what1s: what1s }),
				React.createElement(Footer, null)
			);
		}
	}]);

	return FreedomTreeApp;
}(React.Component);

var NavBar = function NavBar() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"nav",
			{ className: "topNav", id: "top" },
			React.createElement(
				"span",
				{ className: "navItem" },
				React.createElement("img", { className: "navLogo", src: "./assets/img/FreedomTreeAppIcon.svg", alt: "tree icon" }),
				React.createElement("img", { className: "navText", src: "./assets/img/FreedomTreeLogoTextOnly.svg", alt: "Freedom Tree" })
			),
			React.createElement(
				"ul",
				{ className: "navMenu" },
				React.createElement(
					"li",
					{ className: "navItem navItemLg" },
					React.createElement(
						"a",
						{ href: "#" },
						"About"
					)
				),
				React.createElement(
					"li",
					{ className: "navItem navItemLg" },
					React.createElement(
						"a",
						{ href: "#" },
						"Contact"
					)
				),
				React.createElement(
					"li",
					{ className: "navItem navItemLg" },
					React.createElement(
						"a",
						{ href: "#" },
						"Donate"
					)
				),
				React.createElement(
					"li",
					{ className: "navItem navItemSm" },
					React.createElement(
						"a",
						{ href: "#" },
						React.createElement("i", { className: "fas fa-bars fa-2x" })
					)
				)
			)
		)
	);
};

var Hero = function Hero() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"section",
			{ className: "hero" },
			React.createElement("img", { className: "logo", src: "./assets/img/FreedomTreeLogoTag.svg", alt: "freedom tree: free help defending your civil rights" })
		)
	);
};

var Interview = function Interview(props) {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"section",
			{ className: "interview" },
			React.createElement(Question, null),
			props.what1s.map(function (what1) {
				return React.createElement(WhatOne, { key: what1[0], what1Id: what1[0], what1Icon: what1[1], what1Text: what1[2], what2s: what1[3] });
			})
		)
	);
};

var Question = function (_React$Component2) {
	_inherits(Question, _React$Component2);

	function Question() {
		_classCallCheck(this, Question);

		return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).apply(this, arguments));
	}

	_createClass(Question, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement("h4", { id: "path" }),
				React.createElement(
					"h1",
					{ id: "question" },
					"What's Happening?"
				),
				React.createElement(
					"h4",
					{ id: "instruction" },
					"Select the issue that best describes your situtation:"
				)
			);
		}
	}]);

	return Question;
}(React.Component);

var WhatOne = function (_React$Component3) {
	_inherits(WhatOne, _React$Component3);

	function WhatOne() {
		_classCallCheck(this, WhatOne);

		return _possibleConstructorReturn(this, (WhatOne.__proto__ || Object.getPrototypeOf(WhatOne)).apply(this, arguments));
	}

	_createClass(WhatOne, [{
		key: "displayWhatTwo",
		value: function displayWhatTwo(e) {

			console.log(e.target.className);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "what1", id: this.props.what1Id, onClick: this.displayWhatTwo },
				React.createElement(
					"div",
					{ className: "col1" },
					React.createElement("i", { className: this.props.what1Icon })
				),
				React.createElement(
					"div",
					{ className: "col2" },
					this.props.what1Text
				),
				React.createElement(
					"ul",
					{ className: "what2" },
					this.props.what2s && this.props.what2s.map(function (what2) {
						return React.createElement(WhatTwo, { key: what2[0], what2Id: what2[0], what2Text: what2[1] });
					})
				)
			);
		}
	}]);

	return WhatOne;
}(React.Component);

var WhatTwo = function (_React$Component4) {
	_inherits(WhatTwo, _React$Component4);

	function WhatTwo() {
		_classCallCheck(this, WhatTwo);

		return _possibleConstructorReturn(this, (WhatTwo.__proto__ || Object.getPrototypeOf(WhatTwo)).apply(this, arguments));
	}

	_createClass(WhatTwo, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"li",
				{ id: this.props.what2Id },
				this.props.what2Text
			);
		}
	}]);

	return WhatTwo;
}(React.Component);

var Footer = function Footer() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"footer",
			null,
			React.createElement(
				"a",
				{ href: "#top" },
				React.createElement("img", { className: "navText", src: "./assets/img/FreedomTreeLogoTextOnly.svg", alt: "Freedom Tree" })
			),
			React.createElement(
				"ul",
				null,
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "#" },
						React.createElement("i", { className: "fab fa-twitter-square fa-2x" })
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "#" },
						React.createElement("i", { className: "fab fa-facebook-square fa-2x" })
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "#" },
						React.createElement("i", { className: "fab fa-snapchat-square fa-2x" })
					)
				)
			)
		)
	);
};

ReactDOM.render(React.createElement(FreedomTreeApp, null), document.getElementById('app'));

// end React Code
/*
	// capturing what1 click, display what2 content

	$('.what1').on('click', function(){

		currentWhat1 = $(this).attr('id');

		$(this).toggleClass('expand');

		$('.what1.expand .col2 .what2').slideToggle();

		$('.what1.expand').each(function(i){
			if ($(this).attr('id') != currentWhat1){
				$(this).toggleClass('expand');
			}
		});
	});


	// capturing what2 click, display what3 content
	$('.what2 li').on('click', function(){
		let what3Text; 

		currentWhat2 = $(this).attr('id');

		$('#question').text(currentWhat2);
		
		// #path is text for now, will be links
		$('#path').text(" Issues > " + currentWhat1);

		// write to an array
		choices.push(currentWhat1, currentWhat2);

		$('.what1').remove();

		if (currentWhat1=="Religion"){
			//insert prayer text
			what3Text = [	'I do not wish to participate in prayer.',
							'I am not being allowed to pray.',
							'I am being forced to pray.',
							'I am being forced to listen silently to prayer.',
							'I am required to be present while others pray.',
							'Other'];

		} else {
			//insert pledge text
			what3Text = [	'I do not wish to participate.',
							'I am being forced to recite.',
							'I am being forced to stand.',
							'I am being treated unfairly for not participating.',
							'I do not wish to say "Under God”.',
							'Other'];
		}

		what3Text.forEach(function(value){
			let newWhat3 = '<div class="what3"><div class="listing">' + value + '</div></div>';
			$("#instruction").append(newWhat3)
		});
	});

	// capturing what3 click, display what3 content
});
*/

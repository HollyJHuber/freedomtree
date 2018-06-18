"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// document ready wrapper tells scripts to wait until DOM has loaded
$(function () {

	var currentWhat1 = void 0;
	var currentWhat2 = void 0;
	var choices = [];

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
				return React.createElement(
					"div",
					null,
					React.createElement(NavBar, null),
					React.createElement(Hero, null),
					React.createElement(Interview, null),
					React.createElement(Footer, null)
				);
			}
		}]);

		return FreedomTreeApp;
	}(React.Component);

	var NavBar = function (_React$Component2) {
		_inherits(NavBar, _React$Component2);

		function NavBar() {
			_classCallCheck(this, NavBar);

			return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
		}

		_createClass(NavBar, [{
			key: "render",
			value: function render() {
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
			}
		}]);

		return NavBar;
	}(React.Component);

	var Hero = function (_React$Component3) {
		_inherits(Hero, _React$Component3);

		function Hero() {
			_classCallCheck(this, Hero);

			return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
		}

		_createClass(Hero, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"section",
						{ className: "hero" },
						React.createElement("img", { className: "logo", src: "./assets/img/FreedomTreeLogoTag.svg", alt: "freedom tree: free help defending your civil rights" })
					)
				);
			}
		}]);

		return Hero;
	}(React.Component);

	var Interview = function (_React$Component4) {
		_inherits(Interview, _React$Component4);

		function Interview() {
			_classCallCheck(this, Interview);

			return _possibleConstructorReturn(this, (Interview.__proto__ || Object.getPrototypeOf(Interview)).apply(this, arguments));
		}

		_createClass(Interview, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"section",
						{ className: "interview" },
						React.createElement("h4", { id: "path" }),
						React.createElement(Question, null),
						React.createElement(
							"h4",
							{ id: "instruction" },
							"Select the issue that best describes your situtation:"
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Discrimination" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-users" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Discrimination"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Bullying" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-child" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Bullying"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Sexual Harassment" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-hand-rock" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Sexual Harassment"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "LGBTQ" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-transgender-alt" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"LGBTQ"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Religion" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-church" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Religion",
								React.createElement(
									"ul",
									{ className: "what2" },
									React.createElement(
										"li",
										{ id: "Prayer" },
										"Prayer"
									),
									React.createElement(
										"li",
										{ id: "Invocation/Blessing" },
										"Invocation/Blessing"
									),
									React.createElement(
										"li",
										{ id: "Bible/Scripture" },
										"Bible/Scripture"
									),
									React.createElement(
										"li",
										{ id: "Other Holy Book/Scripture" },
										"Other Holy Book/Scripture"
									),
									React.createElement(
										"li",
										{ id: "Creation Science/Intelligent Design" },
										"Creation Science/Intelligent Design"
									),
									React.createElement(
										"li",
										{ id: "Holidays/Songs" },
										"Holidays/Songs"
									),
									React.createElement(
										"li",
										{ id: "Proselytizing/Witnessing" },
										"Proselytizing/Witnessing"
									),
									React.createElement(
										"li",
										{ id: "Attire/Jewelry" },
										"Attire/Jewelry"
									),
									React.createElement(
										"li",
										{ id: "Baccalaureate" },
										"Baccalaureate"
									),
									React.createElement(
										"li",
										{ id: "Other Religion" },
										"Other"
									)
								)
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Speech" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-bullhorn" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Speech",
								React.createElement(
									"ul",
									{ className: "what2" },
									React.createElement(
										"li",
										{ id: "Censorship" },
										"Censorship"
									),
									React.createElement(
										"li",
										{ id: "Press" },
										"Press"
									),
									React.createElement(
										"li",
										{ id: "Art/Music" },
										"Art/Music"
									),
									React.createElement(
										"li",
										{ id: "Personal Expression/Attire<" },
										"Personal Expression/Attire"
									),
									React.createElement(
										"li",
										{ id: "Pledge of Allegiance" },
										"Pledge of Allegiance"
									),
									React.createElement(
										"li",
										{ id: "National Anthem" },
										"National Anthem"
									),
									React.createElement(
										"li",
										{ id: "Other Speech" },
										"Other"
									)
								)
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Protest/Assembly" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-newspaper" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Protest/Assembly"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Disability" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fab fa-accessible-icon" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Disability"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Health & Safety" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-medkit" }),
								" "
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Health & Safety"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Police (Interactions)" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-exclamation-triangle" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Police (Interactions)"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Emergency" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-ambulance" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Emergency (Call 911)"
							)
						),
						React.createElement(
							"div",
							{ className: "what1", id: "Other" },
							React.createElement(
								"div",
								{ className: "col1" },
								React.createElement("i", { className: "fas fa-question" })
							),
							React.createElement(
								"div",
								{ className: "col2" },
								"Other"
							)
						)
					)
				);
			}
		}]);

		return Interview;
	}(React.Component);

	var Question = function (_React$Component5) {
		_inherits(Question, _React$Component5);

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
					React.createElement(
						"h1",
						{ id: "question" },
						"What's Happening?"
					)
				);
			}
		}]);

		return Question;
	}(React.Component);

	var Footer = function (_React$Component6) {
		_inherits(Footer, _React$Component6);

		function Footer() {
			_classCallCheck(this, Footer);

			return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
		}

		_createClass(Footer, [{
			key: "render",
			value: function render() {
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
			}
		}]);

		return Footer;
	}(React.Component);

	ReactDOM.render(React.createElement(FreedomTreeApp, null), document.getElementById('app'));

	// end React Code

	// capturing what1 click, display what2 content

	$('.what1').on('click', function () {

		currentWhat1 = $(this).attr('id');

		$(this).toggleClass('expand');

		$('.what1.expand .col2 .what2').slideToggle();

		$('.what1.expand').each(function (i) {
			if ($(this).attr('id') != currentWhat1) {
				$(this).toggleClass('expand');
			}
		});
	});

	// capturing what2 click, display what3 content
	$('.what2 li').on('click', function () {
		var what3Text = void 0;

		currentWhat2 = $(this).attr('id');

		$('#question').text(currentWhat2);

		// #path is text for now, will be links
		$('#path').text(" Issues > " + currentWhat1);

		// write to an array
		choices.push(currentWhat1, currentWhat2);

		$('.what1').remove();

		if (currentWhat1 == "Religion") {
			//insert prayer text
			what3Text = ['I do not wish to participate in prayer.', 'I am not being allowed to pray.', 'I am being forced to pray.', 'I am being forced to listen silently to prayer.', 'I am required to be present while others pray.', 'Other'];
		} else {
			//insert pledge text
			what3Text = ['I do not wish to participate.', 'I am being forced to recite.', 'I am being forced to stand.', 'I am being treated unfairly for not participating.', 'I do not wish to say "Under God”.', 'Other'];
		}

		what3Text.forEach(function (value) {
			var newWhat3 = '<div class="what3"><div class="listing">' + value + '</div></div>';
			$("#instruction").append(newWhat3);
		});
	});

	// capturing what3 click, display what3 content
});

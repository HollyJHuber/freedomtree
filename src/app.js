
// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	let currentWhat1;
	let currentWhat2;
	const choices = [];

	
// start React Code

	class FreedomTreeApp extends React.Component {
		render() {
			const what1s =  [["Discrimination", "fas fa-users", "Discrimination"], 
											["Bullying", "fas fa-child", "Bullying"], 
											["Sexual Harassment", "fas fa-hand-rock", "Sexual Harassment"],
											["LGBTQ", "fas fa-transgender-alt", "LGBTQ"], 
											["Religion", "fas fa-church", "Religion",
												[["Prayer", "Prayer"],
												["Invocation/Blessing", "Invocation/Blessing"],
												["Bible/Scripture", "Bible/Scripture"],
												["Other Holy Book/Scripture", "Other Holy Book/Scripture"],
												["Creation Science/Intelligent Design", "Creation Science/Intelligent Design"],
												["Holidays/Songs", "Holidays/Songs"],
												["Proselytizing/Witnessing", "Proselytizing/Witnessing"],
												["Attire/Jewelry", "Attire/Jewelry"],
												["Baccalaureate", "Baccalaureate"],
												["Other Religion", "Other"]]
											],
											["Speech", "fas fa-bullhorn", "Speech", 
												[["Censorship", "Censorship"],
												["Press", "Press"],
												["Art/Music", "Art/Music"],
												["Personal Expression/Attire<", "Personal Expression/Attire"],
												["Pledge of Allegiance", "Pledge of Allegiance"],
												["National Anthem", "National Anthem"],
												["Other Speech", "Other"]]									
											],
											["Protest/Assembly", "fas fa-newspaper", "Protest/Assembly"],
											["Disability", "fab fa-accessible-icon", "Disability"],
											["Health & Safety", "fas fa-medkit", "Health & Safety"], 
											["Police (Interactions)", "fas fa-exclamation-triangle", "Police (Interactions)"],
											["Emergency", "fas fa-ambulance", "Emergency (Call 911)"], 
											["Other", "fas fa-question", "Other"]];
			return (
				<div>
					<NavBar />
					<Hero />
					<Interview what1s={what1s}/>
					<Footer />
				</div>
			);
		}
	}

	class NavBar extends React.Component {
		render() {
			return (
				<div>
					<nav className="topNav" id="top">
						<span className="navItem">
							<img className="navLogo" src="./assets/img/FreedomTreeAppIcon.svg" alt="tree icon"/>
							<img className="navText" src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/>
						</span>
						<ul className="navMenu">
							<li className="navItem navItemLg"><a href="#">About</a></li>
							<li className="navItem navItemLg"><a href="#">Contact</a></li>
							<li className="navItem navItemLg"><a href="#">Donate</a></li>
							<li className="navItem navItemSm"><a href="#"><i className="fas fa-bars fa-2x"></i></a></li>
						</ul>
					</nav>
				</div>
			);
		}
	}

	class Hero extends React.Component {
		render() {
			return(
				<div>
					<section className="hero">
						<img className="logo" src= "./assets/img/FreedomTreeLogoTag.svg" alt="freedom tree: free help defending your civil rights"/>
					</section>
				</div>
			);
		}
	}

	class Interview extends React.Component {
		render(){
			return(
				<div>
					<section className="interview">
						<Question />
						{
							this.props.what1s.map((what1) => <WhatOne key={what1[0]} what1Id={what1[0]} what1Icon={what1[1]} what1Text={what1[2]} what2s={what1[3]} />)
						}

					</section>

				</div>
			);
		}
	}

	class Question extends React.Component {
		render(){
			return (
				<div>
					<h4 id="path"></h4>
					<h1 id="question">What's Happening?</h1>
					<h4 id="instruction">Select the issue that best describes your situtation:</h4>
				</div>
			);
		}
	}

	class WhatOne extends React.Component {
		render() {
			return (
				<div className="what1" id={this.props.what1Id}>
					<div className="col1"><i className={this.props.what1Icon}></i></div>
					<div className="col2">{this.props.what1Text}</div>
					<ul className="what2">
						{
							this.props.what2s && this.props.what2s.map((what2) => <WhatTwo key={what2[0]} what2Id={what2[0]} what2Text={what2[1]} />)
						}
					</ul>
				</div>
			);
		}
	}

	class WhatTwo extends React.Component {
		render () {
			return (
				<li>
					{
						this.props.what2Text
					}
					</li>
			);
		}
	}


	class Footer extends React.Component {
		render() {
			return (
				<div>
					<footer>
					<a href="#top"><img className="navText" src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/></a>
						<ul>
							<li><a href="#"><i className="fab fa-twitter-square fa-2x"></i></a></li>
							<li><a href="#"><i className="fab fa-facebook-square fa-2x"></i></a></li>
							<li><a href="#"><i className="fab fa-snapchat-square fa-2x"></i></a></li>
						</ul>
					</footer>
				</div>
			);
		}
	}

	ReactDOM.render(<FreedomTreeApp />, document.getElementById('app'));

// end React Code

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


// document ready wrapper tells scripts to wait until DOM has loaded
$(function() {

	let currentWhat1;
	let currentWhat2;
	const choices = [];
	
// start React Code

	class FreedomTreeApp extends React.Component {
		render(){
			return (
				<div>
					<NavBar />
					<Hero />
					<Interview />
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
					<h4 id="path"></h4>
					<Question />
					<h4 id="instruction">Select the issue that best describes your situtation:</h4>
					<div className="what1" id="Discrimination">
						<div className="col1"><i className="fas fa-users"></i></div>
						<div className="col2">Discrimination</div>
					</div>
					<div className="what1" id="Bullying">
						<div className="col1"><i className="fas fa-child"></i></div>
						<div className="col2">Bullying</div>
					</div>
					<div className="what1" id="Sexual Harassment">
						<div className="col1"><i className="fas fa-hand-rock"></i></div>
						<div className="col2">Sexual Harassment</div>
					</div>
					<div className="what1" id="LGBTQ">
						<div className="col1"><i className="fas fa-transgender-alt"></i></div>
						<div className="col2">LGBTQ</div>
					</div>
					<div className="what1" id="Religion">
						<div className="col1"><i className="fas fa-church"></i></div>
						<div className="col2">Religion
							<ul className="what2">
								<li id="Prayer">Prayer</li>
								<li id="Invocation/Blessing">Invocation/Blessing</li>
								<li id="Bible/Scripture">Bible/Scripture</li>
								<li id="Other Holy Book/Scripture">Other Holy Book/Scripture</li>
								<li id="Creation Science/Intelligent Design">Creation Science/Intelligent Design</li>
								<li id="Holidays/Songs">Holidays/Songs</li>
								<li id="Proselytizing/Witnessing">Proselytizing/Witnessing</li>
								<li id="Attire/Jewelry">Attire/Jewelry</li>
								<li id="Baccalaureate">Baccalaureate</li>
								<li id="Other Religion">Other</li>
							</ul>
						</div>
					</div>
					<div className="what1" id="Speech">
						<div className="col1"><i className="fas fa-bullhorn"></i></div>
						<div className="col2">Speech
							<ul className="what2">
								<li id="Censorship">Censorship</li>
								<li id="Press">Press</li>
								<li id="Art/Music">Art/Music</li>
								<li id="Personal Expression/Attire<">Personal Expression/Attire</li>
								<li id="Pledge of Allegiance">Pledge of Allegiance</li>
								<li id="National Anthem">National Anthem</li>
								<li id="Other Speech">Other</li>
							</ul>
						</div>
					</div>
					<div className="what1" id="Protest/Assembly">
						<div className="col1"><i className="fas fa-newspaper"></i></div>
						<div className="col2">Protest/Assembly</div>
					</div>
					<div className="what1" id="Disability">
						<div className="col1"><i className="fab fa-accessible-icon"></i></div>
						<div className="col2">Disability</div>
					</div>
					<div className="what1" id="Health & Safety">
						<div className="col1"><i className="fas fa-medkit"></i> </div>
						<div className="col2">Health & Safety</div>
					</div>
					<div className="what1" id="Police (Interactions)">
						<div className="col1"><i className="fas fa-exclamation-triangle"></i></div>
						<div className="col2">Police (Interactions)</div>
					</div>
					<div className="what1" id="Emergency">
						<div className="col1"><i className="fas fa-ambulance"></i></div>
						<div className="col2">Emergency (Call 911)</div>
					</div>
					<div className="what1" id="Other">
						<div className="col1"><i className="fas fa-question"></i></div>
						<div className="col2">Other</div>
					</div>
				</section>

				</div>
			);
		}
	}

	class Question extends React.Component {
		render(){
			return(
				<div>
					<h1 id="question">What's Happening?</h1>
				</div>
			);
		}
	}

	class Footer extends React.Component {
		render(){
			return(
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

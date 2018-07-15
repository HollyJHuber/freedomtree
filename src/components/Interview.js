import React from 'react';
import History from './History';
import Issues from './Issues';

const Interview = (props) => (
	<div>
		<section className="interview">
			{!props.landingPage && <History />}
			<Issues 
				landingPage = {props.landingPage}
			/>
		</section>
	</div>
);

export default Interview;
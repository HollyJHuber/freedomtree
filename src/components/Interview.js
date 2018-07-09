import React from 'react';
import History from './History';
import Issues from './Issues';

const Interview =(props) => (
	<div>
		<section className="interview">
			<History />
			<Issues />
		</section>
	</div>
);

export default Interview;
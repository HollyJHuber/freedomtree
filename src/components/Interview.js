import React from 'react';
import Question from './Question';
import WhatOne from './WhatOne';

const Interview =(props) => (
	<div>
		<section className="interview">
			<Question />
			{
				props.what1s.map((what1) => (
					<WhatOne 
						key={what1[0]} 
						what1Id={what1[0]} 
						what1Icon={what1[1]} 
						what1Text={what1[2]} 
						what2s={what1[3]}
						handleSelectWhatOne = {props.handleSelectWhatOne}
						selected={props.selected}
					/>
				))
			}
		</section>
	</div>
);

export default Interview;
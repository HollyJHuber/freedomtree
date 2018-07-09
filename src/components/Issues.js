import React from 'react';
import Issue from './Issue';

const Issues =(props) => (
  <div>
    <h1 id="question">What's Happening?</h1>
    <h4 id="instruction">Select the issue that best describes your situtation:</h4>
		<Issue />
	</div>
);

export default Issues;
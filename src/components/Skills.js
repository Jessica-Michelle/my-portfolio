import React from 'react';
import { skills } from '../data';

const Skills = () => {
	return (
		<div>
			<div class="ui divider"></div>
			<h1>Skills & Tools</h1>
			<div className="ui hidden divider"></div>
			<h3>{skills}</h3>
		</div>
	);
};

export default Skills;

import React from 'react';
import './About.css';

const About = () => {
	return (
		<div id="about">
			<div className="ui two column grid stackable">
				<div className="column">
					<h1 className="ui header">Hi, I'm Jessica!</h1>
					<h2 className="ui header" className={'description'}>
						I'm a Web Developer from Austin, TX with a background in design. I
						love building applications and problem-solving. In my spare time,
						you'll find me baking sweets, traveling, or running.
					</h2>
					<div className="ui hidden divider"></div>
					<a href="#contact" className="ui violet basic button">
						Work With Me
					</a>
				</div>
				<div className="column">
					<img className="ui large right floated image" src="/Headshot.jpg" />
				</div>
			</div>
		</div>
	);
};

export default About;

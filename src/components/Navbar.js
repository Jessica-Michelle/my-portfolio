import React from 'react';

const Navbar = () => {
	return (
		<div className="ui text menu">
			<a href="#about" className="right item">
				About
			</a>
			<a href="#projects" className=" item">
				Work
			</a>
			<a href="#contact" className="item">
				Contact
			</a>
		</div>
	);
};

export default Navbar;

import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import './components/About.css';

const App = () => {
	return (
		<div className="ui container">
			<div class="ui hidden divider"></div>
			<Navbar />
			<div class="ui hidden divider"></div>

			<About />
			<div class="ui hidden divider"></div>

			<Projects />
			<div class="ui hidden divider"></div>

			<Skills />

			<div class="ui hidden divider"></div>
			<Contact />
			<div class="ui hidden divider"></div>
			<div class="ui hidden divider"></div>
			<div class="ui hidden divider"></div>
		</div>
	);
};

export default App;

import React from 'react';
import { projects } from '../data';
import './About.css';

const Projects = () => {
	const renderCard = ({ projects }) => {
		return projects.map((project) => {
			return (
				<div key={project.title} className="column">
					<div className="ui fluid card">
						<div className="content">
							<div className="header">{project.title}</div>
						</div>
						<div className="image">
							<img alt={project.description} src={project.image}></img>
						</div>
						<div className="content">
							<div className="description">{project.description}</div>
						</div>
						<div class="extra content">
							<a href={project.link} target="_blank" class="ui primary">
								View Live
							</a>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div id="projects">
			<div class="ui divider"></div>
			<h1>Project Highlights</h1>
			<div className="ui hidden divider"></div>
			<div className="ui three column grid stackable">
				{renderCard({ projects })}
			</div>
		</div>
	);
};

export default Projects;

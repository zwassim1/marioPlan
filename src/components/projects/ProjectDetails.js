import React from 'react';

export default function ProjectDetails(props) {
	const id = props.match.params.id;

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Projet title - {id}</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At magni, labore laboriosam nihil sapiente even.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by WW</div>
					<div>3rd september</div>
				</div>
			</div>
		</div>
	);
}

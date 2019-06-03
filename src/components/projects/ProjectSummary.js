import React from 'react';

export default function ProjectSummary({ project: { title, content } }) {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{title}</span>
				<p>Posted by wz</p>
				<p className="grey-text">3rd september</p>
			</div>
		</div>
	);
}

import React from 'react';
import styled from 'styled-components';

import { NoteRo } from '../dto/apiDto';

const StyledNote = styled.div`
	height: 100px;
	width: 100px;
	background-color: red;
	
	p {
		font-size: 4px;
	}
`

export default function note({title, content, publishAt}: NoteRo) {
	return (
		<StyledNote>
			<h2>{title}</h2>
			<p>
				{content}
			</p>
		</StyledNote>
	)
}

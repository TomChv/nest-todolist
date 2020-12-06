import React from 'react';
import styled from 'styled-components';
import AddNotes from './addNotes';

const StyledTopBar = styled.div`
	margin: 0 0 15px;	
	top: 0;
	height: 45px;
	width: 100%;
	
	background-color: #121212;
	opacity: 90%;
	
	display: flex;
	justify-content: center;
	flex-direction: column;
	box-shadow: 0 5px 50px rgba(50,49,49,0.3);
`

const StyledMessage = styled.p`
	padding: 0;
	color: #930c15;
	font-weight: bolder;
	font-size: 30px;
	text-align: center;
`

const StyledBox = styled.div`
	width: 100%;
`

export default function TopBar() {
	return (
		<StyledTopBar>
			<StyledMessage>
				TodoList powered by Nest and typed React
			</StyledMessage>
{/*			<StyledBox>
				<AddNotes/>
			</StyledBox>*/}
		</StyledTopBar>
	)
}

import React from 'react';
import styled from 'styled-components';

interface ErrorDto {
	message: string;
}

const errorImage = 'warning-picture.png'
const errorPath = `${process.env.PUBLIC_URL}/${errorImage}`;

const StyledWarning = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 15%;
`

const ErrorStyle = styled.div`
	margin: 25px;
	text-align: center;
	font-weight: bold;
	font-size: large;
	color: #c0392b;
`

export default function Error({message}: ErrorDto) {
	return (
		<div>
			<StyledWarning alt={'Warning png'} src={errorPath}/>
			<ErrorStyle>
				{message}
			</ErrorStyle>
		</div>
	)
}

import React, { useState } from 'react';
import Modal, { ICustomModalStyle } from '@bdenzer/react-modal';
import styled from 'styled-components';

import { NoteDto } from '../dto/apiDto';
import Requester from '../services/apiSDK';

const StyledButton = styled.button`
	color: white;
	background-color: #2f2d2d;
	
	width: 13%;
	min-width: 100px;
	height: 100%;
	
	padding: 5px;
	font-size: 16px;
`

const StyledModal: ICustomModalStyle = {
	animationTime: 400,
	closeButtonText: {
		color: '#930c15'
	},
	modalHeader: {
		backgroundColor: '#121212'
	},
	modalTitle: {
		color: '#930c15'
	}
}

const StyledTitle = styled.p`
	font-weight: bold;
	padding: 0;
	margin: 3px;
`

const StyledInput = styled.input`
	height: 20px;
	width: 200px;
	
	padding: 5px;
	border-radius: 4px;
	border-color: black;
`

const StyledContent = styled.textarea`
	height: 200px;
	width: 98%;
	
	padding: 5px;
	border-radius: 4px;
	border-color: black;
`

const StyledSubmit = styled.button`
	height: 40px;
	width: 120px;
	float: left;
	
	margin: 4px;
	border-radius: 4px;
	border-color: black;
	
	background-color: #533b3b;
	
	:hover {
		background-color: #2e3d0c;
	}
	
`

const StyledError = styled.div`
	margin: 15px 15px 15px 30%;
	color: #c90c0c;
`

interface NoteError {
	isError: boolean;
	message: string;
}

export default function AddNoteModal() {
	const [openModal, setOpenModal] = useState(false);
	const [notes, setNotes] = useState<NoteDto>({ title: '', content: '' });
	const [error, setError] = useState<NoteError>({ isError: false, message: '' });

	async function submitNote() {
		if (!notes.title.length || !notes.content.length) {
			return setError(() => ({ isError: true, message: 'Empty strings isn\'t allowed' }));
		} else {
			setError(() => ({ isError: false, message: '' }));
			setOpenModal(() => false);
			await Requester.sendNote(notes);
		}


	}

	return (
		<div>
			<Modal
				shouldShowModal={openModal}
				closeModal={() => setOpenModal(() => false)}
				customStyle={StyledModal}
				title={"Add Note"}
			>
				<label>
					<StyledTitle>Title</StyledTitle>
					<StyledInput onChange={
						(e) => setNotes((v) => ({ content: v.content, title: e.target.value }))
					}/>
				</label>
				<label>
					<StyledTitle>Content</StyledTitle>
					<StyledContent onChange={
						(e) => setNotes((v) => ({ content: e.target.value, title: v.title }))
					}/>
				</label>
				<StyledSubmit onClick={submitNote}>Submit</StyledSubmit>
				{error.isError && <StyledError>{error.message}</StyledError>}
			</Modal>
			<StyledButton onClick={() => setOpenModal(() => true)}>Add Note</StyledButton>
		</div>
	)
}

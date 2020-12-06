import React, { useState, useEffect} from 'react';

import Requester from '../services/apiSDK';
import { NoteRo } from '../dto/apiDto';

import Note from './note'
import Error from './error';

export default function List() {
	const [ notes, setNotes ] = useState<NoteRo[] | undefined>([])
	const [ error, setError ] = useState(false);

	useEffect(() => {
		async function getNotes() {
			const notes = (await Requester.getNotes()).data;
			setNotes(() => notes);
			setError(() => true);
		}
		getNotes().catch(() => {
			setNotes(() => undefined);
			setError(() => true);
		});
	}, [])


	if (!notes && error) {
		return (
			<Error message={'Something wrong append : could not fetch data'}/>
		)
	} else if (!notes && !error) {
		return (
			<div>
				Loading
			</div>
		)
	} else if (notes && notes.length !== 0) {
		return (
			<div>
				{notes.map((note, index) => {
					return <Note {...note} key={index}/>
				})}
			</div>
		)
	} else {
		return (
			<div>
				0 notes exist
			</div>
		)
	}
}

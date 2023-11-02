"use client"

import ItemList from "@/components/item-list/item-list"
import data from 'data/data'
import { useState, useEffect } from "react";

export default function Home() {

	const inputStyle = 'px-3 py-2 my-2';

	const [ list, setList ] = useState( data );

	const [ fname, setFname ] = useState( '' );
	const [ lname, setLname ] = useState( '' );
	const [ bdate, setBdate ] = useState( '' );
	const [ grade, setGrade ] = useState( 0 );



	async function handle_Submit() {
		let newStudent = {
			"first_name"	: fname,
			"last_name"		: lname,
			"date_of_birth"	: bdate,
			"current_grade"	: grade,
		};

		let updatedList = [ ...list, newStudent ];

		// console.log( updatedList );
		await setList( updatedList );
	}

	useEffect( () => setList( data ), [] );

	return (
		<main className={'flex w-screen flex-col items-center justify-center py-4'}>
			{'ASSIGNMENT 02'}

			<ItemList data={ list } />

			<div className={'student-form flex flex-col mt-8'}>

				<input className={ inputStyle }
					type={'text'}
					onInput={ e => setFname( e.target.value )}
					placeholder={'First Name'} />

				<input className={ inputStyle }
					type={'text'}
					onInput={ e => setLname( e.target.value )}
					placeholder={'Last Name'} />

				<input className={ inputStyle }
					type={'date'}
					onInput={ e => setBdate( e.target.value )}
					placeholder={'Date of Birth'} />

				<input className={ inputStyle }
					type={'number'}
					onInput={ e => setGrade( e.target.value )}
					placeholder={'Current Grade'} />


				<button className={'bg-slate-700 text-slate-200 px-5 py-2 rounded-sm mt-6'}
					onMouseDown={ handle_Submit }>
					{'Add Student'}
				</button>
			</div>

		</main>
	)
}
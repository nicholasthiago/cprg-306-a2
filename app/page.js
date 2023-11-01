"use client"

import ItemList from "@/components/item-list/item-list"
import data from 'data/data'
import { useState, useEffect } from "react";

export default function Home() {

	const [ list, setList ] = useState( data );

	useEffect( () => {
		console.log( data );
		setList( data );
	}, [] );

	return (
		<main className={'flex w-screen flex-col items-center justify-center py-4'}>
			{'ASSIGNMENT 02'}

			<ItemList data={ list } />

			<div>

				<button className={'bg-slate-700 text-slate-200 px-5 py-2 rounded-sm mt-6'}>
					{'Add Student'}
				</button>

			</div>

		</main>
	)
}
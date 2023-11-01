// import { cookies } from 'next/headers'
// 
// export async function setData( data ) {
// 	await cookies.set('appData', data );
// }
// 
// export async function getData() {
// 	await cookies.get('appData');
// }

export function stringCleaner( header ) {
	let response = header.replace(/_/g,' ');

	return response;
}
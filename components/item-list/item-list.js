import { stringCleaner } from "@/utils/util";
import './item-list.css'


export default function ItemList ({ data = [] }) {

	function build_Header() {
		return Object.keys( data[0] ).map(( el,i ) =>
					<th className={'px-6 py-3'} key={i}> { stringCleaner( el )} </th>
				)
	}

	function build_Body() {
		return (
			( data ).map(( student,i ) => {
				console.log( student );
				return (
					<tr key={i}>
						{
							Object.values( student ).map(( el,i ) => {
								return <td className={'px-6 py-3'} key={i}> { el } </td>
							})
						}
					
					</tr>
			)})
		)
	}


	return (
		<div className={'item-list-component flex gap-4 font-normal'}>

			<table className={'table-auto'}>
				<tr className={'capitalize'}>
					{ build_Header() }
				</tr>

				{ build_Body() }

			</table>

		</div>
	);
};
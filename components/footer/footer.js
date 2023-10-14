export default function Footer () {
	return (
		<footer className={'flex flex-row py-4 px-12 justify-center bg-slate-400 text-slate-100'}>

			<h1 className={'flex-1'}> {'Second Group School'} </h1>

			<div className={'flex flex-col flex-1'}>
				<span> {'Address:'} </span>
				<span> {'1234 56th Avenue'} </span>
				<span> {'Northwest'} </span>
				<span> {'T1A 0B2'} </span>
			</div>

			<div className={'flex flex-col flex-1'}>
				<span> {'Phone:'} </span>
				<span> {'(987) 654-3210'} </span>
			</div>

		</footer>
	);
};
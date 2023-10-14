export default function Navbar () {
	return (
		<nav className={'flex flex-row bg-slate-700 text-slate-100 px-4 py-3 gap-4 items-center'}>

			<h1 className={'font-semibold text-xl'}> {'Group 01'} </h1>

			<div className={'flex gap-4 font-normal'}>
				<span> {'Home'} </span>
				<span> {'Add Student'} </span>
			</div>

		</nav>
	);
};
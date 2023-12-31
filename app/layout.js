import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

import { setData, getData } from 'utils/util'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
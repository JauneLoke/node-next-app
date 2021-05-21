import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<Link href="/contact">
				<a>
					<Button variant="contained" color="primary">
						Contact
					</Button>
				</a>
			</Link>
		</>
	)
}
import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function Contact() {
	return (
		<>
			<Link href="/">
				<a>
					<Button variant="contained" color="primary">
						Home
					</Button>
				</a>
			</Link>
		</>
	)
}

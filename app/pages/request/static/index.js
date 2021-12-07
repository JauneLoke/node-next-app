import { Typography, Box } from '@material-ui/core';


/**
 * getStaticProps génère directement le contenu dans le HTML avant de l'envoyer au client
 * Les donnés sont rafraichit au rechargement de la page
 * https://nextjs.org/docs/basic-features/pages#static-generation-with-data
 */
export default function Static({ posts = [] }) {

	return (
		<>
			<Box p={2}>
				{
					posts.map(post =>
						<Typography variant="body1" color="initial">{post.id} - {post.title}</Typography>
					)
				}
			</Box>
		</>
	)
}

export async function getStaticProps() {
	const posts = await fetch('http://localhost:3080/api/post')
		.then(r => r.json());

	return {
		props: {
			posts
		}
	}
}
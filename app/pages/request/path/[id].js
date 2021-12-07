import { Box } from '@material-ui/core';

/**
 * getStaticProps génère directement le contenu dans le HTML avant de l'envoyer au client
 * Les donnés sont rafraichit au rechargement de la page
 * https://nextjs.org/docs/basic-features/pages#static-generation-with-data
 */
export default function Path({ post }) {

	return (
		<>
			<Box p={2}>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</Box>
		</>
	)
}

export async function getStaticProps({ params }) {
	const post = await fetch(`http://localhost:3080/api/post/${params.id}`)
		.then(r => r.json());

	return {
		props: {
			post
		}
	}
}

export async function getStaticPaths({ params }) {
	const posts = await fetch('http://localhost:3080/api/post')
		.then(r => r.json());

	return {
		paths: posts.map(post => ({
			params: { id: post.id.toString() }
		})),
		fallback: false,
	}
}
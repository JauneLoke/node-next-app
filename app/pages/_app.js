import { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ReactNotification from 'react-notifications-component';
import { RecoilRoot } from "recoil";
import '@fontsource/roboto';
import GlobalStyles from 'theme/GlobalStyles';
import { light, dark } from 'theme/theme';
import MainLayout from 'layouts/Layout';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState(createMuiTheme(light));

	useEffect(() => {
		setTheme(createMuiTheme(dark));
	}, []);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
			</Head>

			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<MainLayout>
						<GlobalStyles />
						<Component {...pageProps} />
						<ReactNotification />
					</MainLayout>
				</ThemeProvider>
			</RecoilRoot>
		</>
	);
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
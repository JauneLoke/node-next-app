import { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ReactNotification from 'react-notifications-component';
import { RecoilRoot } from "recoil";
import '@fontsource/roboto';
import GlobalStyles from '../theme/GlobalStyles';
import { light, dark } from '../theme/theme';
import MainLayout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState(createMuiTheme(light));

	useEffect(() => {
		setTheme(createMuiTheme(dark));
	}, []);

	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<MainLayout>
					<GlobalStyles />
					<Component {...pageProps} />
					<ReactNotification />
				</MainLayout>
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default MyApp

import { Redirect, Route } from "react-router-dom";
import {
	IonApp,
	IonRouterOutlet,
	setupIonicReact,
	useIonViewDidEnter,
	useIonViewWillEnter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import DetailsPage from "./pages/DetailsPage";
import SettingsPage from "./pages/SettingsPage";
import { getSettingsState } from "./store/settingsStore";
import { routPathType } from "./context/types";
import { loadSettings } from "./store/useIonStorage";
import { dark, themeStyleTag } from "./theme/theme";

setupIonicReact();

const App: React.FC = () => {
	loadSettings();
	useIonViewWillEnter(() => {
		console.log("this is it");
	});
	let set = getSettingsState();
	// console.log("settings: ", set);

	// themeStyleTag.textContent = set.darkMode ? dark : "";
	// if (set?.darkMode) document.querySelector("body")?.classList.add("dark");
	document.querySelector("body")?.classList.toggle("dark", set.darkMode);

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<Route path="/home" component={Home} />
					<Route path="/details/:date" component={DetailsPage} />
					<Route path="/settings" component={SettingsPage} />
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;

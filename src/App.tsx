import { Redirect, Route } from "react-router-dom";
import {
	IonApp,
	IonFooter,
	IonHeader,
	IonRouterOutlet,
	IonTitle,
	IonToolbar,
	setupIonicReact,
	useIonLoading,
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
import ExampleTab from "./pages/ExampleTab";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./components/SearchPage";
import IncubationList from "./pages/IncubationList";
import { useEffect } from "react";
import { loadDatabase } from "./store/useIonStorage";
import SettingsPage from "./pages/SettingsPage";

setupIonicReact();
const App: React.FC = () => {
	const [present, dismiss] = useIonLoading();
	// setTimeout(() => {
	loadDatabase();
	// }, 3000);
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

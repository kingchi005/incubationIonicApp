import {
	IonActionSheet,
	IonButton,
	IonButtons,
	IonCard,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonSkeletonText,
	IonText,
	IonThumbnail,
	IonTitle,
	IonToolbar,
	useIonAlert,
	useIonLoading,
	useIonToast,
} from "@ionic/react";
import {
	arrowBackCircle,
	ellipsisHorizontal,
	ellipsisVertical,
	menu,
	menuOutline,
	refresh,
	refreshCircle,
	refreshCircleSharp,
} from "ionicons/icons";
import InfiniteList from "../components/InfiniteList";
import { getIncubationState } from "../store/IncubationStore";
import { getIncubationByDate, parseDate } from "../context/incubation";
import format from "date-fns/format";
import ListCard from "../components/ListCard";
import Loading from "../components/Loading";
import Popover from "../components/Popover";
import MenuBar from "../components/MenuBar";
import theme from "../theme/theme";
import SkeletonListCard from "../components/SkeletonListCard";
import { useEffect, useState } from "react";
import { loadDatabase, fetchIncubationAndStore } from "../store/useIonStorage";
import { getSettingsState } from "../store/settingsStore";

const Home: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [presentToast] = useIonToast();
	const [present, dismiss] = useIonLoading();
	// setTimeout(() => {	setLoading(true);

	const initialiseData = () => {
		loadDatabase()
			.then((res) => {
				if (!res) {
					console.log("fetching data...");
					fetchIncubationAndStore()
						.then(() => {
							loadDatabase().then(() => setLoading(false));
						})
						.catch((err) => {
							setLoading(false);
							if (err.message == "Failed to fetch") {
								presentToast({
									message:
										"Please Check your internet connection and try again",
									duration: 5000,
									position: "bottom",
									color: "light",
								});
								return console.log(
									"Please Check your internet connection and try again"
								);
							}
							if (err.message == "not found") {
								presentToast({
									message: "Please Check your supscription and try again",
									duration: 5000,
									position: "bottom",
									color: "light",
								});
								return console.log(
									"Please Check your supscription and try again"
								);
							}
							presentToast({
								message: err.message,
								duration: 5000,
								position: "bottom",
								color: "light",
							});
							console.log("Fetch error ;(", { err });
						});
				} else setLoading(false);
			})
			.catch((err) => {
				console.log("Database error: :(", err);
			});
	};
	useEffect(() => {
		initialiseData();
	}, []);

	// }, 3000);

	const dataFmt = new Date().toDateString();
	// const todayDevotional = getIncubationByDate("Wed Feb 02 2022");
	const todayDevotional = getIncubationState()[0];
	// console.log(todayDevotional);
	const [presentAlert] = useIonAlert();

	return (
		<>
			<MenuBar />
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonTitle>Incubation</IonTitle>
						<IonButtons slot="start">
							<IonMenuButton />
							{/* <IonButton>
							<IonIcon slot="icon-only" ios={menu} md={menu}></IonIcon>
						</IonButton> */}
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen>
					<IonItem>living word ministery international</IonItem>
					{todayDevotional ? (
						<ListCard fromHome item={todayDevotional} />
					) : loading ? (
						<SkeletonListCard />
					) : (
						<IonItem style={{ color: "#888" }}>
							<IonButton
								color="light"
								style={{ color: "#888" }}
								onClick={() => {
									setLoading(true);
									console.log("retrying...");
									initialiseData();
								}}
							>
								Retry
								<IonIcon size="lg" icon={refresh} />
							</IonButton>
						</IonItem>
					)}
					<IonItem>
						<IonLabel>Basic Item</IonLabel>

						{/* <IonButton routerLink="/details">go details</IonButton> */}
					</IonItem>
					<IonItem>
						<IonButton
							onClick={() => {
								presentAlert({
									header: "Offline :(",
									// subHeader: "Important message",
									message:
										"you are currently Offline please connect to internet to download the incubation",
									buttons: [
										{
											text: "try again",
											handler() {
												console.log("alert handler");
											},
										},
									],
									// mode: "md",
								});
							}}
						>
							alert now
						</IonButton>
					</IonItem>
					<IonItem>
						<IonLabel>
							Multi-line text that should ellipsis when it is too long to fit on
							one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</IonLabel>
					</IonItem>

					{[1, 2, 3, 4, 5].map((i, k) => (
						<IonItem key={k}>
							<IonLabel class="ion-text-wrap">
								Multi-line text that should wrap when it is too long to fit on
								one line. Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.
							</IonLabel>
						</IonItem>
					))}
					<IonItem>
						<IonLabel>
							<h1>H1 Heading</h1>
							<p>Paragraph</p>
						</IonLabel>
					</IonItem>

					<IonItem>
						<IonLabel>
							<h2>H2 Heading</h2>
							<p>Paragraph</p>
						</IonLabel>
					</IonItem>

					<IonItem>
						<IonLabel>
							<h3>H3 Heading</h3>
							<p>Paragraph</p>
						</IonLabel>
					</IonItem>
				</IonContent>
			</IonPage>
		</>
	);
};

export default Home;

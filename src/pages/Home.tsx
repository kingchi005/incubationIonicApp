import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonItem,
	IonLabel,
	IonMenuButton,
	IonPage,
	IonRefresher,
	IonRefresherContent,
	IonTitle,
	IonToolbar,
	RefresherEventDetail,
	useIonAlert,
	useIonLoading,
	useIonToast,
	useIonViewDidEnter,
	useIonViewWillEnter,
} from "@ionic/react";
import { refresh, settings } from "ionicons/icons";
import { getIncubationState } from "../store/IncubationStore";
import ListCard from "../components/ListCard";
import MenuBar from "../components/MenuBar";
import SkeletonListCard from "../components/SkeletonListCard";
import React, { useEffect, useState } from "react";
import { loadDatabase, fetchIncubationAndStore } from "../store/useIonStorage";
import { getSettingsState } from "../store/settingsStore";
import PlashScreen from "../components/PlashScreen";
import { Network } from "@capacitor/network";
const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isInit, setIsInit] = useState(true);
	const [presentToast] = useIonToast();
	const [present, dismiss] = useIonLoading();
	setTimeout(() => {
		setIsInit(false);
	}, 1500);

	// setTimeout(() => {	setLoading(true);

	const initialiseData = (e?: CustomEvent<RefresherEventDetail>) => {
		loadDatabase()
			.then((res) => {
				if (!res) {
					console.log("fetching data...");
					fetchIncubationAndStore()
						.then(() => {
							loadDatabase().then(() => setIsLoading(false));
						})
						.catch((err) => {
							setIsLoading(false);
							if (err.message == "Failed to fetch") {
								presentToast({
									message:
										err.message +
										". Please Check your internet connection and try again",
									duration: 5000,
									position: "bottom",
									color: "dark",
								});
								e?.detail.complete();
								return console.log(
									"Please Check your internet connection and try again"
								);
							}
							if (err.message == "not found") {
								presentToast({
									message: "Please Check your supscription and try again",
									duration: 5000,
									position: "bottom",
									color: "dark",
								});
								e?.detail.complete();
								return console.log(
									"Please Check your supscription and try again"
								);
							}
							presentToast({
								message: err.message,
								duration: 5000,
								position: "bottom",
								color: "dark",
							});
							e?.detail.complete();
							console.log("Fetch error ;(", { err });
						});
				} else {
					e?.detail.complete();
					setIsLoading(false);
				}
			})
			.catch((err) => {
				e?.detail.complete();
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
	const settings = getSettingsState();
	return isInit ? (
		<PlashScreen />
	) : (
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
					<IonRefresher
						slot="fixed"
						pullMin={100}
						onIonRefresh={(e) => {
							if (!isLoading) setIsLoading(true);
							initialiseData(e);
						}}
						style={{ zIndex: 100 }}
					>
						<IonRefresherContent
							pullingIcon={refresh}
							pullingText={"Pull to refresh"}
							refreshingSpinner="bubbles"
						></IonRefresherContent>
					</IonRefresher>
					<IonItem style={{ marginTop: "10px" }}>
						living word ministery international
					</IonItem>
					{todayDevotional ? (
						<ListCard fromHome item={todayDevotional} />
					) : isLoading ? (
						<SkeletonListCard />
					) : (
						<>
							{/* <IonItem style={{ color: "#888" }}>
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
							</IonItem> */}
						</>
					)}
					<IonItem>
						<IonLabel>Basic Item</IonLabel>

						{/* <IonButton routerLink="/details">go details</IonButton> */}
					</IonItem>
					<IonItem>
						<IonButton
							onClick={() => {
								Network.getStatus().then((s) => {
									// s.connected = true;
									presentAlert({
										header: s.connected ? "Online :)" : "Offline :(",
										// subHeader: "Important message",
										message: s.connected
											? "you are currently connected"
											: "you are currently Offline please connect to internet to download the incubation",
										buttons: [
											!s.connected
												? {
														text: "try again",
														handler() {
															console.log("alert handler");
														},
												  }
												: "okay",
										],
										// mode: "md",
									});
								});
							}}
						>
							alert now
						</IonButton>
					</IonItem>
					<IonItem>
						<IonLabel
							style={
								{
									fontSize: `${settings.fontSize}em`,
									wordWrap: "break-word",
								} as React.CSSProperties
							}
						>
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

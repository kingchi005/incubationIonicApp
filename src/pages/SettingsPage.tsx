import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCheckbox,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonPage,
	IonProgressBar,
	IonRange,
	IonText,
	IonTitle,
	IonToggle,
	IonToolbar,
} from "@ionic/react";
import { search } from "ionicons/icons";
import React, { useMemo, useState } from "react";
import Popover from "../components/Popover";
import SettingsStore, {
	getSettingsState,
	updateSettingsKeyValue,
} from "../store/settingsStore";
import { incubationStore } from "../store/useIonStorage";

const SettingsPage: React.FC = () => {
	const isDarkMode = getSettingsState().darkMode;
	const fontSize = +getSettingsState().fontSize;
	const set = getSettingsState();
	useMemo(() => {
		incubationStore.set("user-settings", set);
	}, [set]);

	// const fontSize
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="">
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>{" "}
			<IonContent className="ion-padding">
				<h3 style={{ fontSize: "18px" }}>Appearance</h3>
				{/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 2].map((i, k) => ( */}
				<IonList style={{ paddingInline: "10px" }} /* key={} */>
					<IonLabel
						style={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "10px",
						}}
					>
						<IonLabel style={{}}>
							<div style={{}}>Dark mode</div>
							<p style={{ paddingBlock: "5px" }}>
								{!isDarkMode ? "turn on dark mode" : "turn off dark mode"}
							</p>
						</IonLabel>
						<IonToggle
							slot="end"
							checked={isDarkMode}
							labelPlacement="start"
							aria-label="turn on darm mode"
							onIonChange={() => {
								document.querySelector("body")?.classList.toggle("dark");
								updateSettingsKeyValue("darkMode", !isDarkMode);
							}}
						/>
					</IonLabel>
				</IonList>
				<IonList style={{ paddingInline: "10px" }} /* key={} */>
					<IonLabel style={{}}>
						<IonLabel style={{}}>
							<div style={{ marginBottom: "10px" }}>Font size</div>
						</IonLabel>
						<p style={{ fontSize: `${fontSize}em` }}>
							change the size of your font
						</p>
						<IonRange
							aria-label="change the size of your font"
							style={{ maxWidth: "98%", marginInline: "auto" }}
							step={0.1}
							max={1.6}
							min={0.9}
							value={fontSize}
							snaps
							onIonChange={(e) => {
								updateSettingsKeyValue("fontSize", +e.target.value);
							}}
						/>
					</IonLabel>
				</IonList>
				{/* ))} */}
			</IonContent>
		</IonPage>
	);
};

export default SettingsPage;

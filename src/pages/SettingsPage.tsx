import {
	IonBackButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonLabel,
	IonList,
	IonPage,
	IonRange,
	IonTitle,
	IonToggle,
	IonToolbar,
} from "@ionic/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getSettingsState, setSettingsState } from "../store/settingsStore";
import { incubationStore } from "../store/useIonStorage";

const SettingsPage: React.FC = () => {
	const [localSettings, setLocalSettings] = useState({ ...getSettingsState() });
	// const localSettings.darkMode = getSettingsState().darkMode;
	// const fontSize = +getSettingsState().fontSize;
	// const localSettings = { ...getSettingsState() };

	useEffect(() => {
		setSettingsState(localSettings);

		incubationStore.set("user-settings", localSettings);
	}, [localSettings]);

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
								{!localSettings.darkMode
									? "turn on dark mode"
									: "turn off dark mode"}
							</p>
						</IonLabel>
						<IonToggle
							slot="end"
							checked={localSettings.darkMode}
							labelPlacement="start"
							aria-label="turn on darm mode"
							onIonChange={() => {
								// updateSettingsKeyValue("darkMode", !localSettings.darkMode);
								// document.querySelector("body")?.classList.toggle("dark");
								setLocalSettings((prev) => {
									return {
										...prev,
										darkMode: !prev.darkMode,
									};
								});
							}}
						/>
					</IonLabel>
				</IonList>
				<IonList style={{ paddingInline: "10px" }} /* key={} */>
					<IonLabel style={{}}>
						<IonLabel style={{}}>
							<div style={{ marginBottom: "10px" }}>Font size</div>
						</IonLabel>
						<p style={{ fontSize: `${localSettings.fontSize}em` }}>
							change the size of your font
						</p>
						<IonRange
							aria-label="change the size of your font"
							style={{ maxWidth: "98%", marginInline: "auto" }}
							step={0.1}
							max={1.6}
							min={0.9}
							value={localSettings.fontSize}
							snaps
							onIonChange={(e) => {
								// updateSettingsKeyValue("fontSize", +e.target.value);
								setLocalSettings((prev) => ({
									...prev,
									fontSize: +e.target.value,
								}));
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

import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { search } from "ionicons/icons";
import React from "react";
import Popover from "../components/Popover";

const SettingsPage: React.FC = () => {
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
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6, 5, 4, 3, 2, 2].map((i, k) => (
					<IonItem key={k}>
						<IonLabel>
							<div>Customise your setting here ...</div>
							<p>Do some setting logic here</p>
							<p>Manipulate you ui here </p>
						</IonLabel>
					</IonItem>
				))}{" "}
			</IonContent>
		</IonPage>
	);
};

export default SettingsPage;

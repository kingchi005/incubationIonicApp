import {
	IonContent,
	IonHeader,
	IonPage,
	IonSpinner,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React from "react";

const PlashScreen: React.FC = () => {
	return (
		<IonPage>
			<IonContent className="" fullscreen style={{}}>
				<div
					style={{
						backgroundColor: "var(--ion-color-custome-plash-bg)",
						padding: 0,
						margin: "auto",
						display: "flex",
						width: "100%",
						height: "100%",
						justifyContent: "center",
						alignContent: "center",
						flexWrap: "wrap",
					}}
				>
					<IonSpinner style={{ fontSize: "20px" } as React.CSSProperties} />
				</div>
			</IonContent>
		</IonPage>
	);
};

export default PlashScreen;

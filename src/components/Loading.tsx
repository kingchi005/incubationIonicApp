import React from "react";
import { IonButton, IonLoading, useIonLoading } from "@ionic/react";
export default function Loading({ message }: { message: string }) {
	const [present, dismiss] = useIonLoading();
	return (
		<>
			<IonButton
				id="open-loading"
				onClick={() => {
					present({
						message,
						duration: 3000,
					});
				}}
			>
				Show Loading
			</IonButton>
			{/* <IonLoading
				trigger="open-loading"
				message={message}
				duration={3000}
				spinner="circles"
			/> */}
		</>
	);
}

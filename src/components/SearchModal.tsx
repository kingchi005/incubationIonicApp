import React, { useState, useRef, useEffect } from "react";
import {
	IonButtons,
	IonButton,
	IonModal,
	IonHeader,
	IonContent,
	IonToolbar,
	IonTitle,
	IonPage,
	IonItem,
	IonLabel,
	IonCheckbox,
} from "@ionic/react";
import SearchPage from "./SearchPage";

export default function SearchModal() {
	const modal = useRef<HTMLIonModalElement>(null);
	const page = useRef(undefined);

	const [canDismiss, setCanDismiss] = useState(true);
	const [presentingElement, setPresentingElement] = useState<
		HTMLElement | undefined
	>(undefined);

	useEffect(() => {
		setPresentingElement(page.current);
	}, []);

	function dismissModal() {
		modal.current?.dismiss();
	}

	return (
		<IonModal
			ref={modal}
			trigger="open-modal"
			canDismiss={canDismiss}
			presentingElement={presentingElement}
		>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Search</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={() => dismissModal()}>Close</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<SearchPage dismissModal={dismissModal} />
			</IonContent>
		</IonModal>
	);
}

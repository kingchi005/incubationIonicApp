import {
	IonPage,
	IonContent,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonBackButton,
	IonButtons,
	IonCard,
	IonGrid,
	IonDatetime,
	IonDatetimeButton,
	IonItem,
	IonModal,
	IonSearchbar,
	useIonViewWillEnter,
	IonButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import {
	IonInfiniteScroll,
	IonInfiniteScrollContent,
	IonList,
} from "@ionic/react";
import { IBank, IIncubation } from "../context/types";
import IncubationStore, {
	getIncubationState,
	setIncubationState,
} from "../store/IncubationStore";
import theme from "../theme/theme";
import InfiniteList from "../components/InfiniteList";
import { format } from "date-fns";
import Incubation from "../context/incubation";

// console.log(Incubation);

const IncubationList: React.FC = () => {
	// useEffect(() => {
	// 	setIncubationState(Incubation);
	// }, []);

	const incubation = getIncubationState();
	const [dataSearchResult, setDataSearchResult] = useState<IIncubation[]>([]);
	const searchIncubationByTopic = (ev: Event) => {
		let query = "";
		const target = ev.target as HTMLIonSearchbarElement;
		if (target) query = target.value!.toLowerCase();

		setDataSearchResult(
			incubation.filter((d) => d.topic.toLowerCase().indexOf(query) > -1)
		);
	};
	const searchIncubationByDate = (date: string) => {
		const formatedDate = format(
			new Date(date),
			"EEEE do MMMM, yyyy"
		).toUpperCase();

		const result = incubation.filter((inc) => inc.date == formatedDate) || {};
		setDataSearchResult(result);
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
					<IonTitle>Incubation Davoutional</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonItem>
					<IonSearchbar
						onIonInput={searchIncubationByTopic}
						debounce={50}
					></IonSearchbar>
					{/* <IonButton onClick={() => setIncubationState(Incubation)}>
						setincubation
					</IonButton> */}
					<IonDatetimeButton slot="end" datetime="date"></IonDatetimeButton>
					<IonModal keepContentsMounted={true}>
						<IonDatetime
							id="date"
							showDefaultButtons={true}
							doneText="select"
							presentation="date"
							onIonChange={(e) =>
								searchIncubationByDate(e.detail.value as string)
							}
						></IonDatetime>
					</IonModal>
				</IonItem>
				<InfiniteList
					data={dataSearchResult.length ? dataSearchResult : incubation}
				/>
			</IonContent>
		</IonPage>
	);
};

export default IncubationList;

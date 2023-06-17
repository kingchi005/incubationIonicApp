import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonDatetime,
	IonDatetimeButton,
	IonHeader,
	IonItem,
	IonModal,
	IonPage,
	IonSearchbar,
	IonText,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import InfiniteList from "./InfiniteList";
import { format } from "date-fns";
import { useLayoutEffect, useRef, useState } from "react";
import IncubationStore, { getIncubationState } from "../store/IncubationStore";
import { IDismisModal, IIncubation } from "../context/types";

const SearchPage = ({ dismissModal }: IDismisModal) => {
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
		const formatedDate = new Date(date).toDateString();

		const result = incubation.filter((inc) => inc.date == formatedDate) || {};
		setDataSearchResult(result);
	};

	/* 	const searchFocus: React.MutableRefObject<any> = useRef(undefined);
	const searchInput: HTMLInputElement =
		searchFocus?.current?.querySelector("div input");
	useLayoutEffect(() => {
		searchInput?.focus();

		searchInput?.addEventListener("focus", () => {
			console.log("focussed");
		});
	}, []);
 */
	return (
		<>
			<IonItem>
				<IonSearchbar
					// ref={searchFocus}
					onIonInput={searchIncubationByTopic}
					debounce={50}
					style={{}}
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
				dismissModal={dismissModal}
				data={dataSearchResult.length ? dataSearchResult : incubation}
			/>
		</>
	);
};

export default SearchPage;

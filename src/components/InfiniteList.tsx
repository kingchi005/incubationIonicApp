import {
	IonContent,
	IonList,
	IonCard,
	IonGrid,
	IonInfiniteScroll,
	IonInfiniteScrollContent,
	IonLabel,
	IonItem,
	IonText,
} from "@ionic/react";
import { useState, useEffect, ReactPropTypes, useMemo } from "react";
import { IIncubation, IBank, IDismisModal } from "../context/types";
import IncubationStore from "../store/IncubationStore";
import theme from "../theme/theme";
import format from "date-fns/format";
import { parseDate } from "../context/incubation";
import ListCard from "./ListCard";

export interface dataProps extends IDismisModal {
	data: IIncubation[];
}

const InfiniteList: React.FC<dataProps> = ({
	data,
	dismissModal,
}): JSX.Element => (
	<IonContent>
		<IonList>
			{data.map((item, key) => (
				<ListCard dismissModal={dismissModal} item={item} key={key} />
			))}
		</IonList>
		<IonInfiniteScroll
			onIonInfinite={(ev) => {
				// generateItems();
				setTimeout(() => ev.target.complete(), 50);
			}}
		>
			<IonInfiniteScrollContent></IonInfiniteScrollContent>
		</IonInfiniteScroll>
	</IonContent>
);

export default InfiniteList;

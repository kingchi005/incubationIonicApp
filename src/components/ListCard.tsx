import { IonCard, IonGrid } from "@ionic/react";
import { format } from "date-fns";
import { getIncubationByDate, parseDate } from "../context/incubation";
import theme from "../theme/theme";
import { IDismisModal, IIncubation } from "../context/types";
import { useRef } from "react";
import {
	getIncubationState,
	setCurrentIncubationData,
} from "../store/IncubationStore";

interface dataProp extends IDismisModal {
	item: IIncubation;
	fromHome?: boolean;
}

const ListCard: React.FC<dataProp> = ({
	item,
	dismissModal,
	fromHome,
}): JSX.Element => {
	const currentData = getIncubationByDate(item.date);
	const selectData = () => {
		setCurrentIncubationData(currentData!);
		dismissModal!();
	};

	return (
		<>
			{!fromHome ? (
				<IonCard
					className="ion-text-"
					onClick={() => {
						selectData();
					}}
				>
					<IonGrid className="ion-text-center">
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginBlock: "0px",
								paddingBlock: "0px",
							}}
						>
							<h4
								style={{
									color: `${theme.fontColor}`,
									fontWeight: "bold",
									textAlign: "left",
									paddingLeft: "8px",
									fontSize: "19px",
								}}
							>
								{item.topic}
							</h4>
							<p style={{ textAlign: "end", paddingRight: "8px" }}>
								{"" + format(parseDate("" + item.date), "eee MMM do")}
							</p>
						</div>
						<p
							style={{
								fontSize: "13px",
								textAlign: "start",
								padding: "0px 10px",
								color: `${theme.fontColor}`,
							}}
							className=""
						>
							Meditation: {item.meditation.text} -
							<span style={{ color: `var(--ion-color-step-600)` }}>
								{item.meditation.reference}
							</span>
						</p>
					</IonGrid>
				</IonCard>
			) : (
				<IonCard className="ion-text-" routerLink={`/details/${item.date}`}>
					<IonGrid className="ion-text-center">
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginBlock: "0px",
								paddingBlock: "0px",
							}}
						>
							<h4
								style={{
									color: `${theme.fontColor}`,
									fontWeight: "bold",
									textAlign: "left",
									paddingLeft: "8px",
									fontSize: "19px",
								}}
							>
								{item.topic}
							</h4>
							<p style={{ textAlign: "end", paddingRight: "8px" }}>
								{"" + format(parseDate("" + item.date), "eee MMM do")}
							</p>
						</div>
						<p
							style={{
								fontSize: "13px",
								textAlign: "start",
								padding: "0px 10px",
								color: `${theme.fontColor}`,
							}}
							className=""
						>
							Meditation: {item.meditation.text} -
							<span style={{ color: `var(--ion-color-step-600)` }}>
								{item.meditation.reference}
							</span>
						</p>
					</IonGrid>
				</IonCard>
			)}
		</>
	);
};

export default ListCard;

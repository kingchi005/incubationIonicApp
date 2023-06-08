import { IonCard, IonGrid, IonSkeletonText } from "@ionic/react";
import React from "react";
import theme from "../theme/theme";

export default function SkeletonListCard() {
	return (
		<IonCard className="ion-text-">
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
						<IonSkeletonText animated={true} style={{ width: "150px" }} />
					</h4>
					<p style={{ textAlign: "end", paddingRight: "8px" }}>
						<IonSkeletonText animated={true} style={{ width: "70px" }} />
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
					<IonSkeletonText animated={true} style={{ width: "" }} />
					<IonSkeletonText animated={true} style={{ width: "90%" }} />
					<IonSkeletonText animated={true} style={{ width: "80%" }} />
					{/* <IonSkeletonText animated={true} style={{ width: "75%" }} /> */}
					<span
						style={{
							display: "flex",
							gap: "8px",
							// justifyContent: "space-between",
						}}
					>
						<IonSkeletonText
							slot="end"
							animated={true}
							style={{ width: "50%" }}
						/>
						-
						<IonSkeletonText
							slot="end"
							animated={true}
							style={{ width: "70px" }}
						/>
					</span>
				</p>
			</IonGrid>
		</IonCard>
	);
}

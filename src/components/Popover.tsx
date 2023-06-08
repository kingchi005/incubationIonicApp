import React from "react";
import {
	IonButton,
	IonContent,
	IonIcon,
	IonItem,
	IonList,
	IonPopover,
} from "@ionic/react";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
export default function Popover() {
	return (
		<>
			<IonButton id="popover-button">
				<IonIcon
					slot="icon-only"
					ios={ellipsisHorizontal}
					md={ellipsisVertical}
				></IonIcon>
			</IonButton>
			<IonPopover trigger="popover-button" dismissOnSelect={true}>
				<IonContent>
					<IonList>
						<IonItem button={true} detail={false}>
							Read aloud
						</IonItem>
						<IonItem button={true} detail={false} routerLink="/settings">
							Settings
						</IonItem>
						<IonItem button={true} id="nested-trigger">
							More options...
						</IonItem>

						<IonPopover
							trigger="nested-trigger"
							dismissOnSelect={true}
							side="end"
						>
							<IonContent>
								<IonList>
									<IonItem button={true} detail={false}>
										Nested option
									</IonItem>
								</IonList>
							</IonContent>
						</IonPopover>
					</IonList>
				</IonContent>
			</IonPopover>
		</>
	);
}

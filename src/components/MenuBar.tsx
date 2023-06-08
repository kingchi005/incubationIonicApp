import React from "react";
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonMenu,
	IonMenuButton,
	IonMenuToggle,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { logoIonic, settings } from "ionicons/icons";
export default function MenuBar() {
	const menuItem: { icon: string; title: string; routerLink: string }[] = [
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: settings, title: "Settings", routerLink: "/settings" },
	];
	return (
		<>
			<IonMenu contentId="main-content">
				{/* <IonHeader>
					<IonToolbar>
						<IonTitle></IonTitle>
					</IonToolbar>
				</IonHeader> */}
				<IonContent className="ion-padding">
					{menuItem.map((item, k) => (
						<IonMenuToggle key={k}>
							<IonItem
								lines="none"
								detail={false}
								button
								routerLink={`${item.routerLink}`}
							>
								<IonIcon slot="start" icon={item.icon} style={{}} />
								<IonLabel>{item.title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					))}
				</IonContent>
			</IonMenu>
		</>
	);
}

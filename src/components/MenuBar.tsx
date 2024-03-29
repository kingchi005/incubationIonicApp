import React from "react";
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuButton,
	IonMenuToggle,
	IonPage,
	IonSplitPane,
	IonText,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import {
	logoFacebook,
	logoInstagram,
	logoIonic,
	logoWebComponent,
	logoWhatsapp,
	logoYoutube,
	settings,
} from "ionicons/icons";
export default function MenuBar() {
	const menuItem: { icon: string; title: string; routerLink: string }[] = [
		{ icon: logoIonic, title: "Ionic Logo", routerLink: "/" },
		{ icon: logoFacebook, title: "Living word", routerLink: "/" },
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
				<IonContent style={{}} className="ion-padding">
					{menuItem.map((item, k) => (
						<IonMenuToggle key={k}>
							<IonItem
								lines="none"
								detail={false}
								button
								routerLink={`${item.routerLink}`}
							>
								<IonIcon slot="start" icon={item.icon} style={{}} />
								<IonLabel color="success">{item.title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					))}
					<IonItem style={{}}>
						<IonLabel>
							<p>Links</p>
							{/* <IonList></IonList> */}
							<div style={{ display: "flex", justifyContent: "space-evenly" }}>
								{[
									{ logo: logoFacebook, color: "blue" },
									{ logo: logoWhatsapp, color: "green" },
									{ logo: logoInstagram, color: "orange" },
									{ logo: logoWebComponent, color: "grey" },
									{ logo: logoYoutube, color: "red" },
								].map((it, k) => (
									<IonIcon
										key={k}
										style={{ color: `${it.color}` }}
										icon={it.logo}
									></IonIcon>
								))}
							</div>
						</IonLabel>
					</IonItem>
				</IonContent>
			</IonMenu>
		</>
	);
}

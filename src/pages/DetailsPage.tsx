import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonPage,
	IonRow,
	IonText,
	IonTitle,
	IonToolbar,
	RouteManagerContext,
	useIonViewDidEnter,
	useIonViewDidLeave,
} from "@ionic/react";
import React from "react";
import { ellipsisHorizontal, ellipsisVertical, search } from "ionicons/icons";
import { Redirect, RouteComponentProps, Router } from "react-router";
import { getIncubationByDate, parseDate } from "../context/incubation";
import theme from "../theme/theme";
import {
	getCurrentIncubationData,
	setCurrentIncubationData,
} from "../store/IncubationStore";
import format from "date-fns/format";
import SearchModal from "../components/SearchModal";

interface DetailsPageProps
	extends RouteComponentProps<{
		date: string;
	}> {}

const DetailsPage: React.FC<DetailsPageProps> = ({ match }) => {
	const { date } = match.params;
	let currentData = getCurrentIncubationData();
	currentData = getCurrentIncubationData();
	let _date = "";
	if (currentData == undefined) {
		let data = getIncubationByDate(date);
		if (!data) {
		}
		setCurrentIncubationData(data);
		currentData = getCurrentIncubationData();
		_date = format(parseDate(currentData!.date), "eeee do");
	} else {
		_date = format(parseDate(currentData.date), "eeee do");
	}

	useIonViewDidLeave(() => {
		setCurrentIncubationData(undefined);
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="">
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
					<IonTitle>{_date}</IonTitle>
					<IonButtons slot="end">
						<IonButton id="open-modal" expand="block">
							<IonIcon slot="icon-only" icon={search}></IonIcon>
						</IonButton>

						<IonButton>
							<IonIcon
								slot="icon-only"
								ios={ellipsisHorizontal}
								md={ellipsisVertical}
							></IonIcon>
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{!currentData ? (
					<></>
				) : (
					<>
						{/* <IonHeader collapse='condense'>
          <IonToolbar color=''>
            <IonButtons slot='start'>
              <IonBackButton defaultHref="/home"></IonBackButton>
            </IonButtons>
              <IonTitle>Sunday 23rd</IonTitle>
            <IonButtons slot='end'>
              
              <IonButton routerLink='/search'>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
              
              <IonButton>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader> */}
						<IonCard color="" className="ion-margin-vertical">
							<IonCardContent>
								<IonText color="warning" className="ion-padding-bottom">
									Topic:
								</IonText>
								<IonCardTitle style={{ color: `${theme.fontColor}` }}>
									{currentData.topic}
								</IonCardTitle>
							</IonCardContent>
						</IonCard>
						<IonGrid>
							<IonItem>
								<IonGrid>
									<IonRow>
										<IonText color="warning" className="ion-padding-">
											Mediatation:
										</IonText>
									</IonRow>
									<IonRow>
										<IonText
											style={{ color: `${theme.fontColor}` }}
											className="ion-text-wrap ion-padding-top ion-text-center"
										>
											{currentData.meditation.text}
										</IonText>
									</IonRow>
									<IonRow>
										<IonText color="medium" className="ion-padding-top">
											{currentData.meditation.reference}
										</IonText>
									</IonRow>
								</IonGrid>
							</IonItem>
						</IonGrid>
						<IonCard className="ion-padding-bo">
							<IonCardContent>
								<IonText color="warning" className="ion-padding-vertical">
									Today's text:{" "}
								</IonText>
								<IonText slot="end">{currentData.text.reference}</IonText>
							</IonCardContent>
						</IonCard>
						<IonItem>
							<IonText
								style={{ color: `${theme.fontColor}` }}
								className="ion-padding-vertical"
							>
								{currentData.body}
							</IonText>
						</IonItem>

						<IonCard color="">
							<IonCardContent>
								<IonText color="warning" className="">
									Further Study:
								</IonText>
							</IonCardContent>
							{currentData.further_study.map((fs, key) => (
								<IonItem className="" key={key}>
									<IonGrid>
										<IonRow>
											<IonText
												style={{ color: `${theme.fontColor}` }}
												className=" ion-text-wrap ion-padding-top ion-text-center"
											>
												{fs.text}
											</IonText>
										</IonRow>
										<IonRow>
											<IonLabel color="medium" className="ion-padding-top">
												{" "}
												{fs.reference}
											</IonLabel>
										</IonRow>
									</IonGrid>
								</IonItem>
							))}
						</IonCard>
						<IonCard color="">
							<IonCardContent>
								<IonText color="warning" className="ion-padding-bottom">
									Prayer(s):
								</IonText>
							</IonCardContent>
							{currentData.prayer.map((pr, key) => (
								<IonItem className="" key={key}>
									<IonGrid>
										<IonRow>
											<IonText
												style={{ color: `${theme.fontColor}` }}
												className="ion-text-wrap ion-padding- "
											>
												{key + 1 + ". " + pr}
											</IonText>
										</IonRow>
									</IonGrid>
								</IonItem>
							))}
						</IonCard>
						<IonCard color="">
							<IonCardContent>
								<IonLabel color="warning" className="">
									Confession:
								</IonLabel>
							</IonCardContent>
							<IonItem className="">
								<IonGrid>
									<IonRow>
										<IonText
											style={{ color: `${theme.fontColor}` }}
											className="ion-text-wrap ion-padding- "
										>
											{currentData.confession}
										</IonText>
									</IonRow>
								</IonGrid>
							</IonItem>
						</IonCard>

						<IonItem></IonItem>
					</>
				)}
				<SearchModal />
			</IonContent>
		</IonPage>
	);
};

export default DetailsPage;

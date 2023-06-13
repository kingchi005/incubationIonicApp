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
	IonList,
	IonListHeader,
	IonPage,
	IonRow,
	IonSkeletonText,
	IonText,
	IonThumbnail,
	IonTitle,
	IonToolbar,
	RouteManagerContext,
	useIonRouter,
	useIonViewDidEnter,
	useIonViewDidLeave,
	useIonViewWillLeave,
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
import Popover from "../components/Popover";

interface DetailsPageProps
	extends RouteComponentProps<{
		date: string;
	}> {}

const DetailsPage: React.FC<DetailsPageProps> = ({ match }) => {
	const { date } = match.params;
	const router = useIonRouter();

	const currentData = getIncubationByDate(date);
	// const _date = format(parseDate(currentData.date), "eeee do");

	const goToPage = () => {
		router.push("/details/THURSDAY 2ND DECEMBER, 2021", "root", "replace");
	};
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="">
					<IonButtons slot="start">
						<IonBackButton defaultHref="/home" />
					</IonButtons>
					<IonTitle>
						{currentData ? format(new Date(currentData.date), "eeee do") : ""}
					</IonTitle>
					<IonButtons slot="end">
						<IonButton id="open-modal" expand="block">
							<IonIcon slot="icon-only" icon={search}></IonIcon>
						</IonButton>
						<Popover />

						{/* <IonButton onClick={goToPage}>
							<IonIcon
								slot="icon-only"
								ios={ellipsisHorizontal}
								md={ellipsisVertical}
							></IonIcon>
						</IonButton> */}
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				{!currentData ? (
					<>
						<IonList>
							<IonListHeader>
								<IonSkeletonText
									animated={true}
									style={{ width: "80px" }}
								></IonSkeletonText>
							</IonListHeader>
							<IonItem>
								<IonThumbnail slot="start">
									<IonSkeletonText animated={true}></IonSkeletonText>
								</IonThumbnail>
								<IonLabel>
									<h3>
										<IonSkeletonText
											animated={true}
											style={{ width: "80%" }}
										></IonSkeletonText>
									</h3>
									<p>
										<IonSkeletonText
											animated={true}
											style={{ width: "60%" }}
										></IonSkeletonText>
									</p>
									<p>
										<IonSkeletonText
											animated={true}
											style={{ width: "30%" }}
										></IonSkeletonText>
									</p>
								</IonLabel>
							</IonItem>
						</IonList>
					</>
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

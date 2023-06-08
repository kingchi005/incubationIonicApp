import {
	IonActionSheet,
	IonButton,
	IonButtons,
	IonCard,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
import InfiniteList from "../components/InfiniteList";
import { getIncubationState } from "../store/IncubationStore";
import { getIncubationByDate } from "../context/incubation";
import format from "date-fns/format";
import ListCard from "../components/ListCard";
import Loading from "../components/Loading";

const Home: React.FC = () => {
	const dataFmt = format(new Date(), "EEEE do MMMM, yyyy").toUpperCase();
	const todayDevotional = getIncubationByDate("WEDNESDAY 1ST DECEMBER, 2021");

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Incubation</IonTitle>
					<IonButtons slot="end">
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
				<IonItem>living word ministery international</IonItem>
				{todayDevotional ? (
					<ListCard fromHome item={todayDevotional} />
				) : (
					<IonItem>Todays Devetional is not available on your device</IonItem>
				)}
				<IonItem>
					<IonLabel>Basic Item</IonLabel>
					<IonButton routerLink="/home">go home</IonButton>
					{/* <IonButton routerLink="/details">go details</IonButton> */}
				</IonItem>
				<IonItem>
					<Loading message="Initialising data ..." />
				</IonItem>
				<IonItem>
					<IonLabel>
						Multi-line text that should ellipsis when it is too long to fit on
						one line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel class="ion-text-wrap">
						Multi-line text that should wrap when it is too long to fit on one
						line. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						<h1>H1 Heading</h1>
						<p>Paragraph</p>
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						<h2>H2 Heading</h2>
						<p>Paragraph</p>
					</IonLabel>
				</IonItem>

				<IonItem>
					<IonLabel>
						<h3>H3 Heading</h3>
						<p>Paragraph</p>
					</IonLabel>
				</IonItem>
			</IonContent>
		</IonPage>
	);
};

export default Home;

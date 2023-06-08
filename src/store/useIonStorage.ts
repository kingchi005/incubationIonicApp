import { Drivers, Storage } from "@ionic/storage";
import { IIncubation, MonthList } from "../context/types";
import { setIncubationState } from "./IncubationStore";
import Incubation from "../context/incubationMockData.json";
import cordovaSQLiteDriver from "localforage-cordovasqlitedriver";

const INCUBATION_KEY = "incubation-db";
const CURRENT_MONTH_KEY = getIncubationKey();
// console.log(CURRENT_MONTH_KEY);

function getIncubationKey() {
	const thisMonth = new Date().getMonth();
	const thisYear = new Date().getFullYear();
	return `${MonthList[thisMonth]}_${thisYear}`;
}

const incubationStore = new Storage({
	name: "INCUBATION_APP_DB",
	driverOrder: [
		cordovaSQLiteDriver._driver,
		Drivers.SecureStorage,
		Drivers.IndexedDB,
		Drivers.LocalStorage,
	],
});

(async () => {
	await incubationStore.defineDriver(cordovaSQLiteDriver);

	await incubationStore.create();
})();

export async function loadDatabase() {
	console.log("initialising data...");
	let storedIncubationData = <IIncubation[] | null>(
		await incubationStore.get(INCUBATION_KEY)
	);
	if (storedIncubationData == null || storedIncubationData.length == 0) {
		console.log("Fetching Incubation data...");
		await fetchIncubationAndStore();
	} else {
		setIncubationState(storedIncubationData!);
		return true;
	}
}

async function fetchIncubationAndStore() {
	const incubation = Incubation;
	// or fetch incubation data from online
	await incubationStore.set(INCUBATION_KEY, incubation);
	loadDatabase();
}

/*
 * get the data from data base
 * if not there
 *
 */

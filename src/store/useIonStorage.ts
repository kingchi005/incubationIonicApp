import { Drivers, Storage } from "@ionic/storage";
import { IIncubation, MonthList } from "../context/types";
import { getIncubationState, setIncubationState } from "./IncubationStore";
import Incubation from "../../public/incubationMockData.json";
import CordovaSQLiteDriver from "localforage-cordovasqlitedriver";
import { Network } from "@capacitor/network";
import defaultSettings, { settingsType } from "../theme/theme";
import { setSettingsState } from "./settingsStore";

const INCUBATION_KEY = "incubation-db";
const INCUBATION_MONTH_KEY = `${MonthList[1]}_2022`;
const CURRENT_MONTH_KEY = getIncubationKey();
// console.log(CURRENT_MONTH_KEY);

function getIncubationKey() {
	const thisMonth = new Date().getMonth();
	const thisYear = new Date().getFullYear();
	return `${MonthList[thisMonth]}_${thisYear}`;
}

export const incubationStore = new Storage({
	name: "INCUBATION_APP_DB",
	driverOrder: [
		CordovaSQLiteDriver._driver,
		Drivers.SecureStorage,
		Drivers.IndexedDB,
		Drivers.LocalStorage,
	],
});

(async () => {
	await incubationStore.defineDriver(CordovaSQLiteDriver);
	await incubationStore.create();
})();

export async function loadSettings() {
	// load settings-
	let storedSettings = <settingsType>await incubationStore.get("user-settings");
	// console.log(storedSettings);

	if (storedSettings && Object.keys(storedSettings).length !== 0)
		setSettingsState(storedSettings);
	else {
		incubationStore.set("user-settings", defaultSettings);
		setSettingsState(defaultSettings);
	}
}

export async function loadDatabase() {
	console.log("initialising data...");

	// load incubation-
	let storedIncubationData = <IIncubation[] | null>(
		await incubationStore.get(INCUBATION_KEY)
	);
	if (storedIncubationData == null || storedIncubationData.length == 0) {
		return false;
	}
	setIncubationState(storedIncubationData!);

	console.log("initialised data!");
	// --------------------------------------------
	// incubationStore.clear();
	return true;
}

export async function fetchIncubationAndStore() {
	// const incubation = Incubation;
	// check if online
	// Network.addListener("networkStatusChange", (status) => {
	// 	console.log("Network status changed", status);
	// });
	const networkStatus = await Network.getStatus();

	// console.log("Network status:", networkStatus);
	if (!networkStatus.connected) {
		// throw Error("You are currently offline :(");
	}

	try {
		const response = await fetch(
<<<<<<< HEAD
			// "http://localhost:3000/" + INCUBATION_MONTH_KEY,
=======
			// "http://192.168.43.19:3000/" + INCUBATION_MONTH_KEY,
>>>>>>> ca36cb9fff0f88213835b67dbff025ef9a25f2d8
			"/incubationMockData.json",
			{
				method: "get",
				signal: AbortSignal.timeout(50000),
			}
		);
		const data = await response.json();
		// or fetch incubation data from online
		// console.log("response", res);
		// console.log(res);
		if (Object.keys(data).length == 0) {
			throw Error("not found");
			return;
		}
		// console.log(data);
		await incubationStore.set(INCUBATION_KEY, data);
	} catch (error) {
		throw error;
	}
}

/*
 * get the data from data base
 * if not there
 *
 */

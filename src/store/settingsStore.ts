import { Store } from "pullstate";
import { incubationStore } from "./useIonStorage";
import defaultSettings, { settingsKeyType, settingsType } from "../theme/theme";
/* (() => {
	incubationStore.get("user-settings").then((data) => {
		if (Object.keys(data).length !== 0) {
			defaultSettings = data;
		}
	});
})(); */
const SettingsStore = new Store({} as settingsType);

export const getSettingsState = () => {
	return SettingsStore.useState((s) => s);
};

const settingsValues = Object.values(defaultSettings);

export const setSettingsState = (settings: settingsType) =>
	SettingsStore.update((s) => (s = settings));

export const updateSettingsKeyValue = (
	key: settingsKeyType,
	value: boolean | number | string
) => {
	SettingsStore.update((s) => {
		if (key == "darkMode") s.darkMode = value as boolean;
		if (key == "fontSize") s.fontSize = value as number;
		if (key == "fontColor") s.fontColor = value as string;
	});
};

// export const setDarkMode = (value: boolean) => {
// 	SettingsStore.update((s) => (s.darkMode = value));
// };
// export const setFontSize = (value: number) =>
// 	SettingsStore.update((s) => (s.fontSize = value));

export default SettingsStore;

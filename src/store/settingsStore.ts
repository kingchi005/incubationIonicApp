import { Store, useStoreState } from "pullstate";
import { incubationStore } from "./useIonStorage";
import defaultSettings, {
	settingsKeyType,
	settingsType,
	settingsValueType,
} from "../theme/theme";
/* (() => {
	incubationStore.get("user-settings").then((data) => {
		if (Object.keys(data).length !== 0) {
			defaultSettings = data;
		}
	});
})(); */
const SettingsStore = new Store<settingsType>({} as settingsType);

export const getSettingsState = () => {
	const settings = SettingsStore.useState((s) => s);

	return settings.ok ? settings : defaultSettings;
};

const settingsValues = Object.values(defaultSettings);

export const setSettingsState = (settings: settingsType) =>
	SettingsStore.update((s) => (s = settings));

export const updateSettingsKeyValue = (
	key: settingsKeyType,
	value: settingsValueType
) => {
	SettingsStore.update((s) => {
		if (key == "darkMode") s.darkMode = <boolean>value;
		if (key == "fontSize") s.fontSize = <number>value;
		if (key == "fontColor") s.fontColor = <string>value;
	});
};

// export const setDarkMode = (value: boolean) => {
// 	SettingsStore.update((s) => (s.darkMode = value));
// };
// export const setFontSize = (value: number) =>
// 	SettingsStore.update((s) => (s.fontSize = value));

export default SettingsStore;

const defaultSettings = {
	fontColor: "var(--ion-color-step-750)",
	darkMode: false,
	fontSize: 1.1,
};

export type settingsType = typeof defaultSettings;
export type settingsKeyType = keyof typeof defaultSettings;

export type settingsValueType =
	(typeof defaultSettings)[keyof typeof defaultSettings];

export default defaultSettings;

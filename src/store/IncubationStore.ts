import { Store } from "pullstate";
import data from "../../public/incubationMockData.json";
import { IIncubation } from "../context/types";

// console.log(Incubation);
const IncubationStore = new Store({
	Incubation: [] as IIncubation[],
	currentIncubationData: undefined as IIncubation | undefined,
	currentIncubationDate: "",
});

export const getIncubationState = () =>
	IncubationStore.useState((s) => s.Incubation);

export const setIncubationState = (newState: IIncubation[]) =>
	IncubationStore.update((s) => {
		s.Incubation = newState;
	});

export const getCurrentIncubationData = () =>
	IncubationStore.useState((s) => s.currentIncubationData);

export const setCurrentIncubationData = (newState: IIncubation | undefined) =>
	IncubationStore.update((s) => {
		s.currentIncubationData = newState;
	});

export default IncubationStore;

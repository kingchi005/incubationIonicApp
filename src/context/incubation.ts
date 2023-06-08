import { getIncubationState } from "../store/IncubationStore";
import { IBank, IIncubation } from "./types";
import Incubation from "./incubationMockData.json";

export default Incubation;

enum MonthList {
	JANUARY = 1,
	FEBRUARY,
	MARCH,
	APRIL,
	MAY,
	JUNE,
	JULY,
	AUGUST,
	SEPTEMBER,
	OCTOBER,
	NOVEMBER,
	DECEMBER,
}
// FILE  incubation/incubationDataTypes

// FILE  conrollers/incubationController
export const parseDate: (date: string) => Date = (date: string) => {
	let dateArr = date.replace(",", "").split(" ");

	let day = parseInt(dateArr[1]);
	let month: any = dateArr[2];
	let year = parseInt(dateArr[3]);
	month = MonthList[month];

	return new Date(`${month}-${day}-${year}`);
};

export function getIncubationByDate(date: string) {
	const incubation = getIncubationState();
	// console.log("incubation_:  ", incubation);
	return incubation.find((i) => i.date == date);
}

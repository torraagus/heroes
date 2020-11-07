export interface AppearanceI {
	gender: string;
	race: string;
	height: string[];
	weight: string[];
	"eye-color": string;
	"hair-color": string;
}

export const properties = [
	{ name: "Gender", prop: "gender" },
	{ name: "Race", prop: "race" },
	{ name: "Height", prop: "height" },
	{ name: "Weight", prop: "weight" },
	{ name: "Eye color", prop: "eye-color" },
	{ name: "Hair color", prop: "hair-color" },
];

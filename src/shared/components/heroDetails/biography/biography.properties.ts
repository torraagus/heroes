export interface BiographyI {
	"full-name": string;
	"alter-egos": string;
	aliases: string[];
	"place-of-birth": string;
	"first-appearance": string;
	publisher: string;
	alignment: string;
}

export const properties = [
	{ name: "Full name", prop: "full-name" },
	{ name: "Alter egos", prop: "alter-egos" },
	{ name: "Aliases", prop: "aliases" },
	{ name: "Place of birth", prop: "place-of-birth" },
	{ name: "First appearance", prop: "first-appearance" },
	{ name: "Publisher", prop: "publisher" },
	{ name: "Alignment", prop: "alignment" },
];

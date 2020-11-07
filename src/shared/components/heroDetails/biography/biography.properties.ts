export interface BiographyI {
	"full-name": string;
	"alter-egos": string;
	aliases: string[];
	"place-of-birth": string;
	"first-appareance": string;
	publisher: string;
	alignment: string;
}

export const properties = [
	{ name: "Full name", prop: "full-name" },
	{ name: "Alter egos", prop: "alter-egos" },
	{ name: "Aliases", prop: "aliases" },
	{ name: "Place of birth", prop: "place-of-birth" },
	{ name: "First appareance", prop: "first-appareance" },
	{ name: "Publisher", prop: "publisher" },
	{ name: "Alignment", prop: "alignment" },
];

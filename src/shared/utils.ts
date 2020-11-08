export function isEmpty(obj: Object | Array<any>) {
	if (Array.isArray(obj)) {
		if (obj.length > 0) return false;
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) return false;
		}
	}
	return true;
}

export function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

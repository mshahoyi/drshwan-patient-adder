export default function formatter(patientData) {
	const indicesToDelete = [];
	const serialized = patientData.map((attr, index) => {
		const key = Object.keys(attr)[0];
		if (attr[key] == "") indicesToDelete.push(index);
		if (key == "Drugs") {
			return `${key}: ${attr[key].join(". ")}`;
		}
		return `${key}: ${attr[key]}`;
	});
	const emptyItemsDeleted = serialized.filter((item, index) => !indicesToDelete.includes(index));
	return emptyItemsDeleted.join(", ") + ",";
}

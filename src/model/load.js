export default function load() {
	const drugs = localStorage.getItem("dpa-drugs");
	return JSON.parse(drugs);
}

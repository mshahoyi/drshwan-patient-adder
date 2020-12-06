export default function save(drugs) {
	localStorage.setItem("dpa-drugs", JSON.stringify(drugs));
}

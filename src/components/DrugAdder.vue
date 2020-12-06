<template>
	<v-container>
		<label for="newdrug"></label>
		<input
			name="newdrug"
			id="newdrug"
			placeholder="New Drug with dose e.g. Atorvastatin 40mg"
			type="text"
			v-model="newDrug"
		/>
		<button @click="add">ADD</button>
	</v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
	data() {
		return {
			newDrug: "",
		};
	},
	methods: {
		add() {
			this.addNewDrug(this.newDrug);
			this.newDrug = "";
		},
		...mapMutations(["addNewDrug"]),
	},
};
</script>

<style scoped>
input {
	border: 1px lightgray solid;
	border-radius: 5px;
	padding: 10px;
	margin: 10px;
	width: 50%;
}

button {
	background-color: pink;
	color: white;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	width: 100px;
}
</style>

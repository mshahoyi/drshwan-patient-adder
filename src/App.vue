<template>
	<v-app>
		<v-main>
			<dpa-form></dpa-form>
			<dpa-drug-adder></dpa-drug-adder>
		</v-main>
	</v-app>
</template>

<script>
import dpaForm from "./components/Form.vue";
import DrugAdder from "./components/DrugAdder.vue";

export default {
	name: "App",

	components: {
		dpaForm,
		dpaDrugAdder: DrugAdder,
	},

	created() {
		this.$store.commit("load");
	},

	data: () => ({
		//
	}),
};
</script>

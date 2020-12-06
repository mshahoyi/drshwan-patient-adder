<template>
	<v-container>
		<v-card class="overflow-hidden">
			<v-toolbar flat>
				<v-icon>mdi-account</v-icon>
				<v-toolbar-title class="font-weight-light">
					Patient Data
				</v-toolbar-title>
				<v-spacer></v-spacer>
			</v-toolbar>
			<v-card-text>
				<v-text-field label="CC" v-model="patientData[0].CC" dense></v-text-field>
				<v-text-field label="PMH" v-model="patientData[1].PMH" dense></v-text-field>
				<v-text-field label="PSH" v-model="patientData[2].PSH" dense></v-text-field>
				<v-text-field label="FH" v-model="patientData[3].FH" dense></v-text-field>
				<v-autocomplete
					:items="sortedDrugs"
					color="white"
					label="Drugs"
					auto-select-first
					chips
					clearable
					deletable-chips
					multiple
					v-model="patientData[4].Drugs"
					dense
				></v-autocomplete>
				<v-text-field label="Social" v-model="patientData[5].Social" dense></v-text-field>
				<v-text-field
					label="Location"
					v-model="patientData[6].Location"
					dense
				></v-text-field>
				<v-text-field label="Work" v-model="patientData[7].Work" dense></v-text-field>
				<v-text-field label="Legs" v-model="patientData[8].Legs" dense></v-text-field>
				<v-text-field label="Chest" v-model="patientData[9].Chest" dense></v-text-field>
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn x-large color="primary" @click="copy">
					COPY
				</v-btn>
				<v-btn x-large color="secondary" @click="reset">
					NEW PATIENT
				</v-btn>
			</v-card-actions>
			<v-snackbar v-model="copied" :timeout="2000" absolute bottom left>
				Patient data is copied
			</v-snackbar>
		</v-card>
	</v-container>
</template>

<script>
import formatter from "../model/formatter";
import sorter from "../model/sorter";
import { mapState } from "vuex";

const initial = () => [
	{
		CC: "",
	},
	{
		PMH: "",
	},
	{
		PSH: "",
	},
	{
		FH: "",
	},
	{
		Drugs: [],
	},
	{
		Social: "",
	},
	{
		Location: "",
	},
	{
		Work: "",
	},
	{
		Legs: "",
	},
	{
		Chest: "",
	},
];

export default {
	data() {
		return {
			copied: false,
			patientData: initial(),
		};
	},

	computed: {
		...mapState(["drugs"]),
		sortedDrugs() {
			return sorter(this.drugs);
		},
	},

	methods: {
		customFilter(item, queryText) {
			const filtered = this.drugs.filter((drug) => drug.match(new RegExp(queryText, "gi")));
			console.log(filtered);
			// return filtered.includes(item);
		},

		reset() {
			this.patientData = initial();
		},

		copy() {
			this.copied = !this.copied;
			const formattedText = formatter(this.patientData);

			var input = document.body.appendChild(document.createElement("input"));
			input.value = formattedText;
			input.focus();
			input.select();
			document.execCommand("copy");
			input.parentNode.removeChild(input);
		},
	},
};
</script>

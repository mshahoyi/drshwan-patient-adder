import Vue from "vue";
import Vuex from "vuex";
import load from "../model/load";
import save from "../model/save";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		drugs: ["Aspirin 100mg", "Concor 2.5mg", "Concor 5mg", "Aspirin 75mg", "Amlodipine 5mg"],
	},
	mutations: {
		addNewDrug(state, payload) {
			const drugs = [...state.drugs];
			drugs.push(payload);
			state.drugs = drugs;
			save(drugs);
		},

		load(state) {
			const drugs = load() || [];
			state.drugs = drugs;
		},

		save(state) {
			save(state.drugs);
		},
	},
	actions: {},
	modules: {},
});

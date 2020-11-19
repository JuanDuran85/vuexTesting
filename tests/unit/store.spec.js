import Vue from 'vue';
import Vuex from 'vuex';
import store from '../../src/store/store';

describe("Pruebas de Vuex", ()=>{
    beforeAll(() => {
        Vue.use(Vuex);
        store = new Vuex.Store(store);  
    });
});

describe("Pruebas en los actions", ()=>{
    it("Probando AgregandoTarea",()=>{
        store.dispatch('AgregandoTarea',"Agregando mi quinta tarea");
        store.dispatch('AgregandoTarea',"Agregando mi 6 tarea");
        store.dispatch('AgregandoTarea',"Agregando mi 7 tarea");
        expect(store.state.tareasInicio.length).toBe(7);
        expect(store.state.tareasInicio[4].actividad).toEqual("Agregando mi quinta tarea");
    });
});

describe("Prueba a los getters", () => {
    it("Probando totalActividades",()=>{
        expect(store.getters.totalActividades).toBe(7);
        expect(store.getters.actividadTerminada).toBe(2);
        expect(store.getters.actividadPendiente).toBe(5);
    });
});
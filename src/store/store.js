import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tareasInicio: [
      {id: 0, actividad: 'Tarea N° 1', completo: true},
      {id: 1, actividad: 'Tarea N° 2', completo: false},
      {id: 2, actividad: 'Tarea N° 3', completo: false},
      {id: 3, actividad: 'Tarea N° 4', completo: true},
    ]
  },
  getters: {
    enviandoTareas(state){
      return state.tareasInicio;
    }
  },
  mutations: {
    AgregaTarea(state,tareaReci){
      let idNuevo = Math.floor(Math.random() * 10);
      console.log(idNuevo);

      while(idNuevo >= 0){
        let buscar = state.tareasInicio.find(res => res.id == idNuevo);
        if (buscar == undefined) {
          break;
        }else if(buscar.id == idNuevo) {
          idNuevo++;
          console.log(idNuevo);
        }
      }

      let objTarea = {
        id: idNuevo,
        actividad: tareaReci,
        completo: false
      }
      state.tareasInicio.push(objTarea);
    },
    eliminandoTareaReci(state,id){
      let borrando = state.tareasInicio.findIndex(res => res.id == id);
      console.log(borrando);
      state.tareasInicio.splice(borrando,1);
    },
    actualizarEstadoTarea(state,index){
      state.tareasInicio[index].completo = !state.tareasInicio[index].completo;
    }
  },
  actions: {
    AgregandoTarea({commit},tareaReci){
      commit('AgregaTarea',tareaReci);
    },
    eliminarTarea({commit},id){
      commit('eliminandoTareaReci',id);
    },
    actualizarTarea({commit},index){
      commit('actualizarEstadoTarea',index);
    }
  },
})

<template>
    <section class="container">
        <div class="list-group">
            <a href="#" :class="{'list-group-item-success': item.completo, 'list-group-item-danger' : !item.completo}"  class="list-group-item list-group-item-action" v-for="(item, index) in enviandoTareas" :key="index">{{item.actividad}}
                <button class="float-right btn btn-light" @click="actualizarTarea(index)">{{ item.completo ? 'Abrir' : 'Cerrar' }}<span v-if="item.completo" class="badge"><font-awesome-icon icon="check" /></span><span v-else class="badge"><font-awesome-icon icon="times" /></span></button>
                <button class="mx-3 float-right btn btn-light" @click="eliminarTarea(item.id)">Eliminar<span class="badge"><font-awesome-icon icon="trash-alt" /></span></button>
                <button class="float-right btn btn-light" data-toggle="modal" :data-target="'#tarea'+item.id">Actualizar<span class="badge"><font-awesome-icon icon="pen" /></span></button>
            </a>
        </div>
        <div>
            <!-- Modal -->
            <div class="modal fade" :id="'tarea'+item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="item in enviandoTareas" :key="item.id">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Actualizando id {{item.id}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="agregarTarea">Modicifa la actividad:</label>
                            <input type="text" class="form-control" :placeholder="item.actividad" v-model="actividad">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" @click="guardarNueva(item.id)" data-dismiss="modal">Guardar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container mt-5">
            <h3>Actividades Pendientes: <span class="badge badge-danger">{{actividadPendiente}}</span></h3>
            <h3>Actividades Realizadas: <span class="badge badge-success">{{actividadTerminada}}</span></h3>
            <h3>Total de Actividades: <span class="badge badge-info">{{totalActividades}}</span></h3>
        </section>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'TodoList',
    computed: {
        ...mapGetters(['enviandoTareas', 'actividadPendiente', 'actividadTerminada', 'totalActividades'])
    },
    data() {
        return {
            tareaNueva: '',
            actividad: '',
        }
    },
    methods: {
        ...mapActions(['eliminarTarea','actualizarTarea']),
        guardarNueva(id){
            let datos = {
                id: id,
                nuevaActividad: this.actividad
            };
            this.$store.dispatch("actualizarActividad",datos);
            setTimeout(() => {
                this.actividad = "";
            }, 1000);
        }
    },
    
}
</script>

<style>

</style>
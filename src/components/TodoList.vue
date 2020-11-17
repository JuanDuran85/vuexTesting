<template>
    <section class="container">
        <div class="list-group">
            <a href="#" :class="{'list-group-item-success': item.completo, 'list-group-item-danger' : !item.completo}"  class="list-group-item list-group-item-action" v-for="(item, index) in recibirTareas" :key="index">{{item.actividad}}
                <button class="float-right btn btn-light" @click="finalTarea(index)">{{ item.completo ? 'Abrir' : 'Cerrar' }}<span v-if="item.completo" class="badge"><font-awesome-icon icon="check" /></span><span v-else class="badge"><font-awesome-icon icon="times" /></span></button>
                <button class="mx-3 float-right btn btn-light" @click="eliminando(item.id)">Eliminar<span class="badge"><font-awesome-icon icon="trash-alt" /></span></button>
                <button class="float-right btn btn-light" data-toggle="modal" :data-target="'#tarea'+item.id">Actualizar<span class="badge"><font-awesome-icon icon="pen" /></span></button>

                <div class="modal fade" :id="'tarea'+item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Actualizando</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Actividad: {{item.id}}</label>
                                    <input type="text" class="form-control" :placeholder="item.actividad" v-model="tareaNueva">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TodoList',
    computed: {
        recibirTareas(){
            return this.$store.getters.enviandoTareas;
        }
    },
    data() {
        return {
            tareaNueva: ''
        }
    },
    methods: {
        eliminando(id){
            this.$store.dispatch('eliminarTarea',id);
        },
        finalTarea(index){
            this.$store.dispatch('actualizarTarea',index);
        }
    },
    
}
</script>

<style>

</style>
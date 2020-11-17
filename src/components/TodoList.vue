<template>
    <section class="container">
        <div class="list-group">
            <a href="#" :class="{'list-group-item-success': item.completo, 'list-group-item-danger' : !item.completo}"  class="list-group-item list-group-item-action" v-for="(item, index) in recibirTareas" :key="index">{{item.actividad}}
                <button class="float-right btn btn-light" @click="finalTarea(index)">{{ item.completo ? 'Abrir' : 'Cerrar' }}<span v-if="item.completo" class="badge"><font-awesome-icon icon="check" /></span><span v-else class="badge"><font-awesome-icon icon="times" /></span></button>
                <button class="mx-3 float-right btn btn-light" @click="eliminando(item.id)">Eliminar<span class="badge"><font-awesome-icon icon="trash-alt" /></span></button>
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
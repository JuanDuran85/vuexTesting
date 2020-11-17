<template>
    <section class="container">
        <div class="list-group">
            <a href="#" :class="{'list-group-item-success': item.completo, 'list-group-item-danger' : !item.completo}"  class="list-group-item list-group-item-action" v-for="(item, index) in recibirTareas" :key="index">{{item.actividad}}
                <button class="float-right btn btn-light">Terminar<span class="badge"></span></button>
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
        }
    },
    
}
</script>

<style>

</style>
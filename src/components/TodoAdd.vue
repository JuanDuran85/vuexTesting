<template>
  <section class="container">
    <form @submit.prevent="addTarea">
      <div class="form-group">
        <label for="agregarTarea">Agrega una tarea a realizar:</label>
        <input type="text" class="form-control" v-model="tarea">
      </div>
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
  </section>
</template>

<script>
import Swal  from 'sweetalert2';

export default {
  name: 'TodoAdd',
  data() {
    return {
      tarea: ''
    }
  },
  methods: {
    addTarea(){
      if(this.tarea){
        this.$store.dispatch('AgregandoTarea',this.tarea);
        this.tarea = '';
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe ingresar una tarea',
          footer: 'Intente nuevamente'
        });
      }
    }
  },

}
</script>

<style scoped>

</style>

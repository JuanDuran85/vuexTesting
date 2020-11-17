<template>
  <div>
    <h1 class="my-5 display-4 text-center">Gestor de Actividades</h1>
    <TodoAdd />
    <hr>
    <TodoList />
  </div>
</template>

<script>
import TodoAdd from './components/TodoAdd.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoList,
  }
}
</script>

<style>

</style>

<template>
  <div class="home">
      <ul>
      <li v-for="tarefa in tarefas" :key="tarefa.descricao"  >
        <div v-if="tarefa.estaCompleta" style="color:red" >{{tarefa.descricao | capitalizar}} ✓</div>
        <div v-else  >{{tarefa.descricao | capitalizar}} X</div>
      </li>
    </ul>
    
  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return{
      tarefas: [
        {id : 1, descricao : "lavar roupa", estaCompleta: true},
        {id : 2, descricao : "dormir", estaCompleta: false},
        {id : 3, descricao : "fazer comida", estaCompleta: true},
        {id : 4, descricao : "fazer tp", estaCompleta: true}
      ]
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>

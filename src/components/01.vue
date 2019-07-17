<template>
  <todo-list :todos="todos">
    <template slot-scope="s1">
      <span v-if="s1.todo.isComplete">✓</span>
      <span v-else>x</span>
      <span>{{s1.todo.text}}</span>
    </template>
  </todo-list>
</template>

<script>
import todoList from './02.vue'
export default {
  data () {
    return {
      todos: [
        {
          id: 0,
          text: 'ziwei0',
          isComplete: false
        },
        {
          text: 'ziwei1',
          id: 1,
          isComplete: true
        },
        {
          text: 'ziwei2',
          id: 2,
          isComplete: false
        },
        {
          text: 'ziwei3',
          id: 3,
          isComplete: false
        }
      ]
    }
  },

  components: {
    todoList
  }

}
</script>

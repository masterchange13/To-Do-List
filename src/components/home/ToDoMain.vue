<template>
  <div class="main">
    <ul class="todo-list">
      <li v-for="item in list" :key="item.id" :class="{ completed: item.done }">
        <div class="view">
          <input class="toggle" type="radio" v-model="item.done" />
          <label class="zi">{{ item.name }}</label>
          <el-button type="danger" class="destroy" @click="delTodo(item.id)">delete</el-button>
          <!-- <button class="destroy" @click="delTodo(item.id)"></button> -->
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["delTodo"]);
const delTodo = (id) => {
  id && emit("delToDo", id); // 触发事件
};
</script>
 
<style>
.toggle {
  width: 30px;
  height: 30px;
}
.view {
  margin-left: -40px;
}
.zi {
  font-size: 18px;
  padding-left: 20px;
}
.destroy {
  border: none;
  margin-left: 10px;
}
</style>
 
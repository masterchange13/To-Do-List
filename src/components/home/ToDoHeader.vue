<template>
  <div>
    <div class="header">
      <p class="title">待办事项</p>
    </div>
    <br/>
    <input
      class="new-todo"
      type="text"
      placeholder="请填写任务"
      v-model.trim="name"
      @keyup.enter="enterName"
    />
    <el-button type="warning" @click="name = ''">cancel</el-button>
    <el-button type="success" @click="addItem()">add</el-button>
  </div>
</template>
 
<script setup>
import { ref } from "vue";
const name = ref("");
const enterName = () => {
  emit("addTodo", name.value);
  name.value = "";
};
const emit = defineEmits(["addTodo"]);

const addItem = () => {
    if (name.value) {
        emit("addTodo", name.value);
        name.value = "";
    }
}
</script>
 
<style>
.title {
  border-bottom: 1px solid grey;
  text-align: center;
  font-size: 36px;
  color: brown;
}
.header {
  border: 1px solid grey;
}

.new-todo {
  position: relative;
  top: -20px;
  left: 50px;
  border: none;
  font-size: 20px;
}
</style>
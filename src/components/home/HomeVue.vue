<template>
  <ToDoHeader @addTodo="addTodo" class="ToDoHeader" />
  <ToDoMain :list="showList" @delToDo="delToDo" />
  <ToDoFooter
    :lastLength="lastLength"
    :status="status"
    @updateStatus="updateStatus"
    class="ToDoFooter"
  />
</template>
   
  <script setup>
import ToDoHeader from "./ToDoHeader.vue";
import ToDoMain from "./ToDoMain.vue";
import ToDoFooter from "./ToDoFooter.vue";

import { ref, computed } from "vue";

const status = ref("all");
const list = ref([
  { id: 1, name: "晨练", done: false },
  { id: 2, name: "练书法", done: true },
]);

const addTodo = (name) => {
  list.value.push({ name, done: false, id: ~~(Math.random() * 1000) });
};

const delToDo = (id) => {
  list.value = list.value.filter((item) => item.id !== id);
};

// 计算剩下没有完成任务的条数
const lastLength = computed(() => {
  return list.value.filter((item) => !item.done).length;
});

const showList = computed(() => {
  if (status.value === "all") {
    return list.value;
  }
  if (status.value === "active") {
    return list.value.filter((item) => !item.done);
  }
  if (status.value === "completed") {
    return list.value.filter((item) => item.done);
  }
});

const updateStatus = (status1) => {
  status.value = status1; // 将子组件的状态赋值给父组件
};
</script>
   
<style>
.ToDoHeader {
  margin-top: 0px;
}
.ToDoFooter {
  margin: 20px 0;
}
</style>
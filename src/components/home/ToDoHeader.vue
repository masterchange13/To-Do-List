<template>
	<div>
	 
	 <div class="header">
	 
	<p class="title">待办事项</p>
	 
	 <input class="new-todo" type="text" placeholder="请填写任务" v-model.trim="name"  @keyup.enter="enterName" />
	 
	 </div>
	 
	</div>
	
</template>
 
<script setup>
	import { ref } from 'vue'
	 const name = ref('')
	  const enterName = () => {
	  emit('addTodo', name.value)
	  name.value = ''
	  }
	  const emit = defineEmits(['addTodo'])
 
</script>
 
<style>
	.title{
		border-bottom:1px solid grey;
		text-align:center;
		font-size:36px;
		color:brown;
	}
	.header{
		border:1px solid grey;
	}
	
	.new-todo{
		position: relative;
		top:-20px;
		left: 50px;
		border: none;
		font-size: 20px;
	}
	
</style>
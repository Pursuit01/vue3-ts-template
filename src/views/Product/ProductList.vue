<script setup lang="ts">
import SearchForm from "@/components/Product/SearchForm.vue";
import TestCom from "@/components/Product/Test.tsx";
import { ref, reactive, unref, provide } from "vue";
const text = ref("123");
// const textVal = unref(text);
provide("foo", text);
</script>
<template>
  <div>
    <!-- <div>{{ text }}</div>
    <div>{{ textVal }}</div> -->
    <button @click="text += '@'">click</button>
    <SearchForm></SearchForm>
    <hr />
    <TestCom></TestCom>
  </div>
</template>

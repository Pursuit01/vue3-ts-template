<template>
  <div>{{ res }}</div>
</template>

<script setup lang="ts">
import { inject } from "vue";
const res = inject("foo");
</script>

<style scoped></style>

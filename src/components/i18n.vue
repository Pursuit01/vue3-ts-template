<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
const changeLang = () => {
  let currentLang = store.state.lang
  store.commit('SET_LANG', currentLang == 'EN' ? 'CN' : 'EN')
}
</script>

<template>
  <div class="about">
    <el-button type="primary" @click="changeLang">点击切换语言</el-button>
    <h4>当前语言：{{ store.state.lang }}</h4>
    <h2>{{ $translate('greeting.hello') }}</h2>
  </div>
</template>

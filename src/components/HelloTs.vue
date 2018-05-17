<template>
  <div>
    hello Typescript
    Hello Typescript {{name}} : {{val}}
    <div class="button" @click="increment">+</div>
    <div class="button" @click="decrement">-</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    name: 'ts',
    val: 0
  }),
  methods: {
    increment() {
      this.val++;
    },
    decrement(){
      if (this.val > 1) {
        this.val--;
      }
    }
  }
})
</script>
<style scoped>
 .button {display: inline-block;padding: 5px 20px;line-height: 32px;border: 1px solid #ff6200;color: #ff6200;text-align: center;background: #fff0}
</style>



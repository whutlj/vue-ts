import Vue from 'vue';
import '../css/main.css';
export default Vue.extend({
  template: `  <div>
    hello Typescript
    Hello Typescript {{name}} : {{val}}
    <div class="button" @click="increment">+</div>
    <div class="button" @click="decrement">-</div>
    <div class="main.name">css Module</div>
  </div>`,
  data: () => ({
    name: 'ts',
    val: 0
  }),
  methods: {
    increment() {
      this.val++;
    },
    decrement() {
      if (this.val > 1) {
        this.val--;
      }
    }
  }
});

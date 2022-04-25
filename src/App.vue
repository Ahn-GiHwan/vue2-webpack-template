<template>
  <div>
    <span>{{ msg }}</span>
    <button @click='addMsg'>+= !</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World'
    }
  },
  methods: {
    addMsg() {
      this.msg += "!"
    }
  }
}
</script>

<style scoped>
  
</style>
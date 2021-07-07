<template>
  <div id="app">
    <form-helper>
      <h2 slot="title"> i am the slot title</h2>
      <p slot="text"></p>
      </form-helper>
  </div>
</template>
<script>
import formHelper from './components/formHelper'
export default {
  name: 'App',
  components: {
    'form-helper': formHelper
  },
  data()
  {
    return {
      title:"i am dynamic slot title"
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



//formHelper
<template>
<div>
  <slot name="title"></slot>
  <h1>I am the  form helper</h1>
    <slot name="text"></slot>
  </div>
</template>
<script>
export default
{
name:"formHelper",
data()
{
  return{
    title:"i am dynamic slot title"
  }
}
}
</script>
<style scoped>
h1{    
  color:red
}
</style>

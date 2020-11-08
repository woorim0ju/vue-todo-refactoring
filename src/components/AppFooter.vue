<template>
    <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearAllFn">clear all</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearAllFn: function(){
            this.$emit('removeItem');
        }
    }
}
</script>

<style>
  .clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn{
    color: #e20303;
    display: block;
    cursor: pointer;
  }
</style>
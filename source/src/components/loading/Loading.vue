<template>
  <div class="loading-wrap">
    <div class="loading">
      加载中
    </div>
  </div>
</template>

<style lang="sass">

.loading-wrap
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.loading-wrap .loading
  font-weight: bold
  background: white
  border: solid #32F34A 2px
  border-radius: 10px
  padding: 15px
</style>
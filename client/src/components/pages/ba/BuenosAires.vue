<template>
  <div class="buenos-aires">
    <BAHeader />
    <BAContent />
    <BAFooter />
  </div>
</template>

<script>
import BAHeader from '@/components/pages/ba/header/BAHeader'
import BAContent from '@/components/pages/ba/BAContent'
import BAFooter from '@/components/pages/ba/BAFooter'
export default {
  components: { BAHeader, BAContent, BAFooter }
}
</script>

<style lang="scss">
.buenos-aires {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

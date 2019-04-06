<template>
  <div class="booking">
    <BookingHeader />
    <BookingContent />
    <BookingFooter />
  </div>
</template>

<script>
import BookingHeader from './BookingHeader'
import BookingContent from './BookingContent'
import BookingFooter from './BookingFooter'
export default {
  components: { BookingHeader, BookingContent, BookingFooter }
}
</script>

<style lang="scss">
.booking {
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  height: 100vh;
}
</style>


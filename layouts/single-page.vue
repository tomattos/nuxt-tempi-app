<!-- Template -->
<template>
  <v-app>
    <div class="page">
      <!-- page navigation bar -->
      <t-header />

      <!-- page body -->
      <div class="page--body">
        <nuxt />
      </div>
    </div>
  </v-app>
</template>

<!-- Script -->
<script>
import Header from '../components/layout/Header';

export default {
  components: {
    THeader: Header
  }
};
</script>

<!-- Style -->
<style scoped lang="scss">
.page {
}
</style>

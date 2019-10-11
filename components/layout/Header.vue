<!-- Template -->
<template>
  <v-app-bar class="c-header" dark color="#37474F">
    <!-- logo -->
    <v-toolbar-title class="c-header--toolbar-title">
      <img
        class="c-header--logo"
        src="../../assets/images/tempi-logo-white.svg"
        alt="Logo"
      />
    </v-toolbar-title>

    <div class="flex-grow-1"></div>

    <a class="c-header--link">Login</a>
  </v-app-bar>
</template>

<!-- Script -->
<script>
export default {
  name: 'Header'
};
</script>

<!-- Styles -->
<style scoped lang="scss">
.c-header {
  position: relative;
  z-index: 1;
  margin-bottom: 125px;

  &--link {
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
  }

  &--logo {
    height: 100%;
    padding: 7px 0;
  }

  &--toolbar-title {
    height: 100%;
  }

  @media all and (max-width: 540px) {
    & {
      margin-bottom: 10px;
    }
  }
}
</style>

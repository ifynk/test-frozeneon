<template>
  <div>
    packages
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('accounts', ['google', 'apple']),
    hasAccounts() {
      return this.google || this.apple;
    },
  },
};
</script>

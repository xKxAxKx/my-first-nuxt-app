<template>
  <div>
    <p>
      Usr ID: {{UserId}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserId: this.$route.params.id
    }
  }
}
</script>

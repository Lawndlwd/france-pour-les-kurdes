<template>
  <form @submit.prevent="submitFn" class="form col-sm-12 col-md-10">
    <div class="mb-5">
      <h2 class="heading-secondary text-right"> {{heading}} </h2>
    </div>
    <slot/>
    <div class="form__group">
      <button class="btn btn-success">
        &rarr; {{btn}} 
      </button>
    </div>
  </form>
</template>

<script>
export default {
    props: ["heading", "btn","submitFn"],
  methods: {
    updateData(value) {
      this.$emit('input', value)
    }
  }
};
</script>

<style></style>

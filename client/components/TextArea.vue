<template>
  <div class="form__group text-right">
    <textarea 
      class="form__input"
      :placeholder="label"
      :value="value"
      rows="4"
      @input="updateData($event.target.value)"
      :id="id"
    ></textarea>
    <label :for="id" class="form__label">{{label}}</label>
  </div>
</template>
<script>
export default {
  props: ["value","id","label"],
  methods: {
    updateData(value) {
      this.$emit('input', value)
    }
  }
};
</script>

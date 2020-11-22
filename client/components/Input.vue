<template>
  <div class="form__group text-right">
    <input
      :type="type"
      class="form__input"
      :placeholder="label"
      :value="value"
      @input="updateData($event.target.value)"
      :id="id"
      required
    />
    <label :for="id" class="form__label">{{label}}</label>
  </div>
</template>
<script>
export default {
  props: ["type", "value","id","label"],
  methods: {
    updateData(value) {
      this.$emit('input', value)
    }
  }
};
</script>

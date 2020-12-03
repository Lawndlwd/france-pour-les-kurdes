<template>
  <div>
    <form @submit.prevent="submitedForm">
      
    </form>
  </div>
</template>
<script>
import Input from "../components/Input.vue";
export default {
  components: {
    Input
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    submitedForm() {}
  }
};
</script>
<style></style>

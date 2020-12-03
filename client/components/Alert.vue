<template>
  <div class=" my-alert col-sm-9 col-md-5">
    <b-alert
      :variant="variant"
      dismissible
      fade
      :show="dismissCountDown"
      @dismiss-count-down="countDownChanged"
    >
      <h4 class="alert-heading">Error!</h4>
      <p>
        {{msg}}
      </p>
      <hr />
      <p class="mb-0">
        Try again
      </p>
    </b-alert>
  </div>
</template>

<script>
export default {
  props: ["countDownChanged","dismissCountDown","variant","msg"],
};
</script>

<style>
.my-alert {
  position: absolute;
  z-index: 1000;
  opacity: 0.85;
  bottom: 1rem;
}
</style>

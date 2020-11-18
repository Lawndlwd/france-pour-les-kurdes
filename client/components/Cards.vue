<template>
  <div>
    <vs-card>
      <template #title>
        <h2 class="heading-third p-2">
          {{ title }}
        </h2>
      </template>
      <template #img class="mb-5">
        <img :src="img" :alt="title" />
      </template>
      <template #text>
        <p class="peragraph p-2">
          {{ peragraph }}
        </p>
      </template>
      <template #interactions>
        <vs-button success icon>
          <i class="bx bx-heart"></i>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: ["title", "peragraph",'img']
};
</script>

<style></style>

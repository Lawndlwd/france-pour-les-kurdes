<template>
  <div class=" col-xs-8 col-sm-8 col-md-4 col-lg-4 mb-5 ">
    <div class="card-custom">
      <div class="card-custom__side card-custom__side--front">
        <div class="card-custom__picture">
          <img :src="img" :alt="img" class="card-custom__picture--img">
        </div>
        <h4 class="card-custom__heading">
          <span :class="`card-custom__heading-span card-custom__heading-span--${isFull}`"
            >{{member.name}}
          </span>
        </h4>
        <div class="card-custom__details">
          <ul>
            <li v-if="member.city">city: {{member.city}}</li>
            <li v-if="member.from">from : {{member.from}}</li>
            <li v-if="member.work">job: {{member.work}}</li>
            <li v-if="member.facebookLink">from : {{member.facebookLink}}</li>
            <li v-if="member.email">email : {{member.email}}</li>
            <li v-if="member.description">description: {{member.description}}</li>
          </ul>
        </div>
      </div>
      <div
        class="card-custom__side card-custom__side--back card-custom__side--back-2"
      >
        <div class="card-custom__cta">
          <div class="card-custom__price-box">
            <p class="card-custom__price-only">Only</p>
            <p class="card-custom__price-val">299$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "peragraph", "img", "member","isFull"]
};
</script>

<style></style>

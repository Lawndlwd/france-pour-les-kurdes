<template>
  <div class=" col-xs-8 col-sm-8 col-md-4 col-lg-4 mb-5 ">
    <div class="card-custom">
      <div class="card-custom__side card-custom__side--front">
        <div class="card-custom__picture card-custom__picture--2">
          &nbsp;
        </div>
        <h4 class="card-custom__heading">
          <span class="card-custom__heading-span card-custom__heading-span--2"
            >{{member.name}}
          </span>
        </h4>
        <div class="card-custom__details">
          <ul>
            <li>city: {{member.city}}</li>
            <li>from : {{member.from}}</li>
            <!-- <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty : easy</li> -->
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
  props: ["title", "peragraph", "img", "member"]
};
</script>

<style></style>

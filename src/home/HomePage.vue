<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" />
    </div>
    <div class="get-started">
      <router-link to="/build">Get Started</router-link>Building your first
      robot!
      <!-- <a href>Get Started</a>  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>

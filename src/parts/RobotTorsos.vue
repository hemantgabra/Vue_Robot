<template>
  <div>
    <h2>Torsos</h2>The Torsos are how your robot build.
    <div v-for="(torso, idx) in torsos" :key="idx">
      <h4>{{ torso.title }}</h4>
      <div>{{ torso.description }}</div>
    </div>
  </div>
</template>

<script>
import parts from "../data/parts";
export default {
  name: "RobotTorsos",
  data() {
    return { torsos: parts.torsos };
  }
};
</script>

<style scoped></style>

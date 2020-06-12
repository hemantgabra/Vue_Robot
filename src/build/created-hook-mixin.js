export default {
  beforeCreate() {
    console.log("Before Created component created from mixin file");
  },
  created() {
    console.log("component created from mixin file");
  },

  mounted() {
    console.log("i am in mounted");
  },
  beforeMount() {
    console.log("i am in before mount");
  },
  beforeUpdate() {
    console.log("i am in before update");
  },
  updated() {
    console.log("i am in after updated");
  },
  beforeDestroy() {
    console.log("i am in before destroyed");
  },
  destroyed() {
    console.log("i am in destroyed");
  },
};

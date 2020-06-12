<template>
  <div>
    <div class="content">
      <div class="preview">
        <CollapsibleSection />
        <CollapsibleSection>
          <div class="preview-content">
            <div class="top-row">
              <img :src="selectedRobot.head.src" />
            </div>
            <div class="middle-row">
              <img :src="selectedRobot.left.src" class="rotate-left" />
              <img :src="selectedRobot.torso.src" />
              <img :src="selectedRobot.right.src" class="rotate-right" />
            </div>
            <div class="bottom-row">
              <img :src="selectedRobot.base.src" />
            </div>
            <button class="add-to-cart" @click="addToCart()">Add To Cart</button>
          </div>
        </CollapsibleSection>
      </div>

      <div class="top-row">
        <div class="robot-name">
          {{ selectedRobot.head.title }}
          <span v-show="selectedRobot.head.onSale" class="sale">Sale!</span>
        </div>
        <PartSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => (selectedRobot.head = part)"
        />
      </div>
      <div class="middle-row">
        <PartSelector
          :parts="availableParts.arms"
          position="left"
          @partSelected="part => (selectedRobot.left = part)"
        />
        <PartSelector
          :parts="availableParts.torsos"
          position="center"
          @partSelected="part => (selectedRobot.torso = part)"
        />
        <PartSelector
          :parts="availableParts.arms"
          position="right"
          @partSelected="part => (selectedRobot.right = part)"
        />
      </div>
      <div class="bottom-row">
        <PartSelector
          :parts="availableParts.bases"
          position="bottom"
          @partSelected="part => (selectedRobot.base = part)"
        />
      </div>
      <div>
        <h1>Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Robot</th>
              <th class="cost">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(robot, index) in cart" v-bind:key="index">
              <td>{{ robot.head.title }}</td>
              <td class="cost">{{ robot.robotCost }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from "../data/parts";
import createdHookMixin from "./created-hook-mixin";
import beforeCreatedHookMixin from "./created-hook-mixin";
import PartSelector from "./PartSelector.vue";
import CollapsibleSection from "./CollapsibleSection";

export default {
  name: "RobotBuilder",
  components: { PartSelector, CollapsibleSection },
  mixins: [createdHookMixin, beforeCreatedHookMixin],
  data() {
    return {
      availableParts,
      // selectedHeadIndex: 0,
      // selectedLeftArmIndex: 0,
      // selectedTorsoIndex: 0,
      // selectedRightArmIndex: 0,
      // selectedBaseIndex: 0,
      cart: []

      // headCount: availableParts.heads.length,
      // armCount: availableParts.arms.length,
      // torsoCount: availableParts.torsos.length,
      // baseCount: availableParts.bases.length
    };
  },
  computed: {
    selectedRobot() {
      return {
        robotCost: 0,
        cart: 0,
        // head: availableParts.heads[this.selectedHeadIndex],
        // left: availableParts.arms[this.selectedLeftArmIndex],
        // torso: availableParts.torsos[this.selectedTorsoIndex],
        // right: availableParts.arms[this.selectedRightArmIndex],
        // base: availableParts.bases[this.selectedBaseIndex]

        head: {},
        left: {},
        torso: {},
        right: {},
        base: {}
      };
    },
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid #494949"
      };
    },
    saleBorderClass() {
      return {
        "sale-border": this.selectedRobot.head.onSale ? "sale-border" : ""
      };
    }
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.left.cost +
        robot.torso.cost +
        robot.right.cost +
        robot.base.cost;
      robot.robotCost = cost;
      this.cart.push(robot);
    }
    // selectPreviousHead() {
    //   if (this.selectedHeadIndex > 0) {
    //     this.selectedHeadIndex -= 1;
    //   }
    // },
    // selectNextHead() {
    //   if (this.selectedHeadIndex < this.headCount - 1) {
    //     this.selectedHeadIndex += 1;
    //   }
    // },
    // selectPreviousLeftArm() {
    //   if (this.selectedLeftArmIndex > 0) {
    //     this.selectedLeftArmIndex -= 1;
    //   }
    // },
    // selectNextLeftArm() {
    //   if (this.selectedLeftArmIndex < this.armCount - 1) {
    //     this.selectedLeftArmIndex += 1;
    //   }
    // },
    // selectPreviousTorso() {
    //   if (this.selectedTorsoIndex > 0) {
    //     this.selectedTorsoIndex -= 1;
    //   }
    // },
    // selectNextTorso() {
    //   if (this.selectedTorsoIndex < this.torsoCount - 1) {
    //     this.selectedTorsoIndex += 1;
    //   }
    // },
    // selectPreviousRightArm() {
    //   if (this.selectedRightArmIndex > 0) {
    //     this.selectedRightArmIndex -= 1;
    //   }
    // },
    // selectNextRightArm() {
    //   if (this.selectedRightArmIndex < this.headCount - 1) {
    //     this.selectedRightArmIndex += 1;
    //   }
    // },
    // selectPreviousBase() {
    //   if (this.selectedBaseIndex > 0) {
    //     this.selectedBaseIndex -= 1;
    //   }
    // },
    // selectNextBase() {
    //   if (this.selectedBaseIndex < this.baseCount - 1) {
    //     this.selectedBaseIndex += 1;
    //   }
    // }
  }
};
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  /* right: 30px; */
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost {
  text-align: right;
}
.sale-border {
  border: 3px solid red;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>

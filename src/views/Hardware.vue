<template lang="pug">
    section.hardware
        h3 Hardwareliste
            span.date-modified {{ hardware.lastModified }}
        ul.list-wrapper
            hardware-item(v-for="item, index in hw.itemList" :key="item.id" :idx="index" :item="item")
</template>

<script>
import { mapState } from "vuex";
import HardwareItem from "@/components/HardwareItem";

export default {
  name: "hardware",
  components: {
    HardwareItem
  },
  computed: {
    ...mapState(["hardware"])
  },
  created() {
    this.$store.dispatch("Hardware/init");
  }
};
</script>

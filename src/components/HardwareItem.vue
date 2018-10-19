<template lang="pug">
    li.hardware.item-wrapper
        ul.item
            li.line-number
                h3 {{ index }}
            li.property 
                p {{ item.id }}
            li.property
                p {{ item.name }}
            li.property
                p {{ item.serialNr }}
            li.property
                p {{ item.status }}
            li.property
                p {{ item.os }}
            li.property
                p {{ item.officeVersion }}
            li.property
                p {{ item.officeKey }}
            li.property
                p {{ item.software }}
            li.property
                p {{ item.domain }}
</template>

<script>
export default {
  name: "hardware-item",
  props: {
    index: Number,
    item: Object
  },
  created() {
    $store.dispatch("hardwareItem/init");
  }
};
</script>

<style lang="scss">
.hardware {
  background: #223;
  color: #fc9;
  .item-wrapper {
    padding: 0.3vh 0.3vw;
  }
  .item {
    padding: 5%;
    border: 2px solid black;
    border-radius: 5px;
  }
}
</style>

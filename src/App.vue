<template>

      <vManHeader></vManHeader>

</template>

<script>
import vManHeader from "./components/header/v-mainHeader"

export default {
  name: 'App',

  components: {
    vManHeader
  },
};
</script>

<style lang="scss">
body, li, a, span, p {
  font-family: 'Open Sans',sans-serif;
  color: #333;
  line-height: 1.7;
}
li {
  list-style-type: none;

}
a { 
    text-decoration: none;
} 
hr {
  width: 96%;               
  transform: scaleY(1);
  border: 4px solid #FFFF00;
  border-bottom-width: 0;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: 600;
    font-family: 'Open Sans',sans-serif;
    line-height: 1.35em;
}

</style>
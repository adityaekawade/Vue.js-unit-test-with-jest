<template>
  <div>
    <v-text-field
      type="input"
      single-line
      placeholder="Enter US Zip code"
      data-test="zipCodeText"
      v-model="inputText"
    ></v-text-field>
    <v-btn v-on:click="save" data-test="saveButton" color="primary">Enter</v-btn>
    <br>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      inputText: "",
    }
  },
  methods: {
    save(){
      this.$emit('save', this.inputText)
      this.inputText = "";
    }
  }
}
</script>

<style>
  .inputBox{
    height:30px;
    width: 200px;
    border: 5px;
  }
</style>

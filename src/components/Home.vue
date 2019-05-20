<template>
  <v-container>
    <v-flex xs12>
      <h2>{{title}}</h2>
      <v-flex xs12>
        <br>
        <ZipCodeInput
          v-on:save="processZipCode($event)"
          :hint="hint"
        />
      </v-flex>

      <v-flex mb-4>
        <div v-if="farenhiteTemperature!==null">
          <DisplayTemperature
            :city="city"
            :farenhiteTemperature="farenhiteTemperature"
          />
        </div>
      </v-flex>
    </v-flex>
  </v-container>
</template>

<script>
  import ZipCodeInput from './ZipCodeInput';
  import DisplayTemperature from './DisplayTemperature';
  import Model from './Model';
  var model = new Model();

  export default {
    components: {
      "ZipCodeInput": ZipCodeInput,
      "DisplayTemperature": DisplayTemperature
    },
    methods: {
      processZipCode(code){
        var data = model.fetchResponse(window.fetch, code);
        data.then(res=>{
          let kelvinTemp = res.main.temp;
          this.FarenhiteConverter(kelvinTemp);
          this.city = res.name;
        })
      },
    },
    data: () => ({
      title: "Weather App",
      farenhiteTemperature: null,
      city: "",

    })
  }
</script>

<style>

</style>

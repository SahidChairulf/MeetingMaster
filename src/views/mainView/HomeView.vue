<template>
    <div id="app">
      <div id="home">
        <HeaderComponent />
      </div>
      <div id="about">
        <AboutComponent />
      </div>
      <div id="service">
        <ServiceComponent />
      </div>
    </div>
  </template>
  
  <script setup>
  import AboutComponent from "@/components/UserComponents/AboutComponent.vue";
  import HeaderComponent from "@/components/UserComponents/HeaderComponent.vue";
  import ServiceComponent from "@/components/UserComponents/ServiceComponent.vue";
  </script>
  
  <style lang="scss" scoped></style>
  
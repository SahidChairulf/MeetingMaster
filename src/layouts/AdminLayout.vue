<template>
  <div class="flex">
      <div class="h-screen overflow-hidden"> <!-- Sidebar -->
          <Sidebar/>
      </div>
      <div class="flex-1 bg-purple-100 overflow-y-auto h-screen"> <!-- Konten Utama -->
          <RouterView></RouterView>
      </div>
  </div>
</template>

<script setup>
  import Sidebar from "../components/SidebarAdminComponnent.vue"
</script>

<style scoped>
/* Tidak diperlukan karena menggunakan Tailwind CSS */
</style>

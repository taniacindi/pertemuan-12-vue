<template>
  <div>
    <h2>Detail User</h2>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else-if="user">
      <img :src="user.avatar" width="150" />

      <h3>{{ user.first_name }} {{ user.last_name }}</h3>

      <p><strong>Email :</strong> {{ user.email }}</p>

      <br>

      <router-link to="/">
        ← Kembali ke Daftar User
      </router-link>
    </div>

    <div v-else>
      Data user tidak ditemukan.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const user = ref(null);
const loading = ref(true);

const getUser = async () => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/users/${route.params.id}`,
      {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      }
    );

    user.value = response.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getUser();
});
</script>
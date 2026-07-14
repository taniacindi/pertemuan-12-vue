<template>
  <div>
    <h2>Daftar User</h2>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else>
      <div
        v-for="user in users"
        :key="user.id"
        style="border:1px solid #ccc;padding:15px;margin-bottom:15px;border-radius:10px"
      >
        <img :src="user.avatar" width="100" />

        <h3>{{ user.first_name }} {{ user.last_name }}</h3>

        <p>{{ user.email }}</p>

        <router-link :to="'/detail/' + user.id">
          Lihat Detail
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const loading = ref(true);

const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://reqres.in/api/users?page=1",
      {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      }
    );

    users.value = response.data.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getUsers();
});
</script>
<template>
  <div>
    <h2>Tambah User</h2>

    <form @submit.prevent="createUser">

      <p>
        Nama
      </p>

      <input
        type="text"
        v-model="name"
        placeholder="Masukkan Nama"
      />

      <p>
        Pekerjaan
      </p>

      <input
        type="text"
        v-model="job"
        placeholder="Masukkan Pekerjaan"
      />

      <br /><br />

      <button type="submit">
        Simpan
      </button>

    </form>

    <div v-if="result">

      <hr>

      <h3>Data Berhasil Ditambahkan</h3>

      <p><b>ID :</b> {{ result.id }}</p>

      <p><b>Nama :</b> {{ result.name }}</p>

      <p><b>Pekerjaan :</b> {{ result.job }}</p>

      <p><b>Dibuat :</b> {{ result.createdAt }}</p>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const job = ref("");

const result = ref(null);

const createUser = async () => {
  try {

    const response = await axios.post(
      "https://reqres.in/api/users",
      {
        name: name.value,
        job: job.value
      },
      {
        headers: {
          "x-api-key": "reqres-free-v1"
        }
      }
    );

    result.value = response.data;

  } catch (error) {
    console.log(error);
  }
};
</script>
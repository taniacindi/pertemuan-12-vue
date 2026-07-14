<template>
  <div class="container">
    <h1>Praktikum Pertemuan 13 - Web Service</h1>

    <nav>
      <router-link to="/">Daftar User</router-link>
      |
      <router-link to="/create">Tambah User</router-link>
    </nav>

    <hr>

    <router-view />
  </div>
</template>

<style>
.container{
  width:80%;
  margin:auto;
  padding:20px;
}

nav{
  margin:20px 0;
}

nav a{
  margin-right:15px;
  text-decoration:none;
}
</style>
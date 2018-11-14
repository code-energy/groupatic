<template>
  <div id="app">
    <h1>Welcome to Groupatic!</h1>
    <main>
      <nav>
        <router-link to="/login">Login</router-link>
      </nav>
      <section>
      <router-view/>
      </section>
    </main>
  </div>
</template>

<script>
export default { name: 'App' }
fetch('/api/')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log(text);
  });
</script>

<style>
#app {
  text-align: center;
  font-family: Sans-Serif;
  margin-top: 60px;
}
</style>

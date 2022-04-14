<template>
  <div id="nav">
      <div class="content">
          <router-link to="/">Home</router-link> |
          <router-link to="/edit">Edit</router-link>
      </div>
  </div>
  <router-view/>
</template>

<style lang="scss">

body {
    margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

button {
    height: 40px;
    border: none;
    background: #4262ff;
    border-radius: 8px;
    padding: 10px 20px;
    line-height: 20px;
    color: #fff;

    &:hover {
        cursor: pointer;
        background: #294bff;
    }
}


.content {
    max-width: 1200px;
    padding: 0 15px;
    margin: 0 auto;
}

#nav {
  padding: 30px 0;

  a {
    font-weight: bold;
    color: #4262ff;

    &.router-link-exact-active {
      color: #000;
    }
  }
}
</style>

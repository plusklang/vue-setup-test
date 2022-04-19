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
    font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button, .btn {
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

.btn--secondary {
    background-color: #fff;
    transition: background-color .2s ease;
    border: 1px solid #4262ff;
    color: #4262ff;

    &:hover {
        color: #fff;
        background: #4262ff;
    }
}

.input {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 20px;
    max-width: 640px;

    &.no-margin {
        margin-bottom: 0;
    }

    label {
        display: block;
        text-transform: capitalize;
        margin-bottom: 3px;
    }

    &.has--error {
        input {
            border-color: #B40000;
            color: #B40000;
        }
    }

    input {
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        appearance: none;
        outline: none;
        border: 1px solid #999;
        height: 40px;
        width: calc(100% - 16px);
        border-radius: 8px;
        padding: 0 8px;
    }

    &__error {
        position: absolute;
        bottom: 0;
        line-height: 1;
        left: 0;
        color: #B40000;
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

.autocomplete {

    &__dropdown {
        visibility: hidden;
        opacity: 0;
        transition: opacity .3s ease, visibility 0s ease .3s;
        position: absolute;
        top: calc(100% - 20px);
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        background: #fff;

        &.is--active {
            opacity: 1;
            visibility: visible;
            transition: opacity .3s ease, visibility 0s ease 0s;

        }

        li {
            line-height: 1;
            padding: 12px 15px;
            cursor: pointer;

            &:hover {
                background: #cccccc;
            }
        }
    }
}
</style>

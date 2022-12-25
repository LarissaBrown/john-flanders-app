<template>
  <div>
    <nav class="navbar container" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="jflogo" href="/">
          <img alt="logo John Flanders" src="../../assets/logo.png">
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Sign In</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  </template>
  <script>
//import AboutView from '@/views/AboutView.vue';

    export default {
      name: 'NavView',

    };
  </script>
  <style lang="scss" scoped>
    nav {
      padding-top: 25px;
      padding-bottom: 30px;
      padding-left: 25px;
      a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #ca8608;
        }
      }
    }
    .jflogo {
      height: 100%;
    }
  </style>
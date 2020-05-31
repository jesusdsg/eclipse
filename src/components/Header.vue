<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="light">
        <b-navbar-brand>
        <!--<g-link class="logo-home logo-desktop" to="/">{{ $static.metadata.siteName }}</g-link>-->
        <g-link class="logo-home logo-desktop" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
        <g-link class="logo-home logo–mobile" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <g-link class="nav--link" to="/">WORK</g-link>
          <g-link class="nav--link" to="/about">ABOUT</g-link>
          <g-link class="nav--link" to="/contact">CONTACT</g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo-image {
    width: 120px;
    height: auto;
    margin-bottom: -12px;
  }

nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  border:none !important; 
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.nav--link {
  margin-left: 20px;
  text-decoration: none;
  color: #333333;
  padding-bottom: 5px;
  border-bottom: 3px solid #fff;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.nav--link:hover {
  color: #333333;
  border-bottom: 3px solid #333333;
  text-decoration: none;
}

.active--exact {
  color: #333333;
  border-bottom: 3px solid #333333;
  font-weight: normal;
  text-decoration: none;
}
</style>

<template>
  <div class="bg-gray-700 min-h-screen text-white">
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";

export default {
  components: {
    HeaderNav,
  },
};
</script>

<style>
.menu-toggle {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.hamburger {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
}

.hamburger span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span,
.hamburger span:before,
.hamburger span::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 4px;
  border-radius: 99px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.hamburger span:before,
.hamburger span::after {
  content: "";
}

.hamburger span:before {
  top: -8px;
}

.hamburger span:after {
  top: 8px;
}
</style>

<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <SideBar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <NavBar/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-1 py-1">
          <slot />
        </div>
      </main>
<!--      <MyFooter />-->
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/admin/Sidebar";
// import Footer from "@/components/admin/Footer";
import NavBar from "@/components/admin/Navbar";
export default {
  name: "AdminLayout",
  components: {NavBar, SideBar}
}
</script>


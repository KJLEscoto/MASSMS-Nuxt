<template>
  <div class="h-full w-full">
    <div
      class="h-screen bg-[url('~/assets/img/main-background.svg')] object-center bg-cover bg-no-repeat relative px-52 p-4 overflow-hidden">

      <nav class="flex justify-between items-center">
        <div>
          <img draggable="false" class=" w-36 h-auto" src="~/assets/img/masmss.svg">
        </div>

        <ul class="flex gap-10 text-gray-400 mt-5">
          <li class="text-yellow-300">Home</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>API Guide</li>
          <li>Blog</li>
        </ul>

        <div class="flex gap-5 items-center mt-5">
          <button
            class="px-10 py-2 text-gray-400 font-bold border-2 border-gray-400 rounded-full hover:text-black hover:bg-yellow-300 trans">Login</button>
          <button
            class="px-10 py-2 font-bold rounded-full bg-yellow-300 border-2 border-yellow-300 hover:scale-95 trans">Try
            Now</button>
        </div>
      </nav>

      <section class="grid grid-cols-2 mt-36">
        <div>
          <h1 class="text-7xl font-black text-white">Unlimited <br> Bulk SMS</h1>
          <p class="text-lg text-white ml-1 mt-3">Massms is a fully-featured SMS & mobile marketing platform that
            doesn't stop you from scaling.</p>

          <div class="mt-14">
            <button
              class="text-black bg-yellow-300 px-20 flex gap-3 py-4 rounded-full items-center hover:bg-white trans">
              <p class="font-medium">Try it out for free</p>
              <img draggable="false" class="w-10 h-auto" src="~/assets/img/arrow-right.svg" />
            </button>
          </div>

          <div class="mt-7 flex items-center gap-10">
            <section class="flex items-center gap-2">
              <img draggable="false" class="w-8 h-auto" src="~/assets/img/yellow-check.svg">
              <p class="text-white text-sm">2-minute setup</p>
            </section>
            <section class="flex items-center gap-2">
              <img draggable="false" class="w-8 h-auto" src="~/assets/img/yellow-check.svg">
              <p class="text-white text-sm">No credit card required</p>
            </section>
          </div>

          <div class="absolute -bottom-1 -right-[150px]">
            <img draggable="false" class=" w-[1200px] h-auto" src="~/assets/img/main-model.svg">
          </div>
        </div>
      </section>

    </div>

    <div class="h-screen">

    </div>
  </div>
</template>

<script setup>

</script>
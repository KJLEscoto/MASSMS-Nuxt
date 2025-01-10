<template>
  <div class="h-full w-full">
    <div
      class="h-screen bg-[url('~/assets/img/main-background.svg')] object-center bg-cover bg-no-repeat relative px-5 xl:px-52 p-4 overflow-hidden">

      <nav class="flex justify-between items-center">
        <div>
          <img draggable="false" class=" w-36 h-auto" src="~/assets/img/masmss.svg">
        </div>

        <img class="w-[50px] h-auto xl:hidden block mt-5" src="~/assets/img/menu.jpg" />

        <ul class="hidden xl:flex gap-10 text-gray-400 mt-5 *:cursor-pointer">
          <li class="text-yellow-300">Home</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>API Guide</li>
          <li>Blog</li>
        </ul>

        <div class="hidden xl:flex gap-5 items-center mt-5">
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

          <div class="absolute -bottom-1 -right-[100px]">
            <img draggable="false" class=" w-[1100px] h-auto" src="~/assets/img/main-model.svg">
          </div>
        </div>
      </section>

    </div>

    <div class="h-full w-full pt-20 px-52 border-b border-gray-300 relative">
      <h1 class="text-center text-3xl font-black">Setup <span class="text-sky-400">Smart & Bulk SMS</span>
        <br>
        For Your Brand In Minutes
      </h1>
      <p class="text-center mt-5 text-gray-400 text-lg">Setup automated text messaging throughout your business
        operations in just a few <br>
        minutes, and scale without worrying about upgrades and extra costs!
      </p>

      <div class="relative">
        <img draggable="false" class="absolute w-auto h-auto -left-[50%] z-10" src="~/assets/img/blue-circle.svg">
        <div class="pt-20 flex xl:flex-row flex-col items-center w-full gap-x-12 gap-y-24 h-full relative z-20">
          <section class="w-1/2 xl:w-full space-y-5 h-auto">
            <h1 class="font-extrabold text-sm"><span class="text-sky-500">#1:</span> Install App</h1>
            <div class="p-5 rounded-xl bg-[#fcfcfc text-gray-500 shadow-md relative">
              <p class="text-sm">Scan a QR code and <br> instantly install the <br> mobile app on your <br> android
                device.</p>
              <img draggable="false" class="h-auto w-52 absolute -right-[30px] -top-[40px] float-right"
                src="~/assets/img/install-app.svg" />
              <img draggable="false" class="h-auto w-3 opacity-30 absolute -right-[32px] top-[50%] xl:block hidden"
                src="~/assets/img/d-r-arrow.png">
            </div>
          </section>
          <section class="w-1/2 xl:w-full space-y-5">
            <h1 class="font-extrabold text-sm"><span class="text-sky-500">#2:</span> Import Contacts</h1>
            <div class="px-5 rounded-xl bg-[#fcfcfc] text-gray-500 shadow-md relative pt-5 pb-10">
              <p class="text-sm">Upload any csv file with your <br> contacts and <br> you're all set!</p>
              <img draggable="false" class="h-auto w-[300px] absolute float-right -right-[30px] -top-[10px]"
                src="~/assets/img/import-contact.svg" />
              <img draggable="false" class="h-auto w-3 opacity-30 absolute -right-[32px] top-[50%] xl:block hidden"
                src="~/assets/img/d-r-arrow.png">
            </div>
          </section>
          <section class="w-1/2 xl:w-full space-y-5 h-auto">
            <h1 class="font-extrabold text-sm"><span class="text-sky-500">#3:</span> Schedule SMS</h1>
            <div class="p-5 rounded-xl bg-[#fcfcfc] text-gray-500 shadow-md relative">
              <p class="text-sm">Formulate your message, <br> choose a contacts <br> group, and schedule <br> your
                campaign.</p>
              <img draggable="false" class="h-auto w-[200px] absolute float-right -right-[0px] -top-[40px]"
                src="~/assets/img/schedule-sms.svg" />
            </div>
          </section>
        </div>
        <div class="xl:grid xl:grid-cols-2 flex flex-col-reverse mt-32 h-full gap-10">
          <img draggable="false" class="w-[500px] h-auto z-30" src="~/assets/img/creative-women.png" />

          <div class="my-auto space-y-5">
            <div class="text-3xl font-black">
              <span>Let Your Mobile Carrier Do All</span> <br>
              <span>The Heavy Lifting,</span> <br>
              <span class="text-sky-400">While We Take Care Of The Rest.</span>
            </div>

            <p class="text-lg text-gray-400">
              You're already paying for an unlimited data plan, <br>
              but with Massms, you'll actually be using it.
            </p>

            <button
              class="flex gap-2 items-center px-10 py-3 rounded-full bg-yellow-300 border-2 border-yellow-300 hover:bg-white hover:border-gray-400 trans">
              <p class="font-semibold">Start free</p>
              <img draggable="false" class="w-10 h-auto" src="~/assets/img/arrow-right.svg" />
            </button>

            <div class="space-y-3">
              <section class="flex items-center gap-2">
                <img draggable="false" class="w-6 h-auto" src="~/assets/img/like.svg">
                <p class="text-gray-500 text-sm">No credit card required</p>
              </section>
              <section class="flex items-center gap-2">
                <img draggable="false" class="w-6 h-auto" src="~/assets/img/like.svg">
                <p class="text-gray-500 text-sm">Live chat support</p>
              </section>
              <section class="flex items-center gap-2">
                <img draggable="false" class="w-6 h-auto" src="~/assets/img/like.svg">
                <p class="text-gray-500 text-sm">Quick setup</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="xl:h-screen h-full w-full">
      <div class="w-full h-[70%] relative flex items-center justify-center">
        <div class="z-50 flex items-center justify-center flex-col gap-5 text-center pt-20">
          <img class="w-40 h-auto" src="~/assets/img/robust-robot-icon.svg" />
          <p class="text-3xl font-black">Robust, Comprehensive, <br>
            <span class="text-sky-400">Fully-Documented</span> API
          </p>
          <div>
            <p class="text-xl text-sky-400">Seamlessly connect your CRM, ERPs, marketing platforms, <br>
              and most popular business management and marketing systems.</p>
            <p class="text-xl text-gray-400">(Our extensive API was designed with simplicity in mind, while encompassing
              <br>
              enough features to allow for usage versatility from a variety of users.)
            </p>
          </div>
        </div>
        <img class="absolute top-14 z-10" src="~/assets/img/blue-circle.svg">
        <img class="h-auto w-[150px] absolute right-0 top-0 z-20" src="~/assets/img/decor-right.png">
        <img class="h-auto w-[200px] absolute left-0 bottom-0 z-20" src="~/assets/img/decor-left.png">
      </div>

      <!-- display all the starItems -->
      <div class="w-full h-[30%] relative z-50 xl:px-52 px-0 xl:py-0 py-10 xl:grid xl:grid-cols-3 flex flex-col items-center">
        <section v-for="(items, rowIndex) in starItems" :key="rowIndex">
          <div v-for="(item, itemIndex) in items" :key="itemIndex" class="flex gap-3 space-y-2">
            <img class="h-auto w-5" src="~/assets/img/star.svg" alt="Star Icon">
            <p class="text-lg text-gray-400">{{ item }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>

const starItems = [
  [     
    'OTP authentication',
    'Cart abandonment funnels',
    'eCommerce autoresponders',
  ],
  [
    'Seasonal promotions',
    'Two-factor authentication',
    'Integrate SMS into your apps',
  ],
  [
    'Sync contacts from your CRM',
    'Create complex chat bots',
    'And more... !'
  ] 
]
</script>
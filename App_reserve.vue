<template>
  <body class="bg-stone-800 text-white min-h-screen">
    <header class="container py-5 mx-auto">
      <div class="flex justify-between p-small">
        <div class="font-bold space-x-2">
          <span class="hover:underline">en</span>
          <span>|</span>
          <span class="hover:underline">ru</span>
        </div>
        <span class="font-bold text-3xl m-auto">Атлас упражнений</span>
        <div class="font-bold space-x-2">
          <span class="flex justify-center items-center space-x-2">
            <img src="./assets/image/sun.svg" />
            <label class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-800 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
            </label>
            <img src="./assets/image/moon.svg" />
          </span>
        </div>
      </div>
    </header>
    <main
      class="container flex-col justify-start mx-auto border-2 border-blue-200 m-2"
    >
      <template v-if="sexChose">
        <div class="container flex-col">
          <div class="mx-auto flex justify-center border-2">Выберите пол</div>
          <div class="flex justify-center">
            <img
              src="./assets/image/man_full.png"
              @click="manChosen()"
              class="w-auto h-96"
            />
            <img
              src="./assets/image/woman_full.png"
              @click="womanChosen()"
              class="w-auto h-96"
            />
          </div>
        </div>
      </template>
      <template v-if="manShow">
        <div class="mx-auto flex justify-center border-2">
          Выберите часть тела
        </div>
        <div class="flex justify-center mx-auto min-h-fit">
          <img
            src="./assets/image/mussles_man_full.png"
            @click="womanChosen()"
            class="w-auto h-3/5"
          />
          <map name="workmap">
            <area
              shape="rect"
              coords="34,44,270,350"
              alt="Computer"
              href="computer.htm"
            />
            <area
              shape="rect"
              coords="290,172,333,250"
              alt="Phone"
              href="phone.htm"
            />
            <area
              shape="circle"
              coords="337,300,44"
              alt="Coffee"
              href="coffee.htm"
            />
          </map>
        </div>
      </template>
      <template v-if="womanShow"> Выбрана девушка</template>
    </main>
    <footer class="container mx-auto border-2 border-orange-400 m-2">
      <div>
        <div>Упражнение №1</div>
        <div>описание упражнения</div>
        <div>Видеоупражнения</div>
      </div>
      <div>Упражнение №2</div>
      <div>Упражнение №3</div>
      Тут будут показываться описание тренировок
    </footer>
  </body>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mussles: [],
      sexChose: true,
      manShow: false,
      womanShow: false,
    };
  },
  methods: {
    manChosen() {
      this.sexChose = false;
      this.manShow = true;
    },
    womanChosen() {
      this.sexChose = false;
      this.womanShow = true;
    },
  },
};
</script>
<style src=".\assets\tailwind.css"></style>

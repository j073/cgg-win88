<template>
  <div class="fugu--hero-section">
        <div id="fugu--counter"></div>
        <div class="container">
          
        <Checkup/>
        
        <NuxtImg 
         src="https://suji.one/gambarrtp"
         style="width: 100%; height: auto !important;"
         effect="blur"
         loading="lazy"
         alt="Banner New Year WIN88"
        />


        <div class="link-container">
            <a href="https://suji.one/rtpwin88" class="register-button">
              LOGIN
            </a>
            <a href="https://suji.one/rtpwin88" class="login-button">
              DAFTAR
            </a>
          </div>
        </div>

        <div class="container">
          <p
            id="listgames"
            class="titlewinner"
            style="color: white; text-align: center; font-weight: 800;"
          >
            <img src="https://it-cgg.b-cdn.net/rtp/win88/trophy.png" width="30" alt="Trophy WIN88"/>
            Pemenang Dari RTP Gacor WIN88
          </p>
          <div class="container slick containerwd slick-initialized slick-slider">
            <div class="container slick-list draggable">
              <div class="marquee">
                <div style="display: flex !important;">
                
                  <div v-for="(winner, index) in winnersdata" :key="index" style="display: inline !important">
                    <img :src="winner.img_src" :alt="winner.game" style="vertical-align: middle; max-width: 100px;" loading="lazy" />
                    <div style="display: inline-block; vertical-align: middle; color: white; margin-left: 5px;">
                      {{ winner.username }}
                      <br />
                      <div class="gamewd" style="display: inline-block; color: white;">
                        IDR <em class="gamewd nomwd">{{ winner.amount }}</em>
                        <p class="gamewd" style="color: white;">{{ winner.game }}</p>
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
            </div>
          </div>

          <Menu/>

          <div class="fugu--hero-shape2"></div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      winnersdata: [],
    };
  },
  mounted() {
    this.fetchWinners();
  },
  methods: {
    async fetchWinners() {
      try {
        const responsePragma = await $fetch('https://51.79.129.134/winner-proxy', {
          method: 'GET'
        });
        const jsonPragma = responsePragma;
        this.winnersdata = jsonPragma; 
      } catch (error) {
        console.log("Error fetching", error);
      }
    }
  }
};
</script>
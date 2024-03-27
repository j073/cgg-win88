<template>
    <div :class="{ 'rajaolympus-bar': true, 'close': isOpen, 'open': !isOpen }">
        <div class="left">
        <img class="headlogo" loading="lazy" src="https://i.postimg.cc/L6KjhX9Q/LOGO-ROL.png" alt="logo"/>
        <div>
            <a href="https://rate.rtp-rajaolympus.site/" target="_blank">
                <img src="https://i.postimg.cc/cCxQXkvg/RTP.gif" target="_blank" loading="lazy"/>
            </a>
        </div>
        <div>
            <a href="https://kontak.sbs/wa-raja-olympus" target="_blank">
                <img src="https://i.postimg.cc/YS82QXBy/WA.gif" alt="" loading="lazy"/>
            </a>
        </div>
        <div>
            <a href="http://wa.style/RajaOlympus-GroupOfficial" target="_blank">
                <img src="https://i.postimg.cc/0QfSMGV8/TELE.gif" alt="" loading="lazy"/>
            </a>
        </div>
        <div>
            <a href="https://tinyurl.com/fb-messanger-rol" target="_blank">
                <img src="https://i.postimg.cc/VL47Qn1P/fb-msg.gif" alt="" loading="lazy"/>
            </a>
        </div>
        <div>
            <a href="https://tinyurl.com/Groupfb-rol" target="_blank">
                <img src="https://i.postimg.cc/prjtcC3v/facebook.gif" target="_blank" loading="lazy"/>
            </a>
        </div>
        <div>
            <a href="http://wa.style/QRIS-NANI-SURYANI" target="_blank">
                <img src="https://i.postimg.cc/1t5hPPTv/QRIS.gif" target="_blank" loading="lazy"/>
            </a>
        </div>
        <span class="bar-footer">
            RajaOlympus <br/>© Copyright 2023
        </span>
        </div>
      <div class="right" @click="toggleContainer">
        <span>{{ isOpen ? 'TAP TO OPEN' : 'TAP TO CLOSE' }}</span>
      </div>
    </div>


    
  </template>
  
  

  <script>
  export default {
    data() {
      return {
        isOpen: true
      };
    },
    methods: {
      toggleContainer() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style>
  .rajaolympus-bar {
      display: flex;
      gap: 5px;
      background-color: transparent;
      width: 272px;
      height: auto;
      bottom: 10rem;
      left: 0;
      position: fixed;
      z-index: 97;
      transition: all .7s ease;
      font-family: "Raleway", sans-serif;
      font-size: 20px !important;
  }

  .rajaolympus-bar.close {
      transform: translate(-70%, 0);
      opacity: .85;
  }

  .rajaolympus-bar.open {
      transform: translate(0, 0);
  }

  .rajaolympus-bar .left {
      display: flex;
      flex-direction: column;
      background-color: #0c383d;
      z-index: 98;
      width: 191px;
      border-radius: 15px;
      align-items: center;
      justify-items: center;
      gap: 10px;
  }

  .left div {
      width: 90%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ca9b18;
      border-radius: 10px;
  }

  .headlogo {
      width: 50%;
  }

  
  .left div a {
      text-decoration: none;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: large;
      font-weight: bold;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .rajaolympus-bar .right {
      display: flex;
      flex-direction: column;
      background-color: #ca9b18;
      width: 40px;
      z-index: 99;
      border-radius: 15px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
  }

  .rajaolympus-bar a,
  .rajaolympus-bar span {
      text-align: center;
      color: #ca9b18;
  }
  

  .rajaolympus-bar .right span {
      writing-mode: vertical-rl;
      text-orientation: upright;
      color: #0c383d;
  }

  .rajaolympus-bar .left div a img {
      height: 100%;
      overflow: hidden;
  }

  .bar-footer {
      font-size: medium;
  }

  @media screen and (max-width: 600px) {
      .rajaolympus-bar {
          scale: .7;
      }

      .rajaolympus-bar.close {
          transform: translate(-91.5%, 0);
          margin-left: 0px !important;

      }

      .rajaolympus-bar.open {
          transform: translate(-21%, 0);
      }
  }


</style>

<template>
    <div class="v-mainHeaderContent">
        <div class="v-mainHeaderContent__Block"
        :style=" showContentHeader = {top : (test + 300) + 'px', opacity : (showBlock) + '%'}"
        v-show="showBlock >= 10"
        >
            <typical 
                    class="typicalWrapper"
                    :steps="[
                    'ЗАРАБАТЫВАЙ НА', 1000,
                    'ЗАРАБАТЫВАЙ НА ОДОБРЕНИЕ ИПОТЕКИ', 500,
                    'ЗАРАБАТЫВАЙ НА СТРАХОВАНИИ КЛИЕНТОВ', 1000,
                    'ЗАРАБАТЫВАЙ НА ОЦЕНКЕ НЕДВИЖИМОСТИ', 1000,
                    'ЗАРАБАТЫВАЙ НА ПОДРЯДНЫХ КВАРТИРАХ', 1000,
                    'ЗАРАБАТЫВАЙ НА ЭЛЕКТРОННОЙ РЕГИСТРАЦИИ', 1000,
                    ]" 
                    :loop=3 
                    :wrapper="'h1'"
            ></typical>
            <typical 
                    class="typicalWrapper"
                    :steps="[
                    'В ТЕРМИНАЛЕ АГЕНТА!', 10,
                    ]" 
                    :loop=3 
                    :wrapper="'h1'"
            ></typical>
            <div class="btnInfo"> 
                <button type="submit">
                    <a href="">Стать партнером</a>
                </button>
                <div class="circle"></div>
                <button type="submit">
                    <a href="">О компании</a>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import typical from '../../typical.js'


export default {
    name : "v-mainHeaderContent",
    data () {
        return {
            //Style
            test : 2,
            showBlock : 220,
            window : null,
            showContentHeader : {
                left : '0px'
            }
        }
    },
    components : {
        typical,
    },
    mounted() {
    window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener('resize', this.updateWidth)
    },
    methods: {
        onScroll(e) {
            this.test = e.target.documentElement.scrollTop;
            if(this.test > 1) {
                this.showBlock = (200 - this.test) / 2;
            }
        },
        updateWidth() {
            this.width = window.innerWidth;
            if(window.innerWidth > 520 && window.innerWidth < 320) {
                this.showContentHeader = {top : '30px', opacity : '90%'}
            } else {
                this.showContentHeader;
            }
        }
    },
    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
  },

}
</script>

<style lang="scss">
.v-mainHeaderContent__Block {
    left: 23%;
    position: absolute;
    .btnInfo{
        display: flex;
        margin-top: 50px;
        align-items: center;
        .circle {
                margin: 10px;
                background: rgb(255, 255, 255);
                clip-path: circle(50%);
                height: 10px;
                width: 10px;
        }
       a{   
           background: #FBE400;
           padding: 15px 28px;
           border-radius: 50px;
           color: rgb(75, 75, 75);
           &:hover{
               background: #D5D7D8;
               color: rgb(87, 87, 87);
           }
        }
    }
}
h1{
    transition: 0.3s;
    color: #fffdfd;
}
/* blink effect */

@keyframes blink {
  50% { opacity: 0; }
}
/* github-corner */
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

@media (max-width: 620px) and (min-width: 20px) {
    .v-mainHeaderContent {
        display: none;
    }
}
</style>
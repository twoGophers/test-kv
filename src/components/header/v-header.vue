<template>
    <div class="vHeader"
    @scroll="onScroll"
    >
    <div class="v-header"
    v-if="showHeader == true"
    :style="styleHeader"
    >
                <div class="v-header__logo">
                    <div class="logoSpan">
                        <img  class="logoMin dark" src="../../assets/images/logo2.png" alt="" srcset="">
                        <span class="site-name">сервис для агентов</span>
                    </div>
                </div>
                <div class="v-header__navigation"
                v-show="!showNavBar"
                >
                    <ul>
                        <li><a class="navigation n1" href="">РИЭЛТОРАМ</a></li>
                        <li><a class="navigation n2" href="">ПРОДАВЦАМ</a></li>
                        <li><a class="navigation n3" href="">ТЕРМИНАЛ АГЕНТА</a></li>
                    </ul>
                </div>

                <div class="phoneBtn">
                    <div class="v-headerPhone">
                        <a href="tel:+78123095099">+7 (812) 123-45-67</a>
                    </div>
                    <div class="v-headerPtnMenu"
                            v-show="showNavBar"
                            >
                            <div class="iconImg"
                                v-if="showMenu == true"
                                @click="showMenuBlock"
                            >
                                <img src="../../assets/images/close.png" alt="">
                            </div>

                            <div class="icon"
                                v-else-if="showMenu == false"
                                @click="showMenuBlock1"
                            >
                                <img src="../../assets/images/menu.png" alt="">
                            </div>
                    </div>
                </div>
    </div>

    <div class="v-modal-window"
        v-show="showModalWindows"
        >
            <ul>
                <li><a class="navigation2 p1" href="">РИЭЛТОРАМ</a></li>
                <li><a class="navigation2 p2" href="">ПРОДАВЦАМ</a></li>
                <li><a class="navigation2 p3" href="">ТЕРМИНАЛ АГЕНТА</a></li>
            </ul>
        </div>

    <div class="v-header1" 
    v-if="showHeader == false"
    :style="styleHeader"
    >
        <div class="v-header__logo1">
            <div class="logoSpan1">
                <img  class="logoMin1 white" src="../../assets/images/logo1.png" alt="" srcset="">
                <span class="site-name1">сервис для агентов</span>
            </div>
        </div>
        <div class="v-header__navigation1"
        v-show="!showNavBar"
        >
            <ul>
                <li><a class="navigation1 n1 " href="">РИЭЛТОРАМ</a></li>
                <li><a class="navigation2 n2 " href="">ПРОДАВЦАМ</a></li>
                <li><a class="navigation3 n3 " href="">ТЕРМИНАЛ АГЕНТА</a></li>
            </ul>
        </div>

            <div class="phoneBtn1">
                <div class="v-headerPhone1">
                    <a href="tel:+78123095099">+7 (812) 123-45-67</a>
                </div>
                <div class="v-headerPtnMenu1"
                v-show="showNavBar"
                >
                    <div class="iconImg"
                    v-if="showMenu == true"
                    @click="showMenuBlock"
                    >
                        <img src="../../assets/images/close.png" alt="">
                    </div>

                    <div class="icon"
                    v-else-if="showMenu == false"
                    @click="showMenuBlock1"
                    
                    >
                        <img src="../../assets/images/menu.png" alt="">
                    </div>
                </div>
            </div>
        
    </div>


    </div>
</template>

<script>

export default {
    name : "vHeader",
    data() {
        return {
            window : null,
            test : 0,
            showHeader : false,
            showHeader1 : true,
            showNavBar : false,
            showMenu : false,
            showModalWindows: false,
            styleHeader : {
                'justify-content': 'space-between',
            }
        }
    },
    components : {
       
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
            if(this.test > 0) {
                this.showHeader = true,
                this.showHeader1 = false;
            } else if(this.test == 0) {
                this.showHeader = false,
                this.showHeader1 = true;
            }
        },

        updateWidth() {
            this.width = window.innerWidth;
            if(window.innerWidth < 1200) {
                this.showNavBar = true;
            } else {
                this.showNavBar = false;
            }
        },
        showMenuBlock(){
            this.showMenu = false;
            this.showModalWindows = false;
        },
        showMenuBlock1(){
            this.showMenu = true;
            this.showModalWindows = true;
        },
    },

    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
    },
}
</script>

<style lang="scss">
.vHeader {

.v-header1 {
    transition: 0.5s;
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: center;
    .v-header__logo1{
        width: 10%;
        margin-left: 1.5%;
        .logoSpan1 {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
            .logoMin1{
                margin-top: 3%;
                width: 60%;
                max-height: 34px;
            }
            .site-name1{
                font-size: 0.43em;
                letter-spacing: .2em;
                line-height: 1em;
                text-transform: uppercase;
                font-weight: 700;
                display: block;
                margin: 3px 0 0;
                color: white;
            }
        }
    }
    .v-header__navigation1{
        width: 70%;
        display: flex;
        justify-content: center;
        padding-top: 1%;
        li{
            margin-left: 2;
            font-size: 14px;
            padding: 7px 15px;
            display: inline;
            .navigation1{
                color: rgb(250, 230, 7);
                font-weight: 500;
                margin-left: 0px;
                text-transform: uppercase;
                &:hover {
                color : rgb(233, 233, 233);
                }
            }
            .navigation2 {
                color : rgb(252, 249, 249);
                &:hover {
                color : rgb(233, 233, 233);
                }
            }
            .navigation3 {
                color : rgb(252, 249, 249);
                border: 1px solid #E0CE10;
                padding: 10px 20px;
                border-radius: 20px;
                &:hover {
                    transition: 0.5s;
                    background:#FEE800 ;
                    color : #424242;
                }
            }
        }
    }
    .phoneBtn1{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        position: relative;
        .v-headerPhone1{
            width: 80%;
            a {
                display: block;
                text-align: center;
                line-height: 1em;
                color: rgb(252, 249, 249);
                margin-bottom: 12px;
                transition: .2s;
                font-size: 17px;
                &:hover {
                    color : rgb(233, 233, 233);
                }
            }
        }
        .v-headerPtnMenu1{
            margin-top: 4%;
            width: 20%;
            margin-left: 2%;
            margin-bottom: 5%;
            cursor: pointer;

            .icon {
                transform: scale(1);
                img {
                    transition: 0.5s;
                    width: 22px;
                }
            }

            .iconImg{
                margin-top: 2%;
                justify-content: center;
                cursor: pointer;
                transform: scale(1);
                img {
                    width: 22px;
                    transition: 0.5s;
                }
            }
        }
    }
}

.v-header {
    transition: 0.5s;
    position: fixed;
    background: white;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: center;
    &__logo {
        width: 10%;
        margin-left: 1.5%;
        .logoSpan {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                .logoMin{
                    margin-top: 3%;
                    width: 60%;
                    max-height: 34px;
                }
                .site-name{
                    font-size: 0.43em;
                    letter-spacing: .2em;
                    line-height: 1em;
                    text-transform: uppercase;
                    font-weight: 700;
                    display: block;
                    margin: 3px 0 0;
                    color: rgb(116, 115, 114);
                }
        }
    }
    &__navigation{
        width: 70%;
        display: flex;
        justify-content: center;
        padding-top: 1%;
        li {
            margin-left: 2;
            font-size: 14px;
            padding: 7px 15px;
            display: inline;
            .navigation{
                color: rgb(157, 158, 158);
                font-weight: 500;
                margin-left: 0px;
                text-transform: uppercase;
                &:hover {
                color : rgb(182, 182, 182);
                }
            }
            .n1 {
                color : rgb(250, 230, 7);
                &:hover {
                color : rgb(182, 182, 182);
                }
            }
            .n3 {
                color : rgb(200, 202, 202);
                border: 1px solid #E0CE10;
                padding: 10px 20px;
                border-radius: 20px;
                &:hover {
                    transition: 0.5s;
                    background:#FEE800 ;
                    color : #424242;
                }
            }
        }
    }
    .phoneBtn{
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        position: relative;
            .v-headerPhone{
                width: 80%;
            a {
                display: block;
                text-align: center;
                line-height: 1em;
                color: rgb(200, 202, 202);
                margin-bottom: 12px;
                transition: .2s;
                font-size: 17px;
                &:hover {
                    color : rgb(182, 182, 182);
                }
            }
        }
        .v-headerPtnMenu{
            margin-top: 4%;
            width: 20%;
            margin-left: 2%;
            margin-bottom: 5%;
            cursor: pointer;

            .icon {
                transform: scale(1);
                img {
                    transition: 0.5s;
                    width: 22px;
                }
            }

            .iconImg{
                margin-top: 2%;
                justify-content: center;
                cursor: pointer;
                transform: scale(1);
                img {
                    width: 22px;
                    transition: 0.5s;
                }
            }
        }
    }
    }
}

.v-modal-window {
        top:60px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 1%;
        background: white;
        position: fixed;
        align-items: center;
        opacity: 96%;
        height: 100%;
        z-index: 200;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            li {
            margin-left: 2;
            font-size: 14px;
            padding: 7px 15px;
            display: inline;
            .navigation2{
                color: rgb(157, 158, 158);
                font-weight: 500;
                margin-left: 0px;
                text-transform: uppercase;
                &:hover {
                color : rgb(182, 182, 182);
                }
            }
            .p1 {
                color : rgb(250, 230, 7);
                &:hover {
                color : rgb(182, 182, 182);
                }
            }
            .p3 {
                color : rgb(200, 202, 202);
                border: 1px solid #E0CE10;
                padding: 10px 20px;
                border-radius: 20px;
                &:hover {
                    transition: 0.5s;
                    background:#FEE800 ;
                    color : #424242;
                }
            }
        }
    }
}

@media (max-width: 1200px) and (min-width: 520px){
.vHeader{
        .v-header, .v-header1{
            width: 100%;
            .phoneBtn, .phoneBtn1{
                width: 40%;
                display: flex;
                align-items: center;
                .v-headerPhone, .v-headerPhone1{
                    width: 80%;
                    display: flex;
                    justify-content: flex-end;
                }
            }
        }
    }
}


@media (max-width: 520px) and (min-width: 320px) {
    .v-headerPhone1, .v-headerPhone{
        display: none;
    }
}
</style>
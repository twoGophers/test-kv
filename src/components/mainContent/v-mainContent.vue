<template>

    <div class="v-mainContent">
        <!--Блок (Инструменты риэлтора)-->
            <div class="v-mainContent__InstrumentRieltr">
                <div class="InstrumentRieltrImage"
                    v-show="showInstrument"
                >
                    <div class="RieltrImage">
                        <div class="RieltrImage__block"></div>
                        <div class="RieltrImage__block image"></div>
                    </div>
                </div>
                <div class="InstrumentRieltrContent"
                :style="showRieltor"
                >
                        <h3>Инструменты риэлтора</h3>
                        <hr>
                        <p>Терминал партнера АПК — это сервис для профессионалов рынка недвижимости, позволяющий упростить работу и зарабатывать дополнительно до 50 000 руб. на каждой сделке. Наша цель — сделать работу риэлтора максимально комфортной и ПРИБЫЛЬНОЙ.</p>
                        <p>Среди наших сервисов есть база квартир с дисконтом, оценка недвижимости, страхование, электронная регистрация и другие.</p>
                        <a class="ssylka"  href="">Подробнее</a>
                </div>
            </div>
            <!--Паралакс-->
            <div class="parallaxMen" style="position: relative; z-index: 9999; background-color: #fff;">
                <vContentMainCatalog></vContentMainCatalog>
                    <div class="parallaxMen__child">
                        <parallax class="Masthead">
                            <div class="parallaxMen__child-img">
                                <img class="child-img" src="../../assets/images/unsplash.jpg" style="1500px">
                            </div>
                        </parallax>
                    </div>
            </div>

            <div class="howWeWork">
                <div class="howWEWorcks">
                    <div class="howWEWorcks__title">
                        <h6>Как мы работаем?</h6>
                        <h2>Этапы работ</h2>
                        <hr>
                    </div>
                    <div class="howWEWorcks__item">
                        <vHowWeWorkingItem
                        v-for="item in howWeWorks"
                        :key="item.id"
                        :item_stage_worck="item"
                        :item_stage_list="item.list"
                        >
                        </vHowWeWorkingItem>
                    </div>
                </div>
            </div>

            <!--Паралакс фото-смена-->
            <v-parallax
                jumbotron
                src="../../assets/images/marian-kroell-kAS1HkvoeZU-unsplash.jpg"
                height="700"
                >
                <v-overlay value="true" absolute >
                    <vSliderFoto></vSliderFoto>
                </v-overlay>
                
            </v-parallax>

            <vOtzivClient></vOtzivClient>

           
                <v-parallax
                    
                    src="../../assets/images/bench-footer.jpg"
                    height="250"
                    >

                    <vFooter></vFooter>

                </v-parallax>

                <vFooterBotom></vFooterBotom>

    </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
import vContentMainCatalog from "./v-contentMainCatalog"
import vHowWeWorkingItem from "./v-howWeWorking-item"
import vSliderFoto from "../sliderFoto/v-sliderFoto"
import vOtzivClient from '../otzivClient/v-otzivClient'
import vFooter from '../footer/v-footer'
import vFooterBotom from '../footer/v-footerBottom'

export default {
    name : "v-mainContent",
    data() {
        return {
            width : null,
            featuresOpen: false,
            showInstrument : false,
            showRieltor : false,
            howWeWorks : [
                {id : '1', number : '01', images : 'icons8-form-100.png', title : 'Регистрация', list : [
                    {idx : 1, valueList : 'Регистрируетесь в терминале партнера'},
                    {idx : 2, valueList : 'Связываемся с вами в течение 24 часов с момента регистрации'},
                ]},
                {id : '2', number : '02', images : 'icons8-view-100.png', title : 'Заявка', list : [
                    {idx : 3, valueList : 'Через терминал партнера отправляете заявки на интересующие услуги'},
                    {idx : 4, valueList : 'Отзваниваемся по заявкам в течение 10 минут с момента отправки'},
                ]},
                {id : '3', number : '03', images : 'icons8-agreement-100.png', title : 'Договор', list : [
                    {idx : 5, valueList : 'Заключаем с клиентом договор на оказание услуг'},
                    {idx : 6, valueList : 'А с вами подписываем акт выполненных работ'},

                ]},
                {id : '4', number : '04', images : 'icons8-open-door-100.png', title : 'Радость', list : [
                    {idx : 7, valueList : 'Оказываем клиенту услугу качественно и быстро'},
                    {idx : 8, valueList : 'Выплачиваем вам комиссионное вознаграждение'},
                ]},
            ]
        }
    },
    components : {
        Parallax,
        vContentMainCatalog,
        vHowWeWorkingItem,
        vSliderFoto,
        vOtzivClient,
        vFooter,
        vFooterBotom
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
            if(window.innerWidth > 1100) {
                this.showInstrument = true;
                this.showMainContent = true;
                return this.showRieltor = {width : '57%'}

            } else if(window.innerWidth < 1100) {
                this.showInstrument = false;
                return this.showRieltor = {width : '100%', padding : '5%'}
            } 
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWidth)

    },
    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
    },
}
</script>

<style lang="scss">
.v-mainContent {
    width: 100%;
    background: rgb(250, 253, 250);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: scale(1);
    //Блок картинка и текст
        &__InstrumentRieltr {
            width: 100%;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            .InstrumentRieltrImage{
                width: 57%;
            .RieltrImage {
                width: 100%;
                min-height: 330px;
                padding: 5%;
                .RieltrImage__block {
                    margin-left: 12%;
                    margin-bottom: 2%;
                    left: 10%;
                    width: 57%;
                    height: 300px;
                    margin-right: 0;
                    border-radius: 20px;
                    box-shadow: 0 5px 15px -7px rgb(0 0 0 / 50%);
                    background: #FBE400;
                    z-index: 2;
                    overflow: hidden;
                }
                .image {
                margin-top: -23%;
                margin-left: 2%;
                margin-bottom: 20%;
                width: 36%;
                z-index: 2;
                position: fixed;
                overflow: hidden;
                background: url("../../assets/images/image-rieltor.jpg");
                align-items: center;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }

            }
            }
            .InstrumentRieltrContent {
                padding-top: 3%;
                padding-right: 12%;
                width: 43%;
                margin-bottom: 5%;
                hr {
                    width: 15%;
                }
                p{
                    margin-top: 3%;
                    margin-right: 3%;
                    margin-bottom: 3%;
                    font-size: 0.83em;
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
    .parallaxMen {
        //height: 100%;
            .parallaxMen__child{
            //height: 100%;
            transform: translate(1);
            background-color:rgba(0,0,0,.3);
            top:0;
            left:0;
            .Masthead {
            transform: translate(1);
            height: 100%;
            .parallaxMen__child-img {
                transform: translate(1);
                height: 100%;
                    .child-img {
                        height: 100%;
                        transform: translate(1);
                        width: 100%;
                    }
                }
            }
        }
        .v-contentMainCatalog {
            height: 100%;
        }
    }

    //Блок 4 картинки "Этапы работы"

        .howWeWork {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 3%;
            padding-bottom: 5%;
            .howWEWorcks{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;;
                &__title{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h6{
                        font-family: 'Open Sans',sans-serif;
                        font-size: 0.8em;
                    }
                    hr {
                        width: 5%;
                    }
                }
                &__item{
                    margin-top: 3%;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
}

@media screen and (max-width: 930px){
    .parallaxMen {
        min-height: 1500px;
        .parallaxMen__child {
        //height: 100%;
            .Masthead {
                //height: 100%;
                min-height: 1500px;
                .parallaxMen__child-img{
                    //height: 100%;
                    .child-img {
                        //height: 100%;
                    }
                }
            }
        }
        .v-contentMainCatalog {
            //height: 100%;
            .v-contentMainCatalog__content{
                .mainCatalog-catalog{
                    .catalogItem {
                        a{
                            margin-top: 1%;
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 520px) and (min-width: 230px) {
    .InstrumentRieltrContent{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .v-mainContent__InstrumentRieltr .InstrumentRieltrContent a {
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        font-size: 0.9em;
    }
}
</style>
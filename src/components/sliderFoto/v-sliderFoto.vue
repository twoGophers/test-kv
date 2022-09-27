<template>
    <div class="v-slider">
        <template>
            <!-- Модальное окно -->
            <vModalWind ref="modal"></vModalWind>
        </template>

        <div class="sliderTitle">
            <h2>В базе более 2000 квартир</h2>
            <hr>
        </div>
        <!-- <div class="sliderBlock">
            <div class="sliderContext">
                <div class="arrow">
                    <img src="../../assets/images/arrowL.png" alt=""
                        @click="prevBth"
                    >
                </div> 
                    
                <vSliderFotoItem

                v-for="item in sliderFotoItem"
                :key="item.id"
                :item_foto="item"
                v-show="!featuresOpen"
                @showMod="showModal"
                @click="handleClick(item.index)"
                >
                
                </vSliderFotoItem>

                <vSliderFotoitemForm
                v-if="featuresOpen"
                
                ></vSliderFotoitemForm>
                <div class="arrow">
                    <img src="../../assets/images/arrow.png" alt=""
                     @click="nextBth"
                    >
                </div>
            </div>
        </div> -->
        
        <div id="app">
        <v-app id="inspire">
            <v-sheet
            class="mx-auto"
            elevation="2"
            >
            <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                show-arrows
                >
                    <vSliderFotoItem
                    v-for="item in sliderFotoItem"
                    :key="item.id"
                    :item_foto="item"
                    :style="{width : '100%'}"
                    @showMod="showModal"
                    >
                    </vSliderFotoItem>
                    <vSliderFotoitemForm
                    v-for="item in sliderFormItem"
                    :key="item.index"
                    :style="{width : '100%'}"
                    ></vSliderFotoitemForm>
                <v-card
                    class="ma-4"
                    height="0"
                    width="00"
                    
                    >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >

                    </v-row>
                </v-card>
                
            </v-slide-group>
            </v-sheet>
        </v-app>
        </div>
    </div>
</template>

<script>
import vSliderFotoItem from "./v-sliderFoto-item"
import vSliderFotoitemForm from '../sliderFoto/v-sliderFoto-itemForm'
import vModalWind from "./modal-wind"



export default {
    name : "v-slider",
    components : {
        vSliderFotoItem,
        vSliderFotoitemForm,
        vModalWind,



    },
    data(){
        return {
            model: 5,
            featuresOpen : false,
            sliderFotoItem : [
                {id : 0, img1 : 'flat-blank.jpg', image: ['flat-blank.jpg'], title : '', raion : 'Район', location : '', idx : 13571, box : '', m2: '', price:`5 950 000  руб.`,nextPrice:`5 355 000`, vasaV:'ВАША ВЫГОДА',econom:`595 000`, btn:'Оставить заявку', colorBtn : '#FBE400', backgroundColor : "rgb(241, 240, 240)"},
                {id : 1, img1 :'block11.jpg',  image : ['block11.jpg','block12.png','block13.png'], title : 'ЖК РУССКИЕ СЕЗОНЫ', raion : 'Курортный район', location : 'Старая деревня', idx : 13571, box : '1-квартиры', m2:45.2, price:`15 859 445  руб.`,nextPrice:`12 129 604`, vasaV:'ВАША ВЫГОДА',econom:`3 729 841`, btn:'Оставить заявку', colorBtn : '#FBE400',backgroundColor : "rgb(241, 240, 240)"},
                {id : 2, img1 :'block22.jpg', image : ['block21.png','block22.jpg','block23.png'], title : 'ЖК ТЕРРА', raion : 'Приморский район', location : 'Лесная', idx : 14560, box : '2-квартиры', m2:57.79, price:`11 204 462  руб.`,nextPrice:`10 350 000`, vasaV:'ВАША ВЫГОДА',econom:`854 462`, btn:'Оставить заявку', colorBtn : '#FBE400',backgroundColor : "rgb(241, 240, 240)"},
                {id : 3, img1 :'block31.jpg', image : ['block31.jpg','block32.jpg','block33.jpg'], title : 'ЖК ПОЛИС НЕ КОМЕНД...', raion : 'Приморский район', location : 'Коммерндантский проект', idx : 14611, box : '1-квартиры', m2:31.14, price:`4 784 000  руб.`,nextPrice:`4 676 949`, vasaV:'ВАША ВЫГОДА',econom:`107 051`, btn:'Оставить заявку', colorBtn : '#FBE400',backgroundColor : "rgb(241, 240, 240)"},
            ],
            sliderFormItem : [
                {id : 0}
            ]

        }
    },
    methods: {
        nextBth() {
            this.featuresOpen = true;
        },
        prevBth() {
            this.featuresOpen = false;
        },
        showModal (el) {
            this.$refs.modal.show = el;
        },
        handleClick(index) {
            this.currentProduct = this.item[index];
            console.log(this.item[index])
        }
    }
}
</script>

<style lang="scss">
.v-slider {
    min-width: 95%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .sliderTitle {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        margin-top: 2%;
        h2{
        font-size: 2.0em;
        color:white;
        }
        hr {
            margin-top: 1%;
            width: 5%;
        }
    }
    // .sliderBlock{
    //     overflow: hidden;
    //     margin-top: 5%;
    //     .sliderContext{
    //         display: flex;
    //         flex-direction: row;
    //         justify-content: center;
    //         align-items: center;
    //         margin-bottom: 5%;
    //         .arrow{
    //             padding: 1%;
    //             img{
    //                 width: 50px;
    //                 cursor: pointer;
    //                 opacity: 80%;
    //                 &:hover{
    //                     opacity: 50%;
    //                 }
    //                 &:active{
    //                     opacity: 70%;
    //                     width: 52px;
    //                     z-index: -1;
    //                     transform: scale(1);
    //                 }
    //             }
    //         }
    //     }
    // }
    #app{
        width: 100%;
        margin-top: 2%;
        height: 500px;
        padding: 0;

        #inspire{
            display: flex;
            height: 500px;
            flex-direction: column;
            background: none;
            width: 100%;
            .mx-auto{
                height: 500px;
                display: flex;
                background: none;
                overflow: hidden;
                .pa-4{
                    width: 120%;
                        height: 500px;
                        overflow: hidden;
                        .v-icon{
                            background: rgb(255, 255, 255);
                            padding: 5%;
                            border-radius: 10px;
                            color: wheat;
                            opacity: 0.8;
                            transition: 0.5s;

                            &:hover {
                                transform: scale(1.2);
                                opacity: 0.9;
                            }
                        }
                        .item {
                            .ma-4{
                                .fill-height{
                                    border: 1px solid black;
                                }
                        }
                    }
                }
            }
        }
    }
}
@media (min-width: 320px) and (max-width: 520px){
    .v-slider{
        .sliderTitle{
            h2{
                font-size: 1.2em;
            }
        }
        .sliderBlock{
            width: 100%;
            .sliderContext{
                width: 70%;
            }
        }
    }
}
</style>
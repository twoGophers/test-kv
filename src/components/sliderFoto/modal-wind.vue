<template>
<!-- 
    <vModalWind ref="modal"></vModalWind>
    <a ref="modal" @click="showModal"></a>
    methods: {
     showModal () {
            this.$refs.modal.show = true;
        },
    }
   
 -->
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
                <div class="modal-close" @click="closeModal">&#10006;</div>
                <slot name="body">
                <div class="modal-content">

                        <!-- <div @click="prevSlide" class="lightgrey">&laquo;</div> -->
                        <!-- <div class="slider-container">
                            <div class="slidermen" :style="styleObject">

                            <div class="sliderImage"><img src="../../assets/images/flat-blank.jpg" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block11.jpg" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block12.png" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block13.png" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block21.png" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block22.jpg" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block23.png" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block24.png" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block31.jpg" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block32.jpg" alt=""></div>
                            <div class="sliderImage"><img src="../../assets/images/block33.jpg" alt=""></div>

                                    <img :src="getImgUrl(items)" alt="">
                                <img src="../../assets/images/photo.png" alt="" srcset="">
                            </div>
                        </div> -->
                        <!-- <div @click="nextSlide" class="lightgrey">&raquo;</div> -->

                            <template>
                                <v-carousel 
                                next-icon 
                                prev-icon
                                class='v-window-item--carousel'
                                >
                                    <v-carousel-item
                                    v-for="(item,i) in items"
                                    :key="i"
                                    :src="item.src"
                                    class="v-window-item--active"
                                    ></v-carousel-item>
                                </v-carousel>
                            </template>
                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <button class="modal-footer__button" 
                    @click="closeModal">
                        Ок
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        props :{
            item_foto : {
            type : Array,
            default () {
                return []
                }
            },
        },
        data: function () {
            return {
                show: false,
                activeSlide: 1,
                items: [
                    {src: require('../../assets/images/flat-blank.jpg'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block11.jpg'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block12.png'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block13.png'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block21.png'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block22.jpg'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block23.png'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block24.png'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block31.jpg'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block32.jpg'), styleItem : [{display : 'flex', width : '80%'}]},
                    {src: require('../../assets/images/block33.jpg'), styleItem : [{display : 'flex', width : '80%'}]},
                    ],
            }
        },
        
        methods: {
            closeModal: function () {
                this.show = false
            },
            changeSlide: function(num) {
                this.activeSlide = num
            },
            nextSlide: function() { 
                if(this.activeSlide < 10) this.activeSlide++
            },
            prevSlide: function() {
                if(this.activeSlide > 1) this.activeSlide--
            },
            test() {},
            // getImgUrl(item){
            //     var images = require.context('../../assets/images/', false)
            //     return images('./' + item.image)
            // }
            
            },
            
        computed: {
            styleObject: function() {
                const width = 0 - ((this.activeSlide-1) * 700)
            return {
                transform: 'translateX('+width+'px)'
                }
            },
        },
        mounted() {},
    }
</script>
 
<style lang="scss">

    .modal-shadow {
        
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
    }
 
    .modal {
        background: #fff;
        border-radius: 8px;
        padding: 15px;
        min-width: 80%;
        max-width: 95%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
 
        &-close {
            border-radius: 50%;
            color: #fff;
            background: #2a4cc7;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 7px;
            right: 7px;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
 
        &-title {
            color: #0971c7;
        }
 
        &-content {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            //justify-content: space-between;
            align-items: center;
            .v-window-item--carousel{
                width: 80%;
            }
        //         .slider-container {
        //         margin: 0; 
        //         padding: 0;
        //         font-family: sans-serif;
        //         text-align: center;
        //         overflow: hidden; 
        //         width: 70%; 
        //         height: 70%; 
        //         position: absolute;
        //         left: 50%;
        //         top: 50%;
        //         transform: translate(-50%, -50%);
        //         .slidermen{
        //             width: 700px;
        //             height: 100%;
        //             display: flex;
        //             flex-direction: row;
        //             .sliderImage{
        //                 width: 100%;
        //             }
        //             img {
        //                 width: 700px;
        //             }
        //         }
                
        //     }
        //     .lightgrey { 
        //         display: flex;
        //         justify-content: center;
        //         align-content: center;
        //         width: 30px;
        //         background: #95a5a6;
        //         height: 30px;
        //         position: relative;
        //         margin: 5%;
            
        // }
    }
 
        &-footer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            &__button {
                background-color: #0971c7;
                color: #fff;
                border: none;
                text-align: center;
                padding: 8px;
                font-size: 17px;
                font-weight: 500;
                border-radius: 8px;
                min-width: 150px;
            }
        }
    }

</style>
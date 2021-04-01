<template>
    <div class="v-sliderFoto-item" 
    :style="{background : item_foto.backgroundColor}"
    >
        <div class="v-slideritemContent">
            
            <div class="hover-image-6">
                <div class="iconFoto">
                    <img src='../../assets/images/photo.png' alt="">
                    <p>{{item_foto.image.length}}</p>
                </div>
                
                    <a ref="modal" @click="showModal">
                        <img class="imgUp"  :src="require('../../assets/images/'+ item_foto.img1)" alt="" />
                        <img src="../../assets/images/zoom-in.png" alt="" />
                    </a>

            </div>
            <hr>
            <div class="v-slider-title">
                <h5 class="titleJK">{{item_foto.title}}</h5>
                <p class="titleKurort">{{item_foto.raion}}</p>
                <p class="titleStar">{{item_foto.location}}</p>
                <div class="v-slider-titleId">
                    <p class="titleId">ID : {{item_foto.idx}}</p>
                    <p class="titleId">{{item_foto.box}}</p>
                    <p class="titleId">{{item_foto.m2}} м2</p>
                </div>
            </div>
            <div class="v-slider-price">
                <div class="titleStar2"><span>Старая цена :</span><p class="titleStar3">{{item_foto.price}}</p></div>
                <h5 class="titleJK">{{item_foto.nextPrice}} руб.</h5>
                <p class="titleKurort">{{item_foto.vasaV}}</p>
                <h4 class="titleKurort">{{item_foto.econom}} руб.</h4>
            </div>
            <div class="v-slider-btn">
                <a class="btnYallow">Оставить заявку</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "v-sliderFoto-item",
    props : {
        item_foto : {
            type : Object,
            default () {
                return {}
            }
        },
    },
    data(){
        return{
            password : true
        }
    },
    components : {
       
    },
    methods: {
        showModal() {
            this.$emit('showMod', this.password);
            //this.$refs.modal.show = true;
        },
    },
}
</script>

<style lang="scss">

.v-sliderFoto-item{
    width: 250px;
    max-width: 250px;
    border-radius: 10px;
    margin-top: 10%;
    padding: 0.5%;
    transition: 0.5s;
    margin: 1%;
    min-height: 400px;
    max-height: 420px;
    background: white;
    &:hover {
        transform: scale(1.020)
    }
    .v-slideritemContent{
        border-radius: 10px;
        hr{
            margin-left: 5%;
            width: 15%;
            
        }

        .v-slider-title, .v-slider-price {
            padding: 2%;
            .titleJK{
                color: black;
                font-size: 0.9em;
                font-family: 'Open Sans',sans-serif;
                margin-top: 1%;
                margin: 0;
                padding: 0;
            }
            .titleKurort {
                margin: 0;
                padding: 0;
                font-size: 0.75em;
                color: rgb(105, 106, 107);
            }
            .titleStar{
                margin: 0;
                padding: 0;
                font-size: 0.7em;
                color: rgb(94, 94, 94);
            }
            .titleStar2{
                display: flex;
                flex-direction: row;
                span {
                    margin: 0;
                    padding: 0;
                    font-size: 0.7em;
                    color: rgb(94, 94, 94);
                }
                .titleStar3{
                    margin-left: 1%;
                    padding: 0;
                    font-size: 0.7em;
                    color: rgb(94, 94, 94);
                    position: relative;
                    &::before {
                        content : "";
                        border-bottom: 1px solid rgb(136, 136, 136);
                        position: absolute;
                        top: 0;
                        left: 0;    
                        width: 100%;
                        height: 50%;
                    }
                }
            }
            .v-slider-titleId{
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                .titleId {
                    margin: 0;
                    padding: 0;
                    font-size: 0.65em;
                    color: rgb(65, 65, 65);
                }
            }
        }
        .v-slider-price{
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .v-slider-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15%;
            margin-top: 10%;
                .btnYallow{
                cursor: pointer;
                align-items: center;
                border: none;
                padding: 8px 28px;
                border-radius: 50px;
                color: rgb(63, 63, 63);
                padding-bottom: 3%;
                background: #FBE400;
                &:hover{
                color: rgb(87, 87, 87);
                background: #D5D7D8;
                }
            }
            
        }
    }
    .hover-image-6 {
        position: relative;
        overflow: hidden;
        display: inline-block;
        line-height: 0;
        }
        .hover-image-6 a {
        vertical-align: middle;
        img{
            height: 150px;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
        }
        .imgUp{
            max-height: 140px;
            
        }
        }
        .hover-image-6 img + img,
        .hover-image-6 img + i {

        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -32px;
        margin-left: -32px;
        width: 64px;
        height: 64px;
        transition: transform 0.7s ease 0s;
        transform: scale(0);
        font-size: 64px;
        color: rgb(255, 255, 255);
        z-index: 1;
        }
        .hover-image-6 a:hover img + img,
        .hover-image-6 a:hover img + i {
        transform: scale(1);
        opacity: 1;
        
        }
        .hover-image-6 a::before {
        border-radius: 10px 10px 0px 0px;
        transition: all 0.5s ease;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #bfe2ff;
        transform: scale(0);
        }
        .hover-image-6 a:hover::before {
        opacity: 0.5;
        transform: scale(1);
        }
        .hover-image-6 a::after {
        transition: all 0.6s ease 0.2s;
        content: "";
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
        border: 1px solid #aaa;
        background: #337ab7;
        opacity: 0;
        transform: scale(0);
        }
        .hover-image-6 a:hover::after {
        opacity: 0.35;
        transform: scale(1);
        }
    .iconFoto{
        width: 40px;
        position: absolute;
        margin: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: rgb(255, 242, 97);
        opacity: 0.9;
        border-radius: 5px;
        img{
            width: 60%;
        }
    }
}

</style>
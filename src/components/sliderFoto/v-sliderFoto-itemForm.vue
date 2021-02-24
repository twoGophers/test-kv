<template>
    <div class="v-sliderFoto-itemForm">
        <div class="v-sliderForm">
            <h6>Не нашли нужный вариант</h6>
            <h6>Мы подберем</h6>
            <h3>Оставьте</h3>
            <h3>Заявку</h3>
            <hr>
            <div class="inputForm">
                <input type="text" placeholder="Ваше имя">
                <input-mask v-model="value" mask="+7\ (999)-999-99-99" maskChar="" placeholder="Ваш телефон"></input-mask>
            </div>
            <a href="">Отправить</a>
        </div>
    </div>
</template>

<script>
import InputMask from 'vue-input-mask';


export default {
    name: "v-sliderFoto-itemForm",

    data(){
        return{
             value : ''
        }
    },
    components : {
        InputMask,
    }
}
</script>

<style lang="scss">
.v-sliderFoto-itemForm {
    position: relative;
    width: 250px;
    max-width: 250px;
    border-radius: 10px;
    margin-top: 10%;
    padding: 0.5%;
    transition: 0.5s;
    margin: 1%;
    background: #FBE400;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    max-height: 420px;
    .v-sliderForm{
        margin-top: 34%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            color:black;
            font-size: 1.5em;
        }
        h6{
            font-size: 0.8em;
            color:black;
        }
        hr{
            width: 20%;
            margin-top: 15%;
            margin-bottom: 15%;
        }
        .inputForm{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
            input {
                width: 90%;
                box-shadow: 0 0 3px black;
                border-radius: 20px;
                border: none;
                margin-top: 4%;
                margin-bottom: 5%;
                padding: 3%;
                background: #D5D7D8;
                opacity: 70%;
                outline:none;
            }
        }
        a{ 
            cursor: pointer;
            align-items: center;
            border: none;
            padding: 8px 28px;
            border-radius: 50px;
            color: rgb(63, 63, 63);
            padding-bottom: 3%;
            background: rgb(156, 156, 155);
            &:hover{
            color: rgb(87, 87, 87);
            background: #D5D7D8;
            }
        }

    }
}
@media screen and (max-width: 320px){}

</style>
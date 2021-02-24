<template>
    <div class="v-footerMen">
        <div class="v-footer">
            <div class="v-footer__title">
                <h3>Остались вопросы?</h3>
                <h5>Оставьте заявку и мы свяжемся с вами прямо сейчас!</h5>
            </div>
            <div class="v-footer__forma">
                <input type="text" placeholder="Ваше имя" >
                <input-mask v-model="value" mask="+7\ (999)-999-99-99" maskChar="" placeholder="Ваш телефон"  ></input-mask>
                <a href="">Отрпавить</a>
            </div>
        </div>
    </div>
</template>



<script>
import InputMask from 'vue-input-mask';

export default {
    name: "v-footer",
    components : {
        InputMask,
        
    },
    data() {
        return {
            value : ''
        }
    }
}
</script>

<style lang="scss">
.v-footer {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &__title{
        top: 1%;
        position: relative;
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        line-height: 2%;
        h3{
            color: rgb(39, 39, 39);
            font-size: 1.6em;
        }
        h5 {
            color: rgb(39, 39, 39);
            font-size: 0.9em;
        }
    }
    &__forma{
        margin: 3%;
        position: relative;
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
       input {
            width: 25%;
            box-shadow: 0 0 3px black;
            border-radius: 50px;
            border: none;
            margin-top: 2%;
            margin-bottom: 2%;
            padding: 0.7%;
            background: #D5D7D8;
            //opacity: 80%;
            outline:none;
            margin: 1%;
       }
       a{
            margin: 1%;
            cursor: pointer;
            align-items: center;
            border: none;
            padding: 7px 20px;
            border-radius: 50px;
            color: rgb(63, 63, 63);
            background: rgb(156, 156, 155);
            &:hover{
                color: rgb(87, 87, 87);
                background: #D5D7D8;
                opacity: 90%;
            }
        }
    }
}
@media (min-width: 320px) and (max-width: 520px) {
    .v-footer__title {
        width: 100%;
        margin-bottom: 2%;
        h3 {
            font-size: 1.3em;
        }
        h5 {
            font-size: 0.8em;
        }
    }
    .v-footer__forma{
        display: flex;
        flex-direction: column;
        input{
            width: 80%;
        }
        a{
            padding: 3px 16px
        }
    }
}
</style>
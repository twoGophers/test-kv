<template>
    <div class="v-otzivClient">
        <div class="otzivClient">
            <div class="otzivClient__title">
                <h6>Отзывы клиентов АПК</h6>
                <h2>Нам доверяют</h2>
                <hr>
            </div>
            <div class="otzivClient__content">
                <div class="otzivClient-Nina">
                    <div class="otzivClient-Nina__icon">
                        <div class="icon">
                            <a href="https://reviews.yandex.ru/user/ev1xgp7qmedg4zz8ama1vg4mt4?main_tab=org">H</a>
                        </div>
                    </div>
                    <div class="otzivClient-Nina__content">
                        <p>Нина Ч.</p>
                        <p class="znatok">Знаток города 2 уровня</p>
                        <div class="star5">
                            <div class="rating-result">
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span></span>

                            </div>
                            <p class="znatok">27 ноября 2020 </p>
                        </div>
                        <p>Отличная команда профессионалов! Если нет квартиры у Застройщика или цена кусается прямая дорога сюда. Всегда есть интересные предложения по всему спектру новостроек в Питере и Ленобласти. Грамотное сопровождение, электронная регистрация и главное милые и отзывчивые менеджеры.</p>
                        <p class="znatok">ответить</p>
                    </div>
                </div>
            </div>
            <div class="otzivClient__content">
                <div class="otzivClient-Nina">
                    <div class="otzivClient-Nina__icon">
                        <div class="icon">
                            <a href="https://reviews.yandex.ru/user/ev1xgp7qmedg4zz8ama1vg4mt4?main_tab=org">O</a>
                        </div>
                    </div>
                    <div class="otzivClient-Nina__content">
                        <p>Ольга Сычёва.</p>
                        <p class="znatok">Знаток города 3 уровня</p>
                        <div class="star5">
                            <div class="rating-result">
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span></span>

                            </div>
                            <p class="znatok">2 декабря 2020 </p>
                        </div>
                        <p>Хочу выразить огромную благодарность за помощь в проведении электронной регистрации! Герман настоящий знаток своего дела! Работает четко, всегда на связи и готов поучаствовать и подсказать в любой момент! Крайне приятно работать с профессионалами! Спасибо Вам огромное! Так держать!</p>
                        <p class="znatok">ответить</p>
                    </div>
                </div>
            </div>
            <div class="btnYnadex">
                <a href="https://yandex.ru/maps/org/agentstvo_podryadnykh_kvartir/135701954233/?ll=30.313716%2C59.958980&z=14">Все отзывы на Yandex</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "v-otzivClient"
}
</script>

<style lang="scss" >
.v-otzivClient{
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    .otzivClient{
        width: 40%;
        &__title{
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            hr{
                width: 5%;
                margin: 2%;
            }
            h2, h6 {
                margin: 0.5%;
            }
        }
        .otzivClient__content{
            margin-top: 3%;
            p {
                font-size: 0.9em;
                line-height:1.8;
            }
            .otzivClient-Nina{
                display: flex;
                flex-direction: row;
                .otzivClient-Nina__icon{
                    width: 10%;
                    display: flex;
                    justify-content: center;
                    margin-right: 4%;
                    .icon{
                        position: relative;
                        right: 2%;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        line-height: 40px;  
                        text-align: center; 
                        background: rgb(89, 208, 238);
                    }

                }
                &__content {
                    .znatok{
                        color: #999;}
                    .star5{
                        .rating-result span {
                            padding: 0;
                            font-size: 25px;
                            margin: 0 3px;
                            line-height: 1;
                            color: lightgrey;
                            text-shadow: 1px 1px #bbb;
                        }
                        .rating-result > span:before {
                            content: '★';
                        }
                        .rating-result > span.active {
                            color: gold;
                            text-shadow: 1px 1px #c60;
                        }
                    }
                }
            }
        }
        .btnYnadex{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 5%;
            margin-bottom: 5%;
            a{
                background: #D5D7D8;
                padding: 8px 20px;
                border-radius: 50px;
                color: rgb(75, 75, 75);
                &:hover{
                        background: rgb(229, 229, 230);
                        color: rgb(87, 87, 87);
                    }
                }
        }
    }
}
@media (min-width: 320px) and (max-width: 520px) {
    .v-otzivClient{
        width: 100%;
        .otzivClient{
        width: 100%;
        .otzivClient__content{
                p{
                    font-size: 0.8em;
                }
            }
        .otzivClient__title {
            h2{
                font-size: 1.1em;
            }
        }
        }
        
    }
}
</style>
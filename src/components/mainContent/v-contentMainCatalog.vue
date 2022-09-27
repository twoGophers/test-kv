<template>
    <div class="v-contentMainCatalog">
        <div class="v-contentMainCatalog__content">
            <div class="mainCatalog-title">
                <h6>Агенство Подрядных Квартир</h6>
                <h2>Причины работать с нами</h2>
                <hr>
            </div>

            <div class="mainCatalog-catalog"
               >
                    <vCatalogMainItem
                        v-for="item in catalogItem"
                        :key="item.id"
                        :item_data="item"
                        v-show="item.id < 7"
                        :style="showItemCatalog"
                    >
                    </vCatalogMainItem>
                </div>

            <div class="mainCatalog-button">
                <a class="btnYallow"
                 @click="toggleFeatures"
                 >{{ featuresOpen ? 'Больше причин' : 'Еще больше причин' }}
                 </a>
            </div>
        </div>
    </div>

</template>

<script>
import vCatalogMainItem from "./v-catalogMain-item"

export default {
    name : "v-contentMainCatalog",
    data () {
        return {
            width : null,
            featuresOpen : true,
            showItemCatalog : false,
            catalogItem : [
                {id : 1, images : 'job1.png', name : 'БАЗА ПОДРЯДНЫХ КВАРТИР', volume : 'В нашей базе боле 2000 объектов, которые стоят дешевле, чем у застройщиков', btn : ""},
                {id : 2, images : 'job5.png', name : 'ОЦЕНКА НЕДВИЖИМОСТИ', volume : 'Возможность зарабатывать на оценка недвижимости Ваших клиентов, не завышая цену оценка', btn : ""},
                {id : 3, images : 'job3.png', name : 'СТРАХОВОЙ БРОКЕР', volume : 'Подберем клиенту страховую компанию, проконсультируем, а агенту выплатим комиссию', btn : ""},
                {id : 4, images : 'job4.png', name : 'ЭЛЕКТРОННАЯ РЕГИСТРАЦИЯ', volume : 'Подавайте документы на сделке - экономьте свое время и время Ваших клиентов', btn : ""},
                {id : 5, images : 'job2.png', name : 'ИПОТЕЧНЫЙ БРОКЕР', volume : 'Одобрим клиента по ипотеке, а агенту выплатим вознаграждение', btn : ""},
                {id : 6, images : 'job6.png', name : 'ПРИЕМКА КВАРТИР', volume : 'Окажем услуги по профессиональной приемке квартир, а агенту заплатим вознаграждение', btn : ""},
            ]
        }
    },
    components : {
        vCatalogMainItem
    },
    methods: {
        toggleFeatures() {
            this.featuresOpen = !this.featuresOpen;
        }
    },
}
</script>

<style lang="scss">

.v-contentMainCatalog {
    top: 0;
    left: 0;
    margin: auto;
    position: absolute;
    z-index: 4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &__content {
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 4%;
        padding-bottom: 3%;
        .mainCatalog-title{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            h2, h6 {
                color: white;
            }
            hr {
                width: 15%;
            }
        }
        .mainCatalog-catalog {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        /* Анимации появления и исчезновения могут иметь */
        /* различные продолжительности и динамику.       */
        .slide-fade-enter-active {
        transition: all .3s ease;
        }
        .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
        }
        .mainCatalog-button{
            margin-bottom: 2%;
            margin-top: 4%;
            display: flex;
            flex-direction: row;

            .btnYallow{
                cursor: pointer;
                align-items: center;
                border: none;
                background: #FBE400;
                padding: 8px 28px;
                border-radius: 50px;
                color: rgb(63, 63, 63);
                padding-bottom: 3%;
                &:hover{
                        background: #D5D7D8;
                        color: rgb(87, 87, 87);
                    }
            }
            
        }
    }
}
</style>
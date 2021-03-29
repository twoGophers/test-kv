<template>
    <div class="v-footerBottom">
        <div class="v-footerBottom__left-content">
            <p class="footerBottom">© 2017-2021 Агентство подрядных квартир</p>
            <p class="footerBottom">Квартиры от подрядчиков в Санкт-Петербурге и Ленинградской области</p>
        </div>
        <div class="v-footerBottom__center-content">
            <a href=""> +7 (123) 123-45-67</a>
        </div>
        <div class="v-footerBottom__ringth-content">
            <p class="footerBottom"> создание сайта<a href="">AleksinSky</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-footerBottom"
}
</script>
<style lang="scss">
.v-footerBottom{
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgb(105, 105, 105);
    align-items: center;
    .footerBottom {
        font-size: 0.7em;
        margin: 2%;
        color: rgb(158, 158, 158);
    }
    a {
        color: white;
    }
}
@media (max-width: 520px) and (min-width: 320px) {
    .v-footerBottom{
        display: none;
    }
}
</style>
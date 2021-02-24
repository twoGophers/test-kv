<template>
        <div class="catalogItem"
        :style="showItemMain"
        >
            <img :src="require('../../assets/images/' + item_data.images)" alt=""
            :style="showItemMainImg"
            >
            <h4>БАЗА ПОДРЯДНЫХ КВАРТИР</h4>
            <p>В нашей базе более 2000 объектов, которые стоят дешевле, чем у застройщиков</p>
            <a href="">Подобнее</a>
        </div>

</template>

<script>
export default {
    name : "catalogItem",
    data() {
        return{
            width : null,
            showItemMain : false,
            showItemMainImg : false,
        }
    },
    props : {
        item_data : {
            type : Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
            if(window.innerWidth < 930) {
                this.showItemMainImg = { width: '8%', 'margin-top' : '1%'};
                this.showItemMain = { width: '100%'};
            } else {
                this.showItemMainImg = false;
                this.showItemMain = false;
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateWidth);

    },
    created() {
        window.addEventListener('resize', this.updateWidth);
        this.updateWidth();
    },
}
</script>

<style lang="scss">
.catalogItem {
        position: relative;
        width: 33.3%;
        display: flex;
        flex-direction: column;
        padding: 2%;
        text-align: center;
        align-items: center;
        //Анимация ~~
            // transition: all 1s;
            // animation: blockPages1 1s;
            // .Pages1 {
            // animation-play-state: running;
            // }
            // @keyframes blockPages1 {
            // 0%{ opacity: 0;}
            // 50%{ opacity: 0.5;}
            // 100%{ opacity: 1;}
            // }
        img {
            margin: 3%;
            width: 25%;
        }
        h4{
            font-weight: 700;
            margin: 0 auto;
            max-width: 100%;
            line-height: 1.45em;
            text-transform: uppercase;
            font-size: 12.81px;
            color: #fff;
        }
        p {
            font-size: 12.81px;
            color:rgb(255, 255, 255);
        }
        a{
            margin-top: 6%;
            border: 1px solid #FBE400;
            padding: 3px 22px;
            border-radius: 50px;
            color: rgb(253, 253, 253);
            &:hover{
            background: #D5D7D8;
            color: rgb(87, 87, 87);
            }
        }
    
}

@media (max-width : 320px) and (min-width: 520px){
.catalogItem {
    img {
        width: 50px;
    }
}
}
</style>
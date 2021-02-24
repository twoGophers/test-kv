<template>
    <div class="v-howWeWorking-item">
        <div class="howWeWorking-item__title">
            <div class="howWeWorking-item-numb"><h2>{{item_stage_worck.number}}</h2></div>
            <div class="howWeWorking-item-img">
                <img :src="require('../../assets/images/' + item_stage_worck.images)" alt="">
            </div>
        </div>
        <div class="howWeWorking-item-name">
            <h4>{{item_stage_worck.title}}</h4>
        </div>
        <div class="howWeWorking-item-list">
            <ul>
                <li
                v-for="item in item_stage_list"
                :key="item.idx"
                >{{item.valueList}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-howWeWorking-item",
    props : {
        item_stage_worck : {
            type : Object,
            default () {
                return {}
            }
        },
        item_stage_list : {
            type : Array,
            default () {
                return {}
            }
        },
    }
}
</script>

<style lang="scss">
.v-howWeWorking-item {
    display: flex;
    flex-direction: column;
    padding: 18px 12px;
    border-radius: 10px;
    box-shadow: 0 5px 15px -7px rgb(0 0 0 / 50%);
    width: 230px;
    height: 260px;
    padding: 0;
    min-width:210px;
    margin: 2%;
    .howWeWorking-item__title{
        display: flex;
        flex-direction: row;
        display: flex;
        .howWeWorking-item-numb{
            width: 50%;
            justify-content: center;
            align-items: center;
            display: flex;
            margin: 0;
            h2{
                color: #E7E7E7;
                font-size: 5em;
                font-family: Georgia, 'Times New Roman', Times, serif;
            }
        }
        .howWeWorking-item-img{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: radial-gradient(circle closest-corner at 50% 70%, #FFF37F 50%, transparent 50%);
            img{
                width: 70%;
            }
        }
    }
    .howWeWorking-item-name{
        color: #303030;
        font-size: 16.36px;
        font-weight: 900;
        padding: 0 10px;
        line-height: 2.5em;
        white-space: nowrap;
        margin: 3%;
    }
    .howWeWorking-item-list{
        clear: both;
        ul{
            margin-left: 5%;
            padding-left: 20px;
            li{
                position: relative;
                line-height: 1.35em;
                padding-bottom: 10px;
                font-size: 11.38px;
                color: #666;
                &::before {
                    content: '■';
                    color: #fbe400;
                    position: absolute;
                    top: 0;
                    right: 100%;
                    width: 20px;
                    line-height: .9em;
                    font-size: 1.2em;
                }
            }
        }
    }
}
</style>


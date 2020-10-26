<template>
    <div class="header layui-bg-black">
        <div class="layui-container">
            <a href="/" class="logo">
                <img src="../assets/img/logo-2.png" alt="">
            </a>
            <ul class="layui-nav nav-fly">
                <li class="layui-nav-item"><a href="/"><i class="iconfont icon-jiaoliu"/><span>交流</span></a></li>
                <li class="layui-nav-item "><a href="/"><i class="iconfont icon-anli"/><span>案例</span></a></li>
                <li class="layui-nav-item "><a href="/"><i class="iconfont icon-ui"/><span>UI框架</span></a></li>
            </ul>

        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        border-bottom: 1px solid #404553;
        .layui-container{
            height: 100%;
            position: relative;
            .logo{
                    display: inline-block;
                    height: 60px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    line-height: 60px;
                    img{
                        height: 60px;
                    }
                }
            .nav-fly{
                margin-left: 200px;
                padding: 0;
                .layui-nav-item{
                    span{
                        margin-left: 10px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>
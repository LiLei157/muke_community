<template>
    <div class="header layui-bg-black">
        <div class="layui-container layui-row">
            <div class="layui-nav nav-fly">
                <a href="/" class="logo">
                    <img src="../assets/img/logo-2.png" alt="" />
                </a>
                <ul class="nav_mid">
                    <li class="layui-nav-item">
                        <a href="/"
                            ><i class="iconfont icon-jiaoliu" /><span
                                >交流</span
                            ></a
                        >
                    </li>
                    <li class="layui-nav-item">
                        <a href="/"
                            ><i class="iconfont icon-anli" /><span
                                >案例</span
                            ></a
                        >
                    </li>
                    <li class="layui-nav-item">
                        <a href="/"
                            ><i class="iconfont icon-ui" /><span
                                >UI框架</span
                            ></a
                        >
                    </li>
                </ul>
                <ul class="nav_user">
                    <li class="layui-nav-item">
                        <a href="/#/login"
                            ><i class="iconfont icon-yonghu"></i>
                            <span>登录</span></a
                        >
                    </li>
                    <li class="layui-nav-item">
                        <a href="/#/register"><span>注册</span></a>
                    </li>
                    <li class="layui-nav-item">
                        <a href="/"><i class="iconfont icon-QQ" /></a>
                    </li>
                    <li class="layui-nav-item">
                        <a href="/"><i class="iconfont icon-weibo"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/commonHeader.scss'
</style>
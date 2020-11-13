<!-- 登录和注册页面公共的用户登录模块 -->
<template>
    <div class="layui-card">
        <div class="layui-tab layui-tab-brief">
            <ul class="layui-tab-title">
                <li
                    :class="{ 'layui-this': routerParam === 'login' }"
                    @click="$router.push({ name: 'login' })"
                >
                    登录
                </li>
                <li
                    :class="{ 'layui-this': routerParam === 'register' }"
                    @click="$router.push({ name: 'register' })"
                >
                    注册
                </li>
            </ul>
            <div class="layui-tab-content">
                <div
                    :class="[
                        'layui-tab-item',
                        { 'layui-show': routerParam === 'login' },
                    ]"
                >
                    <!-- <div>{{$v}}</div> -->
                    <form class="layui-form layui-form-pane">
                        <div
                            :class="[
                                'layui-form-item',
                                {
                                    'form-group--error':
                                        $v.form.username.$error,
                                },
                            ]"
                        >
                            <label class="layui-form-label">用户名</label>
                            <div class="layui-input-inline">
                                <input
                                    v-model.trim="$v.form.username.$model"
                                    type="email"
                                    class="layui-input"
                                    placeholder="请输入用户名"
                                    @blur="$v.form.username.$touch()"
                                    @input="$v.form.username.$touch()"
                                    autocomplete
                                />
                            </div>
                            <span
                                v-if="
                                    $v.form.username.$dirty &&
                                    !$v.form.username.required
                                "
                                class="layui-form-mid red"
                                >用户名不能为空</span
                            >
                            <span
                                v-if="
                                    $v.form.username.required &&
                                    !$v.form.username.email
                                "
                                class="layui-form-mid red"
                                >用户名格式错误</span
                            >
                        </div>
                        <div
                            class="layui-form-item"
                            :class="{
                                'form-group--error': $v.form.password.$error,
                            }"
                        >
                            <label for="" class="layui-form-label">密码</label>
                            <div class="layui-input-inline">
                                <input
                                    type="password"
                                    v-model="$v.form.password.$model"
                                    class="layui-input"
                                    placeholder="请输入密码"
                                    @blur="$v.form.password.$touch()"
                                    @input="$v.form.password.$touch()"
                                    autocomplete
                                />
                            </div>
                            <span
                                class="red"
                                v-if="
                                    $v.form.password.$dirty &&
                                    !$v.form.password.required
                                "
                                >密码不能为空</span
                            >
                        </div>

                        <div
                            class="layui-form-item"
                            :class="{
                                'form-group--error': $v.form.code.$error,
                            }"
                        >
                            <label for="" class="layui-form-label"
                                >验证码</label
                            >
                            <div class="layui-input-inline">
                                <input
                                    v-model="$v.form.code.$model"
                                    type="text"
                                    class="layui-input"
                                    placeholder="请输入验证码"
                                    @blur="$v.form.code.$touch()"
                                    @input="$v.form.code.$touch()"
                                    autocomplete
                                />
                            </div>
                            <span v-html="svg" @click="changeCode"></span><br />
                            <span
                                class="red"
                                v-if="
                                    $v.form.code.$dirty &&
                                    !$v.form.code.required
                                "
                                >验证码不能为空</span
                            >
                        </div>

                        <div class="layui-form-item">
                            <button class="layui-btn" @click="submitLogin">
                                立即登录
                            </button>
                        </div>
                    </form>
                </div>

                <div
                    :class="[
                        'layui-tab-item',
                        { 'layui-show': routerParam === 'register' },
                    ]"
                >
                    <form class="layui-form layui-form-pane">
                            <div class="layui-form-item">
                            <label for="" class="layui-form-label">用户名</label>
                            <div class="layui-input-inline">
                                <input
                                    lay-verify="required | email"
                                    v-model="form.username"
                                    type="email"
                                    as="input"
                                    rules="required"
                                    class="layui-input"
                                    placeholder="请输入用户名"
                                    autocomplete
                                />
                            </div>
                        </div>

                        <div
                            class="layui-form-item"
                            v-if="routerParam === 'register'"
                        >
                                <label for="" class="layui-form-label"
                                    >昵称</label
                                >
                                <div class="layui-input-inline">
                                    <input
                                        lay-verify="required"
                                        label="昵称"
                                        requir
                                        v-model="form.name"
                                        type="text"
                                        class="layui-input"
                                        placeholder="请输入昵称"
                                        autocomplete
                                    />
                                </div>
                        </div>
                        <div class="layui-form-item">
                            <label for="" class="layui-form-label">密码</label>
                            <div class="layui-input-inline">
                                <input
                                    type="password"
                                    class="layui-input"
                                    placeholder="请输入密码"
                                    autocomplete
                                />
                            </div>
                        </div>
                        <div
                            class="layui-form-item"
                            v-if="routerParam === 'register'"
                        >
                            <label for="" class="layui-form-label"
                                >确认密码</label
                            >
                            <div class="layui-input-inline">
                                <input
                                    type="password"
                                    class="layui-input"
                                    placeholder="请再次输入密码"
                                    autocomplete
                                />
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <label for="" class="layui-form-label"
                                >验证码</label
                            >
                            <div class="layui-input-inline">
                                <input
                                    v-model="form.code"
                                    type="text"
                                    class="layui-input"
                                    placeholder="请输入验证码"
                                    autocomplete
                                />
                            </div>
                            <span v-html="svg" @click="changeCode"></span>
                        </div>

                        <div class="layui-form-item">
                            <button
                                class="layui-btn"
                                type="button"
                                @click="submitRegister"
                            >
                                立即注册
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import uuid4 from "uuid/dist/v4";
import { required, email } from "vuelidate/lib/validators";
// import { ValidationProvider } from "vee-validate";
export default {
    components: {
        // ValidationProvider,
    },
    data() {
        return {
            form: {
                username: "",
                password: "",
                code: "",
                name: "", // 昵称，后面再改
                v: this.$v,
            },
            svg: "",
        };
    },
    // vuelidate 验证器
    validations: {
        form: {
            username: { required, email },
            password: { required },
            code: { required },
            name: { required },
        },
    },
    computed: {
        routerParam() {
            return this.$route.name;
        },
    },
    mounted() {
        this.getCode();
        let sid;
        if (sessionStorage.getItem("sid")) {
            sid = sessionStorage.getItem("sid");
        } else {
            sid = uuid4();
            sessionStorage.setItem("sid", sid);
        }
    },
    methods: {
        submitLogin() {
            this.axios
                .post("/login/login", {
                    username: this.form.username,
                    password: this.form.password,
                    code: this.form.code,
                    sid: sessionStorage.getItem("sid"),
                })
                .then((res) => {
                    console.log(res);
                });
        },
        getCode() {
            let sid = sessionStorage.getItem("sid");
            this.axios
                .get("/public/getCode", { params: { sid: sid } })
                .then((res) => {
                    this.svg = res.data.data;
                    // console.log(this.svg)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        changeCode() {
            this.getCode();
        },
        submitRegister() {
            let sid = sessionStorage.getItem("sid");
            this.axios
                .post("/login/register", {
                    username: this.form.username,
                    password: this.form.password,
                    sid: sid,
                    code: this.form.code,
                    name: this.form.name,
                })
                .then((res) => {
                    switch(res.data.code){
                        case 200:
                            this.$router.push({name:'login'})
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.red {
    color: red;
}
</style>
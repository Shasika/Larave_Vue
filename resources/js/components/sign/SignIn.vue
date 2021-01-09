<template>
    <div>
        <div class="test">
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="" class="sign-in-form" @submit.prevent="submit">
                        <h2 class="title">Login</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" v-model="form.email">
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" v-model="form.password">
                        </div>
                        <input type="submit" value="Login" class="btn solid">

                        <p class="social-text">Or Login with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    <form action="" class="sign-up-form" @submit.prevent="register">
                        <h2 class="title">Sign Up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" v-model="registration.name">
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="text" placeholder="Email" v-model="registration.email">
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" v-model="registration.password">
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Confirm Password" v-model="registration.password_confirmation">
                        </div>
                        <input type="submit" value="Sign Up" class="btn solid">

                        <p class="social-text">Or Sign Up with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New hear ?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <button class="btn transparent" id="sign-up-btn">Sign Up</button>
                    </div>

                    <img v-bind:src="'images/log.svg'" class="image" alt="">
                </div>

                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                        <button class="btn transparent" id="sign-in-btn">Login</button>
                    </div>

                    <img v-bind:src="'images/sign.svg'" class="image" alt="">
                </div>
            </div>
        </div>

<!--        <div class="container mt-5 border border-secondary">-->
<!--            <form class="form-group" @submit.prevent="submit">-->
<!--                <div class="form-group">-->
<!--                    <label for="email">-->
<!--                        Email-->
<!--                    </label>-->
<!--                    <input class="form-control" type="text" name="email" id="email" v-model="form.email">-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label for="password">-->
<!--                        Password-->
<!--                    </label>-->
<!--                    <input class="form-control" type="password" name="password" id="password" v-model="form.password">-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <button class="btn btn-primary" type="submit">-->
<!--                        Sign in-->
<!--                    </button>-->
<!--                </div>-->
<!--            </form>-->
<!--        </div>-->



    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    comments:{

    },
    data(){
        return{
            form:{
                email:'',
                password:'',
            },
            registration:{
                name:'',
                email:'',
                password:'',
                password_confirmation:''
            },
        }
    },
    mounted() {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const test = document.querySelector(".test");

        sign_up_btn.addEventListener('click', () => {
            test.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener('click', () => {
            test.classList.remove("sign-up-mode");
        });
    },
    methods:{
        ...mapActions({
            signIn: 'auth/signIn'
        }),
        submit(){
            this.signIn(this.form).then(()=>{
                this.$router.replace({
                    name : 'dashboard'
                })
            })
        },
        register(){
            axios.post('/api/auth/signup',
                this.registration
            ).then(response => {
                console.log(response.data);
            });
             location.reload();
            //this.$router.push({path: "/signin"});

        },
    }

}

</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body, input{
    font-family: 'Poppins', sans-serif;
}

.test{
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
}

.test:before{
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #4481eb, #04befe);
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
}

.forms-container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.signin-signup{
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
    transition: 1s 0.7s ease-in-out;
}

form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5rem;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    transition: 0.2s 0.7s ease-in-out;
}

form.sign-in-form{
    z-index: 2;
}

form.sign-up-form{
    z-index: 1;
    opacity: 0;
}


.title{
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
}

.input-field{
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 .4rem;
}

.input-field i{
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
}

.input-field input{
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
}

.input-field input::placeholder{
    color: #aaa;
    font-weight: 500;
}

.btn{
    width: 150px;
    height: 49px;
    border: none;
    outline: none;
    border-radius: 49px;
    cursor: pointer;
    background-color: #5995fd;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;
}

.btn:hover{
    background-color: #4d84e2;
}

.social-text{
    padding: .7rem 0;
    font-size: 1rem;
}

.social-media{
    display: flex;
    justify-content: center;
}

.social-icon{
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    border-radius: 50%;
    transition: 0.3s;
}

.social-icon:hover{
    color: #4481eb;
    border-color: #4481eb;
}

.panels-container{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.panel{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 7;
}

.left-panel{
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
}

.right-panel{
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
}

.panel .content{
    color: #fff;
    transition: .9s .6s ease-in-out;
}

.panel h3{
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
}

.panel p{
    font-size: 0.95rem;
    padding: 0.7rem 0;
}

.btn.transparent{
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-weight: 600;
    font-size: 0.8rem;
}

.image{
    width: 100%;
    transition: 1.1s .4s ease-in-out;
}

.right-panel .content, .right-panel .image{
    transform: translateX(800px);
}

/* ANIMATION */

.test.sign-up-mode:before{
    transform: translate(100%, -50%);
    right: 52%;
}

.test.sign-up-mode .left-panel .image,
.test.sign-up-mode .left-panel .content{
    transform: translateX(-800px);
}

.test.sign-up-mode .right-panel .content,
.test.sign-up-mode .right-panel .image{
    transform: translateX(0px);
}

.test.sign-up-mode .left-panel{
    pointer-events: none;
}

.test.sign-up-mode .right-panel{
    pointer-events: all;
}

.test.sign-up-mode .signin-signup{
    left: 25%;
}

.test.sign-up-mode form.sign-in-form{
    z-index: 1;
    opacity: 0;
}

.test.sign-up-mode form.sign-up-form{
    z-index: 2;
    opacity: 1;
}

@media (max-width: 870px){
    .test{
        min-height: 800px;
        height: 100vh;
    }

    .test:before{
        width: 1500px;
        height: 1500px;
        left: 30%;
        bottom: 68%;
        transform: translateX(-50%);
        right: initial;
        top: initial;
        transition: 2s ease-in-out;
    }

    .signin-signup{
        width: 100%;
        left: 50%;
        top: 95%;
        transform: translate(-50%, -100%);
        transition: 1s 0.8s ease-in-out;
    }

    .panels-container{
        z-index: 10;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 1fr;
    }

    .panel{
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 2.5rem 8%;
    }

    .panel .content{
        padding-right: 15%;
        transition: 0.9s 0.8s ease-in-out;
    }

    .panel h3{
        font-size: 1.2rem;
    }

    .panel p{
        font-size: 0.7rem;
        padding: 0.5rem 0;
    }

    .btn.trasparent{
        width: 110px;
        height: 35px;
        font-size: 0.7rem;
    }

    .image{
        width: 200px;
        transition: 0.9s 0.6s ease-in-out;
    }

    .left-panel{
        grid-row: 1 / 2;
    }

    .right-panel{
        grid-row: 3 / 4;
    }


    .right-panel .content, .right-panel .image{
        transform: translateY(300px);
    }

    .test.sign-up-mode:before{
        transform: translate(-50%, 100%);
        bottom: 32%;
        right: initial;
    }

    .test.sign-up-mode .left-panel .image,
    .test.sign-up-mode .left-panel .content{
        transform: translateY(-300px);
    }

    .test.sign-up-mode .signin-signup{
        top: 5%;
        transform: translate(-50%, 0);
        left: 50%
    }
}

@media (max-width: 570px){
    form{
        padding: 0 1.5rem;
    }

    .image{
        display: none;
    }

    .panel .content{
        padding: 0.5rem 1rem;
    }

    .test:before{
        bottom: 72%;
        left: 50%;
    }

    .test.sign-up-mode:before{
        bottom: 28%;
        left: 50%;
    }
}
</style>

<template>
  <div id="app" >
    <div id="nav">
      <img id="tgMenu" src='../public/TG1.svg'>
      <router-link :to="{ name: 'cidades' }">Cidades</router-link> 
      <router-link :to="{ name: 'jogos' }">Jogos</router-link> 
      <router-link :to="{ name: 'sobre' }">Sobre nós</router-link> 
      <b-button id="registarBtn" v-b-modal.registarModal>Registar</b-button>
      <b-modal ref="registarModal" id="registarModal">
        <template #modal-header="{close}">
            <h4 class="modalTitulo">Regista-te</h4> 
            <p class="modalSubTitulo">Junta-te a nós e diverte-te com as atividades que temos preparados para ti!</p>
            <b-button @click="close" variant="info" class='fecharRegistar'>x</b-button>
        </template>
        <template>
          <form @submit.prevent="registar">
            <input type="url" id="foto" v-model="foto">
            <label for="name">Nome: </label>
            <input type="text" id="name" v-model="name">
            <label for="username">Nome de utilizador: </label>
            <input type="text" id="username" v-model="username">
            <br>
            <label for="distrito">Distrito: </label>
            <input type="text" id="distrito" v-model="distrito">
            <label for="email">Email: </label>
            <input type="email" id="email" v-model="email">
            <br>
            <label for="password">Password :  </label>
            <input type="password" id="password" v-model="password">
            <label for="passwordConfirm">Confirma a password :  </label>
            <input type="password" id="passwordConfirm" v-model="passwordConfirm">
          </form>
        </template>
        <template #modal-footer>
            <b-button class="modalFooter" id='registar' @click='registar()'>Registar</b-button>
        </template>
      </b-modal>
    </div>
    <img id="tg" src='../public/tg.svg'>
    <div id="loginModal"> 
       <form @submit.prevent="login">
          <h3 id="msgLogin">Iniciar sessão</h3>
          <input type="text" id="usernameLogin" placeholder="   Nome de utilizador" v-model="usernameLogin">
          <br>
          <input type="password" id="passwordLogin" placeholder="   Password" v-model="passwordLogin">
          <p id="msgRegistate">Ainda não tens conta? Registas-te</p>
        </form>
        <b-button id='loginBtn' @click='login()'>Entrar</b-button>
    </div>
    <div id="brownBG">
      <h3 id="msg1">----------------------      Fica a saber quais são as cidades disponíveis      ----------------------</h3>
      <img id="distritos" src='../public/distritos.svg'>
      <h3 id="msg1">-----------------      Alguns jogos que vão testar os teus conhecimentos sobre as cidades     -----------------</h3>
      <img id="distritos" src='../public/jogos.svg'>
      <h3 id="msg1">-----------------------------------------     Sobre nós    -------------------------------------------</h3>
      <div id="aboutModal">
        <h3 id="h3a">Vais viajar?</h3>
        <p id="pa">Vais viajar e não sabes o que fazer? Mas, por outro lado, gostas de te divertir nessas belas jornadas pelo <br/> país? Então, este espaço é dedicado a ti! Aqui podes encontrar atividades que se adaptam a ti  <br/> e ao que tu procuras. 

           <br/> <br/> Junta-te a nós e vê-nos a preparar as tuas atividades para a viagem, de forma a proporcionar-te o melhor tempo possível, enquanto descobres o melhor do local.</p>

        <h3 id="h3a">Da ideia à realidade...</h3>
        <p id="pa">Este projeto foi desenvolvido no âmbito da disciplina "Projeto II" com a finalidade de proporcionar viagens mais desafiantes e dar a conhecer melhor as cidades do nosso país. </p>
        <img id="plane" src='../public/plane.png'>
      </div>
    </div>
    <go-top></go-top>
    <router-view />
  </div>
</template>

<script src="vue.js"></script>
<script src="vue-go-top.min.js"></script>
<script>
Vue.use(GoTop);
new Vue({
  el: '#app'
});
</script>
<script>
import { mapGetters, mapMutations } from "vuex";


export default {
  data(){
    return {
      foto: "",
      name: "",
      username: "",
      distrito: "",
      email: "",
      password: "",
      passwordConfirm: "",
      usernameLogin: "",
      passwordLogin: "",
      users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    }
  },
  computed: {
    ...mapGetters(["isUsernameAvailable", "isUser"]),
  },
  methods: {
    login() {
      if (this.isUser(this.usernameLogin, this.passwordLogin)) {
        this.SET_LOGGED_USER(this.usernameLogin);
        alert("inicancoiwn")
      } else {
        alert("Conta não registada!");
      }
    },
    ...mapMutations(["SET_LOGGED_USER"]),
  
    registar() {
      if (this.isUsernameAvailable(this.username)) {
        let newUser = {name: this.name,
                      username: this.username,
                      password: this.password,
                      passwordConfirm: this.passwordConfirm,
                      email: this.email,
                      distrito: this.distrito,
                      foto: "",
                      type: "user",
                      }
        if (this.password == this.passwordConfirm){
          this.SET_NEW_USER(newUser);
          alert("Conta criada")
        } else 
          alert("Passwords diferentes")

      } else {
        alert("Utilizador já registado");
      }
    },
    ...mapMutations(["SET_NEW_USER"]),
  },
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('../public/10.png');
  background-attachment: fixed;
  background-size: 100%;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 130%;
  pointer-events: auto;
  background-color: rgb(190, 0, 0);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

/* NAVBAR */
#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-left: 4vh;
  font-size: 1.3vw;
}

input{
  border-color: #3580D2;
  border-radius: 5px;
}

#registarBtn {
  position: relative;
  right: 5vh;
  margin-left: 10vh;
  width: 8vw;
  height: 6vh;
  padding-bottom: 20px;
  font-size: 1.3vw;
  background-color: #5DA9BE;
  color: white;
  border-radius: 25px;
  border-color: white;
  border-width:  2px;
}

/* CSS DA IMAGEM INICIAL */
#tg {
  position: relative;
  top: 24vh;
  right: 23%;
  width: 50vh;
}

/* CSS DA IMAGEM na NAVBAR */
#tgMenu {
  position: relative; 
  right: 110vh;
}

/* MODAL DE LOGIN */
#loginModal {
  position: relative;
  margin-top: -4%;
  margin-left: 55%;
  color: white;
  border-color: #ffffff;
  border-width: 2px;
  width: 35vw;
  height: 50vh;
  background-color: #5da9be85;
  border-radius: 30px;
}

#msgLogin{
  position: relative;
  padding-top: 35px;
  font-size: 35px;
}

#usernameLogin{
  position: relative;
  margin-top: 15px; 
  width: 23vw;
  height: 7vh;
  font-size: 1vw;
}

#passwordLogin{
  position: relative;
  margin-top: 15px;
  width: 23vw;
  height: 7vh;
  font-size: 1vw;
}

#msgRegistate{
  position: relative;
  margin-top: 10px;
  font-size: 11px;
}

#loginBtn {
  position: relative;
  margin-top: 5px;
  width: 8vw;
  height: 7vh;
  font-size: 1.3vw;
  background-color: #5DA9BE;
  color: white;
  border-radius: 25px;
  border-color: white;
  border-width:  3px;
}

/* brownBG */
#brownBG{
  position: relative;
  background-image: linear-gradient(to bottom, rgba(28,19,18, 0.9), rgba(28,19,18,1));
}

/* MENSAGENS */
#msg1{
  font-size: 2vw;
  color: white;
  margin-top: 250px;
  margin-bottom: 5vw;
}

/* DISTRITOS */
#distritos{
  position: relative;
  width: 70%;
}

/* aboutModal */
#aboutModal{
  margin: auto;
  color: white;
  border-color: #ffffff;
  border-width: 2px;
  width: 70vw;
  height: 75vh;
  background-color: #5da9be85;
  border-radius: 30px;
}

#h3a{
  padding-top: 10vh;
  padding-left: 15vh;
  text-align: left;
}

#pa{
  padding-top: 1vh;
  padding-left: 15vh;
  padding-right: 15vh;
  text-align: justify;
  font-size: 1.1vw;
}

#plane{
  position: relative;
  top: -65vh;
  left: 26vw;
  width: 20vw;
}

</style>

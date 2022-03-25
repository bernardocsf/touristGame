import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: localStorage.users
    ? JSON.parse(localStorage.users)
    : [
        {
          name: "Bernardo",
          username: "User",
          password: "Esmad_2122",
          email: "bernardocoelhoferreira@gmail.com",
          distrito: "leiria",
          foto: "",
          type: "user",
        },
        {
          name: "Bernardo",
          username: "Admin",
          password: "Esmad_2122",
          email: "bernardocoelhoferreira@gmail.com",
          distrito: "leiria",
          foto: "",
          type: "admin",
        }
      ],

    distritos: localStorage.distritos
    ? JSON.parse(localStorage.distritos)
    : [
        {
          name: "Lisboa",
          foto: "../assets/images/lisboa.svg",
          info: "Lisboa, terra das sete colinas, terra de Fernando Pessoa. Uma cidade para se apaixonar a primeira vista, no qual encontrará a combinação perfeita que todo viajante procura: beleza, cultura, gastronomia, com um excelente custo-benefício. Para te ajudar a programar sua viagem, listamos abaixo os pontos turísticos que mais recomendamos visitar. A lista está organizada em uma mistura de mais recomendado para menos recomendado, porém pontos turísticos que são próximas, estão agrupados na lista para te ajudar a planejar melhor. Caso tenha mais tempo em Portugal, não deixe de visitar nossas outras seções do site, com dicas de viagens bate-e-volta e outros lugares para visitar.",
          ppt1: "../assets/images/pptL1.svg",
          ppt2: "../assets/images/pptL2.svg",
          ppt3: "../assets/images/ppL3.svg",
          j1: "../assets/images/jL1.svg",
          j2: "../assets/images/jL2.svg",
          j3: "../assets/images/jL3.svg",
        }
      ],
    loggedUser: null,
  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),
    isUsernameAvailable: (state) => (username) =>
      state.users.every((user) => user.username !== username),
    getLoggedUser: (state) => state.loggedUser,
  },
  mutations: { 
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },
  },
  actions: {},
  modules: {},
});

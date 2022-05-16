<template>
  <div id="about">
    <div id="nav">
        <img id="tgMenu" src='https://istprogg.sirv.com/TG2.svg'> 
        <a href="#msgDistritos">Cidades</a>
        <a href="#msgJogos">Jogos</a> 
        <a href="#msgAbout">Quadro de líderes</a> 
        <a href="#msgAbout">Terminar Sessão</a> 
        <!-- <img id="perfil" :src="getLoggedUser.foto"> -->
      <router-view />
    </div>
    <div>
      <h3 id="msgDistritosMovimentados">Caso queiras visitar cidades mais movimentadas...</h3>
      <div>
        <img id="imgDistritosMovimentados" src="https://istprogg.sirv.com/distritosMovimentados.svg"> 
        <img id="cardImgLisboa1" src="https://istprogg.sirv.com/distritosMovimentados.svg">
      </div>
    </div>
    <div id="distritosTranquilos">
     <h3 id="msgDistritosTranquilos">Preferes desfrutar de uma cidade mais tranquila?</h3>
      <div>
        <img id="imgDistritosTranquilos" src="https://istprogg.sirv.com/distritosTranquilos.svg"> 
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

#about {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #8DC2D1;
  background-image: url('https://istprogg.sirv.com/vetores.svg');;
  background-attachment: fixed;
  background-size: 100%;
}

a{
  text-decoration: none;
}

p{
  color: white;
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
  font-size: 14pt;
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
  font-size: 13pt;
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
  font-size: 25pt;
}

#usernameLogin{
  position: relative;
  margin-top: 15px; 
  width: 23vw;
  height: 7vh;
  font-size: 10pt;
}

#passwordLogin{
  position: relative;
  margin-top: 15px;
  width: 23vw;
  height: 7vh;
  font-size: 10pt;
}

#msgRegistate{
  position: relative;
  margin-top: 10px;
  font-size: 12pt;
}

#msgRegistateBtn{
  color: #5DA9BE;
}

#loginBtn {
  position: relative;
  margin-top: 5px;
  width: 8vw;
  height: 7vh;
  font-size: 15pt;
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

/* DISTRITOS MOVIMENTADOS*/
#msgDistritosMovimentados{
  font-size: 15pt;
  color: white;
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: 100px;
  text-align: left;
}

#imgDistritosMovimentados{
  width: 88%;
}

#cardImgLisboa1{
  position: relative;
  top: -9.3vw;
  right: 35.7%;
  width: 16.5%;
}

/*  DISTRITOS TRANQUILOS */

#msgDistritosTranquilos{
  font-size: 15pt;
  color: white;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 100px;
  text-align: left;
}

#imgDistritosTranquilos{
  width: 88%;
}

#cardImgLisboa2{
  position: relative;
  top: -9.3vw;
  right: 35.7%;
  width: 16.5%;
}



#distritos{
  position: relative;
  width: 70%;
}



/* JOGOS */
#msgJogos{
  font-size: 20pt;
  color: white;
  margin-top: 250px;
  margin-bottom: 5vw;
}

#jogos{
  position: relative;
  width: 70%;
}

/* aboutUs */
#msgAbout{
  font-size: 20pt;
  color: white;
  margin-top: 250px;
  margin-bottom: 5vw;
}

#aboutUs{
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
  font-size: 11pt;
}

#plane{
  position: relative;
  width: 10vw;
  margin-top: -94vh;
  left: 27vw;
}

/* FOOTER  */
#footerRH{
  font-size: 15pt;
  color: white;
  margin-top: 5vw;
}

#footerL {
  margin-left: 12vw;
  text-align: left;
}

#footerR {
  margin-right: 12vw;
  text-align: right;
}

.column {
  width: 22%;
}

.row {
  width: 100%;
}

/* ARROWUP */
#setaUp{
  z-index: 1;
  position: fixed;
  bottom: 4vh;
  right: 3vw;
}


</style>

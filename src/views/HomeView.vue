<script setup>

import { onMounted, ref } from 'vue'

let casilla_1_1
let casilla_1_2
let casilla_1_3
let casilla_2_1
let casilla_2_2
let casilla_2_3
let casilla_3_1
let casilla_3_2
let casilla_3_3

const playerNum=ref(1);

const misPruebas = ref();

let tablero = [
  [casilla_1_1, casilla_1_2, casilla_1_3],
  [casilla_2_1, casilla_2_2, casilla_2_3],
  [casilla_3_1, casilla_3_2, casilla_3_3]
];


/*
function AddClickListener(){
  let arrayInputs= document.querySelectorAll("#zonaJuego input");

  arrayInputs.forEach((eachInput, index)=>{
    eachInput.addEventListener("click", (event) =>{
      //console.log("hola");
      misPruebas.value="PasoPorAqui" + event.target.value;
    });    
  })

}


onMounted(() => {
  let esto=AddClickListener();
  console.log(esto);
  
})*/

function changeValue(event){

  let myTarget=event.target;
  
  if(myTarget.getAttribute("value")===null){

    myTarget.setAttribute("value", TranslateIntoSimbol());
    
    playerNum.value=ChangePlayer();
    
  }
  else{
    alert("Casilla ocupada");
  }
 

}

function TranslateIntoSimbol(){
  if(playerNum.value===1){
    return "X";
  }
  if(playerNum.value===2){
    return "O"
  }
}

function ChangePlayer(){
  if(playerNum.value===1){
    return 2;
  }
  if(playerNum.value===2){
    return 1;
  }
}



</script>

<template>
  <main>
    <div>
      <label>Turno del Jugador: <scope>{{playerNum}}</scope></label>
      <p>{{ misPruebas }}</p>
    </div>

    <div id="zonaJuego">
      
      <input maxlength="1" type="Button" value="" tag="1" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="2" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="3" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="4" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="5" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="6" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="7" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="8" @click="changeValue($event)"/>
      <input maxlength="1" type="Button" value="" tag="9" @click="changeValue($event)"/>
    </div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

:deep()input {
  border: 1px solid black;
  width: 30%;
  aspect-ratio: 1/1;
  size: 1;
  text-align: center;
  font-size: 15vw;
}
</style>

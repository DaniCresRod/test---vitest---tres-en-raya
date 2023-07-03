<script setup>

let casilla_1_1;
let casilla_1_2;
let casilla_1_3;
let casilla_2_1;
let casilla_2_2;
let casilla_2_3;
let casilla_3_1;
let casilla_3_2;
let casilla_3_3;

let tablero=[ [casilla_1_1, casilla_1_2, casilla_1_3],
              [casilla_2_1, casilla_2_2, casilla_2_3],
              [casilla_3_1, casilla_3_2, casilla_3_3]];         


</script>

<template>
  <main>
    <div>
      <label>Turno del Jugador: <scope>1</scope></label>
    </div>
    
    <div id="zonaJuego">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">
    <input maxlength="1" type="Button" value="">

    </div>     
    
  </main>
</template>

<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

:deep()input{
  border:1px solid black;
  width:30%;
  aspect-ratio: 1/1;
  size: 1; 
  text-align: center;
  font-size: 15vw;
}
</style>

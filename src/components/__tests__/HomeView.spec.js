import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'

describe('HomeView', () => {

  //Defino donde busco
  const wrapper = mount(HomeView);
  
  it('has 9 input labels', () => {    
    
    //Busco los hijos directos que sean input
    let numOfInputs=wrapper.find("[id='zonaJuego']").element.querySelectorAll(":scope > input").length;
    
    //Testeo si esta bien
    expect(numOfInputs).toBe(9);
  })

  it('each input is clickable', () =>{
    let arrayOfInputs=wrapper.find("[id='zonaJuego']").element.querySelectorAll(":scope > input");
    
    arrayOfInputs.forEach(eachInput=>{

      expect(eachInput).toBe()

    })

  })
})

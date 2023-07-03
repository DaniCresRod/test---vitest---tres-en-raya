import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../../views/HomeView.vue'

describe('HomeView', () => {
  //Defino donde busco
  const wrapper = mount(HomeView)

  it('has 9 input labels', () => {
    //Busco los hijos directos que sean input
    let numOfInputs = wrapper.find("[id='zonaJuego']").element.querySelectorAll(':scope > input').length

    //Testeo si esta bien
    expect(numOfInputs).toBe(9)
  })

  it('has bottons that change their value when clicked', () => {
    let arrayOfInputs = wrapper.find("[id='zonaJuego']").element.querySelectorAll(':scope > input');

    let arrayOfValuesBefore=[];
    let arrayOfValuesAfter=[];

    arrayOfInputs.forEach((eachInput) => {  
      
      arrayOfValuesBefore.push(eachInput.getAttribute("value"));

      eachInput.dispatchEvent(new Event("click"));

      arrayOfValuesAfter.push(eachInput.getAttribute("value")); 
    })

    //console.log(arrayOfValuesBefore);
    //console.log(arrayOfValuesAfter);

    expect(arrayOfValuesBefore===arrayOfValuesAfter).toBe(false);
  })

  it('does not change the value of a previously changed grid square', () => {
    let arrayOfInputs = wrapper.find("[id='zonaJuego']").element.querySelectorAll(':scope > input');

    let arrayOfValuesBefore=[];
    let arrayOfValuesAfter=[];

    arrayOfInputs.forEach((eachInput) => {  
      
      arrayOfValuesBefore.push(eachInput.getAttribute("value"));

      eachInput.dispatchEvent(new Event("click"));

      arrayOfValuesAfter.push(eachInput.getAttribute("value")); 
    })

    console.log(arrayOfValuesBefore);
    console.log(arrayOfValuesAfter);
    
    expect(arrayOfValuesBefore).toStrictEqual(arrayOfValuesAfter); 
  })


})

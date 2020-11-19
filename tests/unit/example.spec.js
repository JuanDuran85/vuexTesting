import { shallowMount } from '@vue/test-utils';
import TodoAdd from '../../src/components/TodoAdd.vue';

describe('Probando TodoAdd componente...', () => {
  it('prueba N° 1', () => {
        const wrapper = shallowMount(TodoAdd);
        const datosWrapper = TodoAdd.data();

        expect(datosWrapper.tarea).toEqual("");
        expect(wrapper.vm._isMounted).toBe(true);

        let input = wrapper.find("input");
        expect(input.element.placeholder).toBe("");

      let htmlTexto = `
        <label for=\"agregarTarea\">Agrega una tarea a realizar:</label>
       `
      expect(wrapper.find('.form-group').element.firstChild).toEqual(htmlTexto);
  });
  it('prueba N° 2', () => {
        const wrapper = shallowMount(TodoAdd);
        expect(wrapper.find("button").text()).toBe("Agregar");
        let tareaNueva = ""
        expect(wrapper.vm.$data.tarea).toBe(tareaNueva);

        wrapper.vm.addTarea = jest.fn();
        wrapper.vm.addTarea();
        expect(wrapper.vm.addTarea.mock.calls.length).toBe(1);
        console.log(wrapper.vm.addTarea.mock.calls.length);
  });
  it("prueba al boton Agregar",()=>{
      const wrapper = shallowMount(TodoAdd);
     /*  wrapper.vm.$data.tarea = "Nueva informacion..."; */
      let input2 = wrapper.find("input");
      input2.setValue("Nueva informacion...");
      wrapper.find('form').trigger('submit');
      expect(wrapper.vm.$data.tarea).toBe("Nueva informacion...");
      expect(wrapper.find('.btn').text().length).toBe(7);
  });
})

import React from 'react';

const Form = props => (
    <form onSubmit={props.weatherMethod}>
   <input type='text' name='city' placeholder='City' required/>
   <button> Search </button>
    
    </form>
  )

 export default Form;

//Вместо проверки на ввод города, легче просто в инпуте указать атрибут required
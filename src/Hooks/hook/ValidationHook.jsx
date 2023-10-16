import { useState } from "react";

export const useFormValidation = (validationSchema) => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const numberRegex = /^[0-9]+$/;
    const nomberFloatRegex = /^[0-9]+(\.[0-9]+)?$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // Itera a través de las claves del objeto validationSchema y aplica las validaciones correspondientes
    for (const field in validationSchema) {
      // Validation para maximo caracteres
      if (validationSchema[field].maxlength && formData[field] ? formData[field].length > validationSchema[field].maxlength : false) {
        newErrors[field] = validationSchema[field].message || `La cantidad maxima de digitos es ${validationSchema[field].maxlength}`;
      }
      // Validation para minimo caracteres
      if (validationSchema[field].minlength && formData[field] ? formData[field].length < validationSchema[field].minlength : false) {
        newErrors[field] = validationSchema[field].message || `La cantidad minima de digitos es ${validationSchema[field].minlength}`;
      }
      // Validation para verificacion de password
      if (validationSchema[field].verifique && formData[field] !== validationSchema[field].verifique) {
        newErrors[field] = validationSchema[field].message || 'Las credenciales no son iguales';
      }
      //Validacion para numeros enteros
      if (validationSchema[field].integer && !numberRegex.test(formData[field])) {
        newErrors[field] = validationSchema[field].message || 'Solo ingresar numeros enteros';
      }
      //Validacion para numeros enteros y flotantes
      if (validationSchema[field].number && !nomberFloatRegex.test(formData[field])) {
        newErrors[field] = validationSchema[field].message || 'Solo ingresar numeros';
      }
      //Validacion para correo
      if (validationSchema[field].email && !emailRegex.test(formData[field])) {
        newErrors[field] = validationSchema[field].message || 'El formato es incorrecto';
      }
      //Validacion para campos requeridos
      if (validationSchema[field].required && !formData[field]) {
        newErrors[field] = validationSchema[field].message || 'El campo es obligatorio';
      }
      
      // Puedes agregar más validaciones personalizadas aquí
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 ;
  };

  return { errors, validateForm };
};
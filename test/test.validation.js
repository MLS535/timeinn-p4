import assert from 'assert';
import {validarNombre, validarEmail, validarPassword} from '../src/js/validation.mjs';

//TODO funciones de validacion con mocha: 2 describe y 3 it functions
var testObj;
  describe('validar elNombre', function (){
      beforeEach( function (){
          testObj = [{
              username: 'maitels',
              email: 'Maiteladaria@gmail.com',
              password: 'Pepito123!?'
          }];
      })
      it ( 'should ok function', function () {
          assert.equal(validarNombre('', testObj),'El nombre debe tener entre 3 y 20 caracteres');
          assert.equal(validarNombre('maitels', testObj),'El usuario ya existe');
      } );
      it ( 'validar email', function () {
          assert.equal(validarEmail('mAiteladAria@gmail.com', testObj),'El email solo puede tener la primera letra en mayúscula' );
          assert.equal(validarEmail('Ignacio', testObj),'El email debe tener una @' );
          assert.equal(validarEmail('Ignacio@', testObj),'El email debe tener un punto' );
          assert.equal(validarEmail('Ignacio.@', testObj),'El email debe tener una @ antes del punto' );
          assert.equal(validarEmail('Ignacio@gm.com', testObj),'entre el @ y el punto, debe haber entre 5 y 10 minusculas' );
          assert.equal(validarEmail('Maiteladaria@gmail.com', testObj),'Email ya existe' );
      } );

  })

describe('validar pass', function (){
    it ( 'validar password', function () {
        assert.equal(validarPassword('Igna'),'La contraseña debe tener al menos 7 caracteres' );
        assert.equal(validarPassword('IGNACIO'),'La contraseña debe incluir al menos una letra minúscula' );
        assert.equal(validarPassword('ignacio'),'La contraseña debe incluir al menos una letra mayúscula' );
        assert.equal(validarPassword('Ignacio'),'La contraseña debe incluir al menos un número' );
        assert.equal(validarPassword('Ignacio1'),'La contraseña debe incluir al menos un caracter especial' );
    } );
})
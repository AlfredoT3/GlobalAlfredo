var Regis =document.getElementById('formRegistro')
Regis.addEventListener('submit',function(e){
        e.preventDefault()
        var dats =new FormData(Regis)

        var msj =document.getElementById('msj')

   msj.innerHTML = `
        <h4>REGISTRO CORRECTO NOS PONDREMOS EN CONTACTO </h4>
        <p>USUARIO:     ${dats.get('usu')}</p>
        <p>EDAD:        ${dats.get('ed')}</P>
        <p>CORREO:      ${dats.get('mail')}</p>
        <p>INTERES:  ${dats.get('int')}</P>    
   
   `

})

const app = new Vue({
   el: '#app',
   components: {
      vuejsDatepicker
   },
   data: {
      name: "",
      email: "",
      datepicker: "",
      street: "",
      number: "",
      district: "",
      city: "",
      selected: "",
      zip: "",
      emailV: "",
      nameV: "",
   },
   methods: {
      validar: function(){
         var nombre = $("#name").val();
         // console.log(nombre.test(/^[0-9]+$/));
         // var patronName = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
         // var letras_latinas = /^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;
         // var intRegex = /[0-9 -()+]+$/;
         // if(nombre.match(intRegex))
         // {
         //    console.log(true);
         // }

         var correo = $("#email").val();
         var arroba = correo.indexOf("@");
         var punto = correo.indexOf(".");
         if(arroba == -1 || punto == -1){
            this.emailV = true;
         }
         else{
            this.emailV = false;
         }


      },
   },
   mount()
   {
      if(localStorage.name){
         this.name = localStorage.name;
      }
      else if (localStorage.email){
         this.email = localStorage.email;
      }
      else if (localStorage.datepicker){
         this.datepicker = localStorage.datepicker;
      }
      else if (localStorage.street){
         this.street = localStorage.street;
      }
      else if (localStorage.number){
         this.number = localStorage.number;
      }
      else if (localStorage.district){
         this.district = localStorage.district;
      }
      else if (localStorage.city){
         this.city = localStorage.city;
      }
      else if (localStorage.city){
         this.city = localStorage.city;
      }
      else if (localStorage.zip){
         this.zip = localStorage.zip;
      }
   },
});

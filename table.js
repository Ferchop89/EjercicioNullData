var urlEmpleados = 'data.json';
new Vue({
   el: '#main',
   created: function(){
      this.getUsers();
   },
   data: {
      lists:[]
   },
   methods: {
      getUsers: function(){
         this.$http.get(urlEmpleados).then(function(response){
            this.lists = response;
         });
      }
   }
});

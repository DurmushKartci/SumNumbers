var app6 = new Vue({
    el: '#app-6',
    data: {
        text1 : " Number 1",
        text2 : " Number 2",
      
        result : "Result"
    },
    methods: {
        sumvars: function () {
            
            try {
                this.result = parseFloat(this.var1)+ parseFloat(this.var2);
            } catch (error) {
                this.result = " Please enter float variables. you can't sum strings"
            }
            
        }
      }
  })
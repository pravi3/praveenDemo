var app=angular.module('app');

app.filter('charuppercase', function () {

    return function (input, option1,option2) {
        console.log(input, option1,option2);

       /*if(!angular.isUndefined(option2)){

          }*/
         if (option1 - 1 >= 0 && option1<=input.length) {
             var out = [];
            for (var i = 0; i < input.length; i++) {
                if (i == option1 - 1) {
                    out.push(input.charAt(option1 - 1).toUpperCase());
                } else {
                    out.push(input[i]);
                }
            }
            return out.join('');
        }
      else{
          return input;
      }

    }

});

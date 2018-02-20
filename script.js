angular.module("myApp", []).controller("defaultCtrl", function(){
            var vm=this;
    vm.styles=[
    {
        h1:"text-1",
        p:"text-1",
        body:"bg-1",
        btn:"btn-1",
        box:"box-1"
    },
    {
        h1:"text-2",
        p:"text-2",
        body:"bg-2",
        btn:"btn-2",
        box:"box-2"
    },
    {
        h1:"text-3",
        p:"text-3",
        body:"bg-3",
        btn:"btn-3",
        box:"box-3"
    }
    ];
    vm.changeStyle={};
  vm.changeStyle=vm.styles[0];
    vm.btn1=function(){
          vm.changeStyle=vm.styles[0];
    }
    
    vm.btn2=function(){
          vm.changeStyle=vm.styles[1];
    }
       
    vm.btn3=function(){
          vm.changeStyle=vm.styles[2];
    }


})
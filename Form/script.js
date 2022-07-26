function contestentNum(){
    var values = document.getElementById("contestantsNum");
    var selectedValue = values.value;
    for(let i = 0; i < selectedValue; i++){
      contestentNum.textContent = "ssssssssssssssss" + i;
    }
  }
  
  function getSelectedValue (){
      var content = document.querySelector(".uCont2");
      content.innerHTML = "";
      var values = document.getElementById("contestantsNum");
      var selectedValue = values.value;
      for (let i = 1; i < selectedValue; i++) {
        repeatForm(); 
    }
  }
      
      
      function repeatForm (){
        var content = document.querySelector(".uCont2");
        var form = document.querySelector(".formCont2").innerHTML;
        content.insertAdjacentHTML("beforeend", form);
      }
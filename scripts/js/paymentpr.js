function showDiv() {
$('#email').toggle();
$('#address').toggle();
   //document.getElementById('second-process').style.display = "block";
}

function showDiv3() {
$('#address').toggle();
$('#payment').toggle();
   //document.getElementById('shipping-info').style.display = "block";
}

function showDiv4() {
$('#payment').toggle();
$('#final_products').toggle();
   //document.getElementById('shipping-info').style.display = "block";
}

function showDiv5() {
$('#email').toggle();

}

function showDiv6() {
$('#address').toggle();

}

function showDiv7() {
$('#shipping').toggle();

}

function showDiv8() {
$('#payment').toggle();

}

function showDiv9() {
$('#final_products').toggle();

}

/*function showDiv20() {
$('#creditcard-info').show();
$('#debitcard-info').hide();

}

function showDiv21() {
$('#debitcard-info').show();
$('#creditcard-info').hide();

}*/

var FormStuff = {
  
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
	
	$(".require-if-paypal").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }
  
};

FormStuff.init();





     // Default tab
	  $(".tab").css("display", "none");
	  $("#tab-1").css("display", "block");

	  function run(hideTab, showTab){
		 if(hideTab < showTab){ // If not press previous button
			// Validation if press next button
			var currentTab = 0;
			x = $('#tab-'+hideTab);
			y = $(x).find("input")
			for (i = 0; i < y.length; i++){
			  if (y[i].value == ""){
				 $(y[i]).css("background", "#ffdddd");
				 return false;
			  }
			}
		 }

		 // Progress bar
		 for (i = 1; i < showTab; i++){
			$("#step-"+i).css("opacity", "1");
		 }

		 // Switch tab
		 $("#tab-"+hideTab).css("display", "none");
		 $("#tab-"+showTab).css("display", "block");
		 $("input").css("background", "#fff");
	  }



	  (function($){
		var customSelect = $('select.custom-select');
		// FIRST, create the custom select menus from the existing select
		customSelect.each(function() {
			var that = $(this);
			var listID = that.attr('id'),
			groups = that.children('optgroup'),
				theOptions = "",
				startingOption = "",
				customSelect = "";
			//check if there are option groups 
			if(groups.length) {
				groups.each(function() {
					var curGroup = $(this);
					var	curName = curGroup.attr('label');
					//Open the option group
					theOptions += '<li class="optgroup">' + curName + '</li>';
					//get the options
					curGroup.children('option').each(function() {
						var curOpt = $(this);
						var curVal = curOpt.attr('value'),
							curHtml = curOpt.html(),
							isSelected = curOpt.attr('selected');
						if(isSelected === 'selected') {
							startingOption = curHtml;
							theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
						}else {
							theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
						}
					});
					//Close the option group
					//theOptions += '<li class="optgroup-close"></li>';
				});
				//add options not in a group to the top of the list
				that.children('option').each(function() {
					var curOpt = $(this);
					var curVal = curOpt.attr('value'),
						curHtml = curOpt.html(),
						isSelected = curOpt.attr('selected');
					if(isSelected === 'selected') {
						startingOption = curHtml;
						theOptions = '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
					}else {
						theOptions = '<li data-value="' + curVal + '">' + curHtml + '</li>' + theOptions;
					}
				});
			} else {
				that.children('option').each(function() {
					var curOpt = $(this);
					var curVal = curOpt.attr('value'),
						curHtml = curOpt.html(),
						isSelected = curOpt.attr('selected');
					if(isSelected === 'selected') {
						startingOption = curHtml;
						theOptions += '<li class="selected" data-value="' + curVal + '">' + curHtml + '</li>';
					}else {
						theOptions += '<li data-value="' + curVal + '">' + curHtml + '</li>';
					}
				});
			}
			//build the custom select
			customSelect = '<div class="dropdown-container"><div class="dropdown-select entypo-down-open-big"><span>' + startingOption + '</span></div><ul class="dropdown-select-ul" data-role="' + listID +'">' + theOptions + '</ul></div> <!-- .custom-select-wrapper -->';
			//append it after the actual select
			$(customSelect).insertAfter(that);
		});
		
		var	selectdd = $('.dropdown-select'),
			selectul = $('.dropdown-select-ul'),
			selectli = $('.dropdown-select-ul li');
		//THEN make them work
		selectdd.on('click',function(){
			$(this).parent('.dropdown-container').toggleClass('active');
		});
		//Hide it on mouseleave
		selectul.on('mouseleave',function(){
			$(this).parent('.dropdown-container').removeClass('active');
		});
		//select the option
		selectli.on('click',function(){
			var that = $(this);
			//ensure clicking group labels does not cause change
			if(!that.hasClass('optgroup')) {
				var	parentUl = that.parent('ul'),
					thisdd = parentUl.siblings('.dropdown-select'),
					lihtml = that.html(),
					livalue = that.attr('data-value'),
					originalSelect = '#' + parentUl.attr('data-role');
				//close the dropdown
				parentUl.parent('.dropdown-container').toggleClass('active');
				//remove selected class from all list items
				that.siblings('li').removeClass('selected');
				//add .selected to clicked li
				that.addClass('selected');
				//set the value of the hidden input
				$(originalSelect).val(livalue);
				//change the dropdown text
				thisdd.children('span').html(lihtml);
			}
		});
	})(jQuery);



	$(document).ready(function(){
		$("#mynum").keypress (function(){
		 if(this.value.length == 8){
			 return false;
		 }
		})
	 })
	$(document).ready(function(){
		$("#mynum1").keypress (function(){
		 if(this.value.length == 3){
			 return false;
		 }
		})
	 })
	$(document).ready(function(){
		$("#mynum2").keypress (function(){
		 if(this.value.length == 8){
			 return false;
		 }
		})
	 })
	$(document).ready(function(){
		$("#mynum3").keypress (function(){
		 if(this.value.length == 14){
			 return false;
		 }
		})
	 })
	$(document).ready(function(){
		$("#mynum4").keypress (function(){
		 if(this.value.length == 14){
			 return false;
		 }
		})
	 })
	$(document).ready(function(){
		$("#mynum5").keypress (function(){
		 if(this.value.length == 14){
			 return false;
		 }
		})
	 })
	$(document).ready(function(){
		$("#mynum6").keypress (function(){
		 if(this.value.length == 14){
			 return false;
		 }
		})
	 })

	 var TXT_ARNAME = document .getElementById ("TXT_ARNAME");
	 var TXT_ARNAM = document .getElementById ("TXT_ARNAM");
	 var TXT_ARNAM1 = document .getElementById ("TXT_ARNAM1");
	 var TXT_ARNAM2 = document .getElementById ("TXT_ARNAM2");
	 var TXT_ARNAM3 = document .getElementById ("TXT_ARNAM3");
	 var TXT_eng = document .getElementById ("TXT_eng");
	 var TXT_eng1 = document .getElementById ("TXT_eng1");
	 var TXT_eng2 = document .getElementById ("TXT_eng2");
	 var TXT_eng3 = document .getElementById ("TXT_eng3");

	 var MOSF1 = document .getElementById ("MOSF1");
	 var MOSF2 = document .getElementById ("MOSF2");
	 var MOSF3 = document .getElementById ("MOSF3");
	 var MOSF4 = document .getElementById ("MOSF4");
	 var MOSF5 = document .getElementById ("MOSF5");
	 var MOSF6 = document .getElementById ("MOSF6");
	 var MOSF7 = document .getElementById ("MOSF7");
	 var MOSF8 = document .getElementById ("MOSF8");
	 var MOSF9 = document .getElementById ("MOSF9");
	 var MOSF10 = document .getElementById ("MOSF10");
	 var MOSF11 = document .getElementById ("MOSF11");
	 var MOSF12 = document .getElementById ("MOSF12");
	 var MOSF13 = document .getElementById ("MOSF13");
	 var MOSF14 = document .getElementById ("MOSF14");
	 var MOSF15 = document .getElementById ("MOSF15");
	 var MOSF16 = document .getElementById ("MOSF16");
	 var MOSF17 = document .getElementById ("MOSF17");


	 function onlyENGLISHstrings(e) {
		var charCode = e.charCode
		if ((charCode > 64 && charCode < 91) ||
			 (charCode > 96 && charCode < 123) ||
			 charCode == 8 ||   charCode == 46 || charCode ==32
		){
			return true;
		}
		else{
			
			e.preventDefault();
			return false;
		}
	}
	
	TXT_eng.addEventListener("keypress", function(e){
		var result =onlyENGLISHstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top',
			  icon: 'info',
			  title: '    من فضلك اكتب با الانجليزي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})
	
	TXT_eng1.addEventListener("keypress", function(e){
		var result =onlyENGLISHstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top',
			  icon: 'info',
			  title: '    من فضلك اكتب با الانجليزي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})
	TXT_eng2.addEventListener("keypress", function(e){
		var result =onlyENGLISHstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top',
			  icon: 'info',
			  title: '    من فضلك اكتب با الانجليزي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})
	TXT_eng3.addEventListener("keypress", function(e){
		var result =onlyENGLISHstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top',
			  icon: 'info',
			  title: '    من فضلك اكتب با الانجليزي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})
	
	 
	 
	 function onlyarabicstrings(e) {
		 var charCode = e.charCode
		 if ((charCode > 64 && charCode < 91) ||
			  (charCode > 96 && charCode < 123) ||
			  (charCode >= 48 && charCode <= 57)
		 ){
			 e.preventDefault();
			 return false;
		 }
		 else{
			 return true;
		 }F
	 }
	 
	 TXT_ARNAME.addEventListener("keypress", function(e){
		 var result =onlyarabicstrings(e);
		 if (result== false){
			Swal.fire({
				position: 'top-end',
				icon: 'info',
				title: '    من فضلك اكتب با العربي ',
				showConfirmButton: false,
				timer: 3000
			 })
		 }
		 else {
			 removeAlert();
		 }
	 })
	 TXT_ARNAM1.addEventListener("keypress", function(e){
		 var result =onlyarabicstrings(e);
		 if (result== false){
			Swal.fire({
				position: 'top-end',
				icon: 'info',
				title: '    من فضلك اكتب با العربي ',
				showConfirmButton: false,
				timer: 3000
			 })
		 }
		 else {
			 removeAlert();
		 }
	 })
	 TXT_ARNAM2.addEventListener("keypress", function(e){
		 var result =onlyarabicstrings(e);
		 if (result== false){
			Swal.fire({
				position: 'top-end',
				icon: 'info',
				title: '    من فضلك اكتب با العربي ',
				showConfirmButton: false,
				timer: 3000
			 })
		 }
		 else {
			 removeAlert();
		 }
	 })
	 TXT_ARNAM3.addEventListener("keypress", function(e){
		 var result =onlyarabicstrings(e);
		 if (result== false){
			Swal.fire({
				position: 'top-end',
				icon: 'info',
				title: '    من فضلك اكتب با العربي ',
				showConfirmButton: false,
				timer: 3000
			 })
		 }
		 else {
			 removeAlert();
		 }
	 })
	 TXT_ARNAM.addEventListener("keypress", function(e){
		 var result =onlyarabicstrings(e);
		 if (result== false){
			Swal.fire({
				position: 'top-end',
				icon: 'warning',
				title: '    من فضلك اكتب با العربي ',
				showConfirmButton: false,
				timer: 3000
			 })
		 }
		 else {
			 removeAlert();
		 }
	 })




	 MOSF1.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF2.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF3.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF4.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF5.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF6.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF7.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF8.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF9.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF10.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF11.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF12.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF13.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF14.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF15.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF16.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})



	 MOSF17.addEventListener("keypress", function(e){
		var result =onlyarabicstrings(e);
		if (result== false){
		  Swal.fire({
			  position: 'top-end',
			  icon: 'warning',
			  title: '    من فضلك اكتب با العربي ',
			  showConfirmButton: false,
			  timer: 3000
			})
		}
		else {
			removeAlert();
		}
	})
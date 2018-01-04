$(document).ready(function(){
	$('.menu-bar .icon-menu').on('click',function(ev){
		ev.stopPropagation();
		$('nav').toggleClass('isSlide');
	});
	$(document).click(function(event) { 
	    if(!$(event.target).closest('nav').length && !$(event.target).closest('header').length) {
	        if($('nav').is(":visible")) {
	            $('nav').removeClass('isSlide');
	        }
	    }        
	});

	$('[data-toggle="datepicker"]').datepicker({
		autoHide : true
	});

	$('ul.select li').on('click',function(ev){
		var that = $(this);
		if(that.hasClass('active')){
			return false;
		}else{
			$('ul.select li').removeClass('active');
			that.addClass('active');
		}
	});


		window.rowCount = 0;
		$(".add-row").click(function(){
		//var rowCount = 0;
		var jobTxt = $('#jobTxt').val();
		if(jobTxt==""){
			$('#jobTxt').addClass('error');
			$('#jobTxt').attr('placeholder',"item cant be empty");
		}else{
			var AddMarkUp = '<div class="item-form">\
								<input class="form-control" type="text" name="item" id="jobTxt" value='+ jobTxt +'>\
			              		<button class="delete-row" title="Add job" type="button"><i class="icon-trash"></i></button>\
			          		</div>';
			}

			if(window.rowCount >= 1){
				$($('.item-form')[0]).after(AddMarkUp);
			}else{
				$($('.item-form')[0]).after(AddMarkUp);
			}

			$(this).parents('.item-form').find('#jobTxt').val('');
			//$(this).parents('.add-row-wapper').find('#quantity').val('');

			window.rowCount ++;
			$('#jobTxt').focus();

		});

		$("body").on('click','.delete-row',function(ev){
			$(this).parents('.item-form').remove();
		});

		$('#jobTxt').keydown(function(ev){
			if(ev.keyCode == 13){
				$(".add-row").trigger('click');
				ev.preventDefault();
			}
			if(ev.keyCode == 9 && !ev.shiftKey){
				$("#trialDate").focus();
				ev.preventDefault();
			}			 
		});

		$('#jobTxt').keyup(function(ev){
			if($(this).val() !== ""){
				$(this).removeClass('error');
				$('#jobTxt').attr('placeholder',"Enter item");
			}
		});

		$('#smsCheckbox').change(function(ev){
			var trialDate = $('#trialDate').val();
			var deliveryDate  = $('#deliveryDate').val();
			$('#smsText').val('Your job for Item name has been booked. The Trial Date & Delivery Date is '+ trialDate + ' and ' + deliveryDate + ' respectively');
		});

		$('[data-toggle="datepicker"]').change(function(ev){
			$('#smsCheckbox').trigger('change');
		});

		$('#jobForm').submit(function(ev){
			$('#firstName,#trialDate,#deliveryDate').each(function(){
				if($(this).val() == ""){
					$(this).addClass('error');
				}else{
					$(this).removeClass('error');
					return;
				}
				ev.preventDefault();
			})
		});

		$('#jobForm').keyup(function(ev){
			$('#firstName,#trialDate,#deliveryDate').each(function(){
				if($(this).val() !== ""){
					$(this).removeClass('error');
				}
			})
		});

		$('#trialDate,#deliveryDate').change(function(){
				if($(this).val() !== ""){
					$(this).removeClass('error');
				}
			});
});
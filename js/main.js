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
			              		<button class="delete-row" title="delete job" type="button"><i class="icon-trash"></i></button>\
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

		$('.icon-envelope').on('click',function(){
			$('.sms-edit-wrap').addClass('right-slide');
		});

		$('.icon-arrow-right').on('click',function(){
			$('.sms-edit-wrap').removeClass('right-slide');
		});


});

var jobList = {};

$(function() {

	jobList		=	[
  {
    "firstname": "Arun",
    "lastName": "Kumar",
    "order_status": "Order Processing",
    "trialDate": "01-Jan-18",
    "deliveryDate": "05-Jan-18",
    "order_no": "TINV-0001"
  },
  {
    "firstname": "Kumar",
    "lastName": "Arun",
    "order_status": "Order Processing",
    "trialDate": "01-Jan-18",
    "deliveryDate": "29-Jan-18",
    "order_no": "TINV-0002"
  },
  {
    "firstname": "Random",
    "lastName": "test",
    "order_status": "Order Processing",
    "trialDate": "02-Jan-18",
    "deliveryDate": "29-Jan-18",
    "order_no": "TINV-0003"
  },
  {
    "firstname": "Jitendra",
    "lastName": "Narwani",
    "order_status": "Order Processing",
    "trialDate": "10-Jan-18",
    "deliveryDate": "12-Jan-18",
    "order_no": "TINV-0004"
  },
  {
    "firstname": "Jitendra",
    "lastName": "Narwani",
    "order_status": "Order Processing",
    "trialDate": "12-Jan-18",
    "deliveryDate": "14-Jan-18",
    "order_no": "TINV-0005"
  },
  {
    "firstname": "Jitendra",
    "lastName": "Narwani",
    "order_status": "Order Processing",
    "trialDate": "10-Jan-18",
    "deliveryDate": "12-Jan-18",
    "order_no": "TINV-0006"
  },
  {
    "firstname": "Arun",
    "lastName": "kumar",
    "order_status": "Order Processing",
    "trialDate": "01-Jan-18",
    "deliveryDate": "30-Jan-18",
    "order_no": "TINV-0007"
  },
  {
    "firstname": "Rahul",
    "lastName": "",
    "order_status": "Order Processing",
    "trialDate": "22-Jan-18",
    "deliveryDate": "23-Jan-18",
    "order_no": "TINV-0008"
  },
  {
    "firstname": "Kavi",
    "lastName": "test",
    "order_status": "Order Processing",
    "trialDate": "02-Jan-18",
    "deliveryDate": "25-Jan-18",
    "order_no": "TINV-0009"
  },
  {
    "firstname": "Arun",
    "lastName": "Kumar",
    "order_status": "Order Processing",
    "trialDate": "23-Jan-18",
    "deliveryDate": "24-Jan-18",
    "order_no": "TINV-0010"
  },
  {
    "firstname": "Dinesh",
    "lastName": "Sam",
    "order_status": "Order Processing",
    "trialDate": "01-Jun-18",
    "deliveryDate": "01-Jan-70",
    "order_no": "TINV-0011"
  },
  {
    "firstname": "Harish",
    "lastName": "Mulani",
    "order_status": "Order Processing",
    "trialDate": "01-Oct-18",
    "deliveryDate": "01-Dec-18",
    "order_no": "TINV-0012"
  },
  {
    "firstname": "H",
    "lastName": "",
    "order_status": "Order Processing",
    "trialDate": "01-Oct-18",
    "deliveryDate": "01-Dec-18",
    "order_no": "TINV-0013"
  },
  {
    "firstname": "Imran",
    "lastName": "Allarakha",
    "order_status": "Order Processing",
    "trialDate": "01-Aug-18",
    "deliveryDate": "01-Oct-18",
    "order_no": "TINV-0014"
  },
  {
    "firstname": "Cyril",
    "lastName": "",
    "order_status": "Order Processing",
    "trialDate": "14-Jan-18",
    "deliveryDate": "16-Jan-18",
    "order_no": "TINV-0015"
  },
  {
    "firstname": "Aravind",
    "lastName": "ravichandran",
    "order_status": "Order Processing",
    "trialDate": "06-Jan-18",
    "deliveryDate": "18-Jan-18",
    "order_no": "TINV-0016"
  }
];


		/*$.getJSON("demo_ajax_json.js", function(result){
            $.each(result, function(i, data){
                                dd(field);
            });
        });*/

		/*var listWrap = "";
		
		for (var i = 0; i < jobList.length; i++) {
				listWrap += '<li>\
								<div class="job-details">\
									<p class="customer-name">'+ jobList[i].firstname +' '+ jobList[i].lastName +' </p>\
									<p class="bill-no"> Job Order# '+ jobList[i].order_no +'</p>\
								</div>\
								<div class="job-status">\
									<p class="job-amount">T/Date - '+ jobList[i].trialDate +'</p>\
									<p class="job-badge">'+ jobList[i].order_status +'</p>\
								</div>\
								<div class="job-tool">\
                                         <p class="job-edit"><i class="icon-pencil"></i></p>\
                                         <p class="job-sms"><i class="icon-envelope"></i></p>\
                                    </div>\
							</li>';
			$(".job-list-bottom ul").html(listWrap);
		}*/

});
$(document).ready(function() {
    $('.menu-bar .icon-menu').on('click', function(ev) {
        ev.stopPropagation();
        $('nav').toggleClass('isSlide');
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('nav').length && !$(event.target).closest('header').length) {
            if ($('nav').is(":visible")) {
                $('nav').removeClass('isSlide');
            }
        }
    });

    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true
    });

    $('ul.select li').on('click', function(ev) {
        var that = $(this);
        if (that.hasClass('active')) {
            return false;
        } else {
            $('ul.select li').removeClass('active');
            that.addClass('active');
        }
    });



    window.rowCount = 0;
    $(".add-row").click(function() {
        //var rowCount = 0;
        var jobTxt = $('#jobTxt').val();
        if (jobTxt == "") {
            $('#jobTxt').addClass('error');
            $('#jobTxt').attr('placeholder', "item cant be empty");
        } else {
            var AddMarkUp = '<div class="item-form">\
								<input class="form-control" type="text" name="item" id="jobTxt" value=' + jobTxt + '>\
			              		<button class="delete-row" title="delete job" type="button"><i class="icon-trash"></i></button>\
			          		</div>';
        }

        if (window.rowCount >= 1) {
            $($('.item-form')[0]).after(AddMarkUp);
        } else {
            $($('.item-form')[0]).after(AddMarkUp);
        }

        $(this).parents('.item-form').find('#jobTxt').val('');
        //$(this).parents('.add-row-wapper').find('#quantity').val('');

        window.rowCount++;
        $('#jobTxt').focus();

    });

    $("body").on('click', '.delete-row', function(ev) {
        $(this).parents('.item-form').remove();
    });

    $('#jobTxt').keydown(function(ev) {
        if (ev.keyCode == 13) {
            $(".add-row").trigger('click');
            ev.preventDefault();
        }
        if (ev.keyCode == 9 && !ev.shiftKey) {
            $("#trialDate").focus();
            ev.preventDefault();
        }
    });

    $('#jobTxt').keyup(function(ev) {
        if ($(this).val() !== "") {
            $(this).removeClass('error');
            $('#jobTxt').attr('placeholder', "Enter item");
        }
    });

    $('#smsCheckbox').change(function(ev) {
        var trialDate = $('#trialDate').val();
        var deliveryDate = $('#deliveryDate').val();
        $('#smsText').val('Your job for Item name has been booked. The Trial Date & Delivery Date is ' + trialDate + ' and ' + deliveryDate + ' respectively');
    });

    $('[data-toggle="datepicker"]').change(function(ev) {
        $('#smsCheckbox').trigger('change');
    });

    $('#jobForm').submit(function(ev) {
        $('#firstName,#trialDate,#deliveryDate').each(function() {
            if ($(this).val() == "") {
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
                return;
            }
            ev.preventDefault();
        })
    });

    $('#jobForm').keyup(function(ev) {
        $('#firstName,#trialDate,#deliveryDate').each(function() {
            if ($(this).val() !== "") {
                $(this).removeClass('error');
            }
        })
    });

    $('#trialDate,#deliveryDate').change(function() {
        if ($(this).val() !== "") {
            $(this).removeClass('error');
        }
    });
   

    $(document).on('click.nice_select', '.nice-select', function(event) {
        var $dropdown = $(this);

        $('.nice-select').not($dropdown).removeClass('open');
        $dropdown.toggleClass('open');

        if ($dropdown.hasClass('open')) {
            $dropdown.find('.option');
            $dropdown.find('.focus').removeClass('focus');
            $dropdown.find('.selected').addClass('focus');
        } else {
            $dropdown.focus();
        }
    });

    $(document).on('click.nice_select', function(event) {
        if ($(event.target).closest('.nice-select').length === 0) {
            $('.nice-select').removeClass('open').find('.option');
        }
    });

    // Option click
    $(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(event) {
        var $option = $(this);
        var $dropdown = $option.closest('.nice-select');

        $dropdown.find('.selected').removeClass('selected');
        $option.addClass('selected');

        var text = $option.data('display') || $option.text();
        $dropdown.find('.current').text(text);

        $dropdown.prev('select').val($option.data('value')).trigger('change');
    });



});

var jobList = {};

$(function() {

    jobList = [{
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

    var listWrap = "";
		
		for (var i = 0; i < jobList.length; i++) {
				listWrap += '<li class="ready-progress">\
				 				<div class="job-wrap">\
									<div class="job-details">\
									 	<p class="customer-id">'+ jobList[i].order_no +'</p>\
										<p class="customer-name">'+ jobList[i].firstname +' '+ jobList[i].lastName +' </p>\
										<p class="customer-mobile">9986109375</p>\
										<p class="job-progress">'+ jobList[i].order_status +'</p>\
									</div>\
									<div class="job-dates">\
										<p class="job-booking-date"><span>Booking</span><span class="date-text">05-jan-18</span></p>\
										<p class="job-trial-date"><span>Trial</span><span class="date-text">'+ jobList[i].trialDate +'</span></p>\
	                                    <p class="job-delivery-date"><span>Delivery</span><span class="date-text">'+ jobList[i].deliveryDate +'</span></p>\
									</div>\
								</div>\
								<div class="job-tool">\
                                     <p class="job-edit">Edit<i class="icon-pencil"></i></p>\
                                     <p class="job-sms">SMS<i class="icon-envelope"></i></p>\
                                </div>\
							</li>';
			$(".job-list-bottom ul").html(listWrap);
		}

		$('.icon-envelope').on('click', function() {
        	$('.sms-edit-wrap').addClass('right-slide');
    	});

	    $('.close-button').on('click', function() {
	        $('.sms-edit-wrap').removeClass('right-slide');
	    });

	    $(".job-list-bottom").niceScroll();

});

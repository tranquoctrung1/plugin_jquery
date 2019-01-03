// var a =1


// function dotit()
// {
// 	var e = '<div class="demo-ruler"> <div class="container-fluid container"> <div class="row"> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> <div class="col"> <div class="item" style="display: block;"></div> </div> </div> <button class="btn btn-primary on-of" type="button">Bât/Tắt</button> <button class="btn btn-primary on-of-contents" type="button">Bât/Tắt Container-fluid</button> </div> </div>', m = 'body { position: relative; } body .demo-ruler { z-index: 88; height: 100vh; position: fixed; width: 100%; top: 0; left: 0; } body .demo-ruler .container, body .demo-ruler .container-fluid { height: 100vh; } body .demo-ruler .container button.btn.btn-primary.on-of, body .demo-ruler .container-fluid button.btn.btn-primary.on-of { position: fixed; bottom: 0; right: 0; width: 114px; z-index: 100; } body .demo-ruler .container button.btn.btn-primary.on-of-contents, body .demo-ruler .container-fluid button.btn.btn-primary.on-of-contents { position: fixed; bottom: 34px; right: 0; z-index: 100; } body .demo-ruler .container .row .col, body .demo-ruler .container-fluid .row .col { height: 100vh; width: 100%; } body .demo-ruler .container .row .col .item, body .demo-ruler .container-fluid .row .col .item { background: #74b9ff80; width: 100%; height: 100vh; display: none; }'

// 	$('head').append("<style>" + m + "</style>")
// 	$('body').append(e)

// 	$('.on-of').on('click',function()
// 	{
// 		$('.item').toggle()
// 	})
// 	$('.on-of-contents').on('click',function()
// 	{
// 		$('.container-fluid').toggleClass('container')
// 	})


// }

// dotit()

//===============Demo-step-by-step====================
$('input').on('focus',function(){

	$(this).nextAll('label').addClass('active')
})

$('input').on('blur',function () {
	var e =  $(this).val();
	(e.length > 0) ? false : $(this).nextAll('label').removeClass('active')
	
  })

// $('#background').on('mouseleave	change',function()
// {
// 	var e = $(this).val()
// 	$('body .item').css({
// 		"background": e
// 	})
// })

// // var a = 2

// // $('.next').on('click',function()
// // {

// // 	$('li:nth-child('+a+')').addClass('active')
// // 	a++
// // 	(a>=4) ? a =4: false
// // })

// // $('.prev').on('click',function()
// // {
// // 	a--
	
// // 	(a != 1) ? $('li:nth-child('+a+')').removeClass('active'):

// // 	(a <= 2) ? a =2: false
// // })



// // $('.prev').on('click',function()
// // {
// // 	$('li').each(function()
// // 	{
	
// // 		if($(this).val() == a)
// // 		{
// // 			$(this).find('p').removeClass('active')
// // 		}
// // 		if($(this).val() < 1)
// // 		{
// // 			a = 2
// // 		}
// // 	})
// // 	a--
// // })



//=================Demo-plugin=======================
// $('input.letterspacing').on('input change',function()
// {
// 	var a =  $(this).val()
// 	$('.text').css(
// 		{
// 			"letter-spacing": a +"px"
// 		}
// 	)
// 	$('.result-letterspacing').text("letter-spacing: "+a +"px")
// })

// $('input.font-weight').on('input change',function()
// {
// 	$('.text').css(
// 		{
// 			"font-weight": $(this).val()
// 		}
// 	)
// 	$('.result-font-weight').text("font-weight: "+ $(this).val())
// })

// $('input.font-weight').on('input change',function()
// {
// 	$('.text').css(
// 		{
// 			"font-weight": $(this).val()
// 		}
// 	)
// 	$('.result-font-weight').text("font-weight: "+ $(this).val())
// })

// $('input.text-decoration').on('click',function()
// {
// 	$('.text').toggleClass('active')
// })
// var x =1
// var y =1
// var translatex = 0
// var translatey = 0
// var skewx = 0
// var skewy = 0
// var rotate = 0
// $('input.scaleX').on('input change',function(){
// 	x =  $(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })
// $('input.scaleY').on('input change',function(){
// 	y = $(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })
// $('input.translateX').on('input change',function(){
// 	translatex = $(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })
// $('input.translateY').on('input change',function(){
// 	translatey = $(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })
// $('input.skewX').on('input change',function(){
// 	skewx = $(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })
// $('input.skewY').on('input change',function(){
// 	skewy =$(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })

// $('input.rotate').on('input change',function(){
// 	rotate =$(this).val()
// 	$('.col-8.img .img').css({
// 		"transform":"scale(" + x +","
// 		+y+") translateX("+translatex+"px) translateY("+translatey+"px) skewX("+skewx+"deg) skewY("+skewy+"deg) rotate("+rotate+"deg)"
// 	})
// })

// $('input.color').on('change',function(){
// 	$('.col-8.img .img').css({
// 		"background": $(this).val()
// 	})
// })







//===================Demo run nunber=================
// $(window).resize(function()
// {
// 	getcount()
// })

// $(window).scroll(function()
// {
// 	getcount()
// })

// $(document).ready(function()
// {
// 	getcount()
// })

// function getcount()
// {
// 	$('[data-count]').each(function()
// 	{
// 		var e = $(this).offset().top,
// 		docS = $(window).scrollTop(),
// 		docH = $(window).height(),
// 		num =$(this).attr('data-count'),
// 		f = $(this).attr('data-count'),
// 		run =false

		
// 		if(e < ((docS + docH) - 60) && !run)
// 		{
// 			var $this = $(this),
// 				countTo = num,
// 				durationTo = 3000;
// 			$({ countNum: $this.text() }).animate({
// 				countNum: countTo
// 			}, {
// 					duration: durationTo,
// 					easing: 'linear',
// 					step: function () {
// 						$this.text(Math.floor(this.countNum));
// 					},
// 					complete: function () {
// 					$this.text(this.countNum);
// 					run = true
// 				}
// 			});
// 		}
// 		else
// 		{
// 			$(this).text(f)
// 		}
// 	})
// }

var appSeo = {
	tittle: 'Tiêu đề trang',
	url: 'https://demo.com/',
	address: 'Địa chỉ',
	tel: '0;1;2;3',
	counttel: 0,
	map: {
			lg: '10.827831',
			ln: '106.681231',
			code: 'VN'
	},
	genForm: function(a,b) {
		return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">'+a.charAt(0).toUpperCase() + a.slice(1)+'</span></div> <input class="form-control '+a+'" type="text" placeholder="'+b+'" value="'+b+'"aria-label="Username" aria-describedby="basic-addon1"> </div>'
	},
	initForm: function() {
		for( let key in appSeo) {
			if(appSeo.hasOwnProperty(key)) {
				if(typeof appSeo[key] === 'string')
					{
					if(key == 'tel')
					{
					let u = appSeo[key].split(";")
					for(var index = 0; index < u.length; index = index +1 )
						$('#genForm').append(appSeo.genForm(key+'-'+[index  +1],u[index]))
						appSeo.counttel = u.length
					}
					else
						$('#genForm').append(appSeo.genForm(key,appSeo[key]))
				}
				else if(typeof appSeo[key] === 'object')
				{
					for( let k in appSeo[key]) {
						if(appSeo[key].hasOwnProperty(k)) {
							$('#genForm').append(appSeo.genForm(k,appSeo[key][k]))
						}
					}
				}
			}
		}
	},
	getCreateForm: function() {
		for( let key in appSeo) {
			if(appSeo.hasOwnProperty(key)) {
				if(typeof appSeo[key] === 'string')
				{
					if(key == 'tel')
					{
						// Tạo 1 mảng rổng để chứa các trường của thằng tel 
						let ur = []
						// Chạy vòng lặp để chạy tới từng thằng tel
						for(let index = 0;index < appSeo.counttel;index++)
						{
							// Gọi vào đúng địa chỉ của nó để lấy giá trị
							let a = $('#genForm .form-control'+'.' +key+'-'+[index +1]).val()
							// Thêm vào mảng rổng
							ur.push(a)
						}
						// Tạo ra 1 biến để chứa mảng mà mình vừa thêm vào xong 
						// join là thêm dấu ";" vào trong mảng 
						// toString là để biến mảng về chuổi lại
						let ul = ur.join(";").toString()

						// Gán tel trong appSeo cho thằng ul lúc này ul là chuổi hoàn chỉnh
						appSeo[key] = ul
						//console.log(appSeo[key])
						$('#result').append(appSeo[key]+'<hr>')
					}
					else
					{
						let em = $('#genForm .form-control'+'.' +key).val()
						appSeo[key] = em
						//console.log(appSeo[key])
						$('#result').append(appSeo[key]+'<hr>')
					}
				}
				else if(typeof appSeo[key] === 'object')
				{
					for( let k in appSeo[key]) {
						if(appSeo[key].hasOwnProperty(k)) {
							let emk = $('#genForm .form-control' +'.'+k).val()
							appSeo[key][k] = emk
							//console.log(appSeo[key][k])
							$('#result').append(appSeo[key][k]+'<hr>')
						}
					}
				}
			}
			
		}
	}
}

appSeo.initForm()


appSeo.getCreateForm()


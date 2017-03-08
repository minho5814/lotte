/*
	최초 작성일 : 2017-03-06
	최초 작성자 : 최민호
	소속 : (주)그레이블루/퍼블리싱팀
*/

$(window).load(function(){
	// 상단 배너 닫기
	$('.top-banner .btn-close').click(function(){
		$(this).parents('.top-banner').slideUp(300, function(){
			$(this).remove();
		});
	});

	/* =============================================================================
		해더
	============================================================================= */
	// gnb에 검색영역 복사
	var search = $('.head-top .search-area').html();
	$('.head-btm .gnb').append('<div class="search-area">');
	$('.head-btm .search-area').html(search);

	// gnb 메뉴 열기
	$('.btn-menu').click(function(){
		$('.head-btm').prepend('<div class="modal-white">');
		$('.menu-layer').fadeIn(200);
	});
	// gnb 메뉴 닫기
	$('.head-btm').on('click', '.menu-layer .btn-close, .modal-white', function(){
		$('.modal-white').remove();
		$('.menu-layer').fadeOut(100);
		$('.lnb-item').removeClass('on');
		$('.lnb-item:first-child').addClass('on');
		$('.menu-category').removeClass('on');
		$('.menu-category:first-child').addClass('on');
	});

	// gnb 레이어에 gnb 리스트 복사
	var gnbList = $('.gnb-list').html();
	$('.menu-layer .gnb-copy').append('<ul class="gnb-list">');
	$('.menu-layer .gnb-copy .gnb-list').html(gnbList);

	$('.lnb-item').mouseenter(function(){
		var idx = $(this).index();
		$('.lnb-item').removeClass('on').eq(idx).addClass('on');
		$('.menu-category').removeClass('on').eq(idx).addClass('on');
	});

	/* =============================================================================
		스크롤 이벤트
	============================================================================= */
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		var winLeft = $(window).scrollLeft();
		/* 스크롤 다운시 해더 변경 */
		var gnbTop = $('.head-top').offset().top + $('.head-top').outerHeight();
		if(winTop >= gnbTop){
			$('html').addClass('down');
			$('.head-btm .gnb').css({'left':-winLeft});
		}else{
			$('html').removeClass('down');
			$('.head-btm .gnb').css({'left':'0'});
		}

		// 스크롤시 열러 있는 메뉴 닫음
		$('.modal-white').click();
	});
	$(window).scroll();
});
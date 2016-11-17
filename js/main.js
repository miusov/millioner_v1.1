(function($) {
	$(function() {

		var audio = new Audio();
		audio.src = 'audio/audio.mp3';
		audio.load();
		// Coockie
		if (getCookie("name")) {
			$('#name').hide();
			$('#header').prepend('<p class="name">Здравствуйте '+getCookie("name")+'</p>');

		}
		function rand (min, max, n) { 
			var x = Math.round(Math.random()*(max-min))+min;
			if (x == n) {
				x+=1
			}
			if (x==max+1) {
				x-=2
			}
			return x;
		}
		var greeting = [
		"А сколько вы хотите выиграть-то?",
		"Становится только хуже (((",
		"Четвертого раза обычно не бывает",
		"Просто продолжайте.",
		"А некоторые, бывает, выигрывают ;)",
		"Мне повезет!",
		"Еще раз — и до послезавтра.",
		"Все мы погрязли в болоте, но некоторые из нас смотрят на звезды",
		"Жизнь – слишком сложная штука, чтобы о ней разговаривать серьезно",
		"Смысл жизни в том, что она имеет свой конец",
		"Англичане говорят: время деньги. Русские говорили: жизнь копейка.",
		"Мы находимся здесь, чтобы внести свой вклад в этот мир. А иначе зачем мы здесь?",
		"Здоровье - это главное жизненное благо.",
		"Мудрость жизни всегда глубже и обширнее мудрости людей.",
		"Все мысли о смерти нужны для жизни.",
		"Любовь - это желание жить.",
		"Что посеешь в юности, то пожнешь в зрелости.",
		"Вульгарность - это неправильное представление об искусстве жить.",
		"Возненавидеть жизнь можно только вследствие апатии и лени.",
		"Лучше умереть, чем маяться в неволе.",
		"Лучше смерть, чем усталость.",
		"Живи и жить давай другим",
		"Жизнь есть борьба.",
		"Великий вопрос жизни - как жить среди людей."
		];
		$('#greeting').text(greeting[rand(0, greeting.length)]);
		var quest = [
		'Что из этого не является косметическим средством?',
		'Кто, в конце концов, скушал Колобка?',
		'Какой шахматной фигуры не существует?',
		'Что означает буква «О» в аббревиатуре ОРТ?',
		'Главный герой в романе Ф. И. Достоевского «Преступление и наказание»',
		'В состав любого органического вещества входит…',
		'Какое слово здесь лишнее?',
		'Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?',
		'Кто изобрел громоотвод?',
		'Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?',
		'В каком городе находится штаб-квартира Microsoft?',
		'При каком правителе к России была присоединена территория Финляндии?',
		'Ричард Львиное Сердце был пленен во время?',
		'Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?',
		'Кто такой «молотоглав»?',
		'1 000 000',
		];
		var answ = [
		['A: Помада', 'B: Татуировка', 'C: Крем', 'D: Пудра'],
		['A: Дед', 'B: Баба', 'C: Заяц', 'D: Лиса'],
		['A: Пешка', 'B: Конь', 'C: Король', 'D: Дама'],
		['A: Олигархическое', 'B: Объективное', 'C: Общественное', 'D: Однообразное'],
		['A: Расторгуев', 'B: Чикатило', 'C: Тумбочкин', 'D: Раскольников'],
		['A: кислород', 'B: углерод', 'C: водород', 'D: азот'],
		['A: Автор', 'B: Товар', 'C: Отвар', 'D: Ворот'],
		['A: Синодский регистратор', 'B: Провинциальный секретарь', 'C: Коллежский регистратор', 'D: Кабинетский регистратор'],
		['A: Франклин', 'B: Рузвельт', 'C: Вашингтон', 'D: Линкольн'],
		['A: Дворовые', 'B: Захребетники', 'C: Нахлебники', 'D: Бестягольные'],
		['A: Нью-Йорк', 'B: Ричмонд', 'C: Новый Орлеан', 'D: Сиэтл'],
		['A: Петр I', 'B: Екатерина II', 'C: Павел I', 'D: Александр I'],
		['A: крестового похода', 'B: столетней войны', 'C: войны алой и белой розы', 'D: войны за независимость'],
		['A: 10', 'B: 20', 'C: 70', 'D: 90'],
		['A: Рыба', 'B: Птица', 'C: Змея', 'D: Насекомое'],
		['A: Победа!!!', 'B: Победа!!!', 'C: Победа!!!', 'D: Победа!!!']
		];
		var key=[1,3,3,2,3,1,3,2,0,1,1,3,0,1,1,1];
		var level = 0;
		var t = 60;
// Вход в игру------------------------------------------------------------
$('#btn').click(function() {
	if ($('#name').val() || getCookie("name")) {
		setCookie('name', $('#name').val(), 10);
		$('#name').hide();
		$('#btn').hide();
		$('.name').remove();
		$('#questions').fadeIn(1000);
		$('#sum').fadeIn(1000);
		$('#tips').fadeIn(1000);
		$('#header').animate({'top': '15px', 'left': '15px', 'margin': 0});
		setInterval(function(){$('#container').css('backgroundImage', 'url(img/logo.png)');}, 300);		
		$('#header').prepend('<p class="name">Здравствуйте '+$('#name').val().replace(/\s+/g, '')+'</p>');
		$('.name').after('<button id="exit">Выход</button>');
		$('#exit').after('<button id="money">Забрать деньги</button>');

		$('#money').click(function() {
			alertify.confirm('Вы уверены что хотите закончить игру и забрать деньги? \r\n Что бы забрать деньги нажмите ОК \r\n Для продолжения игры нажмите CANCEL', function (e) {
				if (e) {location.reload()}
					else {''}
				});
		})
// ТАЙМЕР----------------------------------------------------------------
setInterval(function() {
	t -= 1;
	$('#time').text(t);
	if (t == 0) {
		if (level<=4) {
			alertify.confirm('Игра окончена! Ваш выигрыш 0 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
				if (e) {location.reload()}
					else {location.href = window.close();}
			});
			t=+1;
		}		
		if (level>4 && level<10) {
			alertify.confirm('Игра окончена! Ваш выигрыш 1000 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
				if (e) {location.reload()}
					else {location.href = window.close();}
			});
			t=+1;
		}
		if (level>9 && level<14) {
			alertify.confirm('Игра окончена! Ваш выигрыш 25000 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
				if (e) {location.reload()}
					else {location.href = window.close();}
			});
			t=+1;
		} 
	}
}, 1000);
audio.play();
game();
}
else{
	alertify.alert('Введите имя пожалуйста');
}
// ИГРА----------------------------------------------------------------
function game() {
	$('#quest').text(quest[level]);
	$('#ans0 span').text(answ[level][0]);
	$('#ans1 span').text(answ[level][1]);
	$('#ans2 span').text(answ[level][2]);
	$('#ans3 span').text(answ[level][3]);
	$('.answ').click(function() {
		if (key[level]==answ[level].indexOf($(this).text())) {
			level+=1;
			t=60;
			$('#quest').text(quest[level]);
			$('#ans0 span').text(answ[level][0]);
			$('#ans1 span').text(answ[level][1]);
			$('#ans2 span').text(answ[level][2]);
			$('#ans3 span').text(answ[level][3]);
			$('.answ span').removeClass('show');
			$('#answers span').fadeIn(200);
			if (level==15) {
				alertify.confirm('Игра окончена! Вы выиграли 1 000 000 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
					if (e) {location.reload()}
						else {location.href = window.close();}
				});
				t=+1;
			}
			levels();
		}
		else if (level<=4) {
			alertify.confirm('Не правильно! Игра окончена. Ваш выигрыш 0 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
				if (e) {location.reload()}
					else {location.href = window.close();}
			});
			t=+1;
		}		
		else if (level>4 && level<10) {
			alertify.confirm('Не правильно! Игра окончена. Ваш выигрыш 1000 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
				if (e) {location.reload()}
					else {location.href = window.close();}
			});
			t=+1;
		}
		else if (level>9 && level<14) {
			alertify.confirm('Не правильно! Игра окончена. Ваш выигрыш 25000 руб. ХОТИТЕ СЫГРАТЬ ЕЩЕ?', function (e) {
				if (e) {location.reload()}
					else {location.href = window.close();}
			});
			t=+1;
		}
	})
	// Подсказки-------------------------------------------------------
	$('#fivtyFivty').click(function() {
		if ($('#fivtyFivty').attr('value') == 'on') {
			$('#fivtyFivty').attr('value', 'off');
			$('#fivtyFivty').css('backgroundPosition', '424px 0');
			$('.answ span').fadeOut(600).addClass('hide');
			$('#ans'+key[level]+' span').removeClass('hide').addClass('show').fadeIn(600);
			$('#ans'+rand(0, 3, key[level])+' span').fadeIn(600).removeClass('hide').addClass('show');
		}
		else{
			alertify.alert('Попробуйте другую подсказку')
		}
	});
	$('#callFriend').click(function() {
		if ($('#callFriend').attr('value') == 'on') {
			$('#callFriend').attr('value', 'off');
			$('#callFriend').css('backgroundPosition', '280px 0');
			if ($('span').hasClass('show')) {
				alertify.alert('Ваш друг считает что правильный ответ '+$('#answers span.show:eq('+rand(0, 1)+')').text()+'.');
			}
			else{
				alertify.alert('Ваш друг считает что правильный ответ '+$('#answers span:eq('+rand(0, 3)+')').text())
			}
		}
		else{
			alertify.alert('Попробуйте другую подсказку')
		}
	});
	$('#people').click(function() {
		if ($('#people').attr('value') == 'on') {
			$('#people').attr('value', 'off');
			$('#people').css('backgroundPosition', '135px 0');
			if ($('span').hasClass('show')) {
				alertify.alert('Помощь зала: '+$('span.show:eq(0)').text()+' - '+rand(5, 95)+'% '+$('span.show:eq(1)').text()+' - '+rand(5, 95)+'%');
			}
			else{
				alertify.alert('Помощь зала: '+$('span:eq(0)').text()+' - '+rand(5, 95)+'% '+$('span:eq(1)').text()+' - '+rand(5, 95)+'% '+$('span:eq(2)').text()+' - '+rand(5, 95)+'% '+$('span:eq(3)').text()+' - '+rand(5, 95)+'% ');
			}
		}
		else{
			alertify.alert('Попробуйте другую подсказку')
		}
	});
// -----------------------------------------------------------------
function levels() {
	$('#tr'+level).css({
		backgroundColor: '#FAE345',
		color: '#000'
	});
	$('#tr'+(level-1)).css({
		backgroundColor: '',
		color: '#fff'
	});
}
levels();
}
// Кнопка ВЫХОД-----------------------------------------------------
$('#exit').click(function() {
	alertify.confirm('Вы уверены что хотите закончить игру?', function (e) {
		if (e) {setCookie('name', $('#name').val(), -1); location.reload();}
		else {''}
	});	
})
})
}) 
})(jQuery)
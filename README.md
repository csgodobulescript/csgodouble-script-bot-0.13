# CSGODOUBLE SCRIPT. ver 0.13. 16.03.16 
Bot script roulette.
Скрипт бота для игры в рулетку на http://www.csgodouble.com/

>Как работает скрипт:

1. Вы задаете в скрипте начальную ставку, опция (start_bet).
2. Указываете цвет, (color_tactic). Можно использовать черный ("black"), красный ("red"), зеленый ("green"). Скрипт может выбирать цвет за вас каждый ход ("random"), случайный цвет выбирается из черного или красного, в этом случае зеленый игнорируется.
3. Опция (max_lose_combo_to_swap) меняет цвет на противоположный на ходу указанном в опции. Опция (max_increase) устанавливает предел комбо побед, после достижения значения в (max_increase) ставка сбросится до начальной.
4. Алгоритмы игры (algorithm):
4.1. ("standart") -  Стандартный алгоритм (анти-мартингейл), ставит всегда первоначальную ставку, если ставка сыграла, то увеличивает ставку до побед указанных в (max_increase). В основном используется для ставок на черное\красное, на зеленое ставить не рекомендуется, если вы не уверены, что в течении 14-20 ходов не выпадет зеленое дважды.
4.2. ("martingale") - Мартингейл, ставит всегда первоначальную ставку до тех пор пока не проиграет, в случае поражения увлечивает вашу ставку вдвое пока не отыграет первоначальную ставку. В случае победы, вы всегда останетесь в плюсе. Используется для ставок на черное\красное. Опция (max_lose_combo_to_swap) играет значительную роль в этой тактике. Если подряд выпадает один и тот же противоположный цвет, то на (max_lose_combo_to_swap) цвет будет изменен на противоположный, что уменьшит ваши шансы проиграть вдвое.
4.3. ("green_waiting") - Ожидание на зеленое. Это самая прибыльная тактика. Рекомендуется использовать эту тактику только если вы уверены, что банкрол вам позволяет ждать 50 или больше ходов. Среднее число ходов между зеленым примерно 25-30. Но если же вам повезет и зеленый цвет будет выпадать часто, можно неплохо заработать. Эта тактика сводит все ваши расходы на минимум, первые 14 ходов будет идти первоначальная ставка, остальные будут увеличиваться пропорционально затраченным очкам.
5. Не забывайте указывать ковычки, когда меняете цвет или алгоритм. прим. config.algorithm = "green_waiting"; или config.color_tactic = "random"; 

**КАЖДУЮ ПОБЕДУ ОТПРАВЛЯЕТСЯ 15% ОТ ВЫИГРЫША АВТОРУ СКРИПТА. ВЫ ИСПОЛЬЗУЕТЕ СКРИПТ НА СВОЙ СТРАХ И РИСК, СКРИПТ НЕ ГАРАНТИРУЕТ 100% ПОБЕДЫ, ВСЕ ЗАВИСИТ ТОЛЬКО ОТ ВАШИХ РЕШЕНИЙ. ИСПОЛЬЗУЯ СКРИПТ ВЫ СОГЛАШАЕТЕСЬ С ЛИЦЕНЗИЕЙ АВТОРА И НЕ ИМЕЕТЕ НИКАКИХ ПРЕТЕНЗИЙ К НЕМУ.**

> Как использовать:

1. Mozilla Firefox
Откройте новую вкладку и в адресную сроку впишите about:config. Найти параметр devtools.selfxss.count, вписать значение (value) - 100.
Теперь откройте рулетку и нажмите F12, скопируйте в консоль скрипт и нажмите Enter. Готово.
2. Google Chrome
Откройте рулетку и нажмите Control + Shift + J, скопируйте в консоль скрипт и нажмите Enter. Готово.
В других браузерах не тестировалось.

По всем вопросам и ошибкам скрипта обращаться на почту: lain@pismorf.com

ENGLISH (GOOGLE TRANSLATE):
> How does the script:

1. You set the initial rate in the script, the option (start_bet).
2. Specify the color, (color_tactic). You can use the black ( "black"), red ( "red"), green ( "green"). The script can choose a color for your every move ( "random"), random color selected from black or red, in this case, green is ignored.
3. Option (max_lose_combo_to_swap) changes its color to the opposite on the move in the specified options. Option (max_increase) sets a limit combo wins, after reaching values ​​(max_increase) rate is reset to the start.
4. Game algorithms (algorithm):
4.1. ( "Standart") - Standard algorithm (anti-martingale), always puts the original bet if the bet is played, it increases the rate to these victories in (max_increase). Mainly used red, it is not recommended to put on the green bet on black \ if you are not sure, do not fall green twice during 14-20 moves.
4.2. ( "Martingale") - Martingale, always puts the original bet until not lose, in case of defeat increase half your bet until you win back your original bet. If you win, you will always remain in the black. Used to bet on black \ red. Option (max_lose_combo_to_swap) plays a significant role in these tactics. If consecutive falls the same opposite color, then (max_lose_combo_to_swap) color will be reversed, which will reduce your chances of losing twice.
4.3. ( "Green_waiting") - Waiting on the green. This is the most profitable strategy. It is recommended to use this tactic only if you are sure that bankroll allows you to wait for 50 or more strokes. The average number of strokes between the green of about 25-30. But if you are lucky and green will fall frequently, you can earn good money. This tactic brings all your expenses for at least the first 14 moves will keep the original bet, and the rest will be increased in proportion to the expended points.
5. Do not forget to mention quotes when changing the color or the algorithm. approx. config.algorithm = "green_waiting"; or config.color_tactic = "random";

**EVERY VICTORY GOES TO WIN 15% of the script author. YOUR USE OF THE SCRIPT IS AT YOUR SOLE RISK, the script does not guarantee 100% winning, it all depends on your decisions. Using scripts YOU AGREE TO THE TERMS OF THE AUTHOR AND DO NOT HAVE ANY CLAIM TO IT.**

> How to use:

1. Mozilla Firefox
Open a new tab and enter the date in the address about: config. Find option devtools.selfxss.count, enter a value (value) - 100.
Now open the tape and press F12, then copy the script to the console and press Enter. Done.
2. Google Chrome
Open the tape and press Control + Shift + J, copy the script in console and press Enter. Done.
Other browsers are not tested.

For any questions and handle script errors on mail: lain@pismorf.com

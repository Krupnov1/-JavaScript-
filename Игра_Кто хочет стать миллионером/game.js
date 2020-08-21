let game = {
  score: 0,
  run() {
    let result = player.selectQuestion();
    let quest = "";
    let point = ""; 
    if (result === 0 || result === 5) {
      quest = "вопросов";
      point = "баллов";  
    } else if (result === 1) {
      quest = "вопрос";
      point = "балл";
    } else {
      quest = "вопроса";
      point = "балла";
    }
    alert("Вы верно ответили на " + result + " " + quest + " и Ваш счет составляет " + result + " " + point);
  },

  init() {
    // Выводим приветствие игрока и запускаем игру.
    alert("Вас приветствует игра: Кто хочет стать миллионером?");
    alert("Чтобы начать игру нажмите OK.");
    game.run();
  }
}
game.init();


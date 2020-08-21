let player = {

    selectQuestion() {
        for (let configs of config) {
            let answers = "";
            for (let key in configs.answer) {
                answers += `${key}: ${configs.answer[key]}\n`;
            };
                answers = prompt(`${configs.question}\n Варианты ответа:\n${answers} Введите букву вашего варианта ответа`);
            if (answers === configs.correctAnswer) {
                game.score ++;
                alert("Вы ответили верно!!!");
            } else if (!answers) {
                alert("Нажмите ОК для выхода из игры");
                alert("Игра окончена!!!");
                break;
            }  
        };  
        return game.score;
    }
};
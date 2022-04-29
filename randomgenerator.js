

class RandomGenerator {
  getMove(){
    const moves = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random()* moves.length);

    return randomIndex;
  }
}

class RockPaperScissor {
  constructor(randomGenerator){
    this.randomGenerator = randomGenerator;
  }

  getResult(playerMove) {
    const randomMove = this.randomGenerator.getMove();
    const result = 'win'
    //return result;
  }
}

module.exports = RandomGenerator;
module.exports = RockPaperScissor;
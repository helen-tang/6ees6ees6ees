class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'
  }
  forage () {
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure) {
    //inherits this.treasureChest from ForagerBee so you can reference it with 'this'
    this.treasureChest.push(treasure);
  }
};

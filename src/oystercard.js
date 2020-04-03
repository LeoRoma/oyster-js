class OysterCard {
  constructor() {
    this.balance = 0;
  };

  topUp(amount){
    this.balance += amount
  };
};

module.exports = OysterCard;

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert(this.step);
      return this;
    }
  };
  
  // Пример использования:
  ladder.up().up().down().showStep(); // Output: 1
  
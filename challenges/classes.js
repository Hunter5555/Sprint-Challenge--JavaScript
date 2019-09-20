// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(dimensions) {
    this.W = dimensions.W;
    this.H = dimensions.H;
    this.L = dimensions.L;
  }
 volume() {
    return (this.W * this.H * this.L);
  }
 surfaceArea() {
    return (((this.W * this.L) + (this.H * this.L) + (this.H * this.W)) * 2);
  }
}
  const Cuboid = new CuboidMaker({
    L: 4,
    W: 5,
    H: 5
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(Cuboid.volume()); // 100
 console.log(Cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

    // methods go here
    work(){
      return `${this.newName} is an ${this.newJob}`;
    }
  
var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var BMI = require('../app.js');

describe('BMI tests', function(){
  it('should return 24.930747922437675 if height is 1.90 and weight is 90', function (){
    var height = 1.90;
    var weight = 90;

    var expected = 24.930747922437675;
    var actual = BMI(height, weight);

    expect(actual).to.equal(expected);
  })
})
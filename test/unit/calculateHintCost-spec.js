var chai = require('chai')
var expect = chai.expect
var calculateHintCost = require('../../lib/calculateHintCost')
var options = require('../../lib/options')

describe('Hints', function () {
  it('should cost 10% of their point value for text hints when payment is required', function () {
    expect(calculateHintCost({difficulty: 1}, options.paidTextHints)).to.equal(10)
    expect(calculateHintCost({difficulty: 2}, options.paidTextHints)).to.equal(25)
    expect(calculateHintCost({difficulty: 3}, options.paidTextHints)).to.equal(45)
    expect(calculateHintCost({difficulty: 4}, options.paidTextHints)).to.equal(70)
    expect(calculateHintCost({difficulty: 5}, options.paidTextHints)).to.equal(100)
  })

  it('should cost 20% of their point value for hint URLs when payment is required', function () {
    expect(calculateHintCost({difficulty: 1}, options.paidHintUrls)).to.equal(20)
    expect(calculateHintCost({difficulty: 2}, options.paidHintUrls)).to.equal(50)
    expect(calculateHintCost({difficulty: 3}, options.paidHintUrls)).to.equal(90)
    expect(calculateHintCost({difficulty: 4}, options.paidHintUrls)).to.equal(140)
    expect(calculateHintCost({difficulty: 5}, options.paidHintUrls)).to.equal(200)
  })

  it('should cost no points for text hints for all challenge difficulties when free', function () {
    expect(calculateHintCost({difficulty: 1}, options.freeTextHints)).to.equal(0)
    expect(calculateHintCost({difficulty: 2}, options.freeTextHints)).to.equal(0)
    expect(calculateHintCost({difficulty: 3}, options.freeTextHints)).to.equal(0)
    expect(calculateHintCost({difficulty: 4}, options.freeTextHints)).to.equal(0)
    expect(calculateHintCost({difficulty: 5}, options.freeTextHints)).to.equal(0)
  })

  it('should cost no points for hint URLs for all challenge difficulties when free', function () {
    expect(calculateHintCost({difficulty: 1}, options.freeHintUrls)).to.equal(0)
    expect(calculateHintCost({difficulty: 2}, options.freeHintUrls)).to.equal(0)
    expect(calculateHintCost({difficulty: 3}, options.freeHintUrls)).to.equal(0)
    expect(calculateHintCost({difficulty: 4}, options.freeHintUrls)).to.equal(0)
    expect(calculateHintCost({difficulty: 5}, options.freeHintUrls)).to.equal(0)
  })
})

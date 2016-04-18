import assert from 'assert'

describe('Home page', function() {
  it('should have the right title', function*() {
    yield browser.url('/')
    const title = yield browser.getTitle()
    assert.equal(title, "not the title")
  })
})

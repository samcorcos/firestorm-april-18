import assert from 'assert'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Home from './'

describe("Home component unit tests", function() {
  it("should render the Home component", function() {
    const renderer = TestUtils.createRenderer()
    renderer.render( <Home /> )
    const output = renderer.getRenderOutput()
    assert(output.type === "div")
  })
})

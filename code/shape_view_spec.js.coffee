#= require spec

describe "ShapeView", ->
  beforeEach ->
    @paper = new Raphael(0, 0, 1000, 1000)
    @guide = new Gaslight.Models.Guide
      fill: "225-#e53c2e:0-#1a1a1a:90"
      opacity: 0.0
      points: [
        {start: true, right: -100, top: -50}
        {x: -100, y: -100}
        {x: -400, y: 400}
        {x: 100, y: 100}
      ]
    @shapeView = new Gaslight.Views.ShapeView
      paper: @paper
      model: @guide

  describe "constructor", ->
    it "has a paper", ->
      @shapeView.paper.should.exist

  describe "shape", ->
    beforeEach ->
      @shapeView.createShape()
    it "should fill the shape", ->
      @shapeView.shape.attr('fill').should.equal @guide.get('fill')
      @shapeView.shape.attr('fill-opacity').should.equal @guide.get('opacity')

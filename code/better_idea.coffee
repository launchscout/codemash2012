class Cookbook.Routers.RecipeRouter extends Backbone.Router

  constructor: ->
    super
    @recipes = new Cookbook.Collections.Recipes()
    @recipeEditView = new Cookbook.Views.RecipeEditView
      el: $("#recipe_edit_view"))
    @recipeListView = new Cookbook.Views.RecipeListView
      el: $("#recipe_list_view")
      collection: @recipes
    @recipes.fetch()
    @recipes.on "sync", (recipe) => @navigate "recipes/#{recipe.id}", trigger: true

  routes:
    "recipes/:id/edit": "editRecipe"
    "recipes/:id": "showRecipe"

  editRecipe: (id) ->
    @recipe = @recipes.get(id)
    return unless @recipe
    @recipeEditView.model = @recipe
    @recipeView.hide()
    @recipeEditView.render()

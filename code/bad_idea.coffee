class Cookbook.Routers.RecipeRouter extends Backbone.Router

  routes:
    "recipes/:id/edit": "editRecipe"
    "recipes/:id": "showRecipe"

  editRecipe: (id) ->
    @recipe = @recipes.get(id)
    return unless @recipe
    @recipeEditView = new Cookbook.Views.RecipeEditView
      el: $("#recipe_edit_view")
      model: @recipe
    @recipeView.hide()
    @recipeEditView.render()

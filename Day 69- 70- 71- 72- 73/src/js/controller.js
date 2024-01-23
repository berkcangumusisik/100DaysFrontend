import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import icons from "url:../img/icons.svg";
import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) {
      return;
    }

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    recipeView.renderError(
      "We could not find that recipe. Please try another one"
    );
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();

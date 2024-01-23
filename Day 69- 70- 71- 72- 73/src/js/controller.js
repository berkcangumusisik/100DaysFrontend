import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import icons from "url:../img/icons.svg";
import searchView from "./views/searchView.js";
import resultView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

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

const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) {
      return;
    }
    await model.loadSearchResults(query);

    resultView.render(model.getSearchResultPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};
const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  paginationView.render(model.state.search);
};
controlSearchResults();
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();

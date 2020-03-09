import { PanelCtrl } from "grafana/app/plugins/sdk"; // will be resolved to app/plugins/sdk

import "./css/panel.base.scss";

class Ctrl extends PanelCtrl {
  constructor($scope, $injector, $http) {
    super($scope, $injector);
    $scope.fetching = false;
    $scope.error = '';
    $scope.gifs = [];
    $scope.fetchGifs = searchString => {
      if (!searchString || searchString.trim().length === 0) {
        alert("Please enter at least one character!");
        return;
      }

      $scope.fetching = true;
      $scope.error = '';

      const searchStringForUrl = searchString.replace(/\ /g, "+");

      $http
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=O3ACEGRj8Sla9rswZ6t14DTJxefvfO4R&q=${searchStringForUrl}&limit=5&offset=0&rating=G&lang=en`
        )
        .then(function successCallback(response) {
          $scope.fetching = false;
          $scope.gifs = response.data.data;
        })
        .catch(function errorCallback(response) {
          $scope.fetching = false;

          if (response.status !== -1) {
            $scope.error = response.data.message;
          } else {
            $scope.error = "Something went wrong...";
          }
        })
    };
  }

  link(scope, element) {
    this.initStyles();
  }

  initStyles() {
    window.System.import(this.panelPath + "css/panel.base.css!");
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }
}

Ctrl.templateUrl = "partials/template.html";

export { Ctrl as PanelCtrl };

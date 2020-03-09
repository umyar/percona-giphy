# About plugin
Plugin implemented using AngularJS and based on [grafana-plugin-template-webpack](https://github.com/CorpGlory/grafana-plugin-template-webpack)

# How to test plugin
1) Run the following command in **this repo dir**:
```sh
docker run -d -p 3000:3000 -v "$(pwd)"/plugin-dir-for-docker:/var/lib/grafana/plugins --name=grafana-gif grafana/grafana
```
2) Open Grafana in your browser (http://localhost:3000)
3) Create a new dashboard, and select **Choose Visualization** in the **New Panel** view
4) Select **Gif Plugin** from the list of visualizations
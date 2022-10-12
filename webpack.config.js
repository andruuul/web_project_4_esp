const path = require("path"); // conecta la ruta a la configuración de webpack
const HtmlWebpackPlugin = require("html-webpack-plugin"); // plugin de conexión
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // conecta mini-css-extract-plugin al proyecto
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // plugin de conexión

module.exports = {
  devtool: 'inline-source-map', //Para facilitar la depuración (debugging) en el navegador, puedes añadir la opción devtool al principio del archivo
  entry: {
    main: "./src/pages/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: ""
  },
  target: ['web', 'es5'], // asegúrate de que el código glue de Webpack sea también compatible con ES5
  mode: "development", // añade el modo de desarrollo aquí, de esta forma
  devServer: {
    static: path.resolve(__dirname, './dist'), // especifica una carpeta desde donde servir la aplicación y su contenido
    compress: true, // esto acelerará la carga de archivos en el modo de desarrollo
    port: 8080, // abrirá tu página en localhost:8080 (puedes usar otro puerto)
    open: true // se abrirá automáticamente en el navegador después de ejecutar npm run dev
  },
  stats: {
    preset: "errors-only", //solo sale cuando se producen errores
    children: true //para mostrar los errores de los procesos hijos y los plugins.
  },
  module: {
    rules: [ // esto es un array de reglas
      // añádele un objeto que contenga reglas para Babel
      {
        // una expresión regular que busca todos los archivos js
        test: /\.js$/,
        // todos los archivos deben ser procesados por babel-loader
        loader: "babel-loader",
        // excluye la carpeta node_modules, no necesitamos procesar archivos en ella
        exclude: "/node_modules/"
      }, 
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", 
            options: { // añade un objeto options.
            importLoaders: 1 // Esta opción está descrita en la documentación de css-loader. Cuando el valor es 1 significa que ciertas transformaciones de PostCSS deben realizarse antes de ejecutar css-loader.
          } 
       },
         // añade postcss-loader 
         "postcss-loader"
        ]
      },
      {// la regla para procesar archivos
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource" //los archivos fuente se trasladarán al build final en el mismo formato
    },
    ]
  },
  plugins: [ // agrega el array aquí
    new HtmlWebpackPlugin({
      template: "./src/index.html", // ruta a nuestro archivo index.html
    }),
    new CleanWebpackPlugin(), // utiliza plugin
    new MiniCssExtractPlugin(), // conecta el plugin para fusionar archivos CSS
  ], 
  
}
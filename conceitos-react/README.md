### Instalando React e React Dom
`yarn add react react-dom`

### Babel -> Transpilar o código do react para que o browser possa entender
### Webpack -> Para cada tipo de arquivo (.js, .css, .png) vai converter o codigo de uma maneira diferente
`yarn add @babel/core @babel/preset-env @babel/preset-react wbepack webpack-cli`

### Loaders -> babel-loader, css-loader, image-loader
`yarn add babel-loader`

### Comando babel para transpilar arquivo JS
`yarn add @babel/cli`

### Executando a transpilacão
`yarn babel src/index.js --out-file public/bundle.js`

### Plugin Babel
`yarn add @babel/plugin-transform-runtime -D`

### Instalando servidor de desenvolvimento do Webpack
`yarn add webpack-dev-server -D`

### Instalando pacotes para css e imagens
`yarn add style-loader css-loader`
`yarn add file-loader`

### Executando o webpack
`yarn webpack --mode development`

### Executando servidor do Webpack
`yarn webpack-dev-server --mode development`

### Instalando axios para requisicões na API
`yarn add axios`

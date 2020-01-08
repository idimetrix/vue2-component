# vue2-component

A simple Vue 2 component

### Direct include

Simply include `vue2-component` after Vue and it will install itself automatically:

```html
<script src="vue.min.js"></script>
<script src="vue2-component.umd.min.js"></script>
```

### CDN [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/vue2-component/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue2-component)

```html
<script src="https://unpkg.com/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue2-component"></script>
```

### NPM [![npm](https://img.shields.io/npm/dm/vue2-component.svg)](https://www.npmjs.com/package/vue2-component)

```
npm install vue2-component --save
```

When used with a module system, you must explicitly install the component via `Vue.use()`:

```js
import Vue from 'vue'
import VueComponent from 'vue2-component'

Vue.use(VueComponent)
```

You don't need to do this when using global script tags.

### Nuxt.js

```
npm install vue2-component --save
```

When create file `plugins/vue2-component.js`:

```js
import Vue from 'vue'
import VueComponent from 'vue2-component'

Vue.use(VueComponent)
```

Then, add the file inside the `plugins` key of `nuxt.config.js`:

```js
module.exports = {
  //...
  plugins: [
    '~/plugins/vue2-component'
  ],
  //...
}
```

## Available Methods

- [method1](#method1)
- [method2](#method2)
- [method3](#method3)

## Usage

#### method1

+ Example:

  ```js
    // 'I LOVE vue2-component'

#### method2

+ Example:

  ```js
    // 'I LOVE vue2-component'
  
#### method3

+ Example:

  ```js
    // 'I LOVE vue2-component'
  
## Sample

```vue
<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
#app {
}
</style>
```

## Contributing
If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/idimetrix/vue2-component/issues) or a [pull request](https://github.com/idimetrix/vue2-component/pulls).

## License
[MIT](https://choosealicense.com/licenses/mit/)
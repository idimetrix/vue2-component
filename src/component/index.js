import Component from "./Component";

const plugin = {
  install(Vue, options = {}) {
    const { option1, option2, option3 } = {
      option1: null,
      option2: null,
      option3: null,
      ...options
    };

    console.log(option1, option2, option3);
  }
};

export default plugin;

if (typeof window !== `undefined` && window.Vue) {
  window.Vue.use(plugin);
  window.Component = Component;
}

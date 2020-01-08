const plugin = {
  install(Vue, options = {}) {}
};

export default plugin;

if (typeof window !== `undefined` && window.Vue) {
  window.Vue.use(plugin);
}

/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.beforeEach((to, from, next) => {
    const redirectList = {
      '/': '/docs/',
    }
    const redirect = redirectList[to.path]

    if (redirect) {
      next({
        path: redirect
      })
    } else next()
  })
}
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/blog': RouteRecordInfo<'/blog', '/blog', Record<never, never>, Record<never, never>>,
    '/counter': RouteRecordInfo<'/counter', '/counter', Record<never, never>, Record<never, never>>,
    '/posts/': RouteRecordInfo<'/posts/', '/posts', Record<never, never>, Record<never, never>>,
    '/posts/[slug]': RouteRecordInfo<'/posts/[slug]', '/posts/:slug', { slug: ParamValue<true> }, { slug: ParamValue<false> }>,
    '/posts/author/[name]': RouteRecordInfo<'/posts/author/[name]', '/posts/author/:name', { name: ParamValue<true> }, { name: ParamValue<false> }>,
    '/posts/tagged/[tag]': RouteRecordInfo<'/posts/tagged/[tag]', '/posts/tagged/:tag', { tag: ParamValue<true> }, { tag: ParamValue<false> }>,
    '/posts/year/[year]': RouteRecordInfo<'/posts/year/[year]', '/posts/year/:year', { year: ParamValue<true> }, { year: ParamValue<false> }>,
    '/privacy': RouteRecordInfo<'/privacy', '/privacy', Record<never, never>, Record<never, never>>,
    '/videos': RouteRecordInfo<'/videos', '/videos', Record<never, never>, Record<never, never>>,
    '/whatsnew': RouteRecordInfo<'/whatsnew', '/whatsnew', Record<never, never>, Record<never, never>>,
  }
}

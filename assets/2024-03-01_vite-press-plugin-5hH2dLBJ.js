import{_ as f}from"./MarkdownPage.vue_vue_type_script_setup_true_lang-DVprAESr.js";import{d as _,r as w,o as e,c as n,F as u,g as d,h,a as t,t as m,n as b,i as y,w as v,b as r,e as s}from"./index-DNpF0gYe.js";const P={key:0},V={key:1},x={key:0},C={class:"ml-6 flex items-center text-base leading-8"},T={class:"mr-1 text-slate-600","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block","user-select":"none","vertical-align":"text-bottom",overflow:"visible"}},M=t("path",{d:"M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"},null,-1),A=[M],j={key:1},N={class:"ml-6"},B={class:"flex items-center text-base leading-8"},D=t("path",{d:"M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"},null,-1),R=[D],z={class:"mr-1 text-sky-500","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block","user-select":"none","vertical-align":"text-bottom",overflow:"visible"}},I=t("path",{d:"M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"},null,-1),L=[I],S=_({__name:"FileLayout",props:{files:{},label:{},contents:{}},setup(g){return(a,i)=>{const c=w("FileLayout",!0);return a.files?(e(),n("div",P,[(e(!0),n(u,null,d(a.files,(o,p)=>(e(),h(c,{label:p,contents:o},null,8,["label","contents"]))),256))])):(e(),n("div",V,[a.label=="_"?(e(),n("div",x,[(e(!0),n(u,null,d(a.contents,o=>(e(),n("div",C,[(e(),n("svg",T,A)),t("span",null,m(o),1)]))),256))])):(e(),n("div",j,[t("div",N,[t("div",B,[(e(),n("svg",{class:b(["mr-1 text-slate-600",Object.keys(a.contents).length==0?"-rotate-90":""]),"aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 12 12",width:"12",height:"12",fill:"currentColor",style:{display:"inline-block","user-select":"none","vertical-align":"text-bottom",overflow:"visible"}},R,2)),(e(),n("svg",z,L)),t("span",null,m(a.label),1)]),(e(!0),n(u,null,d(a.contents,(o,p)=>(e(),h(c,{label:p,contents:o},null,8,["label","contents"]))),256))])]))]))}}}),$={class:"markdown-body"},F=t("p",null,[s("The Vite Press Plugin is an alternative to "),t("a",{href:"https://vitepress.dev"},"VitePress"),s(" for adding Markdown features to existing Vite Vue or React projects. It’s a non-intrusive plugin for Vue and React Vite apps that want to add markdown powered content features without needing to adopt an opinionated framework for their entire App.")],-1),W=t("h2",null,"Universal Markdown Features",-1),E=t("p",null,[s("A goal for "),t("strong",null,"vite-press-plugin"),s(" is to implement a suite of universal markdown-powered features that can be reused across all our Vue, React and .NET Razor and Blazor project templates, allowing you to freely copy and incorporate same set of markdown feature folders to power markdown content features across a range of websites built with different technologies.")],-1),U=t("h3",null,"Vite Apps with vite-press-plugin",-1),q=t("p",null,[s("The "),t("strong",null,"vite-press-plugin"),s(" currently powers the markdown features in the following Vite Vue and React templates:")],-1),G=t("h4",null,"Vite Templates with vite-press-plugin",-1),H=t("ul",null,[t("li",null,[t("a",{href:"https://press-vue.web-templates.io"},"press-vue"),s(" - Vite Vue App")]),t("li",null,[t("a",{href:"https://press-react.web-templates.io"},"press-react"),s(" - Vite React App")])],-1),Z=t("h4",null,".NET 8 API backend with Vite Vue & React SPA frontend",-1),O=t("ul",null,[t("li",null,[t("a",{href:"https://vue-spa.web-templates.io"},"vue-spa"),s(" - .NET 8 API with Vite Vue SPA frontend")]),t("li",null,[t("a",{href:"https://react-spa.web-templates.io"},"react-spa"),s(" - .NET 8 API with Vite React SPA frontend")])],-1),Y=t("p",null,[s("The "),t("strong",null,"vite-press-plugin"),s(" makes the Markdown features available to the Vite App, whilst the markdown rendering itself is optimally implemented in:")],-1),K=t("ul",null,[t("li",null,[s("Vue Templates - with "),t("a",{href:"https://github.com/markdown-it/markdown-it"},"markdown-it"),s(" in "),t("a",{href:"https://vuejs.org/guide/scaling-up/sfc.html"},"Vue SFC"),s(" Components")]),t("li",null,[s("React Templates - with "),t("a",{href:"https://github.com/remarkjs/remark"},"remark"),s(" and "),t("a",{href:"https://mdxjs.com"},"MDX"),s(" in "),t("a",{href:"https://react.dev"},"React"),s(" Components")])],-1),X=t("h3",null,".NET Templates with C# and Markdig",-1),J=t("p",null,[s("Whilst the same Markdown feature folders are "),t("a",{href:"https://razor-ssg.web-templates.io/posts/razor-ssg"},"implemented in C#"),s(" and rendered with "),t("a",{href:"https://github.com/xoofx/markdig"},"Markdig"),s(" and either Razor Pages or Blazor Components:")],-1),Q=t("h4",null,".NET 8 Razor SSG and Blazor SSR Templates",-1),tt=t("ul",null,[t("li",null,[t("a",{href:"https://razor-ssg.web-templates.io"},"razor-ssg"),s(" - .NET Razor SSG Blog and Marketing Website with "),t("strong",null,"Markdig")]),t("li",null,[t("a",{href:"https://razor-press.web-templates.io"},"razor-press"),s(" - .NET Razor SSG Documentation Website with "),t("strong",null,"Markdig")]),t("li",null,[t("a",{href:"https://blazor-vue.web-templates.io"},"blazor-vue"),s(" - .NET 8 Blazor Server Rendered Website with "),t("strong",null,"Markdig")])],-1),st=t("h3",null,"Markdown Feature Folders",-1),et=t("p",null,[s("The content for each Markdown feature is maintained within its own feature folder with a "),t("code",null,"_"),s(" prefix:")],-1),nt=t("h4",null,"Markdown Document Structure",-1),at=t("p",null,"Additional metadata for each markdown page is maintained in the frontmatter of each markdown page, e.g. the front matter for this blog post contains:",-1),ot=t("pre",{class:"language-md"},[t("code",{class:"language-md"},[t("span",{class:"token front-matter-block"},[t("span",{class:"token punctuation"},"---"),s(`
`),t("span",{class:"token front-matter yaml language-yaml"},`title:   Vite Press Plugin
summary: Introducing the Vite Press Plugin
author:  Lucy Bates
tags:    [docs,markdown]
image:   https://source.unsplash.com/random/2000x1000/?stationary`),s(`
`),t("span",{class:"token punctuation"},"---")]),s(`
`)])],-1),lt=t("p",null,"The frontmatter is used in combination with file attributes to populate the document metadata. The schema used to support the current markdown features include:",-1),rt=t("pre",{class:"language-ts"},[t("code",{class:"language-ts"},[t("span",{class:"token keyword"},"type"),s(),t("span",{class:"token class-name"},"Doc"),s(),t("span",{class:"token operator"},"="),s(),t("span",{class:"token punctuation"},"{"),s(`
    title`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("     "),t("span",{class:"token comment"},"// title of Markdown page (frontmatter)"),s(`
    slug`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("      "),t("span",{class:"token comment"},"// slug to page (populated)"),s(`
    path`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("      "),t("span",{class:"token comment"},"// path to page (populated)"),s(`
    fileName`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("  "),t("span",{class:"token comment"},"// filename of markdown file (populated)"),s(`
    content`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("   "),t("span",{class:"token comment"},"// markdown content (populated)"),s(`
    date`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("      "),t("span",{class:"token comment"},"// date of page (frontmatter)"),s(`
    tags`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),s("    "),t("span",{class:"token comment"},"// related tags (frontmatter)"),s(`
    order`),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"number"),s("    "),t("span",{class:"token comment"},"// explicit page ordering (frontmatter)"),s(`
    group`),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("    "),t("span",{class:"token comment"},"// which group page belongs to (populated)"),s(`
    draft`),t("span",{class:"token operator"},"?"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"boolean"),s("   "),t("span",{class:"token comment"},"// make visible in production (frontmatter)"),s(`
    wordCount`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"number"),s("      "),t("span",{class:"token comment"},"// (populated)"),s(`
    lineCount`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"number"),s("      "),t("span",{class:"token comment"},"// (populated)"),s(`
    minutesToRead`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"number"),s("  "),t("span",{class:"token comment"},"// (populated)"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`

`),t("span",{class:"token keyword"},"type"),s(),t("span",{class:"token class-name"},"Post"),s(),t("span",{class:"token operator"},"="),s(" Doc "),t("span",{class:"token operator"},"&"),s(),t("span",{class:"token punctuation"},"{"),s(`
    summary`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s(),t("span",{class:"token comment"},"// short summary of blog post (frontmatter)"),s(`
    author`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("  "),t("span",{class:"token comment"},"// author of blog post (frontmatter)"),s(`
    image`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("   "),t("span",{class:"token comment"},"// hero image of blog post (frontmatter)"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`

`),t("span",{class:"token keyword"},"type"),s(),t("span",{class:"token class-name"},"Video"),s(),t("span",{class:"token operator"},"="),s(" Doc "),t("span",{class:"token operator"},"&"),s(),t("span",{class:"token punctuation"},"{"),s(`
    url`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s(),t("span",{class:"token comment"},"// URL of YouTube Video"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`

`),t("span",{class:"token keyword"},"type"),s(),t("span",{class:"token class-name"},"WhatsNew"),s(),t("span",{class:"token operator"},"="),s(" Doc "),t("span",{class:"token operator"},"&"),s(),t("span",{class:"token punctuation"},"{"),s(`
    url`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("    "),t("span",{class:"token comment"},"// URL of YouTube Video"),s(`
    image`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token builtin"},"string"),s("  "),t("span",{class:"token comment"},"// Image to display for feature"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`
`)])],-1),pt=t("p",null,"Markdown files can contain additional frontmatter which is also merged with the document metadata.",-1),it=t("h3",null,"Accessing Markdown Metadata",-1),ct=t("p",null,[s("In Vue App’s the Metadata is available as an injected dependency that’s navigable with the typed "),t("code",null,"VirtualPress"),s(" schema, e.g:")],-1),ut=t("pre",{class:"language-ts"},[t("code",{class:"language-ts"},[t("span",{class:"token keyword"},"import"),s(),t("span",{class:"token keyword"},"type"),s(),t("span",{class:"token punctuation"},"{"),s(" VirtualPress "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},'"vite-plugin-press"'),s(`

`),t("span",{class:"token keyword"},"const"),s(" press"),t("span",{class:"token operator"},":"),s("VirtualPress "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token function"},"inject"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'press'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"!"),s(`
`)])],-1),dt=t("p",null,"In React App’s it’s available via an injected context:",-1),ht=t("pre",{class:"language-ts"},[t("code",{class:"language-ts"},[t("span",{class:"token keyword"},"import"),s(),t("span",{class:"token punctuation"},"{"),s(" PressContext "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},'"@/contexts"'),s(`

`),t("span",{class:"token keyword"},"const"),s(" press "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token function"},"useContext"),t("span",{class:"token punctuation"},"("),s("PressContext"),t("span",{class:"token punctuation"},")"),s(`
`)])],-1),mt=t("p",null,"Which is defined as:",-1),gt=t("pre",{class:"language-ts"},[t("code",{class:"language-ts"},[t("span",{class:"token keyword"},"import"),s(),t("span",{class:"token punctuation"},"{"),s(" createContext "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},"'react'"),s(`
`),t("span",{class:"token keyword"},"import"),s(),t("span",{class:"token keyword"},"type"),s(),t("span",{class:"token punctuation"},"{"),s(" VirtualPress "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},"'vite-plugin-press'"),s(`

`),t("span",{class:"token keyword"},"export"),s(),t("span",{class:"token keyword"},"const"),s(" PressContext "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token generic-function"},[t("span",{class:"token function"},"createContext"),t("span",{class:"token generic class-name"},[t("span",{class:"token operator"},"<"),s("VirtualPress"),t("span",{class:"token operator"},">")])]),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"as"),s(" VirtualPress"),t("span",{class:"token punctuation"},")"),s(`
`)])],-1),kt=t("p",null,[s("This "),t("code",null,"VirtualPress"),s(" metadata is used to power all markdown features.")],-1),ft=t("h3",null,"Blog",-1),_t=t("p",null,[s("The blog maintains its markdown posts in a flat "),t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/tree/main/MyApp.Client/src/_posts"},"/_posts"),s(" folder which each Markdown post containing its publish date and URL slug it should be published under, e.g:")],-1),wt=t("p",null,"Supporting all Blog features requires several different pages to render each of its view:",-1),bt=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Description"),t("th",null,"Example"),t("th",null,"Vue"),t("th",null,"React")])]),t("tbody",null,[t("tr",null,[t("td",null,"Main Blog layout"),t("td",null,[t("a",{href:"/blog"},"/blog")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/blog.vue"},"blog.vue")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/blog.tsx"},"blog.tsx")])]),t("tr",null,[t("td",null,"Navigable Archive of Posts"),t("td",null,[t("a",{href:"/posts"},"/posts")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/index.vue"},"index.vue")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/index.tsx"},"index.tsx")])]),t("tr",null,[t("td",null,"Individual Blog Post (like this!)"),t("td",null,[t("a",{href:"/posts/vite-press-plugin"},"/posts/vite-press-plugin")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.vue"},"[slug].vue")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.tsx"},"[slug].tsx")])]),t("tr",null,[t("td",null,"Display Posts by Author"),t("td",null,[t("a",{href:"/posts/author/lucy-bates"},"/posts/author/lucy-bates")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.vue"},"[name].vue")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.tsx"},"[name].tsx")])]),t("tr",null,[t("td",null,"Display Posts by Tag"),t("td",null,[t("a",{href:"/posts/tagged/markdown"},"/posts/tagged/markdown")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.vue"},"[tag].vue")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.tsx"},"[tag].tsx")])]),t("tr",null,[t("td",null,"Display Posts by Year"),t("td",null,[t("a",{href:"/posts/year/2024"},"/posts/year/2024")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.vue"},"[year].vue")]),t("td",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.tsx"},"[year].tsx")])])])],-1),yt=t("h4",null,"Configuration",-1),vt=t("p",null,[s("Additional information about the Website Blog is maintained in "),t("code",null,"_posts/config.json")],-1),Pt=t("pre",{class:"language-json"},[t("code",{class:"language-json"},[t("span",{class:"token punctuation"},"{"),s(`
  `),t("span",{class:"token property"},'"localBaseUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"http://localhost:5173"'),t("span",{class:"token punctuation"},","),s(`
  `),t("span",{class:"token property"},'"publicBaseUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://press-vue.web-templates.io"'),t("span",{class:"token punctuation"},","),s(`
  `),t("span",{class:"token property"},'"siteTwitter"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"@Vue"'),t("span",{class:"token punctuation"},","),s(`
  `),t("span",{class:"token property"},'"blogTitle"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"From the blog"'),t("span",{class:"token punctuation"},","),s(`
  `),t("span",{class:"token property"},'"blogDescription"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Writing on software design and aerospace industry."'),t("span",{class:"token punctuation"},","),s(`
  `),t("span",{class:"token property"},'"blogEmail"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"email@example.org (Vue)"'),t("span",{class:"token punctuation"},","),s(`
  `),t("span",{class:"token property"},'"blogImageUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://servicestack.net/img/logo.png"'),s(`
`),t("span",{class:"token punctuation"},"}"),s(`
`)])],-1),Vt=t("h4",null,"Authors",-1),xt=t("p",null,[s("Whilst information about Post Authors are maintained in "),t("code",null,"_posts/authors.json")],-1),Ct=t("pre",{class:"language-json"},[t("code",{class:"language-json"},[t("span",{class:"token punctuation"},"["),s(`
  `),t("span",{class:"token punctuation"},"{"),s(`
    `),t("span",{class:"token property"},'"name"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Lucy Bates"'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"email"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"lucy@email.org"'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"bio"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Writing on software design and aerospace industry."'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"profileUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"/img/profiles/user1.svg"'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"twitterUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://twitter.com/lucy"'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"threadsUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://threads.net/@lucy"'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"gitHubUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://github.com/lucy"'),s(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),s(`
`),t("span",{class:"token punctuation"},"]"),s(`
`)])],-1),Tt=t("p",null,[s("To associate an Author the "),t("strong",null,"name"),s(" property is used to match a posts frontmatter "),t("strong",null,"author"),s(".")],-1),Mt=t("h3",null,"General Features",-1),At=t("p",null,"Most unique markdown features are captured in their Markdown’s frontmatter metadata, but in general these features are broadly available for all features:",-1),jt=t("ul",null,[t("li",null,[t("strong",null,"Live Reload"),s(" - Latest Markdown content is displayed during "),t("strong",null,"Development")]),t("li",null,[t("strong",null,"Drafts"),s(" - Prevent posts being worked on from being published with "),t("code",null,"draft: true")]),t("li",null,[t("strong",null,"Future Dates"),s(" - Posts with a future date wont be published until that date")])],-1),Nt=t("h3",null,"What’s New Feature",-1),Bt=t("p",null,[s("The "),t("a",{href:"/whatsnew"},"/whatsnew"),s(" page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page where a new folder is created per release, containing both release date and release or project name, with all features in that release maintained markdown content sorted in alphabetical order:")],-1),Dt=t("p",null,"What’s New follows the same structure as Pages feature which is rendered in:",-1),Rt=t("ul",null,[t("li",null,[t("a",{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/whatsnew.vue"},"whatsnew.vue")]),t("li",null,[t("a",{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/whatsnew.tsx"},"whatsnew.tsx")])],-1),zt=t("h3",null,"Videos Feature",-1),It=t("p",null,[s("The videos feature maintained in the "),t("code",null,"_videos"),s(" folder allows grouping of related videos into different folder groups, e.g:")],-1),Lt=t("p",null,[s("These can then be rendered as UI fragments using the "),t("code",null,"<VideoGroup>"),s(" component, e.g:")],-1),St=t("pre",{class:"language-tsx"},[t("code",{class:"language-tsx"},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),t("span",{class:"token class-name"},"VideoGroup")]),s(`
  `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("Vue Components"),t("span",{class:"token punctuation"},'"')]),s(`
  `),t("span",{class:"token attr-name"},"summary"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("Learn about productive features in Vue Component Library"),t("span",{class:"token punctuation"},'"')]),s(`
  `),t("span",{class:"token attr-name"},"group"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("vue"),t("span",{class:"token punctuation"},'"')]),s(`
  `),t("span",{class:"token attr-name"},"learnMore"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("https://docs.servicestack.net/vue/"),t("span",{class:"token punctuation"},'"')]),s(),t("span",{class:"token punctuation"},"/>")]),s(`
`)])],-1),$t=t("h3",null,"Includes Feature",-1),Ft=t("p",null,[s("The includes feature allows maintaining reusable markdown fragments in the "),t("code",null,"_includes"),s(" folder, e.g:")],-1),Wt=t("p",null,"Which can be included in other Markdown files with:",-1),Et=t("pre",{class:"language-md"},[t("code",{class:"language-md"},`:::include privacy.md:::

:::include features/include.md:::
`)],-1),Ut=t("p",null,[s("Alternatively they can be included in other Vue, React or Markdown pages with the "),t("code",null,"<Include>"),s(" component, e.g:")],-1),qt=t("pre",{class:"language-tsx"},[t("code",{class:"language-tsx"},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),t("span",{class:"token class-name"},"Include")]),s(),t("span",{class:"token attr-name"},"src"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("privacy.md"),t("span",{class:"token punctuation"},'"')]),s(),t("span",{class:"token punctuation"},"/>")]),s(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),t("span",{class:"token class-name"},"Include")]),s(),t("span",{class:"token attr-name"},"src"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("features/include.md"),t("span",{class:"token punctuation"},'"')]),s(),t("span",{class:"token punctuation"},"/>")]),s(`
`)])],-1),Gt=t("h3",null,"Metadata APIs Feature",-1),Ht=t("p",null,[s("To support external clients from querying static markdown metadata you can export it to pre-rendered static "),t("code",null,"*.json"),s(" data structures by configuring "),t("code",null,"metadataPath"),s(" to the location you the "),t("code",null,"*.json"),s(" files published to, e.g:")],-1),Zt=t("pre",{class:"language-ts"},[t("code",{class:"language-ts"},[t("span",{class:"token keyword"},"export"),s(),t("span",{class:"token keyword"},"default"),s(),t("span",{class:"token function"},"defineConfig"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),s(`
    plugins`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(`
        `),t("span",{class:"token function"},"Press"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),s(`
            metadataPath`),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},"'public/api'"),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token punctuation"},"]"),s(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s(`
`)])],-1),Ot=t("p",null,[s("This will publish all the content of each content type in the year they were published in, along with an "),t("code",null,"all.json"),s(" containing all content published in that year as well aso for all time, e.g:")],-1),Yt=t("p",null,[s("With this you can fetch the metadata of all the new "),t("strong",null,"Blog Posts"),s(" added in "),t("strong",null,"2023"),s(" from:")],-1),Kt=t("p",null,[t("a",{href:"/api/2024/blog.json"},"/api/2024/blog.json")],-1),Xt=t("p",null,[s("Or all the website content added in "),t("strong",null,"2024"),s(" from:")],-1),Jt=t("p",null,[t("a",{href:"/api/2024/all.json"},"/api/2024/all.json")],-1),Qt=t("p",null,[s("Or "),t("strong",null,"ALL"),s(" the website metadata content from:")],-1),ts=t("p",null,[t("a",{href:"/api/all.json"},"/api/all.json")],-1),ss=t("p",null,[s("This feature makes it possible to support use-cases like CreatorKit’s "),t("a",{href:"https://servicestack.net/creatorkit/portal-mailruns#generating-newsletters"},"Generating Newsletters"),s(" feature which generates a Monthly Newsletter Email with all new content added within a specified period.")],-1),as="Vite Press Plugin",os="Introducing the Vite Press Plugin",ls="Lucy Bates",rs=["docs","markdown"],ps="https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",is=[{property:"og:title",content:"Vite Press Plugin"},{name:"twitter:title",content:"Vite Press Plugin"},{property:"og:image",content:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}],cs={__name:"2024-03-01_vite-press-plugin",setup(g,{expose:a}){const i={title:"Vite Press Plugin",summary:"Introducing the Vite Press Plugin",author:"Lucy Bates",tags:["docs","markdown"],image:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",meta:[{property:"og:title",content:"Vite Press Plugin"},{name:"twitter:title",content:"Vite Press Plugin"},{property:"og:image",content:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}]};return a({frontmatter:i}),y({title:"Vite Press Plugin",meta:[{property:"og:title",content:"Vite Press Plugin"},{name:"twitter:title",content:"Vite Press Plugin"},{property:"og:image",content:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}]}),(o,p)=>{const l=S,k=f;return e(),h(k,{frontmatter:i},{default:v(()=>[t("div",$,[F,W,E,U,q,G,H,Z,O,Y,K,X,J,Q,tt,st,et,r(l,{files:{_includes:{},_posts:{},_videos:{},_whatsnew:{}}}),nt,at,ot,lt,rt,pt,it,ct,ut,dt,ht,mt,gt,kt,ft,_t,r(l,{files:{_posts:{_:["...","2023-01-21_start.md","2024-02-11_jwt-identity-auth.md","2024-03-01_vite-press-plugin.md"]}}},null,8,["files"]),wt,bt,yt,vt,Pt,Vt,xt,Ct,Tt,Mt,At,jt,Nt,Bt,r(l,{files:{_whatsnew:{"2023-03-08_Animaginary":{_:["feature1.md"]},"2023-03-18_OpenShuttle":{_:["feature1.md"]},"2023-03-28_Planetaria":{_:["feature1.md"]}}}},null,8,["files"]),Dt,Rt,zt,It,r(l,{files:{_videos:{vue:{_:["admin.md","autoquerygrid.md","components.md"]},react:{_:["locode.md","bookings.md","nextjs.md"]}}}},null,8,["files"]),Lt,St,$t,Ft,r(l,{files:{_includes:{features:{_:["videos.md","whatsnew.md"]},_:["privacy.md"]}}},null,8,["files"]),Wt,Et,Ut,qt,Gt,Ht,Zt,Ot,r(l,{files:{meta:{2022:{_:["all.json","posts.json","videos.json"]},2023:{_:["all.json","posts.json"]},2024:{_:["all.json","posts.json","videos.json","whatsnew.json"]},_:["all.json","index.json"]}}},null,8,["files"]),Yt,Kt,Xt,Jt,Qt,ts,ss])]),_:1})}}};export{ls as author,cs as default,ps as image,is as meta,os as summary,rs as tags,as as title};

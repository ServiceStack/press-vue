import{_}from"./MarkdownPage.vue_vue_type_script_setup_true_lang-9SfYeRL2.js";import{_ as f}from"./GettingStarted.vue_vue_type_script_setup_true_lang-CqoGEw9o.js";import{d as k,r as b,o as n,c as e,F as i,g as p,a as t,t as g,h as u,i as y,w as v,b as c,u as S,e as s}from"./index-CBclstI1.js";import{C as x}from"./ChartJs-WsHVrh5E.js";const C={key:0},z={class:"ml-6 flex items-center text-base leading-8"},M={class:"mr-1 text-slate-600","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block","user-select":"none","vertical-align":"text-bottom",overflow:"visible"}},j=t("path",{d:"M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"},null,-1),B=[j],R={key:1},P={class:"ml-6"},T={class:"flex items-center text-base leading-8"},G={class:"mr-1 text-slate-600","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 12 12",width:"12",height:"12",fill:"currentColor",style:{display:"inline-block","user-select":"none","vertical-align":"text-bottom",overflow:"visible"}},N=t("path",{d:"M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"},null,-1),A=[N],F={class:"mr-1 text-sky-500","aria-hidden":"true",focusable:"false",role:"img",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block","user-select":"none","vertical-align":"text-bottom",overflow:"visible"}},L=t("path",{d:"M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"},null,-1),$=[L],V=k({__name:"File",props:{label:{},contents:{},depth:{}},setup(d){return(a,r)=>{const l=b("File",!0);return n(),e("div",null,[a.label=="_"?(n(),e("div",C,[(n(!0),e(i,null,p(a.contents,o=>(n(),e("div",z,[(n(),e("svg",M,B)),t("span",null,g(o),1)]))),256))])):(n(),e("div",R,[t("div",P,[t("div",T,[(n(),e("svg",G,A)),(n(),e("svg",F,$)),t("span",null,g(a.label),1)]),(n(!0),e(i,null,p(a.contents,(o,h)=>(n(),u(l,{label:h,contents:o},null,8,["label","contents"]))),256))])]))])}}}),I=k({__name:"FileLayout",props:{files:{}},setup(d){return(a,r)=>(n(),e("div",null,[(n(!0),e(i,null,p(a.files,(l,o)=>(n(),u(V,{label:o,contents:l},null,8,["label","contents"]))),256))]))}}),W={class:"markdown-body"},E=t("h2",null,"New Blogging features in Razor SSG",-1),H=t("p",null,[t("a",{href:"https://razor-ssg.web-templates.io"},"Razor SSG"),s(" is our Free Project Template for creating fast, statically generated Websites and Blogs with Markdown & C# Razor Pages. A benefit of using Razor SSG to maintain this "),t("a",{href:"https://github.com/ServiceStack/servicestack.net"},"servicestack.net(github)"),s(" website is that any improvements added to our website end up being rolled into the Razor SSG Project Template for everyone else to enjoy.")],-1),J=t("p",null,[s("This latest release brings a number of features and enhancements to improve Razor SSG usage as a Blogging Platform - a primary use-case we’re focused on as we pen our "),t("a",{href:"https://servicestack.net/posts/year/2023"},"22nd Blog Post for the year"),s(" with improvements in both discoverability and capability of blog posts:")],-1),q=t("h3",null,"RSS Feed",-1),D=t("p",null,"Razor SSG websites now generates a valid RSS Feed for its blog to support their readers who’d prefer to read blog posts and notify them as they’re published with their favorite RSS reader:",-1),U=t("div",{class:"not-prose my-8"},[t("a",{href:"https://razor-ssg.web-templates.io/feed.xml"},[t("div",{class:"block flex justify-center shadow hover:shadow-lg rounded overflow-hidden"},[t("img",{class:"max-w-3xl py-8",src:"https://servicestack.net/img/posts/razor-ssg/valid-rss.png"})])]),t("div",{class:"mt-4 flex justify-center"},[t("a",{class:"text-indigo-600 hover:text-indigo-800",href:"https://razor-ssg.web-templates.io/feed.xml"},"https://razor-ssg.web-templates.io/feed.xml"),t("a",{class:"ml-4 text-indigo-600 hover:text-indigo-800",href:"https://servicestack.net/feed.xml"},"https://servicestack.net/feed.xml")])],-1),Q=t("h3",null,"Meta Headers support for Twitter cards and SEO",-1),Z=t("p",null,[s("Blog Posts and Pages now include additional "),t("code",null,"<meta>"),s(" HTML Headers to enable support for "),t("a",{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards"},"Twitter Cards"),s(" in both Twitter and Meta’s new "),t("a",{href:"https://threads.net"},"threads.net"),s(", e.g:")],-1),O=t("div",{class:"not-prose my-8 flex justify-center"},[t("a",{class:"block max-w-2xl",href:"https://www.threads.net/@servicestack/post/CvIFobPBs5h"},[t("div",{class:"block flex justify-center shadow hover:shadow-lg rounded overflow-hidden"},[t("img",{class:"py-8",src:"https://servicestack.net/img/posts/razor-ssg/twitter-cards.png"})])])],-1),Y=t("h3",null,"Improved Discoverability",-1),K=t("p",null,"To improve discoverability and increase site engagement, bottom of blog posts now include links to other posts by the same Blog Author, including links to connect to their preferred social networks and contact preferences:",-1),X=t("p",null,[t("img",{src:"https://servicestack.net/img/posts/razor-ssg/other-author-posts.png",alt:""})],-1),tt=t("h3",null,"Posts can include Vue Components",-1),st=t("p",null,"Blog Posts can now embed any global Vue Components directly in its Markdown, e.g:",-1),nt=t("pre",{class:"language-html"},[t("code",{class:"language-html"},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),s("getting-started")]),s(),t("span",{class:"token attr-name"},"template"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("razor-ssg"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),s("getting-started")]),t("span",{class:"token punctuation"},">")]),s(`
`)])],-1),et=t("h4",null,[t("a",{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs"},"/mjs/components/GettingStarted.mjs")],-1),at={class:"not-prose my-20 flex justify-center"},ot=t("h4",null,"Individual Blog Post dependencies",-1),rt=t("p",null,[s("Just like Pages and Docs they can also include specific JavaScript "),t("strong",null,".mjs"),s(" or "),t("strong",null,".css"),s(" in the "),t("code",null,"/wwwroot/posts"),s(" folder which will only be loaded for that post:")],-1),lt=t("p",null,[s("Now posts that need it can dynamically load large libraries like "),t("a",{href:"https://www.chartjs.org"},"Chart.js"),s(" and use it inside a custom Vue component by creating a custom "),t("code",null,"/posts/<slug>.mjs"),s(" that exports what components and features your blog post needs, e.g:")],-1),ct=t("h4",null,[t("a",{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/new-blog-features.mjs"},"/posts/new-blog-features.mjs")],-1),it=t("pre",{class:"language-js"},[t("code",{class:"language-js"},[t("span",{class:"token keyword"},"import"),s(" ChartJs "),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},"'./components/ChartJs.mjs'"),s(`

`),t("span",{class:"token keyword"},"export"),s(),t("span",{class:"token keyword"},"default"),s(),t("span",{class:"token punctuation"},"{"),s(`
    `),t("span",{class:"token literal-property property"},"components"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s(" ChartJs "),t("span",{class:"token punctuation"},"}"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`
`)])],-1),pt=t("p",null,[s("In this case it enables support for "),t("a",{href:"https://www.chartjs.org"},"Chart.js"),s(" by including a custom Vue component that makes it easy to create charts from Vue Components embedded in markdown:")],-1),ut=t("h4",null,[t("a",{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/components/ChartJs.mjs"},"/posts/components/ChartJs.mjs")],-1),dt=t("pre",{class:"language-js"},[t("code",{class:"language-js"},[t("span",{class:"token keyword"},"import"),s(),t("span",{class:"token punctuation"},"{"),s(" ref"),t("span",{class:"token punctuation"},","),s(" onMounted "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},'"vue"'),s(`
`),t("span",{class:"token keyword"},"import"),s(),t("span",{class:"token punctuation"},"{"),s(" addScript "),t("span",{class:"token punctuation"},"}"),s(),t("span",{class:"token keyword"},"from"),s(),t("span",{class:"token string"},'"@servicestack/client"'),s(`

`),t("span",{class:"token keyword"},"let"),s(" loadJs "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token function"},"addScript"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js'"),t("span",{class:"token punctuation"},")"),s(`

`),t("span",{class:"token keyword"},"export"),s(),t("span",{class:"token keyword"},"default"),s(),t("span",{class:"token punctuation"},"{"),s(`
    `),t("span",{class:"token literal-property property"},"template"),t("span",{class:"token operator"},":"),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},'<div><canvas ref="chart"></canvas></div>'),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token literal-property property"},"props"),t("span",{class:"token operator"},":"),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'type'"),t("span",{class:"token punctuation"},","),t("span",{class:"token string"},"'data'"),t("span",{class:"token punctuation"},","),t("span",{class:"token string"},"'options'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"props"),t("span",{class:"token punctuation"},")"),s(),t("span",{class:"token punctuation"},"{"),s(`
        `),t("span",{class:"token keyword"},"const"),s(" chart "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),s(`
        `),t("span",{class:"token function"},"onMounted"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"async"),s(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),s(),t("span",{class:"token operator"},"=>"),s(),t("span",{class:"token punctuation"},"{"),s(`
            `),t("span",{class:"token keyword"},"await"),s(` loadJs

            `),t("span",{class:"token keyword"},"const"),s(" options "),t("span",{class:"token operator"},"="),s(" props"),t("span",{class:"token punctuation"},"."),s("options "),t("span",{class:"token operator"},"||"),s(),t("span",{class:"token punctuation"},"{"),s(`
                `),t("span",{class:"token literal-property property"},"responsive"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),s(`
                `),t("span",{class:"token literal-property property"},"legend"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s(`
                    `),t("span",{class:"token literal-property property"},"position"),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"top"'),s(`
                `),t("span",{class:"token punctuation"},"}"),s(`
            `),t("span",{class:"token punctuation"},"}"),s(`
            `),t("span",{class:"token keyword"},"new"),s(),t("span",{class:"token class-name"},"Chart"),t("span",{class:"token punctuation"},"("),s("chart"),t("span",{class:"token punctuation"},"."),s("value"),t("span",{class:"token punctuation"},","),s(),t("span",{class:"token punctuation"},"{"),s(`
                `),t("span",{class:"token literal-property property"},"type"),t("span",{class:"token operator"},":"),s(" props"),t("span",{class:"token punctuation"},"."),s("type "),t("span",{class:"token operator"},"||"),s(),t("span",{class:"token string"},'"bar"'),t("span",{class:"token punctuation"},","),s(`
                `),t("span",{class:"token literal-property property"},"data"),t("span",{class:"token operator"},":"),s(" props"),t("span",{class:"token punctuation"},"."),s("data"),t("span",{class:"token punctuation"},","),s(`
                options`),t("span",{class:"token punctuation"},","),s(`
            `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s(`

        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s(`
        `),t("span",{class:"token keyword"},"return"),s(),t("span",{class:"token punctuation"},"{"),s(" chart "),t("span",{class:"token punctuation"},"}"),s(`
    `),t("span",{class:"token punctuation"},"}"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`
`)])],-1),ht=t("p",null,[s("Which allows this post to embed Chart.js charts using the above custom "),t("code",null,"<chart-js>"),s(" Vue component and a JS Object literal, e.g:")],-1),gt=t("pre",{class:"language-html"},[t("code",{class:"language-html"},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),s("chart-js")]),s(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s(`{
    labels: [
        //...
    ],
    datasets: [
        //...
    ]
}`),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),s("chart-js")]),t("span",{class:"token punctuation"},">")]),s(`
`)])],-1),kt=t("p",null,[s("Which the "),t("a",{href:"https://servicestack.net/posts/bulk-insert-performance"},"Bulk Insert Performance"),s(" Blog Post uses extensively to embeds its Chart.js Bar charts:")],-1),mt=t("h3",null,"New Markdown Containers",-1),wt=t("p",null,[t("a",{href:"https://github.com/xoofx/markdig/blob/master/src/Markdig.Tests/Specs/CustomContainerSpecs.md"},"Custom Containers"),s(" are a popular method for implementing Markdown Extensions for enabling rich, wrist-friendly consistent content in your Markdown documents.")],-1),_t=t("p",null,[s("Most of "),t("a",{href:"https://vitepress.dev/guide/markdown#custom-containers"},"VitePress Markdown Containers"),s(" are also available in Razor SSG websites for enabling rich, wrist-friendly consistent markup in your Markdown pages, e.g:")],-1),ft=t("pre",{class:"language-md"},[t("code",{class:"language-md"},`:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::
`)],-1),bt=t("div",{class:"info custom-block"},[t("p",{class:"custom-block-title"},"INFO"),t("p",null,"This is an info box.")],-1),yt=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,"This is a tip.")],-1),vt=t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"WARNING"),t("p",null,"This is a warning.")],-1),St=t("div",{class:"danger custom-block"},[t("p",{class:"custom-block-title"},"DANGER"),t("p",null,"This is a dangerous warning.")],-1),xt=t("div",{class:"not-prose copy cp flex cursor-pointer mb-3",onclick:"copy(this)"},[t("div",{class:"flex-grow bg-gray-700"},[t("div",{class:"pl-4 py-1 pb-1.5 align-middle text-lg text-white"},[t("p",null,"Copy Me!")])]),t("div",{class:"flex"},[t("div",{class:"bg-sky-500 text-white p-1.5 pb-0"},[t("svg",{class:"copied w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})]),t("svg",{class:"nocopy w-6 h-6",title:"copy",fill:"none",stroke:"white",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})])])])],-1),Ct=t("p",null,[s("See Razor Press’s "),t("a",{href:"https://razor-press.web-templates.io/containers"},"Markdown Containers docs"),s(" for the complete list of available containers and examples on how to implement your own "),t("a",{href:"https://razor-press.web-templates.io/containers#implementing-block-containers"},"Custom Markdown containers"),s(".")],-1),zt=t("h3",null,"Support for Includes",-1),Mt=t("p",null,[s("Markdown fragments can be added to "),t("code",null,"_pages/_include"),s(" - a special folder rendered with "),t("a",{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Includes.cshtml"},"Pages/Includes.cshtml"),s(" using an "),t("a",{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutEmpty.cshtml"},"Empty Layout"),s(" which can be included in other Markdown and Razor Pages or fetched on demand with Ajax.")],-1),jt=t("p",null,[s("Markdown Fragments can be then included inside other markdown documents with the "),t("code",null,"::include"),s(" inline container, e.g:")],-1),Bt=t("div",{class:"pre"},[t("p",null,"::include vue/formatters.md::")],-1),Rt=t("p",null,[s("Where it will be replaced with the HTML rendered markdown contents of fragments maintained in "),t("code",null,"_pages/_include"),s(".")],-1),Pt=t("h3",null,"Include Markdown in Razor Pages",-1),Tt=t("p",null,[s("Markdown Fragments can also be included in Razor Pages using the custom "),t("code",null,"MarkdownTagHelper.cs"),s(),t("code",null,"<markdown/>"),s(" tag:")],-1),Gt=t("pre",{class:"language-html"},[t("code",{class:"language-html"},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),s("markdown")]),s(),t("span",{class:"token attr-name"},"include"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),s("vue/formatters.md"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),s("markdown")]),t("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Nt=t("h3",null,"Inline Markdown in Razor Pages",-1),At=t("p",null,"Alternatively markdown can be rendered inline with:",-1),Ft=t("pre",{class:"language-html"},[t("code",{class:"language-html"},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),s("markdown")]),t("span",{class:"token punctuation"},">")]),s(`
## Using Formatters

Your App and custom templates can also utilize @servicestack/vue's
[built-in formatting functions](href="/vue/use-formatters).
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),s("markdown")]),t("span",{class:"token punctuation"},">")]),s(`
`)])],-1),Lt=t("h3",null,"Light and Dark Mode Query Params",-1),$t=t("p",null,[s("You can link to Dark and Light modes of your Razor SSG website with the "),t("code",null,"?light"),s(" and "),t("code",null,"?dark"),s(" query string params:")],-1),Vt=t("ul",null,[t("li",null,[t("a",{href:"https://razor-ssg.web-templates.io/?dark"},"https://razor-ssg.web-templates.io/?dark")]),t("li",null,[t("a",{href:"https://razor-ssg.web-templates.io/?light"},"https://razor-ssg.web-templates.io/?light")])],-1),It=t("h3",null,"Blog Post Authors threads.net and Mastodon links",-1),Wt=t("p",null,[s("The social links for Blog Post Authors can now include "),t("a",{href:"https://threads.net"},"threads.net"),s(" and "),t("a",{href:"https://mastodon.social"},"mastodon.social"),s(" links, e.g:")],-1),Et=t("pre",{class:"language-json"},[t("code",{class:"language-json"},[t("span",{class:"token punctuation"},"{"),s(`
  `),t("span",{class:"token property"},'"AppConfig"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"{"),s(`
    `),t("span",{class:"token property"},'"BlogImageUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://servicestack.net/img/logo.png"'),t("span",{class:"token punctuation"},","),s(`
    `),t("span",{class:"token property"},'"Authors"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token punctuation"},"["),s(`
      `),t("span",{class:"token punctuation"},"{"),s(`
        `),t("span",{class:"token property"},'"Name"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"Lucy Bates"'),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token property"},'"Email"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"lucy@email.org"'),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token property"},'"ProfileUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"img/authors/author1.svg"'),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token property"},'"TwitterUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://twitter.com/lucy"'),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token property"},'"ThreadsUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://threads.net/@lucy"'),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token property"},'"GitHubUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://github.com/lucy"'),t("span",{class:"token punctuation"},","),s(`
        `),t("span",{class:"token property"},'"MastodonUrl"'),t("span",{class:"token operator"},":"),s(),t("span",{class:"token string"},'"https://mastodon.social/@lucy"'),s(`
      `),t("span",{class:"token punctuation"},"}"),s(`
    `),t("span",{class:"token punctuation"},"]"),s(`
  `),t("span",{class:"token punctuation"},"}"),s(`
`),t("span",{class:"token punctuation"},"}"),s(`
`)])],-1),Ht=t("h2",null,"Feature Requests Welcome",-1),Jt=t("p",null,[s("Most of Razor SSG’s features are currently being driven by requirements from the new "),t("a",{href:"https://razor-ssg.web-templates.io/#showcase"},"Websites built with Razor SSG"),s(" and features we want available in our Blogs, we welcome any requests for missing features in other popular Blogging Platforms you’d like to see in Razor SSG to help make it a high quality blogging solution built with our preferred C#/.NET Technology Stack, by submitting them to:")],-1),qt=t("div",{class:"text-indigo-600 text-3xl text-center"},[t("p",null,[t("a",{href:"https://servicestack.net/ideas"},"https://servicestack.net/ideas")])],-1),Dt=t("h3",null,"SSG or Dynamic Features",-1),Ut=t("p",null,[s("Whilst statically generated websites and blogs are generally limited to features that can be generated at build time, we’re able to add any dynamic features we need in "),t("a",{href:"https://servicestack.net/creatorkit/"},"CreatorKit"),s(" - a Free companion self-host .NET App Mailchimp and Disqus alternative which powers any dynamic functionality in Razor SSG Apps like the blogs comments and Mailing List features in this Blog Post.")],-1),Kt="New Blogging features in Razor SSG",Xt="Explore the new Blogging Features in Razor SSG",ts=["razor","markdown","blog","dev"],ss="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000",ns="Lucy Bates",es=[{property:"og:title",content:"New Blogging features in Razor SSG"},{name:"twitter:title",content:"New Blogging features in Razor SSG"},{property:"og:image",content:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}],as={__name:"2023-08-23_razor-ssg-new-blog-features",setup(d,{expose:a}){const r={title:"New Blogging features in Razor SSG",summary:"Explore the new Blogging Features in Razor SSG",tags:["razor","markdown","blog","dev"],image:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",meta:[{property:"og:title",content:"New Blogging features in Razor SSG"},{name:"twitter:title",content:"New Blogging features in Razor SSG"},{property:"og:image",content:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}]};return a({frontmatter:r}),y({title:"New Blogging features in Razor SSG",meta:[{property:"og:title",content:"New Blogging features in Razor SSG"},{name:"twitter:title",content:"New Blogging features in Razor SSG"},{property:"og:image",content:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}]}),(o,h)=>{const m=f,w=_;return n(),u(w,{frontmatter:r},{default:v(()=>[t("div",W,[E,H,J,q,D,U,Q,Z,O,Y,K,X,tt,st,nt,et,t("div",at,[c(m,{template:"razor-ssg"})]),ot,rt,c(I,{files:{wwwroot:{posts:{_:["<slug>.mjs","<slug>.css"]}}}},null,8,["files"]),lt,ct,it,pt,ut,dt,ht,gt,kt,c(S(x),{data:{labels:["10,000 Rows","100,000 Rows"],datasets:[{label:"SQLite Memory",backgroundColor:"rgba(201, 203, 207, 0.2)",borderColor:"rgb(201, 203, 207)",borderWidth:1,data:[17.066,166.747]},{label:"SQLite Disk",backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",borderWidth:1,data:[20.224,199.697]},{label:"PostgreSQL",backgroundColor:"rgba(153, 102, 255, 0.2)",borderColor:"rgb(153, 102, 255)",borderWidth:1,data:[14.389,115.645]},{label:"MySQL",backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[64.389,310.966]},{label:"MySqlConnector",backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgb(255, 159, 64)",borderWidth:1,data:[64.427,308.574]},{label:"SQL Server",backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",borderWidth:1,data:[89.821,835.181]}]}},null,8,["data"]),mt,wt,_t,ft,bt,yt,vt,St,xt,Ct,zt,Mt,jt,Bt,Rt,Pt,Tt,Gt,Nt,At,Ft,Lt,$t,Vt,It,Wt,Et,Ht,Jt,qt,Dt,Ut])]),_:1})}}};export{ns as author,as as default,ss as image,es as meta,Xt as summary,ts as tags,Kt as title};
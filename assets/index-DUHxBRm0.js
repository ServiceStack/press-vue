import{_ as V}from"./SrcPage.vue_vue_type_script_setup_true_lang-B9T8AMUW.js";import{_ as L}from"./VideoGroup.vue_vue_type_script_setup_true_lang-C61KzY8K.js";import{d as C,x as P,r as d,o as r,c as m,a as t,b as a,u as e,w as u,e as S,t as l,h as $,m as j,F as A,f as F,_ as G}from"./index-CczqSkAt.js";import{_ as N}from"./GettingStarted.vue_vue_type_script_setup_true_lang-C2JSk7j7.js";import{d as B,a as I,g as T}from"./utils-qgeyg2W9.js";import"./MarkdownComponent.vue_vue_type_script_setup_true_lang-CPwVLMtd.js";const W=F('<div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24"><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl"><span class="block xl:inline">Welcome to </span><span class="block text-green-600 dark:text-green-500 xl:inline">Press Vue</span></h1><p class="mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"> Welcome to your new Vue SPA App </p><div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"><div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"><a href="https://docs.servicestack.net/vue/" class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"> Vue Component Gallery </a></div></div></div></div>',1),U={class:"py-8 flex"},H={class:"mt-8 mx-auto"},M=t("h2",{class:"mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center"}," Getting Started ",-1),R={class:"relative"},Y={class:"mt-8 max-w-6xl mx-auto"},D={class:"aspect-w-16 aspect-h-9"},E={class:"container mx-auto px-5 mt-24 mb-24"},O={key:0},X={class:"mb-8 md:mb-16"},q={class:"sm:mx-0"},z=["src","alt"],J={class:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28"},K={class:"mb-4 text-4xl lg:text-6xl leading-tight"},Q={class:"mb-4 md:mb-0 text-lg"},Z=["datetime"],tt={class:"text-lg leading-relaxed mb-4"},et=["src"],st={key:1,class:"flex items-center text-xl font-bold"},ot=["src"],at={class:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800"},nt={class:"text-center"},lt=t("h1",{class:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"}," Features ",-1),rt=t("div",{class:"text-center text-xl"}," Opinionated Vue template for a productive out-of-the-box development UX ",-1),it={class:"prose dark:prose-invert lg:prose-xl mx-auto"},ct={class:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800"},dt={class:"text-center"},mt=t("h1",{class:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"}," Videos ",-1),ut={class:"my-8 flex justify-center gap-x-4"},yt=C({__name:"index",setup(xt){const i=P("press");function x(o){return o&&i.blog.authors.some(n=>n.name.toLowerCase()==o.toLowerCase())?`/posts/author/${T(o)}`:null}function _(o){return`/posts/${o.slug}`}function f(o){return o?i.blog.authors.filter(n=>n.name.toLowerCase()==o.toLowerCase())[0]:null}function h(o){var n;return((n=f(o))==null?void 0:n.profileUrl)??"/img/profiles/user1.svg"}const s=i.blog.posts[0],p=s.author;return(o,n)=>{const b=N,v=d("LiteYouTube"),c=d("RouterLink"),g=d("Iconify"),y=G,k=L,w=V;return r(),m(A,null,[W,t("section",U,[t("div",H,[M,t("div",null,[a(b,{template:"press-vue"})])])]),t("div",R,[t("div",Y,[t("div",D,[a(v,{id:"u3FcgWlack4",title:"Vite Vue Markdown Websites with Vite Press Plugin, Host for Free on GitHub Pages"})])])]),t("div",E,[e(s)?(r(),m("section",O,[t("div",X,[t("div",q,[a(c,{"aria-label":e(s).title,to:_(e(s))},{default:u(()=>[t("img",{src:e(s).image,alt:`Cover Image for ${e(s).title}`,class:"shadow-sm hover:shadow-2xl transition-shadow duration-200"},null,8,z)]),_:1},8,["aria-label","to"])])]),t("div",J,[t("div",null,[t("h3",K,[a(c,{class:"hover:underline",to:_(e(s))},{default:u(()=>[S(l(e(s).title),1)]),_:1},8,["to"])]),t("div",Q,[t("time",{datetime:e(B)(e(s).date)},l(e(I)(e(s).date)),9,Z)])]),t("div",null,[t("p",tt,l(e(s).summary),1),x(e(s).author)?(r(),$(c,{key:0,class:"flex items-center text-xl font-bold",to:x(e(s).author)},{default:u(()=>[t("img",{src:h(e(s).author),class:"w-12 h-12 rounded-full mr-4",alt:"Author"},null,8,et),t("span",null,l(e(p)),1)]),_:1},8,["to"])):(r(),m("span",st,[t("img",{src:h(e(s).author),class:"w-12 h-12 rounded-full mr-4",alt:"Author"},null,8,ot),t("span",null,l(e(p)),1)]))])])])):j("",!0)]),t("div",at,[t("div",nt,[a(g,{icon:"mdi:feature-highlight",class:"text-green-600 w-36 h-36 inline-block"}),lt])]),rt,t("div",it,[a(y,{src:"features.md"})]),t("div",ct,[t("div",dt,[a(g,{icon:"material-symbols:hangout-video",class:"text-green-600 w-36 h-36 inline-block"}),mt])]),a(k,{title:"Vue Components",summary:"Learn about productive features in our growing Vue Component Library",group:"vue",learnMore:"https://docs.servicestack.net/vue/"}),t("div",ut,[a(w,{path:"index.vue"})])],64)}}});export{yt as default};

import{_ as w}from"./SrcPage.vue_vue_type_script_setup_true_lang-BzUgauiy.js";import{_ as V}from"./VideoGroup.vue_vue_type_script_setup_true_lang-BLkvdsTm.js";import{d as C,x as L,r as g,o as r,c as d,a as t,b as a,u as e,w as m,e as S,t as l,h as $,m as j,F as A,f as N,_ as P}from"./index-DNpF0gYe.js";import{_ as B}from"./GettingStarted.vue_vue_type_script_setup_true_lang-r2XoDgJo.js";import{d as G,a as I,g as F}from"./utils-V2jb3f1y.js";import"./MarkdownComponent.vue_vue_type_script_setup_true_lang-B6ByeowM.js";const U=N('<div class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24"><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl"><span class="block xl:inline">Welcome to </span><span class="block text-green-600 dark:text-green-500 xl:inline">Press Vue</span></h1><p class="mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"> Welcome to your new Vue SPA App </p><div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"><div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"><a href="https://docs.servicestack.net/vue/" class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 md:py-4 md:px-10 md:text-lg"> Vue Component Gallery </a></div></div></div></div>',1),R={class:"py-8 flex"},T={class:"mt-8 mx-auto"},W=t("h2",{class:"mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl text-center"}," Getting Started ",-1),D={class:"container mx-auto px-5 mt-24 mb-24"},E={key:0},M={class:"mb-8 md:mb-16"},O={class:"sm:mx-0"},X=["src","alt"],q={class:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28"},z={class:"mb-4 text-4xl lg:text-6xl leading-tight"},H={class:"mb-4 md:mb-0 text-lg"},J=["datetime"],K={class:"text-lg leading-relaxed mb-4"},Q=["src"],Y={key:1,class:"flex items-center text-xl font-bold"},Z=["src"],tt={class:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800"},et={class:"text-center"},st=t("h1",{class:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"}," Features ",-1),ot=t("div",{class:"text-center text-xl"}," Opinionated Vue template for a productive out-of-the-box development UX ",-1),at={class:"prose lg:prose-xl mx-auto"},nt={class:"flex justify-center my-20 py-20 bg-slate-100 dark:bg-slate-800"},lt={class:"text-center"},rt=t("h1",{class:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"}," Videos ",-1),it={class:"my-8 flex justify-center gap-x-4"},gt=C({__name:"index",setup(ct){const i=L("press");function x(o){return o&&i.blog.authors.some(n=>n.name.toLowerCase()==o.toLowerCase())?`/posts/author/${F(o)}`:null}function u(o){return`/posts/${o.slug}`}function f(o){return o?i.blog.authors.filter(n=>n.name.toLowerCase()==o.toLowerCase())[0]:null}function _(o){var n;return((n=f(o))==null?void 0:n.profileUrl)??"/img/profiles/user1.svg"}const s=i.blog.posts[0],h=s.author;return(o,n)=>{const b=B,c=g("RouterLink"),p=g("Iconify"),v=P,y=V,k=w;return r(),d(A,null,[U,t("section",R,[t("div",T,[W,t("div",null,[a(b,{template:"press-vue"})])])]),t("div",D,[e(s)?(r(),d("section",E,[t("div",M,[t("div",O,[a(c,{"aria-label":e(s).title,to:u(e(s))},{default:m(()=>[t("img",{src:e(s).image,alt:`Cover Image for ${e(s).title}`,class:"shadow-sm hover:shadow-2xl transition-shadow duration-200"},null,8,X)]),_:1},8,["aria-label","to"])])]),t("div",q,[t("div",null,[t("h3",z,[a(c,{class:"hover:underline",to:u(e(s))},{default:m(()=>[S(l(e(s).title),1)]),_:1},8,["to"])]),t("div",H,[t("time",{datetime:e(G)(e(s).date)},l(e(I)(e(s).date)),9,J)])]),t("div",null,[t("p",K,l(e(s).summary),1),x(e(s).author)?(r(),$(c,{key:0,class:"flex items-center text-xl font-bold",to:x(e(s).author)},{default:m(()=>[t("img",{src:_(e(s).author),class:"w-12 h-12 rounded-full mr-4",alt:"Author"},null,8,Q),t("span",null,l(e(h)),1)]),_:1},8,["to"])):(r(),d("span",Y,[t("img",{src:_(e(s).author),class:"w-12 h-12 rounded-full mr-4",alt:"Author"},null,8,Z),t("span",null,l(e(h)),1)]))])])])):j("",!0)]),t("div",tt,[t("div",et,[a(p,{icon:"mdi:feature-highlight",class:"text-green-600 w-36 h-36 inline-block"}),st])]),ot,t("div",at,[a(v,{src:"features.md"})]),t("div",nt,[t("div",lt,[a(p,{icon:"material-symbols:hangout-video",class:"text-green-600 w-36 h-36 inline-block"}),rt])]),a(y,{title:"Vue Components",summary:"Learn about productive features in our growing Vue Component Library",group:"vue",learnMore:"https://docs.servicestack.net/vue/"}),t("div",it,[a(k,{path:"index.vue"})])],64)}}});export{gt as default};

import{_ as B,a as $}from"./BlogTitle.vue_vue_type_script_setup_true_lang-BNXuIykY.js";import{d as D,A as F,k as p,x as C,q as L,i as N,r as _,o,c as l,a as t,b as c,F as g,g as P,t as v,h as x,w as h,e as f}from"./index-DNpF0gYe.js";import"./utils-V2jb3f1y.js";const S={key:0,class:"relative bg-gray-50 dark:bg-gray-900 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28"},T=t("div",{class:"absolute inset-0"},[t("div",{class:"h-1/3 bg-white dark:bg-black sm:h-2/3"})],-1),Y={class:"relative mx-auto max-w-7xl"},E={class:"mt-4 relative mb-8 mx-auto max-w-7xl"},R={class:"flex flex-wrap justify-center"},V={key:0,class:"ml-3 text-sm font-semibold"},j={class:"mt-12 relative mx-auto max-w-7xl"},A={class:"mt-8 text-center"},G=D({__name:"[year]",setup(q){const b=F(),a=p(()=>{var e;return parseInt(((e=b.params)==null?void 0:e.year)??0)}),d=C("press").blog.posts,u=[...new Set(d.map(e=>new Date(e.date).getFullYear()))];u.sort((e,s)=>s-e);const r=p(()=>{const e=d.filter(s=>new Date(s.date).getFullYear()==a.value);return e.sort((s,i)=>new Date(i.date).getTime()-new Date(s.date).getTime()),e});function k(e){return`/posts/year/${e}`}return L(()=>{r.value.length&&N({title:`${a.value} posts`})}),(e,s)=>{const i=B,m=_("RouterLink"),w=$,y=_("ErrorSummary");return r.value.length?(o(),l("div",S,[T,t("div",Y,[c(i,{heading:`All posts published in <b>${a.value}</b>`},null,8,["heading"])]),t("div",E,[t("div",R,[(o(),l(g,null,P(u,n=>(o(),l(g,null,[a.value==n?(o(),l("b",V,v(n),1)):(o(),x(m,{key:1,class:"ml-3 text-sm text-indigo-700 dark:text-indigo-300 font-semibold hover:underline",to:k(n)},{default:h(()=>[f(v(n),1)]),_:2},1032,["to"]))],64))),64))])]),t("div",j,[c(w,{posts:r.value},null,8,["posts"]),t("div",A,[c(m,{class:"text-sm font-semibold hover:underline",to:"/posts"},{default:h(()=>[f("view all posts")]),_:1})])])])):(o(),x(y,{key:1,status:{errorCode:"NotFound",message:`Posts published in ${a.value} was not found`}},null,8,["status"]))}}});export{G as default};

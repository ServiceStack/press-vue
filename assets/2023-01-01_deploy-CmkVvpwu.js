import{_ as o}from"./MarkdownPage.vue_vue_type_script_setup_true_lang-UC4nTgU0.js";import{i as l,o as c,h as i,w as r,a as e,e as t}from"./index-CczqSkAt.js";const p=e("div",{class:"markdown-body"},[e("h1",{id:"servicestack-github-action-deployments",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#servicestack-github-action-deployments"},"ServiceStack GitHub Action Deployments")]),e("p",null,[t("The "),e("a",{href:"https://github.com/NetCoreTemplates/razor-tailwind/blob/main/.github/workflows/release.yml"},"release.yml"),t(" in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.")]),e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview"},"Overview")]),e("p",null,[e("code",null,"release.yml"),t(" is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub’s "),e("code",null,"ghcr.io"),t(" docker registry when a GitHub Release is created.")]),e("p",null,[t("GitHub Actions specified in "),e("code",null,"release.yml"),t(" then copy files remotely via scp and use "),e("code",null,"docker-compose"),t(" to run the app remotely via SSH.")]),e("h2",{id:"what%E2%80%99s-the-process-of-release.yml%3F",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what%E2%80%99s-the-process-of-release.yml%3F"},[t("What’s the process of "),e("code",null,"release.yml"),t("?")])]),e("p",null,[e("img",{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png",alt:""})]),e("h2",{id:"deployment-server-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deployment-server-setup"},"Deployment server setup")]),e("p",null,"To get this working, a server needs to be setup with the following:"),e("ul",null,[e("li",null,"SSH access"),e("li",null,"docker"),e("li",null,"docker-compose"),e("li",null,"ports 443 and 80 for web access of your hosted application")]),e("p",null,[t("This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc. We use "),e("a",{href:"http://cloud.hetzner.com/"},"Hetzner Cloud"),t(" to deploy all ServiceStack’s "),e("a",{href:"https://github.com/NetCoreTemplates/"},"GitHub Project Templates"),t(" as it was the "),e("a",{href:"https://servicestack.net/blog/finding-best-us-value-cloud-provider"},"best value US cloud provider"),t(" we’ve found.")]),e("p",null,[t("When setting up your server, you’ll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the "),e("em",null,"private"),t(" SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.")]),e("p",null,[t("To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, "),e("code",null,"nginx-proxy-compose.yml"),t(". This docker-compose file is ready to run and can be copied to the deployment server.")]),e("p",null,[t("For example, once copied to remote "),e("code",null,"~/nginx-proxy-compose.yml"),t(", the following command can be run on the remote server.")]),e("pre",null,[e("code",null,`docker-compose -f ~/nginx-proxy-compose.yml up -d
`)]),e("p",null,"This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates."),e("h3",{id:"github-actions-secrets",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-actions-secrets"},"GitHub Actions secrets")]),e("p",null,[t("The "),e("code",null,"release.yml"),t(" uses the following secrets.")]),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Required Secrets"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"DEPLOY_HOST")]),e("td",null,"Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server")]),e("tr",null,[e("td",null,[e("code",null,"DEPLOY_USERNAME")]),e("td",null,[t("Username to log in with via SSH e.g, "),e("strong",null,"ubuntu"),t(", "),e("strong",null,"ec2-user"),t(", "),e("strong",null,"root")])]),e("tr",null,[e("td",null,[e("code",null,"DEPLOY_KEY")]),e("td",null,"SSH private key used to remotely access deploy .NET App")]),e("tr",null,[e("td",null,[e("code",null,"LETSENCRYPT_EMAIL")]),e("td",null,"Email required for Let’s Encrypt automated TLS certificates")])])]),e("p",null,[t("These secrets can use the "),e("a",{href:"https://cli.github.com/manual/gh_secret_set"},"GitHub CLI"),t(" for ease of creation. Eg, using the GitHub CLI the following can be set.")]),e("pre",{class:"language-bash"},[e("code",{class:"language-bash"},[t("gh secret "),e("span",{class:"token builtin class-name"},"set"),t(" DEPLOY_HOST -b"),e("span",{class:"token string"},'"<DEPLOY_HOST>"'),t(`
gh secret `),e("span",{class:"token builtin class-name"},"set"),t(" DEPLOY_USERNAME -b"),e("span",{class:"token string"},'"<DEPLOY_USERNAME>"'),t(`
gh secret `),e("span",{class:"token builtin class-name"},"set"),t(" DEPLOY_KEY "),e("span",{class:"token operator"},"<"),t(" key.pem "),e("span",{class:"token comment"},"# DEPLOY_KEY"),t(`
gh secret `),e("span",{class:"token builtin class-name"},"set"),t(" LETSENCRYPT_EMAIL -b"),e("span",{class:"token string"},'"<LETSENCRYPT_EMAIL>"'),t(`
`)])]),e("p",null,"These secrets are used to populate variables within GitHub Actions and other configuration files."),e("h2",{id:"deployments",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deployments"},"Deployments")]),e("p",null,"A published version of your .NET App created with the standard dotnet publish tool:"),e("pre",{class:"language-yaml"},[e("code",{class:"language-yaml"},[t("dotnet publish "),e("span",{class:"token punctuation"},"-"),t(`c Release
`)])]),e("p",null,[t("is used to build a production build of your .NET App inside the standard "),e("code",null,"Dockerfile"),t(" for dockerizing .NET Applications.")]),e("p",null,[t("Additional custom deployment tasks can be added to your project’s package.json "),e("strong",null,"postinstall"),t(" script which also gets run at deployment.")]),e("p",null,"If preferred additional MS Build tasks can be run by passing in custom parameters in the publish command, e.g:"),e("pre",{class:"language-yaml"},[e("code",{class:"language-yaml"},[t("dotnet publish "),e("span",{class:"token punctuation"},"-"),t("c Release /p"),e("span",{class:"token punctuation"},":"),t(`APP_TASKS=prerender
`)])]),e("p",null,[t("Which your "),e("code",null,"MyApp.csproj"),t(" can detect with a target that checks for it:")]),e("pre",{class:"language-xml"},[e("code",{class:"language-xml"},[e("span",{class:"token comment"},"<!-- Prerender tasks run in release.yml -->"),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("Target")]),t(),e("span",{class:"token attr-name"},"Name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("AppTasks"),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token attr-name"},"AfterTargets"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("Build"),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token attr-name"},"Condition"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("$(APP_TASKS) != ''"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("CallTarget")]),t(),e("span",{class:"token attr-name"},"Targets"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("Prerender"),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token attr-name"},"Condition"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("$(APP_TASKS.Contains('prerender'))"),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token punctuation"},"/>")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("Target")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("Target")]),t(),e("span",{class:"token attr-name"},"Name"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("Prerender"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
    `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("Message")]),t(),e("span",{class:"token attr-name"},"Text"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("Prerender..."),e("span",{class:"token punctuation"},'"')]),t(),e("span",{class:"token punctuation"},"/>")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("Target")]),e("span",{class:"token punctuation"},">")]),t(`
`)])]),e("h2",{id:"pushing-updates-and-rollbacks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pushing-updates-and-rollbacks"},"Pushing updates and rollbacks")]),e("p",null,"By default, deployments occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose."),e("p",null,"The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases."),e("p",null,[t("Additionally, the "),e("code",null,"release.yml"),t(" workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases. A release must have already been created for the rollback build to work, it doesn’t create a new Docker build based on previous code state, only redeploys as existing Docker image.")])],-1),y="Deployment with GitHub Actions",b="Configuring your GitHub repo for SSH and CDN deployments",w="Gayle Smith",f=["github-actions","devops"],v="https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000",S=[{property:"og:title",content:"Deployment with GitHub Actions"},{name:"twitter:title",content:"Deployment with GitHub Actions"},{property:"og:image",content:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}],A={__name:"2023-01-01_deploy",setup(u,{expose:n}){const a={title:"Deployment with GitHub Actions",summary:"Configuring your GitHub repo for SSH and CDN deployments",author:"Gayle Smith",tags:["github-actions","devops"],image:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000",meta:[{property:"og:title",content:"Deployment with GitHub Actions"},{name:"twitter:title",content:"Deployment with GitHub Actions"},{property:"og:image",content:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}]};return n({frontmatter:a}),l({title:"Deployment with GitHub Actions",meta:[{property:"og:title",content:"Deployment with GitHub Actions"},{name:"twitter:title",content:"Deployment with GitHub Actions"},{property:"og:image",content:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:image",content:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000"},{name:"twitter:card",content:"summary_large_image"}]}),(h,m)=>{const s=o;return c(),i(s,{frontmatter:a},{default:r(()=>[p]),_:1})}}};export{w as author,A as default,v as image,S as meta,b as summary,f as tags,y as title};
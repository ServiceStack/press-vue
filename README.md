[![StackBlitz](https://img.shields.io/badge/StackBlitz-Edit-blue?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABECAYAAAD+1gcLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AINBw4X0bTGRQAABSxJREFUaN7VmVtsFFUYx//fmQW79bbd2QKpaIIaDcGoifFBEgMGqTTRRA01SgxE5Rbi7QG6S3lgo9J2twpeotxEQlCigLdoQwJ4ARN9QB9MRCNRDBdRzE7LJbTSmTl/H4BYStmd2Z3tDOdt5lzml/9833fO9x0gYi2xgom6Tt5aapyKEnRDlrVGPzfGT+G3SwZ87HLGT8f5uYD7jmSl99IAX80RfTY3A5wMqDVepoQPnqVKHtMbAN4PyJeFtPwafXBSknG9UoDHAIDQq7xODRU8mdc5Aeaeffy7O2F8GnnwZM5dKsCic88CrMU8sSMNbubdZwTIDnjlOoZa52eNYQc3c84sEK+d/1a6ji2UA5EFN3POw4C8fcYy/m+a3p1y2MGTOXsqIJsAxAZ1Hei53tgeSfBkBycK1McALrswJGIVHhE3cuD1ed4uorsAXD5Ed7/hqvXlrFtV8LpO3qKpdwJIDLn/AB/+s0SORgp8VJ43KK23AzAvNsagWlXu+lKV6LGc14itvyEwrsiwX6wWNQEijITiY9pYD1vvKAENAG+VC40hQlNlNt3Bq22lt4EYX2Jor6PVe5V8KzDFG7KsFXE/A3GHB/vcdHyx9IQPnuXI/ji3CuRuT+N1+U4ZHPhmGqk43yXY5C0ccE9hsfwQLjgp5n69hmCz9ylYGcRPrgg8ldfLIXjSx5RjNX3GB6GCm3m3ncDz/v4QNnjJ4KsGbubdVhAZ35YFtTaoKOY7jps5dwGIZf73aH7dnZa9QYH72vLNDmcmRNaX86eEnGvT2BoIdA0o3pV2HgRkS9C7bXnRDGlPypmd9r2AvB8FaAFetDJGvqTiyU7eJWeOp1cgfOo3rRbj6ZJRJdHB20TrrkhAAxutXvVsSedMtfEmGno3gNHhM8snVp80IytO0The18HraOgdkYCm7KyLy6MDoYdUfNQyjnZjeheAm8NXmt/FlDH16CI5dUHaN/DhypeZUqK/AkomAsMQ8fCjq41GKy0nim75ydd51UjX3QZgQgQccV/MUfcVSzYM4Mw1hnPa7QJkYgSgD2qqe6xWOVL8kLWaI3ptbgFkUgSgjwpUY09GDpY8ZJnH9UsExhPYH8CuVgtgTJlzC5pqipXxdpUSaF3FzLkdANJleOIJETWlkJbvh78glOVIM64PARjlc2afiGoqtMiuUMoTqRp3ehnQtpDNfqEDBdeC+T6nuELOLGRiXVVPJC5u2xwP6L0+1qOQ8wqZWNmpXECK6wV+RBCipRLoQBRvyLL2dFwfBlDnTWos7W4xXgi3IATg31p3hldoEG8EAR0IuEC8OuUGK62eCyoYVARutvNOL9VZQD6yxqmnKqmHB6u46PkejHp7XVxmlHOzVhXnTKxgwujXhzH0bdo56m9jymgcKhEITXFl61lFoYV7BMa0akCjkjqJEHOKdP/U7xhNJ1vlZLXOv2Upnmq3JxfJlH4XRzWebBWrmgf38hRXav5F4vSfjqGmHl8if1W/NuSzjWljvW3oQxh0Ly9AQRtqUvdC+Xk4UiXfpmLH9JzB0CBOQKtpwwXtHzxLJcTsQW97FdQDQVxIVc3GUzVuEyEDb4z7NTndysju4c6qfSlOOc8pXQof78nEtoVRDvDsnMlXeK04+o+ztRgSnNOdjq1DSM2z4uLoeecKSCQWhgntXfEsY2ZcHwDQAMESq8VoC7ty5EnxZK37EIAGAV6NArT3c3def2Hm3HdASlSYSipe384bAR6x+tTsIBOBqoMTzlirVz2BrOgoWcF/mizikfkwKiQAAAAASUVORK5CYII=)](https://stackblitz.com/github/ServiceStack/press-vue)
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

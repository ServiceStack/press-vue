<template>
  <div class="flex flex-col w-96">
    <h4 class="py-6 text-center text-xl">Download New Project</h4>

    <input type="text" v-model="project" autocomplete="off" spellcheck="false" @keydown="validateSafeName"
      class="mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800" />

    <section class="w-full flex justify-center text-center">
      <div class="mb-2">
        <div class="flex justify-center text-center">
          <a class="hover:no-underline" :href="zipUrl(`ServiceStack/${template}`)">
            <div
              class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600"
              style="min-width:150px">
              <div class="text-center font-extrabold flex items-center justify-center mb-2">
                <div class="text-4xl text-blue-400 my-3">
                  <Iconify icon="logos:vue" class="w-12 h-12" />
                </div>
              </div>
              <div class="text-xl font-medium text-gray-700 dark:text-gray-300">Press Vue</div>
              <div class="flex justify-center h-8"></div>
              <span class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</span>
              <div class="count mt-1 text-gray-400 text-sm"></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <h4 class="pb-4 text-center text-xl">or</h4>
    <ShellCommand class="mb-2">npx degit ServiceStack/press-vue</ShellCommand>

    <h4 class="py-4 text-center text-xl">or</h4>

    <div class="mx-auto">
      <a href="https://stackblitz.com/github/ServiceStack/press-vue">
        <img alt="Open in StackBlitz" src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" />
      </a>
    </div>

    <h4 class="py-6 text-center text-xl">Run</h4>
    <ShellCommand class="mb-2">npm install</ShellCommand>
    <ShellCommand class="mb-2">npm run dev</ShellCommand>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

defineProps<{
  template: string
}>()
const project = ref('ProjectName')
const projectZip = computed(() => (project.value || 'MyApp') + '.zip')
const zipUrl = (template: string) =>
  `https://account.servicestack.net/archive/${template}?Name=${project.value || 'MyApp'}`

function validateSafeName(e: KeyboardEvent) {
  if (e.key.match(/[\W]+/g)) {
    e.preventDefault()
    return false
  }
}
</script>

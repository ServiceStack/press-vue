<template>
    <FileLayout :files="files" />
</template>

<script setup lang="ts">
import FileLayout from '@/components/FileLayout.vue'
const props = defineProps<{
    body: string
}>()

/* Takes an ascii string of indented folder and file paths:
const from = `/meta
    /2022
        all.json
        posts.json
        videos.json
    /2023
        all.json
        posts.json
    all.json
    index.json`

// and returns a nested object representing the file structure:
const to = {
    meta: {
        2022: { _: ['all.json','posts.json','videos.json'] },
        2023: { _: ['all.json','posts.json'] },
        _: ['all.json','index.json']
    }
}
*/
function parseFileStructure(ascii: string) {
    const parseLineIndentation = (line:string) => {
        const match = line.match(/^(\s*)/)
        return match ? match[0].length / 2 : 0
    }
    const lines = ascii.trim().split("\n")
    const root = {}

    let currentPath: any = [root]
    lines.forEach((line) => {
        const name = line.trim()
        const isFile = name.includes(".")
        const level = parseLineIndentation(line)

        // Navigate up the currentPath to find the current level's parent
        while (level < currentPath.length - 1) {
            currentPath.pop()
        }

        if (isFile) {
            // Current Line is a file, add it to the files array (denoted by "_")
            currentPath[level]._ ??= []
            currentPath[level]._.push(name)
        } else {
            const dir = name.replace("/", "")
            // Current Line is a folder, create a new object and update the currentPath
            currentPath[level][dir] ??= {}
            currentPath.push(currentPath[level][dir])
        }
    })
    return root
}

const txt = props.body?.trim() || ''
const files = parseFileStructure(txt)
</script>
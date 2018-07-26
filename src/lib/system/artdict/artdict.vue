<!--
描述：科研管理-数据字典组件
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
    keep-alive
        kalix-base-dict(ref="baseTableRef" v-bind:bizKey="bizKey" v-bind:bizDialog="bizDialog"
        v-bind:targetURL="targetURL" v-bind:dialogOptions="dialogOptions")
</template>

<script type="text/ecmascript-6">
    import {ArtDictsTypesListURL, ArtDictURL} from '../../config.toml'

    export default {
        name: 'kalix-art-artdict',
        data() {
            return {
                dialogOptions: {
                    targetURL: ArtDictURL,
                    dictTypesListURL: ArtDictsTypesListURL,
                    bizKey: 'dict'
                },
                bizKey: 'dict',
                targetURL: ArtDictURL,
                bizDialog: [
                    {id: 'view', dialog: 'basedictView'},
                    {id: 'edit', dialog: 'basedictAdd'},
                    {id: 'add', dialog: 'basedictAdd'}
                ]
            }
        },
        components: {},
        created() {
        },
        methods: {}
    }
</script>

<style scoped lang="stylus">
</style>

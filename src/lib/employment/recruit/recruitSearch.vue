<!--
描述：艺术中心-就业信息-企业招聘-查询组件
开发人：hqj-修改
开发日期：2017年12月18日
-->

<template lang="pug">
    kalix-search(title="企业招聘信息查询" v-bind:searchFields="searchFields")
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'ArtRecruitSearch',
        data() {
            return {
                searchFields: [
                    {label: '发布时间', prop: 'publishDateBegin', type: 'date', field: 'publishDate:begin:gt'},
                    {label: '-', prop: 'publishDateEnd', type: 'date', field: 'publishDate:end:lt'}
                ]
            }
        },
        created() {
        },
        components: {},
        methods: {}
    }
</script>

<style scoped lang="stylus" type="text/stylus">
</style>

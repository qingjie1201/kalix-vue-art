<!--
描述：艺术中心-就业信息-学生应聘-查询组件
开发人：hqj
开发日期：2017年12月18日
-->

<template lang="pug">
    kalix-search(title="学生应聘信息查询" v-bind:searchFields="searchFields")
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'ArtCandidateSearch',
        data() {
            return {
                searchFields: [
                    {label: '创建时间', prop: 'creationDateBegin', type: 'date', field: 'creationDate:begin:gt'},
                    {label: '-', prop: 'creationDateEnd', type: 'date', field: 'creationDate:end:lt'}
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

<!--
描述：艺术中心-职能类别设置
开发人：fengjing
开发日期：2017年12月01日
-->

<template lang="pug">
    keep-alive
        kalix-tree-grid(
        v-bind:columns='columns'
        v-bind:targetURL="targetURL"
        title="职能类别列表"
        bizSearch="FunctionCategorySearch"
        v-bind:btnList="btnList"
        v-bind:bizDialog="bizDialog"
        v-bind:formModel="formModel")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {FunctionCategroyURL, ToolButtonList} from '../../config.toml'

    export default {
        name: 'kalix-art-functioncategory',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                btnList: ToolButtonList,
                targetURL: FunctionCategroyURL,
                columns: [{
                    type: 'hidden',
                    key: 'id',
                    width: '0'
                }, {
                    type: 'hidden',
                    key: 'parentId',
                    width: '0'
                }, {
                    title: '名称',
                    key: 'name',
                    width: '150'
                }, {
                    title: '机构代码',
                    key: 'code',
                    sortable: true,
                    width: '150'
                }, {
                    title: '创建人',
                    key: 'createBy',
                    width: '150'
                }, {
                    title: '创建日期',
                    key: 'creationDate',
                    width: '150'
                }, {
                    title: '操作',
                    type: 'action',
                    actions: [{
                        type: 'edit',
                        text: '编辑',
                        icon: 'el-icon-edit'
                    }, {
                        type: 'delete',
                        text: '删除',
                        icon: 'el-icon-delete'
                    }],
                    width: '150'
                }],
                bizDialog: [
                    {id: 'view', dialog: 'FunctionCategoryView'},
                    {id: 'edit', dialog: 'FunctionCategoryAdd'},
                    {id: 'add', dialog: 'FunctionCategoryAdd'}
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

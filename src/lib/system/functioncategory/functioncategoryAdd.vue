<!--
描述：艺术中心-职能类别-新增组件
开发人：fengjing
开发日期：2017年12月12日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="functioncategory" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
        div.el-form(slot="dialogFormSlot" align="center")
            el-form-item(prop="parentId" type="hidden" v-bind:label-width="labelWidth")
                el-input(v-model="formModel.parentId" type="hidden")
            el-form-item(label="所属类别" v-bind:label-width="labelWidth")
                el-input(v-model="formModel.parentName" readonly)
            el-form-item(label="类别名称" prop="name" v-bind:rules="rules.name" v-bind:label-width="labelWidth")
                el-input(v-model="formModel.name")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {FunctionCategroyURL} from '../../config.toml'

    export default {
        name: 'FunctionCategoryAdd',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                rules: {
                    name: [{required: true, message: '请输入类别名称', trigger: 'blur'}]
                },
                targetURL: FunctionCategroyURL,
                labelWidth: '110px'
            }
        },
        components: {},
        created() {
        },
        methods: {}
    }
</script>

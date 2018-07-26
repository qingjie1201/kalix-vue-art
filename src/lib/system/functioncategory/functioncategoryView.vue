<!--
描述：艺术中心-职能类别-查看组件
开发人：hqj
开发日期：2017年11月30日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="functioncategory" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
        div.el-form(slot="dialogFormSlot")
            el-form-item(label="所属类别" v-bind:label-width="labelWidth")
                el-input(v-model="formModel.parentName" readonly)
            el-form-item(label="类别名称" prop="name" v-bind:label-width="labelWidth")
                el-input(v-model="formModel.name" readonly)
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'

    export default {
        name: 'FunctionCategoryView',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                labelWidth: '110px'
            }
        },
        methods: {
            /*init(dialogOption) {
                this.orgName = dialogOption.orgName
            }*/
        },
        components: {}
    }
</script>

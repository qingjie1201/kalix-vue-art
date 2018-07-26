<!--
描述：艺术中心-系统管理-公司信息-新增组件
开发人：hqj
开发日期：2017年12月14日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="artCompany" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
        div.el-form.kalix-form-table(slot="dialogFormSlot")
            div.table-title 企业基本信息
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业组织机构代码" prop="code" v-bind:rules="rules.code" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.code")
                el-form-item.s-flex_item.kalix-form-table-td(label="企业名称" prop="name" v-bind:rules="rules.name" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.name")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="邮箱" prop="email" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.email")
                el-form-item.s-flex_item.kalix-form-table-td(label="固定电话" prop="phone" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.phone")
            div
                el-form-item.kalix-form-table-td(label="手机" prop="mobile" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.mobile")
            div.table-title 企业详细信息
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业性质" prop="nature" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.nature" appName="art" dictType="企业性质")
                el-form-item.s-flex_item.kalix-form-table-td(label="企业规模" prop="scale" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.scale")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业行业" prop="industry" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.industry" appName="art" dictType="企业行业")
                el-form-item.s-flex_item.kalix-form-table-td(label="企业年限" prop="life" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.life")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="所在省份" prop="region" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.region" appName="art" dictType="省份")
                el-form-item.s-flex_item.kalix-form-table-td(label="所在城市" prop="city" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.city")
            div
                el-form-item.kalix-form-table-td(label="企业详细地址" prop="address" v-bind:rules="rules.address" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.address")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {EnterpriseURL} from '../../config.toml'

    export default {
        name: 'ArtEnterpriseAdd',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                rules: {
                    code: [{required: true, message: '请输入企业组织机构代码', trigger: 'blur'}],
                    name: [{required: true, message: '请输入企业名称', trigger: 'blur'}],
                    address: [{required: true, message: '请输入企业详细地址', trigger: 'blur'}]
                },
                targetURL: EnterpriseURL,
                labelWidth: '140px'
            }
        },
        components: {},
        methods: {}
    }
</script>

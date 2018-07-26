<!--
描述：艺术中心-就业信息-企业招聘-编辑组件
开发人：hqj
开发日期：2017年12月18日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="recruit" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
        div.el-form.kalix-form-table(slot="dialogFormSlot")
            div.table-title 企业信息
            div
                el-form-item.kalix-form-table-td(label="企业组织机构代码" prop="enterpriseCode" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseCode" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业名称" prop="enterpriseName" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseName" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业邮箱" prop="enterpriseEmail" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseEmail" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="固定电话" prop="enterprisePhone" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterprisePhone" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="手机" prop="enterpriseMobile" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseMobile" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业性质" prop="enterpriseNature" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.enterpriseNature" appName="art" dictType="企业性质" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业规模" prop="enterpriseScale" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseScale" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业行业" prop="enterpriseIndustry" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.enterpriseIndustry" appName="art" dictType="企业行业" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业年限" prop="enterpriseLife" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseLife" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业所在省份" prop="enterpriseRegion" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.enterpriseRegion" appName="art" dictType="省份" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业所在城市" prop="enterpriseCity" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseCity" disabled)
            div
                el-form-item.kalix-form-table-td(label="企业详细地址" prop="enterpriseAddress" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseAddress" disabled)
            div.table-title 招聘信息
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="发布时间" prop="publishDate" v-bind:label-width="labelWidth")
                    kalix-date-picker.kalix-date(v-model="formModel.publishDate" placeholder="发布时间" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位名称" prop="position" v-bind:rules="rules.position" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.position")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="工作省份" prop="region" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.region" appName="art" dictType="省份")
                el-form-item.s-flex_item.kalix-form-table-td(label="工作城市" prop="city" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.city")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位要求" prop="positionRequires" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.positionRequires" type="textarea")
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位所需软件" prop="requireSofts" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.requireSofts" type="textarea")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位个数" prop="jobNumbers" v-bind:label-width="labelWidth")
                    el-input-number(v-model="formModel.jobNumbers" v-bind:min="1" style="width:100%")
                el-form-item.s-flex_item.kalix-form-table-td(label="学历" prop="education" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.education" appName="art" dictType="学历")
            div
                el-form-item.kalix-form-table-td(label="职能类别" prop="functionCategoryId" v-bind:label-width="labelWidth")
                    kalix-tree2(v-model="formModel.functionCategoryId" v-bind:treeDataURL="functionCategroyURL")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="实习薪资" prop="probationSalary" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.probationSalary" appName="art" dictType="月薪")
                el-form-item.s-flex_item.kalix-form-table-td(label="转正薪资" prop="salary" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.salary" appName="art" dictType="月薪")
            <!--div-->
            <!--el-form-item.kalix-form-table-td(label="应用技术名称" prop="appliedTechnology" v-bind:label-width="labelWidth")-->
            <!--el-input(v-model="formModel.appliedTechnology" type="textarea")-->
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="个人要求" prop="personRequires" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.personRequires" appName="art" dictType="个人要求" multiple placeholder="请选择,可多选")
                el-form-item.s-flex_item.kalix-form-table-td(label="工作类型" prop="jobType" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.jobType" appName="art" dictType="工作类型")
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {FunctionCategroyURL, RecruitURL} from '../../config.toml'

    export default {
        name: 'ArtRecruitEdit',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                rules: {
                    position: [{required: true, message: '请输入岗位名称', trigger: 'blur'}]
                },
                targetURL: RecruitURL,
                functionCategroyURL: FunctionCategroyURL,
                labelWidth: '140px'
            }
        },
        components: {},
        methods: {}
    }
</script>

<style lang="stylus">
    .kalix-date
        .el-input__inner
            background-color: #f5f7fa
</style>

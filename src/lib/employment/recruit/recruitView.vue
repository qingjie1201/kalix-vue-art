<!--
描述：艺术中心-就业信息-企业招聘-查看组件
开发人：hqj
开发日期：2017年12月18日
-->
<template lang="pug">
    kalix-dialog.user-add(bizKey="recruit" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
        div.el-form.kalix-form-table(slot="dialogFormSlot")
            div.table-title 企业信息
            div
                el-form-item.kalix-form-table-td(label="企业组织机构代码" prop="enterpriseCode" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseCode" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业名称" prop="enterpriseName" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseName" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业邮箱" prop="enterpriseEmail" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseEmail" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="固定电话" prop="enterprisePhone" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterprisePhone" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="手机" prop="enterpriseMobile" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseMobile" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业性质" prop="enterpriseNature" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.enterpriseNature" appName="art" dictType="企业性质" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业规模" prop="enterpriseScale" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseScale" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业行业" prop="enterpriseIndustry" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.enterpriseIndustry" appName="art" dictType="企业行业" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业年限" prop="enterpriseLife" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseLife" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="企业所在省份" prop="enterpriseRegion" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.enterpriseRegion" appName="art" dictType="省份" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="企业所在城市" prop="enterpriseCity" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseCity" readonly)
            div
                el-form-item.kalix-form-table-td(label="企业详细地址" prop="enterpriseAddress" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.enterpriseAddress" readonly)
            div.table-title 招聘信息
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="发布时间" prop="publishDate" v-bind:label-width="labelWidth")
                    kalix-date-picker(v-model="formModel.publishDate" placeholder="发布时间" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位名称" prop="position" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.position" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="工作省份" prop="region" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.region" appName="art" dictType="省份" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="工作城市" prop="city" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.city" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位要求" prop="positionRequires" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.positionRequires" type="textarea" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位所需软件" prop="requireSofts" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.requireSofts" type="textarea" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="岗位个数" prop="jobNumbers" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.jobNumbers" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="学历" prop="education" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.education" appName="art" dictType="学历" disabled)
            div
                el-form-item.kalix-form-table-td(label="职能类别" prop="functionCategoryId" v-bind:label-width="labelWidth")
                    kalix-tree2(v-model="formModel.functionCategoryId" v-bind:treeDataURL="functionCategroyURL" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="实习薪资" prop="probationSalary" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.probationSalary" appName="art" dictType="月薪" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="转正薪资" prop="salary" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.salary" appName="art" dictType="月薪" disabled)
            <!--div-->
            <!--el-form-item.kalix-form-table-td(label="应用技术名称" prop="appliedTechnology" v-bind:label-width="labelWidth")-->
            <!--el-input(v-model="formModel.appliedTechnology" type="textarea" readonly)-->
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="个人要求" prop="personRequires" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.personRequires" appName="art" dictType="个人要求" multiple disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="工作类型" prop="jobType" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.jobType" appName="art" dictType="工作类型" disabled)
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {FunctionCategroyURL} from '../../config.toml'

    export default {
        name: 'ArtRecruitView',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                functionCategroyURL: FunctionCategroyURL,
                labelWidth: '140px'
            }
        },
        components: {},
        methods: {}
    }
</script>

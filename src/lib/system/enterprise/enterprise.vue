<!--
描述：艺术中心-系统管理-企业信息
开发人：hqj
开发日期：2017年12月13日
-->

<template lang="pug">
    keep-alive
        kalix-table(bizKey="enterprise" title='企业信息列表' v-bind:targetURL="targetURL"
        v-bind:bizDialog="bizDialog" v-bind:tableFields="tableFields" bizSearch="ArtEnterpriseSearch"
        v-bind:btnList="btnList" v-bind:dictDefine="dictDefine" v-bind:isFixedColumn="isFixedColumn")
</template>

<script type="text/ecmascript-6">
    import {EnterpriseToolButtonList, EnterpriseURL} from '../../config.toml'

    export default {
        name: 'kalix-art-enterprise',
        data() {
            return {
                dictDefine: [{ // 定义数据字典的显示
                    cacheKey: 'ART-DICT-KEY',
                    type: '企业性质',
                    targetField: 'natureName',
                    sourceField: 'nature'
                }, {
                    cacheKey: 'ART-DICT-KEY',
                    type: '企业行业',
                    targetField: 'industryName',
                    sourceField: 'industry'
                }, {
                    cacheKey: 'ART-DICT-KEY',
                    type: '省份',
                    targetField: 'regionName',
                    sourceField: 'region'
                }],
                btnList: EnterpriseToolButtonList,
                targetURL: EnterpriseURL,
                tableFields: [
                    {prop: 'code', label: '企业组织机构代码'},
                    {prop: 'name', label: '企业名称'},
                    {prop: 'natureName', label: '企业性质'},
                    {prop: 'industryName', label: '企业行业'},
                    {prop: 'regionName', label: '所在省份'},
                    {prop: 'city', label: '所在城市'},
                    {prop: 'email', label: '邮箱'},
                    {prop: 'phone', label: '固定电话'},
                    {prop: 'mobile', label: '手机'},
                    {prop: 'address', label: '企业详细地址'}
                ],
                bizDialog: [
                    {id: 'view', dialog: 'ArtEnterpriseView'},
                    {id: 'add', dialog: 'ArtEnterpriseAdd'},
                    {id: 'edit', dialog: 'ArtEnterpriseAdd'}
                ],
                isFixedColumn: true
            }
        },
        components: {},
        created() {
        },
        methods: {
            /*customTableTool(row, btnId, that) {
                switch (btnId) {
                    case 'newEdit' : { // 新编辑
                        that.whichBizDialog = ''
                        let dig =
                            that.bizDialog.filter((item) => {
                                return item.id === 'newEdit'
                            })
                        that.whichBizDialog = dig[0].dialog
                        setTimeout(() => {
                            if (row.id && row.id > 0) { // 修改
                                that.$refs.kalixDialog.$refs.kalixBizDialog.open('编辑', true, row)
                            } else { // 新增
                                this.$delete(row, 'version')
                                this.$delete(row, 'version_')
                                that.$refs.kalixDialog.$refs.kalixBizDialog.open('编辑', false, row)
                            }
                        }, 20)
                        break
                    }
                }
            }*/
        }
    }
</script>

<style scoped lang="stylus">
</style>

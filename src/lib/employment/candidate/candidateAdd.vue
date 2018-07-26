<!--
描述：艺术中心-就业信息-学生应聘-新增组件
开发人：hqj
开发日期：2017年12月18日
-->

<template lang="pug">
    kalix-dialog.user-add(bizKey="candidate" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
        div.el-form.kalix-form-table(slot="dialogFormSlot")
            div.table-title 个人基本信息
            <!--div.s-flex-->
                <!--el-form-item.s-flex_item.kalix-form-table-td(label="学号" prop="code" v-bind:rules="rules.code" v-bind:label-width="labelWidth")-->
                    <!--template(v-if="isAdmin")-->
                        <!--div.s-flex-->
                            <!--el-input(v-model="formModel.code" placeholder="请输入学号进行查询" v-on:focus="onCodeFocus")-->
                            <!--el-button(type="primary" icon="el-icon-search" v-on:click="getStudentByCode") 查询-->
                    <!--template(v-else)-->
                        <!--el-input(v-model="formModel.code" disabled)-->
                <!--el-form-item.s-flex_item.kalix-form-table-td(label="姓名" prop="name" v-bind:rules="rules.name" v-bind:label-width="labelWidth")-->
                    <!--el-input(v-model="formModel.name" disabled)-->
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="姓名" prop="studentId" v-bind:rules="rules.studentId" v-bind:label-width="labelWidth")
                    kalix-object-select2(v-model="formModel.studentId" v-bind:objectsUrl="studentURL" v-on:objectSelected="studentSelected")
                el-form-item.s-flex_item.kalix-form-table-td(label="学号" prop="code" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.code" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="性别" prop="sex" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.sex" appName="art" dictType="性别" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="邮箱" prop="email" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.email" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="固定电话" prop="phone" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.phone" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="手机" prop="mobile" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.mobile" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="专业" prop="majorName" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.majorName" disabled)
                <!--el-form-item.s-flex_item.kalix-form-table-td(label="辅导员" prop="instructor" v-bind:label-width="labelWidth")-->
                    <!--el-input(v-model="formModel.instructor" disabled)-->
                el-form-item.s-flex_item.kalix-form-table-td(label="班级" prop="className" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.className" disabled)
            div.s-flex
                <!--el-form-item.s-flex_item.kalix-form-table-td(label="身份证号" prop="identificationCard" v-bind:label-width="labelWidth")-->
                    <!--el-input(v-model="formModel.identificationCard" disabled)-->
                el-form-item.s-flex_item.kalix-form-table-td(label="民族" prop="nation" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.nation" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="籍贯" prop="placeOfOrigin" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.placeOfOrigin" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="出生日期" prop="birthday" v-bind:label-width="labelWidth")
                    kalix-date-picker.kalix-date(v-model="formModel.birthday" readonly)
                el-form-item.s-flex_item.kalix-form-table-td(label="邮政编码" prop="postalcode" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.postalcode" disabled)
            div
                el-form-item.kalix-form-table-td(label="现联系地址" prop="address" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.address" disabled)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="政治面貌" prop="politicalStatus" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.politicalStatus" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="入党(团)时间" prop="joinPartyDate" v-bind:label-width="labelWidth")
                    kalix-date-picker.kalix-date(v-model="formModel.joinPartyDate" readonly)
            <!--div.s-flex-->
                <!--el-form-item.s-flex_item.kalix-form-table-td(label="邮政编码" prop="postalcode" v-bind:label-width="labelWidth")-->
                    <!--el-input(v-model="formModel.postalcode" disabled)-->
                <!--el-form-item.s-flex_item.kalix-form-table-td(label="家庭联系电话" prop="homePhone" v-bind:label-width="labelWidth")-->
                    <!--el-input(v-model="formModel.homePhone" disabled)-->
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="生源省份" prop="province" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.province" appName="art" dictType="省份" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="入学年份" prop="entranceYear" v-bind:label-width="labelWidth")
                    kalix-date-picker.kalix-date(v-model="formModel.entranceYear" type="year" readonly)
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="学生培养层次" prop="trainingLevel" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.trainingLevel" disabled)
                el-form-item.s-flex_item.kalix-form-table-td(label="学习年限" prop="period" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.period" disabled)
            div.table-title 应聘信息
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="工作省份" prop="region" v-bind:rules="rules.region" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.region" appName="art" dictType="省份")
                el-form-item.s-flex_item.kalix-form-table-td(label="工作城市" prop="city" v-bind:rules="rules.city" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.city")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="期望行业" prop="expectingIndustry" v-bind:rules="rules.expectingIndustry" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.expectingIndustry" appName="art" dictType="企业行业")
                el-form-item.s-flex_item.kalix-form-table-td(label="工作类型" prop="jobType" v-bind:rules="rules.jobType" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.jobType" appName="art" dictType="工作类型")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="期望岗位" prop="position" v-bind:rules="rules.position" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.position" type="textarea")
                el-form-item.s-flex_item.kalix-form-table-td(label="所学软件" prop="learningSofts" v-bind:rules="rules.learningSofts" v-bind:label-width="labelWidth")
                    el-input(v-model="formModel.learningSofts" type="textarea")
            div.s-flex
                el-form-item.s-flex_item.kalix-form-table-td(label="学历" prop="education" v-bind:rules="rules.education" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.education" appName="art" dictType="学历")
                el-form-item.s-flex_item.kalix-form-table-td(label="薪资" prop="salary" v-bind:rules="rules.salary" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.salary" appName="art" dictType="月薪")
            div
                el-form-item.kalix-form-table-td(label="个人特点" prop="skills" v-bind:rules="rules.skills" v-bind:label-width="labelWidth")
                    kalix-dict-select(v-model="formModel.skills" appName="art" dictType="个人要求" multiple placeholder="请选择,可多选")
            <!--div-->
                <!--el-form-item.kalix-form-table-td(label="职业规划目标" prop="careerGoal" v-bind:rules="rules.careerGoal" v-bind:label-width="labelWidth")-->
                    <!--el-input(v-model="formModel.careerGoal" type="textarea")-->
</template>

<script type="text/ecmascript-6">
    import FormModel from './model'
    import {CandidateURL, StudentURL} from '../../config.toml'

    export default {
        name: 'ArtCandidateAdd',
        data() {
            return {
                formModel: Object.assign({}, FormModel),
                rules: {
                    studentId: [{required: true, message: '请选择学生姓名', trigger: 'change'}],
                    region: [{required: true, message: '请选择期望工作省份', trigger: 'change'}],
                    city: [{required: true, message: '请输入期望工作城市', trigger: 'blur'}],
                    expectingIndustry: [{required: true, message: '请选择期望工作行业', trigger: 'change'}],
                    jobType: [{required: true, message: '请选择期望工作类型', trigger: 'change'}],
                    position: [{required: true, message: '请输入期望岗位', trigger: 'blur'}],
                    learningSofts: [{required: true, message: '请输入所学软件', trigger: 'blur'}],
                    education: [{required: true, message: '请选择学历', trigger: 'change'}],
                    salary: [{required: true, message: '请选择薪资', trigger: 'change'}],
                    skills: [{required: true, message: '请选择个人特点,可多选', trigger: 'change'}]
                    // careerGoal: [{required: true, message: '请输入职业规划目标', trigger: 'blur'}]
                },
                targetURL: CandidateURL,
                studentURL: StudentURL,
                labelWidth: '110px'
            }
        },
        components: {},
        mounted() {
            /*if (!this.isAdmin) {
                this.getStudentByUserId()
            }*/
        },
        computed: {
            // 判断当前登录用户是否是管理员
            /*isAdmin() {
                return (this.$KalixCatch.get('id') * 1 === -1 || this.$KalixCatch.get('id') * 1 === -2)
            }*/
        },
        methods: {
            /*getStudentByUserId() {
                this.initData()
                this.formModel.code = ''
                let userId = this.$KalixCatch.get('id')
                // let sort = '[{\'property\': \'updateDate\', \'direction\': \'DESC\'}]'
                if (userId) {
                    let params = {
                        params: {
                            'jsonStr': {'userId': userId},
                            'page': 1,
                            'limit': 1,
                            'sort': null
                        }
                    }
                    Vue.axios.get(StudentURL, params).then((response) => {
                        if (response.data.data && response.data.data.length > 0) {
                            let rec = response.data.data[0]
                            /!* this.$nextTick(() => {
                             this.formModel = Object.assign({}, rec)
                             }) *!/
                            // this.$set(this.formModel, 'majorId', rec.majorId)
                            this.formModel.code = rec.code
                            this.formModel.name = rec.name
                            this.formModel.sex = rec.sex
                            this.formModel.email = rec.email
                            this.formModel.phone = rec.phone
                            this.formModel.mobile = rec.mobile
                            this.formModel.majorId = rec.majorId
                            this.formModel.majorName = rec.majorName
                            this.formModel.className = rec.className
                            // this.formModel.instructor = rec.instructor
                            // this.formModel.identificationCard = rec.identificationCard
                            this.formModel.birthday = rec.birthday
                            this.formModel.nation = rec.nation
                            this.formModel.placeOfOrigin = rec.placeOfOrigin
                            this.formModel.politicalStatus = rec.politicalStatus
                            this.formModel.joinPartyDate = rec.joinPartyDate
                            this.formModel.address = rec.address
                            this.formModel.postalcode = rec.postalcode
                            // this.formModel.homePhone = rec.homePhone
                            this.formModel.province = rec.province
                            this.formModel.entranceYear = rec.entranceYear
                            this.formModel.trainingLevel = rec.trainingLevel
                            this.formModel.period = rec.period
                        }
                    })
                } else {
                    alert('请重新登录系统!')
                }
            },*/
            /*onCodeFocus() {
                this.initData()
            },
            getStudentByCode() {
                this.initData()
                let studentNo = this.formModel.code
                // let sort = '[{\'property\': \'updateDate\', \'direction\': \'DESC\'}]'
                if (studentNo) {
                    let params = {
                        params: {
                            'jsonStr': {'code': studentNo},
                            'page': 1,
                            'limit': 1,
                            'sort': null
                        }
                    }
                    Vue.axios.get(StudentURL, params).then((response) => {
                        if (response.data.data && response.data.data.length > 0) {
                            let rec = response.data.data[0]
                            /!* this.$nextTick(() => {
                             this.formModel = Object.assign({}, rec)
                             }) *!/
                            // this.$set(this.formModel, 'majorId', rec.majorId)
                            this.formModel.name = rec.name
                            this.formModel.sex = rec.sex
                            this.formModel.email = rec.email
                            this.formModel.phone = rec.phone
                            this.formModel.mobile = rec.mobile
                            this.formModel.majorId = rec.majorId
                            this.formModel.majorName = rec.majorName
                            this.formModel.className = rec.className
                            // this.formModel.instructor = rec.instructor
                            // this.formModel.identificationCard = rec.identificationCard
                            this.formModel.birthday = rec.birthday
                            this.formModel.nation = rec.nation
                            this.formModel.placeOfOrigin = rec.placeOfOrigin
                            this.formModel.politicalStatus = rec.politicalStatus
                            this.formModel.joinPartyDate = rec.joinPartyDate
                            this.formModel.address = rec.address
                            this.formModel.postalcode = rec.postalcode
                            // this.formModel.homePhone = rec.homePhone
                            this.formModel.province = rec.province
                            this.formModel.entranceYear = rec.entranceYear
                            this.formModel.trainingLevel = rec.trainingLevel
                            this.formModel.period = rec.period
                        }
                    })
                } else {
                    alert('请输入学号')
                }
            },*/
            initData() {
                // this.$set(this.formModel, 'name', '')
                this.formModel.code = ''
                this.formModel.name = ''
                this.formModel.sex = null
                this.formModel.email = ''
                this.formModel.phone = ''
                this.formModel.mobile = ''
                this.formModel.majorId = null
                this.formModel.majorName = ''
                this.formModel.classId = null
                this.formModel.className = ''
                // this.formModel.instructor = ''
                // this.formModel.identificationCard = ''
                this.formModel.birthday = null
                this.formModel.nation = ''
                this.formModel.placeOfOrigin = ''
                this.formModel.politicalStatus = ''
                this.formModel.joinPartyDate = null
                this.formModel.address = ''
                this.formModel.postalcode = ''
                // this.formModel.homePhone = ''
                this.formModel.province = null
                this.formModel.entranceYear = null
                this.formModel.trainingLevel = ''
                this.formModel.period = ''
            },
            studentSelected(student) {
                if (student && !this.$M_IsEmptyObject(student)) {
                    this.formModel.code = student.code
                    this.formModel.name = student.name
                    this.formModel.sex = student.sex
                    this.formModel.email = student.email
                    this.formModel.phone = student.phone
                    this.formModel.mobile = student.mobile
                    this.formModel.majorId = student.majorId
                    this.formModel.majorName = student.majorName
                    this.formModel.classId = student.classId
                    this.formModel.className = student.className
                    // this.formModel.instructor = student.instructor
                    // this.formModel.identificationCard = student.identificationCard
                    this.formModel.birthday = student.birthday
                    this.formModel.nation = student.nation
                    this.formModel.placeOfOrigin = student.placeOfOrigin
                    this.formModel.politicalStatus = student.politicalStatus
                    this.formModel.joinPartyDate = student.joinPartyDate
                    this.formModel.address = student.address
                    this.formModel.postalcode = student.postalcode
                    // this.formModel.homePhone = student.homePhone
                    this.formModel.province = student.province
                    this.formModel.entranceYear = student.entranceYear
                    this.formModel.trainingLevel = student.trainingLevel
                    this.formModel.period = student.period
                } else {
                    this.initData()
                }
            }
        }
    }
</script>

<style lang="stylus">
    .kalix-date
        .el-input__inner
            background-color: #f5f7fa
</style>

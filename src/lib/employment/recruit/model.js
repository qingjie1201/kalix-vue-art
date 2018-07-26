const FormModel = {
    enterpriseId: null,          // 企业id
    enterpriseCode: '',          // 企业组织机构代码
    enterpriseName: '',          // 企业名称
    enterpriseEmail: '',         // 邮箱
    enterprisePhone: '',         // 固定电话
    enterpriseMobile: '',        // 手机
    enterpriseNature: null,      // 企业性质，字典[企业性质]
    enterpriseScale: '',         // 企业规模
    enterpriseIndustry: null,    // 企业行业，字典[企业行业]
    enterpriseLife: '',          // 企业年限
    enterpriseRegion: null,      // 企业所在省份（地区），字典[省份]
    enterpriseCity: '',          // 企业所在城市
    enterpriseAddress: '',       // 企业详细地址
    publishDate: new Date(),     // 发布时间
    region: null,                // 工作省份（地区）
    city: '',                    // 工作城市
    position: '',                // 岗位名称(职位描述)
    positionRequires: '',        // 岗位要求
    requireSofts: '',            // 岗位所需软件
    jobNumbers: 1,               // 岗位个数
    education: null,             // 学历，字典[学历]
    functionCategoryId: null,    // 职能类别，对象字典
    probationSalary: null,       // 实习薪资，字典[月薪]
    salary: null,                // 转正薪资，字典[月薪]
    // appliedTechnology: '',    // 应用技术名称
    personRequires: '',          // 个人要求，字典[个人要求]多个
    jobType: null                // 工作类型，字典[工作类型]
}

export default FormModel

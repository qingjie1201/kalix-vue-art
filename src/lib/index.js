// 就业信息
import Recruit from './employment/recruit'
import Candidtae from './employment/candidate'

// 系统管理
import ArtDict from './system/artdict'
import Enterprise from './system/enterprise'
import Functioncategory from './system/functioncategory'

const components = {
    install(Vue) {
        Recruit.install(Vue)
        Candidtae.install(Vue)

        ArtDict.install(Vue)
        Enterprise.install(Vue)
        Functioncategory.install(Vue)
    }
}

export default components
import Recruit from './recruit.vue'
import recruitAdd from './recruitAdd.vue'
import recruitEdit from './recruitEdit.vue'
import recruitSearch from './recruitSearch.vue'
import recruitView from './recruitView.vue'

const components = [
    Recruit,
    recruitAdd,
    recruitEdit,
    recruitSearch,
    recruitView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main
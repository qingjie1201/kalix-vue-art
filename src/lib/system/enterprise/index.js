import Enterprise from './enterprise.vue'
import enterpriseAdd from './enterpriseAdd.vue'
import enterpriseSearch from './enterpriseSearch.vue'
import enterpriseView from './enterpriseView.vue'

const components = [
    Enterprise,
    enterpriseAdd,
    enterpriseSearch,
    enterpriseView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main
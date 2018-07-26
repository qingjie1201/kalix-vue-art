import Functioncategory from './functioncategory.vue'
import functioncategoryAdd from './functioncategoryAdd.vue'
import functioncategorySearch from './functioncategorySearch.vue'
import functioncategoryView from './functioncategoryView.vue'

const components = [
    Functioncategory,
    functioncategoryAdd,
    functioncategorySearch,
    functioncategoryView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main
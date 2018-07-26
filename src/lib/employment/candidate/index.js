import Candidate from './candidate.vue'
import candidateAdd from './candidateAdd.vue'
import candidateEdit from './candidateEdit.vue'
import candidateSearch from './candidateSearch.vue'
import candidateView from './candidateView.vue'

const components = [
    Candidate,
    candidateAdd,
    candidateEdit,
    candidateSearch,
    candidateView
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main
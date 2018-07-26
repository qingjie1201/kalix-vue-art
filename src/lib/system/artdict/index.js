import ArtDict from './artdict.vue'

const components = [
    ArtDict
]

const main = {
    install(Vue) {
        components.map((component) => {
            Vue.component(component.name, component)
        })
    }
}

export default main
import { defineComponent, createApp } from 'vue'

const ComponentDate = defineComponent({
    name: 'ComponentDate',
    
    setup() {
        const date = new Date().toLocaleDateString(undefined, { dateStyle: 'long' })
        return { date }
    },

    template: '<div>Сегодня {{ date }}</div>'
})

const app = createApp(ComponentDate)

app.mount('#app')
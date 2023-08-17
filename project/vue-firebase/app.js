const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')

const app2 = Vue.createApp({
    data(){
        return {
            name: 'Myu',
            job: 'Warrior'
        }
    }
})

app2.mount('#app2')
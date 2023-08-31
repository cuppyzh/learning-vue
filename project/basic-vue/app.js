const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.cuppyzh.dev',
            showBooks: true,
            books: [
                {
                    title: 'book 1', author: 'author 1', img: 'assets/image-1.jpg', isFav: true
                },
                {
                    title: 'book 2', author: 'author 2', img: 'assets/image-2.jpg', isFav: false
                },
                {
                    title: 'book 3', author: 'author 3', img: 'assets/image-3.png', isFav: true
                }
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)

            if (data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        hello() {
            return 'helloooooooooooooo'
        },
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
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
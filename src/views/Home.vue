<template>
    <div class="ion-page">

            <inputSearch slot="fixed" v-on:search="getBooks"></inputSearch>
        <ion-content fullscreen="true">
            <books v-if="myBooks"
                   :books="myBooks"></books>
            <ion-item v-for="index in 10" v-if="display">
                <ion-thumbnail slot="start">
                    <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                    <h2>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                    </h2>
                    <p>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                    </p>
                    <p>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                    </p>
                </ion-label>
            </ion-item>
        </ion-content>
    </div>


</template>

<script>
    import inputSearch from '@/components/Form.vue'
    import books from '@/components/Books.vue'
    export default {
        name: "home",
        components: {
            books,
            inputSearch
        },

        data() {
            return {
                myBooks: null,
                display : false
            }
        },
        methods: {
            getBooks(e) {
                this.myBooks = null
                this.display = true
                this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=${e}&orderBy=relevance&maxResults=40&printType=books`).then(response => {
                    this.myBooks = response.data.items
                    this.display = false
                })
            }
        },
    };
</script>
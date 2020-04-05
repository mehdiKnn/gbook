<template>
    <div>
        <ion-item v-for="(book ,index) in this.books" :key="index">
            <ion-thumbnail slot="start">
                <img v-if="book.volumeInfo.imageLinks"
                     :src="book.volumeInfo.imageLinks.thumbnail">
            </ion-thumbnail>
            <ion-label>
                <h2>{{book.volumeInfo.title}}</h2>

                <p :key="index"
                   v-for="(book , index) in book.volumeInfo.authors">
                    {{book}}</p>
                <p>{{book.volumeInfo.description}}</p>
                <router-link :to="{ name: 'book', params: { id:book.id }}">See
                    More
                </router-link>
            </ion-label>
        </ion-item>

    </div>
</template>

<script>

    export default {
        props: ['books'],
        name: "Books",

        mounted() {
            console.log(this.books)
        }
    }
</script>

<style scoped>

</style>
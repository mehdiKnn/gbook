<template>
    <div class="ion-page">
        <ion-content>
            <ion-header>
                <ion-toolbar  style="padding-top: unset ">
                    <ion-buttons slot-start @click="$router.go(-  1)">    <ion-button>Back</ion-button> </ion-buttons>
                </ion-toolbar>
            </ion-header>
            <ion-card v-if="book">
                <router-link :to="{ name: 'bookview', params: { id:this.$route.params.id }}">
                    <ion-button expand="block" color="primary">Read</ion-button>
                </router-link>
                <img  :src="book.volumeInfo.imageLinks.large"/>
                <ion-card-header>

                    <ion-card-title >{{book.volumeInfo.title}}</ion-card-title>
                    <ion-card-subtitle :key="index"
                                       v-for="(book , index) in book.volumeInfo.authors">
                        {{book}}
                    </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content v-html="book.volumeInfo.description">

                </ion-card-content>
            </ion-card>
            <ion-card v-if="display">
                <router-link :to="{ name: 'bookview', params: { id:this.$route.params.id }}">
                    <ion-button expand="block" color="primary">Read</ion-button>
                </router-link>
                <ion-card-header>
                    <ion-card-title >
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                    </ion-card-title>
                    <ion-card-subtitle>
                        <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
                    </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </div>
</template>
<script>
    export default {

        name: "Book",
        data() {
            return {
                book: null,
                display : true

            }
        },

        mounted() {
            this.display = true
            this.$http.get(`https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`).then(response => {
                    this.book = response.data
                    this.display =false
                }
            )
        }
    }

</script>

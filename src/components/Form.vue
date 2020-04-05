<template>
        <ion-header>
            <ion-toolbar style="padding-top: unset">
                <ion-title>My Library</ion-title>
            </ion-toolbar>
            <ion-toolbar>
                    <ion-searchbar  style="padding-bottom: unset" :value="search"
                                   @input="search = $event.target.value"></ion-searchbar>
                    <ion-button style="padding-top: 3px;
    padding-bottom: 3px;     padding-inline-start: 7px;

    padding-inline-end: 7px;" expand="block"
                                color="primary"  @click="emitSearch">Search
                    </ion-button>
            </ion-toolbar>
        </ion-header>
</template>

<script>
    export default {
        name: 'inputSearch',
        data() {
            return {
                search: null
            }
        },
        methods: {
            emitSearch() {
                if (this.search && this.search !== "") {
                    this.$emit('search', this.search)
                    this.search = null
                }
            }
        }
    }
</script>


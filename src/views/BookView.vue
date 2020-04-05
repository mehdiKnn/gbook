<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar  style="padding-top: unset; left: 0">
                <span @click="$router.go(-1)">Retour</span>
            </ion-toolbar>
        </ion-header>
        <div v-if="renderComponent" id="viewerCanvas"
             style=" height: 100vh"></div>
    </div>
</template>

<script>

    export default {
        name: "bookview",
        data() {
            return {
                renderComponent: true
            }
        },
        methods: {
            initialize(e) {
                let viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
                viewer.load(e);
            }
        },
        mounted() {
           setTimeout(()=>{
               this.initialize(this.$route.params.id)
           },1000)
        },
    }


</script>

<style scoped>

</style>
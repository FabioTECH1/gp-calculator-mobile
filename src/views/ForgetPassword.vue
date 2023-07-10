<template>
  <ion-page>
    <ion-header style="--background:rgb(23, 23, 245);" color='primary' class="ion-no-border">
      <ion-toolbar style="--background:rgb(23, 23, 245);">
        <ion-buttons slot="start">
          <ion-back-button default-href="/login" class="text-white m-3" text=""></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" style="--background:rgb(23, 23, 245);" fullscreen>

      <div class="container text-white">
        <h1><b>Forgot Password</b></h1>
        <ion-text style="--color:rgba(238, 232, 232, 0.911);">Enter your email address</ion-text>
        <form style="width: 100%;">
          <ion-input label="Email Address" label-placement="floating" mode="md" fill="outline" placeholder="Email Address"
            type="email" class="ion-margin-bottom mt-4 text-white"
            style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-button expand="full" class="tex" style="--background:rgb(32, 209, 32);"
            size="large"><b>RESET</b></ion-button>
        </form>
      </div>
      <div class="ion-text-center text-white" style="">
        <ion-text>Don't have an account? <b @click="gotoPage('Register')">Sign up</b></ion-text>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton },
  setup() {
    const router = useRouter()

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    return {
      personOutline,
      gotoPage
    }
  },



});
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88%
}

ion-input.text-white {
  --background: rgba(54, 54, 243, 0.986);
  --border-color: rgb(54, 54, 243, 0.986);
}
</style>
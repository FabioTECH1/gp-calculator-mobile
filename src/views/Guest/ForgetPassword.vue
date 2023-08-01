<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login" class="m-3" text=""></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>
      <div class="container">
        <h1><b>Forgot Password</b></h1>
        <ion-text>Enter your email address</ion-text>
        <form style="width: 100%;">
          <ion-input label="Email Address" label-placement="floating" mode="md" fill="outline" placeholder="Email Address"
            type="email" class="ion-margin-bottom mt-4"></ion-input>

          <ion-button expand="full" class="tex" size="large"><b>RESET</b></ion-button>
        </form>
      </div>
      <div class="ion-text-center">
        <ion-text class="muted">Don't have an account? <b @click="gotoPage('Register')" class="text-dark">Sign
            up</b></ion-text>
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
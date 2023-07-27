<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/auth/home/" class="m-3" text=""></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding-start ion-padding-end" fullscreen>
      <div class="ion-margin">
        <ion-text>Use the details below to send money to your Datatown acount from any bank app or through internet
          banking</ion-text>

        <div class="pt-3">
          <div class="account-detail">
            <b>Bank</b>
            <p class="p-2">MoniePoint</p>
          </div>
          <div class="account-detail">
            <b>Account Number</b>
            <p class="p-2">1234567890</p>
          </div>
          <div class="account-detail">
            <b>Account Name</b>
            <p class="p-2">YusufFarukA-DataTown </p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
  IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading, IonButtons, IonBackButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
    IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading, IonButtons, IonBackButton
  },
  setup() {
    const router = useRouter();
    const openLoader = ref(false);
    const amount = ref();

    const gotoPage = (page: string) => {
      console.log(page);
      router.push({ name: page });
    };


    return {
      gotoPage,
      openLoader,
    };
  },
});
</script>

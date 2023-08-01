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
        <form style="" @submit.prevent="fundWalletByCard">
          <ion-input v-model="amount" label="Amount (NGN)" label-placement="floating" mode="md" fill="outline"
            placeholder="Amount (NGN)" type="number" class="ion-margin-bottom mt-4" required></ion-input>

          <ion-button expand="full" class="mb-4" size="large" type="submit">
            <b>CONTINUE</b>
          </ion-button>
          <ion-loading :is-open="openLoader" message="Redirecting..." duration="3000" spinner="circles"></ion-loading>
        </form>
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
import { addToWallet } from '@/services/WalletService';
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

    const fundWalletByCard = async () => {
      const response = await addToWallet(amount.value)
      amount.value = null;
      if (response.success == true) {
        router.push({ name: 'Home' });
      } else {
        console.log('something went wrong')
      }
    }
    return {
      gotoPage,
      amount,
      openLoader,
      fundWalletByCard
    };
  },
});
</script>

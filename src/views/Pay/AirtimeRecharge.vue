<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start" class="border-bottom pb-1" style="width: 100%;">
          <ion-back-button default-href="/auth/pay" class="m-0 mb-0" text=""></ion-back-button>
          <ion-title class="mt-2 me-4 text-center"><b>Airtime Recharge</b></ion-title>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>
      <div class="">
        <form style="width: 100%;">

          <ion-item>
            <ion-input label="Amount" label-placement="floating" placeholder="Amount" type="number" mode="md"></ion-input>
          </ion-item>

          <ion-item>
            <ion-select interface="action-sheet" label="Network" v-model="network">
              <ion-select-option value="MTN">MTN</ion-select-option>
              <ion-select-option value="GLO">GLO</ion-select-option>
              <ion-select-option value="AIRTEL">AIRTEL</ion-select-option>
              <ion-select-option value="ETISALAT">ETISALAT</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-input label="Phone Number" label-placement="floating" placeholder="Phone Number" type="tel"
              mode="md"></ion-input>
          </ion-item>

          <ion-button expand="full" class="" size="large"><b>CONTINUE</b></ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<!-- <style>
ion-input {
  text-align: right;
}
</style> -->

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
  IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonSelect, IonSelectOption, IonLabel
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
    IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonSelect, IonSelectOption, IonLabel
  },
  setup() {
    const router = useRouter()

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const network = ref('');
    const dataType = ref('');
    const dataPlan = ref('');
    const phoneNumber = ref('');
    const amount = ref('');

    return {
      personOutline,
      gotoPage,
      network,
      dataType,
      dataPlan,
      phoneNumber,
      amount
    }
  },
});
</script>

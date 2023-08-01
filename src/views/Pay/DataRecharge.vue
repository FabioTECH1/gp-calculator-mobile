<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start" class="border-bottom pb-1" style="width: 100%;">
          <ion-back-button default-href="/auth/pay" class="m-0 mb-0" text=""></ion-back-button>
          <ion-title class="mt-2 me-4 text-center"><b>Data Recharge</b></ion-title>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" fullscreen>
      <div class="">
        <!-- <h1><b>Recharge Data</b></h1> -->
        <form style="width: 100%;">
          <ion-item>
            <ion-select interface="action-sheet" label="Network" v-model="network" @ion-change="getType">
              <ion-select-option value="MTN">MTN</ion-select-option>
              <ion-select-option value="GLO">GLO</ion-select-option>
              <ion-select-option value="AIRTEL">AIRTEL</ion-select-option>
              <!-- <ion-select-option value="ETISALAT">ETISALAT</ion-select-option> -->
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-select interface="action-sheet" label="Data Type" v-model="dataType" @ion-change="getPlan">
              <ion-select-option value="SME">SME</ion-select-option>
              <!-- <ion-select-option value="GIFTING">GIFTING</ion-select-option> -->
              <!-- <ion-select-option value="CORPORATE GIFTING">CORPORATE GIFTING</ion-select-option> -->
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-select interface="action-sheet" label="Data Plan" v-model="dataPlan" @ion-change="getAmount">
              <ion-select-option v-for="option in planOptions" :value="option.id">
                {{ option.plan }}
              </ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-input label="Phone Number" label-placement="floating" placeholder="Phone Number" type="tel"
              mode="md"></ion-input>
          </ion-item>

          <ion-item>
            <ion-input v-model="amount" label="Amount" type="text" disabled></ion-input>
          </ion-item>

          <ion-button expand="full" class="" size="large"><b>CONTINUE</b></ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
  IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonSelect, IonSelectOption, IonLabel
} from '@ionic/vue';
import { defineComponent, ref, watch } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { getDataPlan } from '@/services/DataService';

export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
    IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonSelect, IonSelectOption, IonLabel
  },
  setup() {
    const router = useRouter()
    const network = ref('');
    const dataType = ref('');
    const dataPlan = ref('');
    const phoneNumber = ref('');
    const amount = ref('');
    const planOptions = ref();


    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const getType = () => {
      dataType.value = dataPlan.value = amount.value = ''
    }

    const getPlan = async () => {
      if (network.value != '') {
        dataPlan.value = amount.value = ''
        const response = await getDataPlan(network.value)
        if (response.success == true) {
          planOptions.value = response.plan
          console.log(response.plan)
        }
      }
    }
    const getAmount = (event: any) => {
      let id = event.detail.value;
      let filteredPlan = planOptions.value.filter((plan: { id: any; }) => plan.id === id);
      console.log(filteredPlan[0].amount);
      amount.value = filteredPlan[0].amount
    }

    return {
      personOutline,
      gotoPage,
      network,
      dataType,
      dataPlan,
      phoneNumber,
      amount,
      getAmount, getType, getPlan,
      planOptions,
    }
  },
});
</script>

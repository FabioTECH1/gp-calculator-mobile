<template>
  <ion-page>

    <ion-header class="ion-no-border">
      <ion-toolbar class="ion-padding-bottom pt-4">
        <ion-chip class="ion-padding">
          <ion-avatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label><b>Hi, {{ user?.user?.fullname }}</b></ion-label>
        </ion-chip>
      </ion-toolbar>
    </ion-header>

    <ion-content class="" fullscreen>
      <div class="balance-card m-3 mt-1 mb-2">
        <!-- <ion-icon :icon="addCircle" class="icon text-white" style="font-size:40px;"></ion-icon> -->
        <i @mouseover="mouseOver" @mouseleave="mouseLeave" @click="gotoPage('FundWallet')"> <ion-icon
            :icon="isHover ? addCircle : addCircleOutline" class="text-white m-1"
            style="font-size:40px; text-align:right; float:right"></ion-icon></i>
        <br>
        <div class="ion-padding-start pt-4">
          <ion-text><b>NGN</b></ion-text>
          <div :class="['fs-1 text-white', { 'blurred': isBalanceBlurred }]" @click="toggleBlur">
            <ion-text>
              <b>{{ walletBalance ? walletBalance.toLocaleString() : '.........' }}</b>
            </ion-text>
          </div>
        </div>
      </div>
      <!-- <ion-text class="ion-margin"><b>Transactions</b></ion-text> -->

      <!-- Transactions section -->
      <div class="transactions-list">
        <ion-list class="">
          <!-- <ion-text class="muted footnote ion-margin-start">23 July 2023</ion-text> -->
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;"><b>₦22.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;" class="text-success"><b>₦2000.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;"><b>₦22.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;" class="text-success"><b>₦2000.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;"><b>₦22.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;" class="text-success"><b>₦2000.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;"><b>₦22.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;"><b>₦22.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;" class="text-success"><b>₦2000.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;"><b>₦22.407</b></ion-text>
            </ion-item>
          </div>
          <div @click="">
            <ion-item class="ion-margin mt-1 mb-1">
              <ion-icon :icon="addCircle" class="icon" style="font-size: 40px;" />
              <div class="m-3">
                <h6 class="mb-0"><b class="d-block" style="font-size: 14px;">07060528533</b></h6>
                <span class="muted footnote">02:45PM</span>
              </div>
              <ion-text slot="end" style="font-size: 12px;" class="text-success"><b>₦2000.407</b></ion-text>
            </ion-item>
          </div>
        </ion-list>
      </div>

      <!-- <ion-button @click="userInfo()">Get User</ion-button> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonGrid, IonRow, IonChip, IonLabel, IonAvatar,
  IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonFooter, IonCol, IonImg
} from '@ionic/vue';
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { home, send, options, addCircle, addCircleOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { logout } from '@/services/AuthService';
import { getUser } from '@/services/UserService';
import { getBalance } from '@/services/WalletService';
import { ref, computed } from 'vue';


export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonGrid, IonRow, IonChip, IonLabel, IonAvatar,
    IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonFooter, IonCol, IonImg
  },
  setup() {
    const router = useRouter()
    const user = ref();
    const isBalanceBlurred = ref(false)
    const isHover = ref(false)
    const wallet = ref();

    let intervalId: string | number | NodeJS.Timeout | undefined;


    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const toggleBlur = () => {
      isBalanceBlurred.value = !isBalanceBlurred.value

    }
    const handleLogout = async () => {
      await logout();
      router.push({ name: 'Login' });
    };

    const userInfo = async () => {
      user.value = await getUser();
    }

    const getWalletBalance = async () => {
      wallet.value = await getBalance();
    }

    const mouseOver = () => {
      isHover.value = true;

    }
    const mouseLeave = () => {
      isHover.value = false;
    }

    const walletBalance = computed(() =>
      wallet.value?.balance
    );

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });

    onMounted(() => {
      userInfo();
      getWalletBalance();
      intervalId = setInterval(getWalletBalance, 10000);
    });

    return {
      home,
      send,
      options,
      addCircle,
      addCircleOutline,
      gotoPage,
      user,
      walletBalance,
      handleLogout,
      userInfo,
      isBalanceBlurred,
      toggleBlur,
      mouseOver,
      mouseLeave,
      isHover,
    }
  },
});
</script>
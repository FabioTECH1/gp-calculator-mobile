<template>
  <ion-page>
    <ion-content class="ion-padding" style="--background:rgb(23, 23, 245);" fullscreen>

      <div class="container text-white">
        <h1><b>Home</b></h1>
      </div>

      <ion-button @click="handleLogout()" expand="full" class="tex" style="--background:rgb(32, 209, 32);"
        size="large"><b>Logout</b></ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { logout } from '@/services/AuthService';


export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton },
  setup() {
    const router = useRouter()

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const handleLogout = async () => {
      await logout();
      router.push({ name: 'Login' });
    };


    return {
      personOutline,
      gotoPage,
      handleLogout
    }
  },
});
</script>

<!-- styling  -->
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88%
}
</style>
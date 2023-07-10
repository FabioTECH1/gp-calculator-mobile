<template>
  <ion-page>
    <ion-content class="ion-padding" style="--background:rgb(23, 23, 245);" fullscreen>

      <div class="container text-white">
        <h1><b>Home</b></h1>
      </div>
      <ion-button @click="userInfo()">Get User</ion-button>
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
import { getUser } from '@/services/UserService';
import { ref } from 'vue';



export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton },
  setup() {
    const router = useRouter()
    const user = ref({ name: null, role: null, success: null });

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const handleLogout = async () => {
      await logout();
      router.push({ name: 'Login' });
    };

    const userInfo = async () => {
      const userData = await getUser();
      // user.value = userData;
      console.log(userData);

      return userData;
    }
    // userInfo();

    return {
      personOutline,
      gotoPage,
      handleLogout,
      userInfo,
      // userData
    }
  },
});
</script>
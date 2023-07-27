<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom" class="" style="border-color:#2e4045ad">
                <ion-tab-button tab="home" href="/auth/home">
                    <ion-icon :icon="home" class="tabs" />
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="fund" href="/auth/fund">
                    <ion-icon :icon="addCircle" class="tabs" />
                    <ion-label>Add</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="pay" href="/auth/pay">
                    <ion-icon :icon="send" class="tabs" />
                    <ion-label>Pay</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="options" href="/auth/more">
                    <ion-icon :icon="options" class="tabs" />
                    <ion-label>More</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
  
<style>
ion-tab-button {
    --color-selected: #2a2a72;
}

ion-icon.tabs {
    font-size: 30px;
}
</style>
<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { home, send, options, addCircle, addCircleOutline } from 'ionicons/icons';

export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data() {
        return {
            addCircle,
            home,
            send,
            options,
            addCircleOutline,
        };
    },
};
</script>
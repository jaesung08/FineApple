<template>
    <section id="banner">
            <div class="content">
                <header>
                    <h1 class="icon fa-tag">
                        {{store.userData.name }}님의 FMTI 타입은  {{ data.type }} 입니다!<br />
                    </h1>
                    <h3>{{ data.tag }}</h3>
                </header>
                <hr>
                <p>
                    {{ data.explain }}
                </p>
                <hr>
                <ul class="actions row">
                    <li class="12u$">&nbsp;</li>
                    <template v-if="store.isLogin">
                        <li class="6u"><button clbuttonss="button special" @click="save">FMTI 저장</button></li>
                        <!-- <li class="6u$"><a class="button" @click="$router.push({name:'map-detail',params:{id:2384136}})">추천 금융 상품</a></li> -->
                    </template>
                    <li class="12u$">&nbsp;</li>
                    <!-- <li class="6u"><a class="button" @click="()=>{state = !state}">공유하기</a></li> -->
                    <li class="6u$"><button class="button special" @click="$router.push({name:'test-main'})">다시 검사하기</button></li>
                    <li class="12u$">&nbsp;</li>
                    <!-- <div class="12u$ box" v-if="state">{{ url }}</div> -->
                </ul>

            </div>
            <span class="image object">
                <img src="@/assets/images/ABID.png" alt="" v-if="data.type == 'ABID'" />
                <img src="@/assets/images/ABIF.png" alt="" v-if="data.type == 'ABIF'" />
                <img src="@/assets/images/ABSD.png" alt="" v-if="data.type == 'ABSD'" />
                <img src="@/assets/images/ABSF.png" alt="" v-if="data.type == 'ABSF'" />
                <img src="@/assets/images/AEID.png" alt="" v-if="data.type == 'AEID'" />
                <img src="@/assets/images/AEIF.png" alt="" v-if="data.type == 'AEIF'" />
                <img src="@/assets/images/AESD.png" alt="" v-if="data.type == 'AESD'" />
                <img src="@/assets/images/AESF.png" alt="" v-if="data.type == 'AESF'" />
                <img src="@/assets/images/NBID.png" alt="" v-if="data.type == 'NBID'" />
                <img src="@/assets/images/NBIF.png" alt="" v-if="data.type == 'NBIF'" />
                <img src="@/assets/images/NBSD.png" alt="" v-if="data.type == 'NBSD'" />
                <img src="@/assets/images/NBSF.png" alt="" v-if="data.type == 'NBSF'" />
                <img src="@/assets/images/NEID.png" alt="" v-if="data.type == 'NEID'" />
                <img src="@/assets/images/NEIF.png" alt="" v-if="data.type == 'NEIF'" />
                <img src="@/assets/images/NESD.png" alt="" v-if="data.type == 'NESD'" />
                <img src="@/assets/images/NESF.png" alt="" v-if="data.type == 'NESF'" />
            </span>
        </section>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { useFinancialTypeTestStore } from '@/stores/financialTypeTest';
import { useCounterStore } from "@/stores/counter";


const route = useRoute();
const url = location.href;
const state = ref(false);

const store = useCounterStore()
const store2 = useFinancialTypeTestStore();
const { resultSet } = store2;
const data = ref('');
const mbti = ref(store2.resultType)
console.log('1', mbti);
resultSet.forEach(ele => {
    console.log('ele', ele);
    console.log('resultType', store2.resultType);
    // console.log('route', route);
    if (ele.type == mbti.value) {
        data.value = ele;
    }
    console.log('data', data.value);
});



const save = () => {
    store.updateMbti(mbti.value)
    
}

console.log(route.params.type);
</script>



<style scoped>

</style>
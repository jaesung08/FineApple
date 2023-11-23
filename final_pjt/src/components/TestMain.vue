<template>
    <section>
        <h2 class="icon fa-hand-peace-o">&nbsp; 16가지의 fmti를 소개합니다~~!</h2>
        <div>
            <p><strong>fmti 란?</strong></p>
            <p>Financial Management Type Indicator의 약자로 mbti와 유사한 금융 관리 유형 지표 입니다!</p>
        </div>
                    <ul class="actions" style="text-align: center">
                <li>
                    <button class="big" @click="$router.push({name: 'test-test'})">검사하기!</button>
                </li>
            </ul>
        <div class="features">
            <article v-for="result in resultSet" :key="result.type">
                <span class="icon">
                    <img
                        src="@/assets/images/ABID.png"
                        alt=""
                        v-if="result.type == 'ABID'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/ABIF.png"
                        alt=""
                        v-if="result.type == 'ABIF'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/ABSD.png"
                        alt=""
                        v-if="result.type == 'ABSD'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/ABSF.jpeg"
                        alt=""
                        v-if="result.type == 'ABSF'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/AEID.jpg"
                        alt=""
                        v-if="result.type == 'AEID'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/AEIF.jpeg"
                        alt=""
                        v-if="result.type == 'AEIF'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/AESD.jpeg"
                        alt=""
                        v-if="result.type == 'AESD'"
                        style="width: 140px; height: 140px" />
                    <img
                        src="@/assets/images/AESF.jpeg"
                        alt=""
                        v-if="result.type == 'AESF'"
                        style="width: 140px; height: 140px" />
 
                    <img
                        src="@/assets/images/NBID.jpeg"
                        alt=""
                        v-if="result.type == 'NBID'"
                        style="width: 140px; height: 140px" />
 
                    <img
                        src="@/assets/images/NBIF.jpeg"
                        alt=""
                        v-if="result.type == 'NBIF'"
                        style="width: 140px; height: 140px" />

                    <img
                        src="@/assets/images/NBSD.jpeg"
                        alt=""
                        v-if="result.type == 'NBSD'"
                        style="width: 140px; height: 140px" />

                    <img
                        src="@/assets/images/NBSF.jpeg"
                        alt=""
                        v-if="result.type == 'NBSF'"
                        style="width: 140px; height: 140px" />

                    <img
                        src="@/assets/images/NEID.jpeg"
                        alt=""
                        v-if="result.type == 'NEID'"
                        style="width: 140px; height: 140px" />
   
                    <img
                        src="@/assets/images/NEIF.jpeg"
                        alt=""
                        v-if="result.type == 'NEIF'"
                        style="width: 140px; height: 140px" />

                    <img
                        src="@/assets/images/NESD.jpeg"
                        alt=""
                        v-if="result.type == 'NESD'"
                        style="width: 140px; height: 140px" />

                    <img
                        src="@/assets/images/NESF.jpeg"
                        alt=""
                        v-if="result.type == 'NESF'"
                        style="width: 140px; height: 140px" />
                        
                </span>
                <div class="content">
                    <h3>{{ result.type }}</h3>
                    <h4>
                        {{ result.tag }}
                    </h4>
                </div>
                <hr>
            </article>
        </div>
        <article>
            <ul class="actions" style="text-align: center">
                <li>
                    <button class="big" @click="$router.push({name: 'test-test'})">검사하기!</button>
                </li>
            </ul>
        </article>
    </section>
</template>

<script setup>
import {ref, watch, onMounted} from "vue";
import {useRoute} from "vue-router";
import { useFinancialTypeTestStore } from '@/stores/financialTypeTest';

const route = useRoute();

const store = useFinancialTypeTestStore();
const {resultSet} = store;
</script>



<style scoped></style>

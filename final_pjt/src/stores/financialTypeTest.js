import {ref, computed, watch} from "vue";
import { defineStore } from "pinia";

export const useFinancialTypeTestStore = defineStore("financialType", () => {

    const resultType = ref('');

    const typeA = ref({
        count: 0,
        question: [
            ["안정적인 수익이 있고 앞으로도 꾸준히 늘어날 것 같다.","당연하지! 난 계속해서 수입을 늘려낼 자신이 있어!","아니 아직 불안정하고 모르겠어ㅠㅠ"],
            ["나의 금융자산 중 저축,투자자산은 100%에 가깝다.", "그럼그럼! 나는야 투자왕 저축왕", "아니? 전세금도 있고, 자동차 할부도 있고,,,등등"],
            ["좋은 투자 정보를 알게되면 누구보다 빠르게 투자 하고 싶다", "그렇다. 조금이라도 빨리 투자해서 빨리 이득을 챙겨야해!.", "아니다. 아직 어떤지 모르고 더 좋은 게 있을지 모르잖아?"],
        ]
    })
    const typeB = ref({
        count: 0,
        question: [
            ["내가 투자 중인 자산의 규모와 위험성에 대해 잘 이해한다", "당연하지 나는 똑부러지게 알아", "음.. 아니? 그냥 좋다하니까 가는거지~"],
            ["투자할 때 여러 상품의 이율과 상세 조건들을 자세히 비교해보고 스스로 이해할 수 있다.", "사소한거라도 분석해야지! 이해할 내 지식도 충분해!", "나는야 핑프~ 누가 좀 설명해줘~"],
            ["높은 이율을 위한 부가적인 상품가입 경험이 있거나, 조건을 맞추기 위해 노력해본 경험이 있다.", "돈을 벌려면 노력해야지!", "굳이.. 그렇게 까지 해야해?"],
        ]
    })
    const typeC = ref({
        count: 0,
        question: [
            ["하나의 상품에 집중 투자 하지 않고 분산 투자 한다.", "한 곳에 돈을 두는 건 별로야! 흩어져!", "귀찮아 다 모아서 한번에 할래"],
            ["나는 주식이나 펀드보다 예적금 처럼 안정적인 투자를 선호한다.", "그럼그럼 안전한게 최고야", "인생은 한방! 도전할거야!"],
            ["나는 높은 이율을 위해서라면 오랜 기간 투자할 수 있다", "응! 단기간에 늘리는 건 욕심이야!", "그러다 돈 썩어! 오랫동안 묵힐 생각 없어!"],
        ]
    })
    const typeD = ref({
        count: 0,
        question: [
            ["금융기관의 정보를 신뢰하고 투자 상품 가입 후 자주 확인한다", "전문가가 알려주는 정보잖아!", "굳이? 모두가 아는 정보는 필요없어!"],
            ["혼자 투자하는 것보다 주변의 조언을 듣는 편이다.", "나 혼자서는 겁나. 믿고 따를 사람이 필요해.", "주변도 좋지만 내 생각이 제일 중요해."],
            ["나는 스스로 앱을 통한 투자 상품 거래가 익숙하고 자주 이용하고 있다.", "맞아 금융앱을 잘 이용해서 정보를 알아내고 투자해.", "아직 많이 해보지 않았어."],
        ]
    })

    const resultSet = [
    {
        type: 'AESD',
        tag: '#적극적 #전문가적 지식 #안정 추구 #의존형',
        explain: '고급스러운 맛과 안정된 영양을 추구하는 아보카도 같은 당신!! 🌿📚🥑',
        src: "@/assets/images/AESD.png",
    },
    {
        type: 'AESF',
        tag: '#적극적 #전문가적 지식 #안정 추구 #자유형',
        explain: '달다양한 맛을 즐기며 자유로운 경험을 추구하는 멜론같은 당신! 🌈📚🍈',
        src: "@/assets/images/AESF.png",
    },
    {
        type: 'AEID',
        tag: '#적극적 #전문가적 지식 #집중 추구 #의존형',
        explain: '집중력을 높여주는 신선하고 상쾌한 그린 애플같은 당신! 🍵📚🍏',
        src: "@/assets/images/AEID.png",
    },
    {
        type: 'AEIF',
        tag: '#적극적 #전문가적 지식 #집중 추구 #자유형',
        explain: '다양한 주제에 자유롭게 집중하는 달콤하고 다양한 맛의 딸기같은 당신! ✨📚🍓',
        src: "@/assets/images/AEIF.png",
    },
    {
        type: 'ABSD',
        tag: '#적극적 #초보자 #안정 추구 #의존형',
        explain: '안정적이고 신뢰성 있는 선택을 선호하는 영양가 높고 안정된 바나나같은 당신 🌈📕🍌',
        src: "@/assets/images/ABSD.png",
    },
    {
        type: 'ABSF',
        tag: '#적극적 #초보자 #안정 추구 #자유형',
        explain: '새로운 경험을 추구하면서도 안정을 중시하는 상큼하고 시원한 수박같은 당신! 🌈📕🍉',
        src: "@/assets/images/ABSF.png",
    },
    {
        type: 'ABID',
        tag: '#적극적 #초보자 #집중 추구 #의존형',
        explain: '기초적인 지식에 집중하고 싶은 상큼한 레몬같은 당신! ✨📚🍋',
        src: "@/assets/images/ABID.png",
    },
    {
        type: 'ABIF',
        tag: '#적극적 #초보자 #집중 추구 #자유형',
        explain: '다양한 주제에 자유롭게 집중하며 새로운 경험을 추구하는 상큼한 파인애플 당신! ✨📚🍍',
        src: "@/assets/images/ABIF.png",
    },
    {
        type: 'NESD',
        tag: '#소극적 #전문가적 지식 #안정 추구 #의존형',
        explain: '소극적으로 안정을 추구하는 한알 한알 상콤하고 달콤한 포도같은 당신! 🍵📚🍇',
        src: "@/assets/images/NESD.png",
    },
    {
        type: 'NESF',
        tag: '#소극적 #전문가적 지식 #안정 추구 #자유형',
        explain: '안정적인 선택을 선호하면서도 새로운 경험을 즐기고 싶은 달콤한 복숭아같은 당신! 🎉📚🍑',
        src: "@/assets/images/NESF.png",
    },
    {
        type: 'NEID',
        tag: '#소극적 #전문가적 지식 #집중 추구 #의존형',
        explain: '소극적으로 깊은 지식에 집중하고 싶은 고요하면서도 고급스러운 감같은 당신! 🌈📚🍈',
        src: "@/assets/images/NEID.png",
    },
    {
        type: 'NEIF',
        tag: '#소극적 #전문가적 지식 #집중 추구 #자유형',
        explain: '극적으로 자유로운 주제에 집중하고 싶은 영양가 높은 블루베리같은 당신! 🌈📚🍒',
        src: "@/assets/images/NEIF.png",
    },
    {
        type: 'NBSD',
        tag: '#소극적 #초보자 #안정 추구 #의존형',
        explain: '안전하고 안정된 선택을 선호하는 달콤하고 고요한 배같은 당신! 🍵📕🥭',
        src: "@/assets/images/NBSD.png",
    },
    {
        type: 'NBSF',
        tag: '#소극적 #초보자 #안정 추구 #자유형',
        explain: '극적으로 안정을 추구하면서도 다양한 경험을 원하는 신선하고 달콤한 오렌지같은 당신! 🌿📕🍊',
        src: "@/assets/images/NBSF.png",
    },
    {
        type: 'NBID',
        tag: '#소극적 #초보자 #집중 추구 #의존형',
        explain: '소극적으로 기초적인 지식에 집중하고 싶은 무르익어가는 토마토같은 당신! 🍵📕🍅',
        src: "@/assets/images/NBID.png",
    },
    {
        type: 'NBIF',
        tag: '#소극적 #초보자 #집중 추구 #자유형',
        explain: '소극적으로 다양한 주제에 집중하며 자유로운 경험을 즐기고 싶은 은은하면서도 특별한 맛의 파파야같은 당신! 🍀📕🍑',
        src: "@/assets/images/NBIF.png",
    },
];
    const startTest = () => {
        typeA.value.count = 0;
        typeB.value.count = 0;
        typeC.value.count = 0;
        typeD.value.count = 0;
        resultType.value = '';
    }

    const endTest = async () => {
        if (typeA.value.count < 2) resultType.value += 'A';
        else resultType.value += 'N';
        if (typeB.value.count < 2) resultType.value += 'E';
        else resultType.value += 'B';
        if (typeC.value.count < 2) resultType.value += 'S';
        else resultType.value += 'I';
        if (typeD.value.count < 2) resultType.value += 'D';
        else resultType.value += 'F';

        // A N 
        // 적극적 active 소극적 negative ( 자산 규모 및 거래양 확대 가능성 보유 )
        // E B 
        // 전문가 expert, 초보자 Beginner ( 투자 상품 가입 경험 )
        // S I
        // 안정적인 stable , 집중적인 intensive (선호 투자 상품 유형, 투자지역 분석)
        // D F
        // 의존형 dependent 자유형 freestyle ( 금융 거래 선호 채널, 금융앱 사용여부)

        console.log(resultType.value)
        typeA.value.count = 0;
        typeB.value.count = 0;
        typeC.value.count = 0;
        typeD.value.count = 0;
    }

    
    return {typeA, typeB, typeC, typeD, startTest, resultType, endTest, resultSet};
});

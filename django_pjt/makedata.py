import random
import requests

first_name_samples = "김이박최정강조윤장임"
middle_name_samples = "민서예지도하주윤채현지"
last_name_samples = "준윤우원호후서연아은진"


def random_name():
    result = ""
    result += random.choice(first_name_samples)
    result += random.choice(middle_name_samples)
    result += random.choice(last_name_samples)
    return result + str(random.randint(1, 100))

# 현재 API 에 들어있는 금융 상품 코드 리스트 저장
DP_URL = 'http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json'
SP_URL = 'http://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json'

API_KEY='d8ac7b184792adf08a6f6bb6bd619d37'

financial_products = []

params = {
  'auth': API_KEY,
  # 금융회사 코드 020000(은행), 030200(여신전문), 030300(저축은행), 050000(보험), 060000(금융투자)
  'topFinGrpNo': '020000',
  'pageNo': 1
}

# 정기예금 목록 저장
response = requests.get(DP_URL, params=params).json()
baseList = response.get('result').get('baseList')   # 상품 목록

for product in baseList:
    financial_products.append(product['fin_prdt_cd'])

# 적금 목록 저장
response = requests.get(SP_URL, params=params).json()
baseList = response.get('result').get('baseList')   # 상품 목록

for product in baseList:
    financial_products.append(product['fin_prdt_cd'])

dict_keys = ['username', 'gender', 'financial_products', 'age', 'money', 'salary']

# json 파일 만들기
import json
from collections import OrderedDict

file = OrderedDict()

username_list = []
N = 10000
i = 0

while i < N:
    rn = random_name()
    if rn in username_list:
        continue
    
    username_list.append(rn)
    i += 1

from itertools import product

def generate_combinations():
    A = ['A', 'I']
    E = ['E', 'B']
    S = ['S', 'I']
    D = ['D', 'F']

    combinations = list(product(A, E, S, D))
    result = [''.join(comb) for comb in combinations]

    return result
def choose_random_combination():
    combinations = generate_combinations()
    random_combination = random.choice(combinations)
    return random_combination
    
# 저장 위치는 프로젝트 구조에 맞게 수정합니다.
save_dir = './user_data2.json'
with open(save_dir, 'w', encoding="utf-8") as f:
    f.write('[')
    for i in range(N):
        file["model"] = "accounts.User"
        file["pk"] = i+1
        file["fields"] = {
            'username': username_list[i],  # 이름
            'name' : username_list[i], # 아이디
            'age': random.randint(1, 100),  # 나이
            'money': random.randrange(0, 100000000, 100000),  # 자산
            'saving_possible_money': random.randrange(0, 1500000000, 1000000), # 매달 저축 가능 금액
            'saving_possible_period' : random.randrange(0, 100, 20), # 저축 가능 기간(개월)
            'financial_type' : random.choice(['예금', '적금']),
            'mbti': choose_random_combination(),
            'financial_products': ','.join([random.choice(financial_products) for _ in range(random.randint(0, 5))]), # 선택 상품
        }

        json.dump(file, f, ensure_ascii=False, indent="\t")
        if i != N-1:
            f.write(',')
    f.write(']')
    f.close()
print(file)
print(f'데이터 생성 완료 / 저장 위치: {save_dir}')
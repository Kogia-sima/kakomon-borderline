<template>
  <div>
    <v-app>
      <Header />
      <v-main class="mx-8 my-12">
        <section class="my-8 text-center text-xl text-gray-500">
          <h1>過去問目標点数算出ツール</h1>
        </section>
        <section class="kb-usage max-w-2xl mx-auto my-8">
          <v-expansion-panels>
            <v-expansion-panel elevation="0">
              <v-expansion-panel-title color="#E0E0E0">
                <span class="text-gray-700">使い方を見る</span>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="pb-5">
                <h3>概要</h3>
                <p>
                  このツールは、過去問を解く際の目標合格点数を統計的に算出するためのツールです。
                  試験の問題数と合格に必要な正解数を入力するだけで、本番試験での合格確率をシミュレーションし、
                  最適な目標点数を算出します。
                  算出された目標点数と合格確率を用いて、勉強の目標設定に活用することができます。
                </p>
                <h3>使い方</h3>
                <p>
                <ol>
                  <li>1. 試験の問題数（出題数）と、合格するために最低限必要な正解数を入力します。</li>
                  <li>2. 過去問1回分の問題数を入力するか、あるいは「本番試験と同じ問題数」にチェックを入れます。</li>
                  <li>3. 「目標点を計算」ボタンをクリックします。</li>
                </ol>
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </section>
        <section class="mx-auto mt-10 p-5 pt-12 max-w-2xl rounded-lg bg-violet-100 text-md text-gray-800">
          <v-form>
            <h2>本番試験の情報を入力:</h2>
            <v-container class="mb-5 p-2">
              <v-row no-gutters>
                <v-col cols="5">
                  <v-text-field type="number" label="合格に必要な正解数" v-model="realRequiredCountStr"
                    :rules="[isPositiveInteger]" :error-messages="runtimeErrors[0]" />
                </v-col>
                <v-col cols="2">
                  <span class="inline-block pt-2 w-full text-center text-4xl text-gray-500">/</span>
                </v-col>
                <v-col cold="5">
                  <v-text-field type="number" label="試験本番の問題数" v-model="realTotalCountStr"
                    :rules="[isPositiveInteger]"></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <h2>過去問の情報を入力:</h2>
            <v-container class="mb-5 p-2">
              <v-row no-gutters>
                <v-col cols="5">
                  <v-text-field type="number" label="過去問の問題数" v-model="practiceTotalCountStr" :rules="[isPositiveInteger]"
                    :disabled="useSameCount"></v-text-field>
                </v-col>
                <v-col cols="6" offset="1">
                  <v-checkbox label="本番試験と同じ問題数" v-model="useSameCount"></v-checkbox>
                </v-col>
              </v-row>
            </v-container>

            <div class="p-5 text-center">
              <v-btn color="primary" height="48" @click="run">
                <span class="text-lg">目標点を計算</span>
              </v-btn>
            </div>
          </v-form>
        </section>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const realRequiredCountStr = ref<string>('')
const realTotalCountStr = ref<string>('')
const practiceTotalCountStr = ref<string>('')
const useSameCount = ref<boolean>(false);
const runtimeErrors = ref<string[]>(['', '', ''])

function isPositiveInteger(value: string) {
  return (value.length === 0 || /^[1-9][0-9]*$/.test(value)) || '正の整数を入力してください'
}

function run() {
  const realRequiredCount = Number(realRequiredCountStr.value)
  const realTotalCount = Number(realTotalCountStr.value)
  const practiceTotalCount = Number(practiceTotalCountStr.value)
  console.log(realRequiredCount)

  if (realRequiredCount > realTotalCount) {
    runtimeErrors.value[0] = '問題数よりも少ない値を入力してください'
    return
  } else {
    runtimeErrors.value = ['', '', '']
  }
}
</script>

<style>
.kb-usage h3 {
  font-weight: bold;
  margin-top: 2.0rem;
  margin-bottom: 0.5rem;
}

.v-expansion-panel {
  border-width: 1px;
  border-color: #E0E0E0;
}
</style>
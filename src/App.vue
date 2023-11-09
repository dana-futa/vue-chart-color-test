<script lang="ts">
import { ref } from 'vue'
import Chart from 'primevue/chart'

export default {
    name: 'App',
    components: {
        Chart,
    },
    setup() {
        const colorLabelsArr =       ['Dark Blue', 'Dark Purple', 'Purple', 'Pink', 'Hot Pink', 'Red', 'Scarlet', 'Orange', 'Light Orange', 'Yellow']
        const colorHexNormal =       ['#116a8e', '#556fa5', '#7f6aa3', '#ab6ca1', '#d95f92', '#ea5d71', '#f16f57', '#f0892d', '#f2a212', '#f9c100']
        const colorHexBlueConeMono = ['#225464', '#5b6782', '#786e89', '#96778d', '#ab7287', '#b16e78', '#bf7f71', '#c5925f', '#cba75c', '#d7bd5d']
        const colorHexMono =         ['#4b4c4d', '#616264', '#6a6b6d', '#787778', '#7c7b7c', '#7c7b7c', '#868586', '#929292', '#a1a0a1', '#b6b5b5'] // 2 colors became the same
        const colorHexGreenWeak =    ['#3f5b85', '#5d679a', '#736b9a', '#8d7599', '#ad7b8b', '#bf8065', '#c78e43', '#c69b13', '#cda904', '#e3c300']
        const colorHexGreenBlind =   ['#535386', '#606298', '#6c6d9b', '#7c7b9b', '#848383', '#989662', '#a29e3e', '#a59f0f', '#b4aa06', '#d0c200']
        const colorHexRedWeak =      ['#4a6087', '#5e699b', '#706899', '#876e99', '#a3698c', '#b1666a', '#bb794a', '#bb8d1f', '#c39f0c', '#dabb00']
        const colorHexRedBlind =     ['#5f6088', '#68699b', '#696a9a', '#71719a', '#70708e', '#6f6f6b', '#86834b', '#918d1f', '#a29d0d', '#c1b702']
        const colorHexBlueWeak =     ['#005f6e', '#3f6d82', '#766d86', '#a46c81', '#d65b74', '#e4535e', '#ec645d', '#ee8064', '#f59a76', '#fab88b']
        const colorHexBlueBlind =    ['#006263', '#356d6d', '#69696a', '#a36f6e', '#d45d5f', '#e45456', '#eb6263', '#ef7c7b', '#f19494', '#f6b2b0']

        const primeChartRef = ref()
        const colorTypesArrRef = ref([
            { name: 'Trichromacy / Normal', key: 'normal', colors: colorHexNormal },
            { name: 'Blue Cone Monochromacy / Achromatomaly', key: 'blueConeMono', colors: colorHexBlueConeMono },
            { name: 'Monochromacy / Achromatopsia', key: 'mono', colors: colorHexMono },
            { name: 'Green-Weak / Deuteranomaly', key: 'greenWeak', colors: colorHexGreenWeak },
            { name: 'Green-Blind / Deuteranopia', key: 'greenBlind', colors: colorHexGreenBlind },
            { name: 'Red-Weak / Protanomaly', key: 'redWeak', colors: colorHexRedWeak },
            { name: 'Red-Blind / Protanopia', key: 'redBlinid', colors: colorHexRedBlind },
            { name: 'Blue-Weak / Tritanomaly', key: 'blueWeak', colors: colorHexBlueWeak },
            { name: 'Blue-Blind / Tritanopia', key: 'blueBlind', colors: colorHexBlueBlind },
        ]);
        const selectedColorTypeRef = ref('Trichromacy / Normal');

        const updateChartBackgroundColor = (colors: Array<string>) => {
            const chart = primeChartRef.value.chart
            chart.data.datasets[0].backgroundColor = colors
            chart.update()
        }

        return {
            primeChartRef: primeChartRef,
            colorTypesArrRef: colorTypesArrRef,
            selectedColorTypeRef: selectedColorTypeRef,
            updateChartBackgroundColor,
            chartData1: {
                labels: colorLabelsArr,
                datasets: [
                    {
                        label: 'Donut Color Chart',
                        data: [25, 20, 15, 10, 5, 5, 5, 5, 5, 5],
                        backgroundColor: colorHexNormal,
                        // borderColor: '#000000',
                        hoverOffset: 4
                    }
                ]
            },
            chartOptions1: {
                cutout: '60%'
            }
        } // close return
    }, // close setup
} // close export
</script>

<template>
    <Chart ref="primeChartRef" type="doughnut" :data="chartData1" :options="chartOptions1" class="w-full md:w-30rem" />

    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="colorType in colorTypesArrRef" :key="colorType.key" class="flex align-items-center">
                <RadioButton v-model="selectedColorTypeRef" :inputId="colorType.key" name="dynamic" :value="colorType.name"
                    @click="updateChartBackgroundColor(colorType.colors)" />
                <label :for="colorType.key" class="ml-2">{{ colorType.name }}</label>
            </div>
        </div>
    </div>
</template>

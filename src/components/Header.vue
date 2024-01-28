<template>
    <v-app-bar color="primary" density="compact">
        <template v-slot:prepend>
            <a href="#">
                <v-btn icon>
                    <v-icon icon="mdi-jellyfish"></v-icon>
                </v-btn>
            </a>
        </template>
        <!-- <v-app-bar-title>
      過去問目標点数算出ツール
    </v-app-bar-title> -->
        <template v-slot:append>
            <a href="https://github.com/Kogia-sima/kakomon-borderline" target="_blank" rel="noreferrer noopener">
                Source
                <v-btn icon>
                    <v-icon icon="mdi-github"></v-icon>
                </v-btn>
            </a>
        </template>
    </v-app-bar>
</template>

<template>
    <main class="container text-white">
        <div class="pt-4 mb-8 relative">
            <input 
                type="text" 
                v-model="searchQuery"
                @input="getSearchResults"
                placeholder="Search for your choice of city or state"
                class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
                style="--placeholder-color: black;"
            />
        </div>
    </main>
</template>


<script setup>
import { ref } from "vue";
import axios from "axios";


const searchQuery = ref("")
const queryTimeout = ref(null);
const mapboxAPIKEY = "pk.eyJ1IjoiZmF0aW1haDE0MDMiLCJhIjoiY2xyYmR2eDFwMG03cTJqcDdza3kxZzdlbiJ9.UxnOTbd77ZuIJmbOXaF4WA"
const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const searchResultsMapbox = ref([]);

const getSearchResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
        try {
            if (searchQuery.value !== "") {
                const result = await axios.get(
                    `${mapboxUrl}${searchQuery.value}.json`,
                    {
                        params: {
                            access_token: mapboxAPIKEY,
                            types: "place"
                        },
                    }
                );
                console.log('Bug');
                console.log(result.data);
                searchResultsMapbox.value = result.data.features || [];
                // console.log(JSON.parse(JSON.stringify(searchResultsMapbox.value)));
                console.log('Hi:', searchResultsMapbox.value);
                console.log("here")
                return;
            }
            searchResultsMapbox.value = null;
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }, 10000);
}

</script>

<style scoped>
input::placeholder {
    color: var(--placeholder-color);
    opacity: 1; 
}
</style>



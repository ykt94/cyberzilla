<template>
    <router-link :to="{ name: 'users.index' }"
                 class="mx-2 mb-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
        List of Users
    </router-link>         
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Paydate</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Sum</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Score</span>
                </th>
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in payments" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.paydate }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.sum }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.score }}
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import useUsers from "../../composables/users";
import { onMounted } from "vue";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {
        const { payments, getPayments } = useUsers()

        onMounted(getPayments(props.id))

        return {
            payments
        }
    }
}
</script>

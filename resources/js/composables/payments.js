import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function usePayments() {
    const payments = ref([])
    const payment = ref([])
    const router = useRouter()
    const errors = ref('')

    const getPayments = async (user_id) => {
        let response = await axios.get('/api/payments/' + user_id)
        payments.value = response.data.data;
    }

    return {
        payments,
        errors,
        getPayments,
    }
}

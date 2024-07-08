<template>
<div class="p-3">
    <div class="form-title">Form Elements</div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="input1" class="form-label">Input Field</label>
                    <input type="text" class="form-control" id="input1" placeholder="Input Placeholder">
                </div>
                <div class="mb-3">
                    <label for="input2" class="form-label">Input Field Focus</label>
                    <input type="text" class="form-control" id="input2" placeholder="Input Placeholder">
                </div>
                <div class="mb-3">
                    <label for="input3" class="form-label">Input Field Disabled</label>
                    <input type="text" class="form-control" id="input3" placeholder="Input Placeholder" disabled>
                </div>
                <div class="mb-3">
                    <label for="input4" class="form-label">Input Field Error</label>
                    <input type="text" class="form-control is-invalid" id="input4" placeholder="Input Placeholder">
                </div>
                <div class="mb-3">
                    <label for="input4" class="form-label">Custom Input Field</label>
                    <div class="row">
                        <div class="col input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        </div>
                        <div class="col input-group mb-3">
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="input5" class="form-label">Input Number Field</label>
                    <input type="number" class="form-control" id="input5">
                </div>
                <div class="mb-3">
                    <label for="input6" class="form-label">Textarea</label>
                    <textarea class="form-control" placeholder="Input Placeholder" id="input5"></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="dropdownList">Dropdown with select</label>
                    <select v-model="dropdownList" id="dropdownList" class="form-control">
                        <option v-for="dl in dropdownList" :key="dl" :value="dl">{{ dl}}</option>
                    </select>
                </div>
                <!-- <div class="mb-3">
                    <label for="dateSelect">Date select</label>
                    <v-date-picker mode='range' v-model='selectedDate' show-caps>
                    </v-date-picker>
                </div>
                <div class="mb-3">
                    <label for="toolTip">Tool Tip</label>
                    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="This top tooltip is themed via CSS variables.">
                        Custom tooltip
                    </button>
                </div> -->
            </div>
            <div class="col">
                Hello
                <div class="toast-container p-3" id="toastPlacement">
    <div class="toast">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
// import { VDatePicker } from 'v-calendar';
import ToastList from '../components/ToastList.vue'
export default {
    name: 'Form',
    components: {
        // VDatePicker
        ToastList
    },
    data() {
        return {
            value: '',
            dropdownList: ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'],
            selectedDate: {
                start: new Date(2018, 0, 9),
                end: new Date(2018, 0, 18)
            }
        }
    },
    mounted() {
        //     const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    },
    methods: {

    }
}
</script>

<style scoped>
.form-title {
    font-size: 20px;
    font-weight: 700;
}

.form-label {
    font-weight: 700;
}

.form-control.is-invalid {
    background-color: #ffe6e6;
    border-color: #ff4d4d;
}

.invalid-feedback {
    color: #ff4d4d;
}
</style>

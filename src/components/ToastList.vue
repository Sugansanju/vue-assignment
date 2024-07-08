<template>
<div>
  
</div>
</template>

<script>
export default {
    name: 'ToastList',
    data() {
        return {
            dataList: [{
                    id: 1,
                    heading: 'uploadFile',
                    time: 'Just now',
                    type: 'success',
                    message: 'You successfully upload file!'
                },
                {
                    id: 2,
                    heading: 'uploadFile',
                    time: '1 minutes ago',
                    type: 'warning',
                    message: 'There was an error loading your file...'
                },
                {
                    id: 3,
                    heading: 'uploadFile',
                    time: '5 minutes ago',
                    type: 'error',
                    message: 'Problem with uploading file...'
                },
            ]
        }
    },
    methods: {

    }
}
</script>

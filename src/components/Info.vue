<template>
    <div>
        <div class="alert header-alert alert-danger alert-dismissible text-center fade show" role="alert">
       <marquee> {{text}} <a :href="link" target="blank" class="alert-link">{{linkName}}</a></marquee>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    </div>
</template>

<script>
export default {
    name: 'InfoSection',
    props: {
        text: String,
        link: String,
        linkName: String,
    }
}
</script>
import { fetchPosts, Post } from '@/api/post';
import { computed, onActivated, onDeactivated, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

export default function usePostPagination (category?: number, tags?: string) {
    const route = useRoute()

    const page = computed(() => {
        return parseInt(route.params.page as string || '1')
    })

    const pagination = reactive({
        has_prev: false,
        has_next: false,
        page: page.value,
        pages: 0,
        total: 0,
        items: [] as Array<Post>,
    })

    const getPosts = async () => {
        let data = await fetchPosts(page.value)

        pagination.has_prev = data.has_prev
        pagination.has_next = data.has_next
        pagination.page = data.page
        pagination.pages = data.pages
        pagination.total = data.total
        pagination.items = data.items
    }

    const watchCallBack = (newVal: number, oldVal?: number) => {
        if (newVal !== oldVal)
            getPosts()
    }

    let stopWatchHandle = watch(page, watchCallBack, { immediate: true })

    onActivated(() => {
        stopWatchHandle = watch(page, watchCallBack)
    })

    onDeactivated(() => {
        stopWatchHandle()
    })

    return {
        pagination,
    }
}
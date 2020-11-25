import { fetchPosts, Post } from '@/api/post';
import { computed, onActivated, onDeactivated, onMounted, reactive, watch, WatchStopHandle } from 'vue';
import { useRoute } from 'vue-router';

export default function usePostPagination (category?: number, tags?: string) {
    const route = useRoute()

    const page = computed(() => {
        return parseInt(route.params.page as string || '1')
    })

    const pagination = reactive({
        has_prev: false,
        has_next: false,
        page: -1,
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

    let stopWatchHandle: WatchStopHandle

    onActivated(() => {
        if (page.value !== pagination.page) getPosts()
        stopWatchHandle = watch(page, getPosts)
    })

    onDeactivated(() => {
        stopWatchHandle()
    })

    return {
        pagination,
    }
}
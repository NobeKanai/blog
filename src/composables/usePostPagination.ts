import { Category } from '@/api';
import { fetchPosts, Post, PostPagination } from '@/api/post';
import { computed, onActivated, onDeactivated, onMounted, reactive, watch, WatchStopHandle } from 'vue';
import { useRoute } from 'vue-router';

export default function usePostPagination () {
    const route = useRoute()

    const page = computed(() => {
        return parseInt(route.params.page as string || '1')
    })

    const category = computed(() => {
        return route.params.category === undefined ? undefined : parseInt(route.params.category as string)
    })

    const pagination = reactive<PostPagination>({
        category: {} as Category,
        has_prev: false,
        has_next: false,
        page: -1,
        pages: 0,
        total: 0,
        items: [] as Array<Post>,
    })

    const getPosts = async () => {
        let data = await fetchPosts(page.value, undefined, category.value)

        pagination.has_prev = data.has_prev
        pagination.has_next = data.has_next
        pagination.page = data.page
        pagination.pages = data.pages
        pagination.total = data.total
        pagination.items = data.items
        pagination.category = data.category
    }

    let stopWatchHandle: WatchStopHandle

    onActivated(() => {
        if (page.value !== pagination.page || category.value !== pagination.category.id) getPosts()
        stopWatchHandle = watch([page, category], getPosts)
    })

    onDeactivated(() => {
        stopWatchHandle()
    })

    return {
        pagination,
    }
}
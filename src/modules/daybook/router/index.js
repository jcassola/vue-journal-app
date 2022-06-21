

export default {

    name: 'daybook',
    path: '/daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: {
        
    }


}
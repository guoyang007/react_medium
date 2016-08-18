// 抽屉action
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export function toggleDrawer(isOpen) {
    return {
        type: TOGGLE_DRAWER,
        isOpen: isOpen
    }
}

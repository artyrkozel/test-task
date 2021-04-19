import appStore from './../Store/appStore'

export type AppType = {
    appStore?: appStore
}

export type ModalType = {
    modalActive: boolean
    onClickModalHandler: () => void
    name: string | undefined
    surname: string | undefined
}
import {observable, action} from "mobx";

class AppStore {
    @observable name: string = ''
    @observable surName: string = ''

    @action
    setName = (name: string): void => {
        this.name = name
    }
    @action
    setSurname = (surname: string): void => {
        this.surName = surname
    }
}

export default AppStore
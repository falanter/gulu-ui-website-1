//使vue文件识别ts后缀格式
declare module '*.vue'{
    import {ComponentOptions} from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
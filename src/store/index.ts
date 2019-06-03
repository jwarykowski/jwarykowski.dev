import development from './development'
import production from './production'

const isProduction = process.env.NODE_ENV === 'production'
const store = isProduction ? production : development

export default store

import { compose } from 'redux'

import { Navigation } from './Navigation'
import withMobileMenuData from '../../hoc/withMobileMenuData'
import withSearchData from '../../hoc/withSearchData'

export default compose(withMobileMenuData(withSearchData(Navigation)))

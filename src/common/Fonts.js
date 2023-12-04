import { Platform } from 'react-native';

const Fonts = {
  OPEN_SANS_BOLD: 'OpenSans-Bold',
  OPEN_SANS_SEMIBOLD: 'OpenSans-Semibold',
  OPEN_SANS_REGULAR: Platform.OS === 'ios' ? 'Lato-Regular' : 'OpenSans-Regular',
  LATO_BOLD: 'Lato-Bold',
  LATO_REGULAR: 'Lato-Regular',
  LATO_SEMIBOLD: Platform.OS === 'ios' ? 'OpenSans-Semibold' : 'Lato-Semibold',
  MUESO_REGULAR: Platform.OS === 'ios' ? 'Museo700-Regular' : 'Museo-700Regular',
  MUSEO_SLAB: Platform.OS === 'ios' ? 'MuseoSlab-700' : 'Museo_Slab_700',
  INTER_BOLD: 'Inter-Bold',
  INTER_REGULAR: 'Inter-Regular',
  INTER_MEDIUM: 'Inter-Medium',
  INTER_SEMI_BOLD: 'Inter-SemiBold',
  INTER_LIGHT: 'Inter-Light',
  ROBOTO: 'Roboto',
};
export default Fonts;

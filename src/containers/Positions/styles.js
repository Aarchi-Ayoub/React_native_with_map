import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  containers: {
    flex: 1,
  },

  myPosition: {
    right: '20@s',
  },
  info: {
    left: '20@s',
  },
  commonBtnStyles: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: '50@vs',
    height: '30@vs',
    width: '30@vs',
    borderRadius: '50@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: {
    height: '20@vs',
    width: '20@s',
  },
});

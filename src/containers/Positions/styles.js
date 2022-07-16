import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  containers: {
    flex: 1,
  },

  myPosition: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: '50@vs',
    right: '20@s',
    height: '50@vs',
    width: '50@vs',
    borderRadius: '50@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: '50@vs',
    left: '20@s',
    height: '50@vs',
    width: '50@vs',
    borderRadius: '50@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImg: {
    height: '30@vs',
    width: '30@s',
  },
});

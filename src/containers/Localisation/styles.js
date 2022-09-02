import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '25@s',
    paddingTop: '15@vs',
    backgroundColor: '#EEE',
  },
  content: {
    flex: 1,
  },
  //
  btn: {
    backgroundColor: '#000',
    height: '39@vs',
    borderRadius: '8@ms',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  disabled: {
    opacity: 0.5,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: '16@ms',
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
  },
  closeContainer: {},
  closeImg: {
    height: 35,
    width: 35,
  },
  //
  content: {
    paddingHorizontal: 18,
  },
  bigTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'blue',
  },
  desc: {
    marginTop: 5,
    lineHeight: 17,
    fontSize: 15,
  },
  //
  list: {
    marginVertical: 15,
    flexGrow: 1,
  },
  //
  emptyComp: {
    borderWidth: 1,
    backgroundColor: 'yellow',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  emptyText: {
    fontSize: 20,
    color: 'red',
  },
  //
  imgComp: {
    height: 150,
    width: 130,
  },
  //
  separator: {
    width: 5,
  },
  //
  underButtonContainer: {
    backgroundColor: 'purple',
    height: 50,
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
    borderRadius: 8,
  },
  underButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
